import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { Contact } from '../../shared';

@Component({
  selector: 'fsa-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  @Input() contact: Contact;
  @HostBinding('class') columnClass = 'col-md-3';

  constructor() { }

  ngOnInit() {
  }

}
