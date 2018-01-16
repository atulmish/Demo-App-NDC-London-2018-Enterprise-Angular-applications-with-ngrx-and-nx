import { createSelector, createFeatureSelector } from '@ngrx/store';
import { Auth } from './auth.interfaces';

export const getAuthState = createFeatureSelector<Auth>('auth');
export const getUser = createSelector(getAuthState, state => state.user);
