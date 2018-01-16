import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Authenticate } from '@demo-app/data-models';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginComponent } from '@demo-app/auth/src/containers/login/login.component';

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {
  @Output() submit = new EventEmitter<Authenticate>();

  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });

  login(): void {
    const newAuthenticate: Authenticate = {
      username: this.loginForm.value.username,
      password: this.loginForm.value.password
    };

    this.submit.emit(newAuthenticate);
  }
}
