import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { ApiService } from '../shared';

import { Contact } from '../shared';

@Component({
  selector: 'fsa-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.scss']
})
export class AddContactComponent implements OnInit {

  loading = false;
  newContact: Contact;

  constructor(public api: ApiService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this.loading = true;

    const formValues = Object.assign({}, form.value);
    const contact: Contact = {
      name: `${formValues.firstName} ${formValues.lastName}`,
      address: formValues.address,
      phone: `${formValues.ariaCode} ${formValues.prefix} ${formValues.lineNumber}`,
      photoUrl: formValues.photo
    }
    
    this.api.createByOne<Contact>('contacts', contact)
      .subscribe(data => {
        form.reset();
        this.loading =false;
        console.log('Response: ', data);
        this.newContact = data.body;
      });
  }

}
