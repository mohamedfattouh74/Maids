import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserInitialStateModel } from './users.state';


export const getUsersState =
  createFeatureSelector<UserInitialStateModel>('users'); // return a top level feature state

export const getUsersSelector = createSelector(getUsersState, (state) => {
  return state.users;
});

export const getUserByIDSelector = createSelector(getUsersState, (state) => {
    return state.selectedUser;
  });

  export const getloaderSelector = createSelector(getUsersState, (state) => {
    return state.isLoading;
  });