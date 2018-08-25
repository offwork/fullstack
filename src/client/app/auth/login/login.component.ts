import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { ApiService } from '../../shared';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'fsa-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private api: ApiService, private auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    const values = form.value;

    const payload = {
      username: values.username,
      password: values.password
    };

    this.api.createByOne('authenticate', payload)
      .subscribe(data => {
        console.log('Login: ', data)
        this.auth.setToken(data.body['token']);
        this.router.navigate(['/contacts']);
      });
  }

}
