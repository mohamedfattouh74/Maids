import { createAction,props } from "@ngrx/store";
import { User } from "./users.model";

export const getUsers = createAction('[Users Page] GET_USERS', props<{pageNumber:number}>());
export const getUsersSuccess = createAction(
  '[Users Page] GET_USERS_SUCCESSFULLY',
  props<{ users: User[] }>()
);
export const getUsersFailed = createAction(
  '[Users Page] GET_USERS_FAILED',
  props<{ error: string }>()
);

export const setSelectedUser = createAction(
    '[Users Page] SET_ID_OF_SELECTED_USER',
    props<{ id: string }>()
  );
  
  export const getUserByID = createAction(
    '[User Details Page] GET_USER_BY_ID',
    props<{ id: string|null }>()
  );
  export const getUserByIDSuccess = createAction(
    '[User Details Page] GET_USER_BY_ID_SUCCESSFULLY',
    props<{ user: User }>()
  );
  export const getUserByIDFailed = createAction(
    '[User Details Page] GET_USER_BY_ID_FAILED',
    props<{ error: string }>()
  );
