import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './auth/login/login.component';

const routes: Routes = [
  { path: 'contacts', loadChildren: './contacts/contacts.module#ContactsModule' },
  { path: 'login', component: LoginComponent },
]

@NgModule({
  imports: [ CommonModule, RouterModule.forRoot(routes) ],
  exports: [RouterModule],
})
export class AppRoutingModule {}