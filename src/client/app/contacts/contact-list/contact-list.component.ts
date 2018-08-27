import { Component, ContentChild, TemplateRef, Output, Input, EventEmitter, HostBinding } from '@angular/core';

@Component({
  selector: 'fsa-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent {
  @Output() toggled = new EventEmitter<ContactListComponent>();
  @Input() index: string;
  @ContentChild('contactTmp') contactTmp: TemplateRef<any>;
}
