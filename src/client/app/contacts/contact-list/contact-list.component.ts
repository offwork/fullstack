import { Component, OnInit } from '@angular/core';
import { ApiService, Contact } from '../../shared';

@Component({
  selector: 'fsa-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {

  contacts;

  constructor(public api: ApiService) { }

  ngOnInit() {
    this.api.fetchAll<Contact[]>('contacts')
      .subscribe(data => { this.contacts = data; console.log('DATA: ', data);});
  }

}
