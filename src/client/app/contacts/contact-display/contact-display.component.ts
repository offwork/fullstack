import { Component, Input } from '@angular/core';
import { Contact } from '../../shared';

@Component({
  selector: 'fsa-contact-display',
  templateUrl: './contact-display.component.html',
  styleUrls: ['./contact-display.component.scss']
})
export class ContactDisplayComponent {
  @Input() contact: Contact;
}
