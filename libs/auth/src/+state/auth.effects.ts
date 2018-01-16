import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/switchMap';
import { AuthState } from './auth.interfaces';
import * as authActions from './auth.actions';
import { AuthService } from './../services/auth.service';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { User } from '@demo-app/data-models';
import { Router } from '@angular/router';

@Injectable()
export class AuthEffects {
  // @Effect() login$ = this.actions.ofType(authActions.AuthStateActionTypes.Login)
  // .pipe(
  //   mergeMap((action: authActions.LoginAction) => this.authService.login(action.payload)
  //   .pipe(
  //     mergeMap((user: User) => [
  //       new authActions.LoginSuccessAction(user),
  //       new authActions.NavigateToProfileAction(user.id)
  //     ]),
  //     catchError(error => of(new authActions.LoginFailAction(error)))
  //   ))
  // )

  @Effect()
  login$ = this.dataPersistence.fetch(authActions.AuthStateActionTypes.Login, {
    run: (action: authActions.LoginAction, state: AuthState) => {
      return this.authService
        .login(action.payload)
        .pipe(
          mergeMap((user: User) => [
            new authActions.LoginSuccessAction(user),
            new authActions.NavigateToProfileAction(user.id)
          ])
        );
    },

    onError: (action: authActions.LoginAction, error) => {
      return of(new authActions.LoginFailAction(error));
    }
  });

  @Effect({ dispatch: false })
  navigateToProfile = this.actions
    .ofType(authActions.AuthStateActionTypes.NavigateToProfile)
    .pipe(
      map((action: authActions.NavigateToProfileAction) => this.router.navigate([`/user-profile`, action.payload]))
    );

  constructor(
    private actions: Actions,
    private dataPersistence: DataPersistence<AuthState>,
    private authService: AuthService,
    private router: Router
  ) {}
}
