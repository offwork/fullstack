import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { ApiService, Contact } from '../../shared';

@Component({
  selector: 'fsa-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ContactListComponent implements OnInit {
  contacts: Contact[];
  contact: Contact;

  constructor(public api: ApiService) { }

  ngOnInit() {
    this.api.fetchAll<Contact[]>('contacts')
      .subscribe(data => {
        this.contacts = data;
        this.contact = this.contacts[0];
      });
  }

}
