import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddContactComponent } from './add/add.component';
import { ContactComponent } from './contact/contact.component';
import { ContactListComponent } from './list/list.component';
import { ContactsRoutingModule } from './contacts-routing.module';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromContacts from './reducers';
import { ContactsEffects } from './effects/contacts.effects';

@NgModule({
  imports: [
    CommonModule,
    ContactsRoutingModule,
    StoreModule.forFeature('contacts', fromContacts.reducers, { metaReducers: fromContacts.metaReducers }),
    EffectsModule.forFeature([ContactsEffects]),
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
