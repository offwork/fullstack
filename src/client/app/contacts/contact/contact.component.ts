import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Contact } from '../../shared';

@Component({
  selector: 'fsa-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  @Input() contact: Contact;
  @Input() display: boolean;
  @Output() toggled = new EventEmitter<ContactComponent>();
}
