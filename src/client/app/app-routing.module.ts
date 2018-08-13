import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ContactListComponent } from './contact-list/contact-list.component';
import { AddContactComponent } from './add-contact/add-contact.component';

const routes: Routes = [
  { path: '', redirectTo: 'contacts', pathMatch: 'full' },
  { path: 'contacts', component: ContactListComponent },
  { path: 'new', component: AddContactComponent },
]

@NgModule({
  imports: [ CommonModule, RouterModule.forRoot(routes) ],
  exports: [RouterModule],
})
export class AppRoutingModule {}