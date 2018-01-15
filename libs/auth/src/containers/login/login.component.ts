import { Component, OnInit } from '@angular/core';
import { Authenticate } from '@demo-app/data-models';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  login(authenticate: Authenticate) {
    console.log(authenticate);
  }
}
