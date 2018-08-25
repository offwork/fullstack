import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuardService as AuthGuard } from './auth/services/auth-guard.service';
import { ContactListComponent, AddContactComponent } from './contacts';
import { LoginComponent } from './auth/login/login.component';

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