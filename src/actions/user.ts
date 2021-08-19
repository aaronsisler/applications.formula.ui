import { AnyAction, ActionCreator } from "redux";
import { ThunkAction, ThunkDispatch } from "redux-thunk";

import { User } from "../models/user";
import { UserTenant } from "../models/user-tenant";
import { UserState } from "../store";
import { HttpClient } from "../utils/http-client";

//Action Types
export const CLEAR_USER = "CLEAR_USER";
export const CLEAR_USERS = "CLEAR_USERS";
export const FETCH_USER_FAILURE = "FETCH_USER_FAILURE";
export const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
export const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE";
export const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST";
export const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
export const FETCH_USER_TENANTS_FAILURE = "FETCH_USER_TENANTS_FAILURE";
export const FETCH_USER_TENANTS_REQUEST = "FETCH_USER_TENANTS_REQUEST";
export const FETCH_USER_TENANTS_SUCCESS = "FETCH_USER_TENANTS_SUCCESS";

//Action Creator
export const clearUser = () => ({
  type: CLEAR_USER
});

export const clearUsers = () => ({
  type: CLEAR_USERS
});

export const fetchUserFailure = (isAuthenticated: boolean = false) => ({
  type: FETCH_USER_FAILURE,
  payload: isAuthenticated
});

export const fetchUserSuccess = (user: User) => ({
  type: FETCH_USER_SUCCESS,
  payload: user
});

export const fetchUsersFailure = () => ({
  type: FETCH_USERS_FAILURE
});

export const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUEST
  };
};

export const fetchUsersSuccess = (users: User[]) => ({
  type: FETCH_USERS_SUCCESS,
  payload: users
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
        `users/${user?.data?.userId}/tenants`
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
    _getState: any
  ): Promise<AnyAction> => {
    try {
      if (rawUser && !rawUser.userId) {
        return dispatch(fetchUserFailure(true));
      }

      const user: User = await new HttpClient().get(`users/${rawUser.userId}`);

      if (!user.isOnboarded) {
        await new HttpClient().post(`users/`, rawUser);
        return dispatch(fetchUserFailure(true));
      }

      return dispatch(fetchUserSuccess(user));
    } catch (e) {
      return dispatch(fetchUserFailure());
    }
  };
};

export const fetchUsers: ActionCreator<
  ThunkAction<Promise<AnyAction>, {}, {}, AnyAction>
> = () => {
  return async (
    dispatch: ThunkDispatch<{}, {}, AnyAction>,
    _getState: any
  ): Promise<AnyAction> => {
    try {
      dispatch(fetchUsersRequest());
      const users: User[] = await new HttpClient().get("users");
      return dispatch(fetchUsersSuccess(users));
    } catch (e) {
      return dispatch(fetchUsersFailure());
    }
  };
};
