import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AddContactComponent } from './add-contact/add-contact.component';
import { ContactComponent } from './contact/contact.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ContactListComponent } from './contact-list/contact-list.component';

import { StoreModule } from '@ngrx/store';
import { reducer } from './state/contacts.reducer';
import { ContactDisplayComponent } from './contact-display/contact-display.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    StoreModule.forFeature('contact', reducer)
  ],
  declarations: [
    ContactListComponent,
    ContactComponent,
    AddContactComponent,
    ContactsComponent,
    ContactDisplayComponent,
  ],
  exports: [
    ContactListComponent,
    ContactComponent,
    AddContactComponent,
    ContactsComponent,
  ]
})
export class ContactsModule { }
