import { Component, OnInit } from '@angular/core';
import { ApiService, Contact } from '../../shared';

@Component({
  selector: 'fsa-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddContactComponent implements OnInit {
  loading = false;
  newContact: Contact;

  constructor(public api: ApiService) { }

  ngOnInit() {
  }

}
