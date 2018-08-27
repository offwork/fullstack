import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { ApiService, Contact } from '../../shared';
import * as fromContact from '../state/contacts.reducer';
import * as contactActions from '../state/contacts.actions'

@Component({
  selector: 'fsa-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  contacts: Contact[];
  contact: Contact;
  displayPhone = false;

  constructor(public api: ApiService, private store: Store<fromContact.State>) { }

  ngOnInit() {
    this.api.fetchAll<Contact[]>('contacts')
      .subscribe(data => {
        this.contacts = data;
        this.contact = this.contacts[0];
      });

    this.store
      .pipe(select(fromContact.getCurrentContact))
      .subscribe(currentContact => {
        this.contact = currentContact
      });

    // TODO: unsubscribe
    this.store
      .pipe(select(fromContact.getShowContactAddress))
      .subscribe(showContactAddress => {
        this.displayPhone = showContactAddress;
      });
  }

  checkChanged(value: boolean) {
    this.store.dispatch(new contactActions.ToggleContactAddress(value));
  }

  contactSelected(contact: Contact) {
    console.log('Contact Click: ', contact);
    this.store.dispatch(new contactActions.SetCurrentContact(contact))
  }

}
