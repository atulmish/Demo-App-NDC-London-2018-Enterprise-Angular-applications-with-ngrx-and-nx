import { Component, OnInit } from '@angular/core';
import { UsersState } from './../../+state/users.interfaces';
import { Store } from '@ngrx/store';
import { selectAllUsers } from './../../+state';
import { User } from '@demo-app/data-models';
import * as usersActions from './../../+state/users.actions';

@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  users$: Store<User[]>;

  constructor(private store: Store<UsersState>) {}

  ngOnInit() {
    this.store.dispatch(new usersActions.LoadUsersAction());
    this.users$ = this.store.select(selectAllUsers)
  }
}
