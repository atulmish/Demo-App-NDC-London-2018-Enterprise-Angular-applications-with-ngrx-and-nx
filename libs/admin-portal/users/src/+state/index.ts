import { createSelector, createFeatureSelector } from '@ngrx/store';
import * as fromUsers from './users.reducer';
import { Users } from './users.interfaces';

export const selectUserState = createFeatureSelector<Users>('users');

export const selectUserIds = createSelector(selectUserState,  fromUsers.selectUserIds);
export const selectUserEntities = createSelector(selectUserState, fromUsers.selectUserEntities);
export const selectAllUsers = createSelector(selectUserState, fromUsers.selectAllUsers);
export const selectUserTotal = createSelector(selectUserState, fromUsers.selectUserTotal);
export const selectCurrentUserId = createSelector(selectUserState, fromUsers.getSelectedUserId);

export const selectCurrentUser = createSelector(
  selectUserEntities,
  selectCurrentUserId,
  (userEntities, userId) => userEntities[userId]
);
