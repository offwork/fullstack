import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { ApiService, Contact } from '../../shared';
import * as fromContact from '../state/contacts.reducer';

@Component({
  selector: 'fsa-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  contacts: Contact[];
  displayAddress = false;

  constructor(public api: ApiService, private store: Store<fromContact.State>) { }

  ngOnInit() {
    this.api.fetchAll<Contact[]>('contacts')
      .subscribe(data => { this.contacts = data; console.log('DATA: ', data);});

    // TODO: unsubscribe
    this.store
      .pipe(select(fromContact.getShowContactAddress))
      .subscribe(showContactAddress => {
        this.displayAddress = showContactAddress;
      });
  }

  checkChanged(event) {
    this.displayAddress = !this.displayAddress;
    event.displayAddress = this.displayAddress;
    this.store.dispatch({
      type: 'TOGGLE_CONTACT_ADDRESS',
      payload: this.displayAddress
    });
  }

}
