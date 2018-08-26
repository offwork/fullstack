import { Component, OnInit, ContentChild, TemplateRef, HostBinding } from '@angular/core';

@Component({
  selector: 'fsa-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {
  
  @HostBinding('class') columnClass = 'col-md-3';
  @ContentChild('contactTmp') contactTmp: TemplateRef<any>;

  constructor() { }

  ngOnInit() {
  }

}
