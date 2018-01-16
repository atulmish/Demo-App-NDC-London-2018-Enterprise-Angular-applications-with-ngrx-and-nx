import { Users } from './users.interfaces';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { User } from '@demo-app/data-models';

export const adapter: EntityAdapter<User> = createEntityAdapter<User>({});

export const usersInitialState: Users = adapter.getInitialState({
  selectedUserId: null,
  loading: false
});