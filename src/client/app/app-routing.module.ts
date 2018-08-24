import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuardService as AuthGuard } from './shared/services/auth-guard.service';
import { ContactListComponent } from './contact-list/contact-list.component';
import { AddContactComponent } from './add-contact/add-contact.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', redirectTo: 'contacts', pathMatch: 'full' },
  { path: 'contacts', component: ContactListComponent, canActivate: [AuthGuard] },
  { path: 'new', component: AddContactComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: 'contacts' },
]

@NgModule({
  imports: [ CommonModule, RouterModule.forRoot(routes) ],
  exports: [RouterModule],
})
export class AppRoutingModule {}