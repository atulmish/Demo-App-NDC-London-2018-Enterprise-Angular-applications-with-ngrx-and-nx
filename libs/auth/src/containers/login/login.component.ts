import { Component, OnInit } from '@angular/core';
import { Authenticate, User } from '@demo-app/data-models';
import { AuthService } from './../../services/auth.service';
import { catchError, map } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AuthState } from './../../+state/auth.interfaces';
import * as authActions from './../../+state/auth.actions';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user$: Observable<any>;
  constructor(private store: Store<AuthState>) {}

  ngOnInit() {}

  login(authenticate: Authenticate): void {
    this.store.dispatch(new authActions.LoginAction(authenticate));
  }
}
