import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { UsersService } from '../../services/users.service';
import {
    getUserByID,
  getUserByIDFailed,
  getUserByIDSuccess,
  getUsers,
  getUsersFailed,
  getUsersSuccess,
} from './users.actions';
import { EMPTY, catchError, exhaustMap, map } from 'rxjs';

@Injectable()
export class UsersEffects {
  constructor(
    private actions$: Actions,
    private userService: UsersService
  ) {}

  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getUsers),
      exhaustMap((actions) => {
        return this.userService.getUsers(actions.pageNumber).pipe(
          map((returnedUsers:any) => {
            return getUsersSuccess({ users: returnedUsers });
          }),
          catchError((err) => EMPTY)
        );
      })
    )
 )

 loadUserByID$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getUserByID),
      exhaustMap((actions) => {
        return this.userService.getUserByID(actions.id).pipe(
          map((returnedUser:any) => {
            return getUserByIDSuccess({ user: returnedUser });
          }),
          catchError((err) => EMPTY)
        );
      })
    )
 )
}