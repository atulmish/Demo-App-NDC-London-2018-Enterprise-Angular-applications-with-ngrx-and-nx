import { Component, OnInit } from '@angular/core';
import { Authenticate, User } from '@demo-app/data-models';
import { AuthService } from './../../services/auth.service';
import { catchError, map } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user$: Observable<any>;
  constructor(
    private router: Router,
    private authService: AuthService) {}

  ngOnInit() {}

  login(authenticate: Authenticate): void {
    this.authService.login(authenticate).subscribe(
      (user: User) => this.router.navigate([`/user-profile/${user.id}`])
    );
  }
}
