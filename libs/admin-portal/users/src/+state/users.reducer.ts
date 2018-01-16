import { Users } from './users.interfaces';
import * as usersActions from './users.actions';
import { adapter } from './users.init';

export function usersReducer(state: Users, action: usersActions.UsersActions): Users {
  switch (action.type) {
    case usersActions.UsersActionTypes.LoadUsers: {
      return { ...state, loading: true };
    }

    case usersActions.UsersActionTypes.LoadUsersSuccess: {
      return adapter.addAll(action.payload, { ...state, loading: false });
    }
    default: {
      return state;
    }
  }
}

export const getSelectedUserId = (state: Users) => state.selectedUserId;

export const {
  // select the array of user ids
  selectIds: selectUserIds,

  // select the dictionary of user entities
  selectEntities: selectUserEntities,

  // select the array of users
  selectAll: selectAllUsers,

  // select the total user count
  selectTotal: selectUserTotal
} = adapter.getSelectors();
