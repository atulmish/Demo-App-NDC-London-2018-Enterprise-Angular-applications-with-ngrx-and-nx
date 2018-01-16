import { Auth } from './auth.interfaces';
import * as authAction from './auth.actions';

export function authReducer(state: Auth, action: authAction.AuthStateActions): Auth {
  switch (action.type) {
    case authAction.AuthStateActionTypes.Login: {
      return {
        ...state,
        loading: true
      };
    }
    case authAction.AuthStateActionTypes.LoginSuccess: {
      return {
        ...state,
        loading: false,
        user: action.payload
      };
    }
    default: {
      return state;
    }
  }
}
