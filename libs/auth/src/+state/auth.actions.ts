import { Action } from '@ngrx/store';
import { User, Authenticate } from '@demo-app/data-models';

export enum AuthStateActionTypes {
Login = '[AuthState] Login',
LoginSuccess = '[AuthState] Login Success',
LoginFail = '[AuthState] Login Fail'
}

export class LoginAction implements Action {
readonly type = AuthStateActionTypes.Login;
constructor(public payload: Authenticate) {}
}

export class LoginSuccessAction implements Action {
readonly type = AuthStateActionTypes.LoginSuccess;
constructor(public payload: User) {}
}

export class LoginFailAction implements Action {
readonly type = AuthStateActionTypes.LoginFail;
constructor(public payload) {}
}

export type AuthStateActions =
LoginAction
| LoginFailAction
| LoginSuccessAction;
