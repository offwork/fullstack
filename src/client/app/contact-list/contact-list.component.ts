import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared';

import { Contact } from '../shared';

@Component({
  selector: 'fsa-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {

  contacts;

  constructor(public api: ApiService) { }

  ngOnInit() {
    this.api.get('contacts')
      .subscribe(data => { this.contacts = data; console.log('DATA: ', data);});
  }

}
