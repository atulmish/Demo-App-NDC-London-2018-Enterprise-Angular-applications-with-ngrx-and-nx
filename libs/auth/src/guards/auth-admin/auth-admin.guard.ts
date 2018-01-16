import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { AuthState, getUser } from '@demo-app/auth';
import { map } from 'rxjs/operators';
import { User } from '@demo-app/data-models';

@Injectable()
export class AuthAdminGuard implements CanActivate {
  constructor(private store: Store<AuthState>, private router: Router) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.store.select(getUser).pipe(
      map((user: User) => {
        if (user && user.role === 'admin') {
          return true;
        } else {
          this.router.navigate([`/auth/login`]);
          return false;
        }
      })
    );
  }
}
