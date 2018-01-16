import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/switchMap';
import { UsersState } from './users.interfaces';
import * as userActions from './users.actions';
import { UsersService } from './../services/users.service';
import { User } from '@demo-app/data-models';
import { map } from 'rxjs/operators';

@Injectable()
export class UsersEffects {
  @Effect()
  loadData = this.dataPersistence.fetch(userActions.UsersActionTypes.LoadUsers, {
    run: (action: userActions.LoadUsersAction, state: UsersState) => {
     return this.usersService.getUsers()
       .pipe(
         map((users: User[]) => new userActions.LoadUsersSuccessAction(users))
       )
    },

    onError: (action: userActions.LoadUsersAction, error) => {
      return new userActions.LoadUsersFailAction(error);
    }
  });

  constructor(
    private actions: Actions,
     private dataPersistence: DataPersistence<UsersState>,
    private usersService: UsersService) {}
}
