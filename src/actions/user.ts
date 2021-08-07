import { AnyAction, ActionCreator } from "redux";
import { ThunkAction, ThunkDispatch } from "redux-thunk";

import { User } from "../models/user";
import { UserTenant } from "../models/user-tenant";
import { UserState } from "../store";
import { HttpClient } from "../utils/http-client";

//Action Types
export const CLEAR_USER = "CLEAR_USER";
export const FETCH_USER_SUCESS = "FETCH_USER_SUCESS";
export const FETCH_USER_FAILURE = "FETCH_USER_FAILURE";
export const FETCH_USER_TENANTS_SUCCESS = "FETCH_USER_TENANTS_SUCCESS";
export const FETCH_USER_TENANTS_FAILURE = "FETCH_USER_TENANTS_FAILURE";

//Action Creator
export const clearUser = () => ({
  type: CLEAR_USER
});

export const fetchUserSucess = (user: User) => ({
  type: FETCH_USER_SUCESS,
  payload: user
});

export const fetchUserFailure = (isAuthenticated: boolean = false) => ({
  type: FETCH_USER_FAILURE,
  payload: isAuthenticated
});

export const fetchTenantsSuccess: ActionCreator<AnyAction> = (
  userTenants: UserTenant[]
) => {
  return {
    type: FETCH_USER_TENANTS_SUCCESS,
    payload: userTenants
  };
};

export const fetchTenantsFailure = () => {
  return {
    type: FETCH_USER_TENANTS_FAILURE
  };
};

// Actions
export const fetchTenants: ActionCreator<
  ThunkAction<Promise<AnyAction>, {}, {}, AnyAction>
> = () => {
  return async (
    dispatch: ThunkDispatch<{}, {}, AnyAction>,
    getState: any
  ): Promise<AnyAction> => {
    try {
      const { user }: { user: UserState } = getState();
      const userTenants: UserTenant[] = await new HttpClient().get(
        `user/${user?.data?.userId}/tenant`
      );
      return dispatch(fetchTenantsSuccess(userTenants));
    } catch (e) {
      return dispatch(fetchTenantsFailure());
    }
  };
};

export const fetchUser: ActionCreator<
  ThunkAction<Promise<AnyAction>, {}, {}, AnyAction>
> = (userId: string) => {
  return async (
    dispatch: ThunkDispatch<{}, {}, AnyAction>,
    getState: any
  ): Promise<AnyAction> => {
    try {
      const user: User = await new HttpClient().get(`user/${userId}`);

      if (!user.userId) {
        return dispatch(fetchUserFailure(true));
      }

      return dispatch(fetchUserSucess(user));
    } catch (e) {
      return dispatch(fetchUserFailure());
    }
  };
};
