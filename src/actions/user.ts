import { AnyAction, ActionCreator } from "redux";
import { ThunkAction, ThunkDispatch } from "redux-thunk";

import { User } from "../models/user";
import { UserTenant } from "../models/user-tenant";
import { UserState } from "../store";
import { HttpClient } from "../utils/http-client";

//Action Types
export const CLEAR_USER = "CLEAR_USER";
export const FETCH_USER_FAILURE = "FETCH_USER_FAILURE";
export const FETCH_USER_SUCESS = "FETCH_USER_SUCESS";
export const FETCH_USER_TENANTS_FAILURE = "FETCH_USER_TENANTS_FAILURE";
export const FETCH_USER_TENANTS_REQUEST = "FETCH_USER_TENANTS_REQUEST";
export const FETCH_USER_TENANTS_SUCCESS = "FETCH_USER_TENANTS_SUCCESS";

//Action Creator
export const clearUser = () => ({
  type: CLEAR_USER
});

export const fetchUserFailure = (isAuthenticated: boolean = false) => ({
  type: FETCH_USER_FAILURE,
  payload: isAuthenticated
});

export const fetchUserSucess = (user: User) => ({
  type: FETCH_USER_SUCESS,
  payload: user
});

export const fetchTenantsFailure = () => {
  return {
    type: FETCH_USER_TENANTS_FAILURE
  };
};

export const fetchTenantsRequest = () => {
  return {
    type: FETCH_USER_TENANTS_REQUEST
  };
};

export const fetchTenantsSuccess: ActionCreator<AnyAction> = (
  userTenants: UserTenant[]
) => {
  return {
    type: FETCH_USER_TENANTS_SUCCESS,
    payload: userTenants
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
      dispatch(fetchTenantsRequest());
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
> = (rawUser: User) => {
  return async (
    dispatch: ThunkDispatch<{}, {}, AnyAction>,
    getState: any
  ): Promise<AnyAction> => {
    try {
      if (rawUser && !rawUser.userId) {
        return dispatch(fetchUserFailure(true));
      }

      const user: User = await new HttpClient().get(`user/${rawUser.userId}`);

      if (!user.isOnboarded) {
        await new HttpClient().post(`user/`, rawUser);
        return dispatch(fetchUserFailure(true));
      }

      return dispatch(fetchUserSucess(user));
    } catch (e) {
      return dispatch(fetchUserFailure());
    }
  };
};
