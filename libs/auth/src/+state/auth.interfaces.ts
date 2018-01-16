import { User } from '@demo-app/data-models';

export interface Auth {
  user: User;
  loading: boolean;
}

export interface AuthState {
  readonly auth: Auth;
}
