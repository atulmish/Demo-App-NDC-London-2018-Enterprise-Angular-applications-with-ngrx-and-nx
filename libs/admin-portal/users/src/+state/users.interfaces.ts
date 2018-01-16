import { User } from '@demo-app/data-models';
import { EntityState } from '@ngrx/entity';

export interface Users extends EntityState<User> {
  selectedUserId: number;
  loading: boolean;
}

export interface UsersState {
  readonly users: Users;
}
