import { createReducer, on } from "@ngrx/store";
import { userInitialState } from "./users.state";
import { getUserByID, getUserByIDFailed, getUserByIDSuccess, getUsers, getUsersFailed, getUsersSuccess } from "./users.actions";

export const usersReducer = createReducer(
    userInitialState,
    on(getUsers, (state) => {
      return {
        ...state,
        isLoading: true,
      };
    }),
    on(getUsersSuccess, (state, action) => {
      return {
        ...state,
        users: action.users,
        isLoading: false,
        err: '',
      };
    }),
    on(getUsersFailed, (state, action) => {
      return {
        ...state,
        users: [],
        isLoading: false,
        err: action.error,
      };
    }),    
    on(getUserByID, (state) => {
        return {
          ...state,
          isLoading: true,
        };
      }),
      on(getUserByIDSuccess, (state, action:any) => {
        return {
          ...state,
          selectedUser:action.user.data,
          isLoading: false,
          err: '',
        };
      }),
      on(getUserByIDFailed, (state, action) => {
        return {
          ...state,
          isLoading: false,
          err: action.error,
        };
      })
)