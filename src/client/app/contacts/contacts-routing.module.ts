import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AddContactComponent } from './add/add.component';
import { ContactListComponent } from './list/list.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: ContactListComponent, data: { title: 'Contacts' } },
      { path: 'new', component: AddContactComponent, data: { title: 'New Contact' } },
    ],
  },
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  declarations: []
})
export class ContactsRoutingModule { }
