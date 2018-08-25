import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactComponent } from './contact/contact.component';
import { AddContactComponent } from './add-contact/add-contact.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    ContactListComponent,
    ContactComponent,
    AddContactComponent,
  ],
  exports: [
    ContactListComponent,
    ContactComponent,
    AddContactComponent,
  ]
})
export class ContactsModule { }
