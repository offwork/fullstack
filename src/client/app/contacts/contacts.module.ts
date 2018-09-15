import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddContactComponent } from './add/add.component';
import { ContactComponent } from './contact/contact.component';
import { ContactListComponent } from './list/list.component';
import { ContactsRoutingModule } from './contacts-routing.module';

import { StoreModule } from '@ngrx/store';
import { reducer } from './state/contacts.reducer';

@NgModule({
  imports: [
    CommonModule,
    ContactsRoutingModule,
    StoreModule.forFeature('contact', reducer),
  ],
  declarations: [
    AddContactComponent,
    ContactComponent,
    ContactListComponent,
  ],
  exports: [
    AddContactComponent,
    ContactComponent,
    ContactListComponent,
  ]
})
export class ContactsModule { }
