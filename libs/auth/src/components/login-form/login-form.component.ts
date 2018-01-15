import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Authenticate } from '@demo-app/data-models';

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {
  @Output() submit = new EventEmitter<Authenticate>();

  login(authenticate: Authenticate) {
    this.submit.emit(authenticate)
  }

}


