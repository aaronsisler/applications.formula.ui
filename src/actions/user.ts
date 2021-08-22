import { AnyAction, ActionCreator } from "redux";
import { ThunkAction, ThunkDispatch } from "redux-thunk";

import { User } from "../models/user";
import { UserTenant } from "../models/user-tenant";
import { UserType } from "../models/user-type";
import { UserState } from "../store";
import { HttpClient } from "../utils/http-client";

//Action Types
export const AUTHORIZE_USER_FAILURE = "AUTHORIZE_USER_FAILURE";
export const AUTHORIZE_USER_SUCCESS = "AUTHORIZE_USER_SUCCESS";
export const CLEAR_USER = "CLEAR_USER";
export const CLEAR_USERS = "CLEAR_USERS";
export const FETCH_USER_FAILURE = "FETCH_USER_FAILURE";
export const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
export const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE";
export const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST";
export const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
export const ADD_USER_TENANT_FAILURE = "ADD_USER_TENANT_FAILURE";
export const ADD_USER_TENANT_SUCCESS = "ADD_USER_TENANT_SUCCESS";
export const FETCH_USER_TENANTS_FAILURE = "FETCH_USER_TENANTS_FAILURE";
export const FETCH_USER_TENANTS_REQUEST = "FETCH_USER_TENANTS_REQUEST";
export const FETCH_USER_TENANTS_SUCCESS = "FETCH_USER_TENANTS_SUCCESS";

//Action Creator
export const addUserTenantFailure = () => ({
  type: ADD_USER_TENANT_FAILURE
});

export const addUserTenantSuccess = (userTenant: UserTenant) => ({
  type: ADD_USER_TENANT_SUCCESS,
  payload: userTenant
});

export const authorizeUserFailure = () => ({
  type: AUTHORIZE_USER_FAILURE
});

export const authorizeUserSuccess = (user: User) => ({
  type: AUTHORIZE_USER_SUCCESS,
  payload: user
});

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

export const fetchUsersTenantsFailure = () => {
  return {
    type: FETCH_USER_TENANTS_FAILURE
  };
};

export const fetchUsersTenantsRequest = () => {
  return {
    type: FETCH_USER_TENANTS_REQUEST
  };
};

export const fetchUsersTenantsSuccess: ActionCreator<AnyAction> = (
  userTenants: UserTenant[]
) => {
  return {
    type: FETCH_USER_TENANTS_SUCCESS,
    payload: userTenants
  };
};

// Actions
export const addUserTenant: ActionCreator<
  ThunkAction<Promise<AnyAction>, {}, {}, AnyAction>
> = (userTenant: UserTenant) => {
  return async (
    dispatch: ThunkDispatch<{}, {}, AnyAction>,
    _getState: any
  ): Promise<AnyAction> => {
    try {
      await new HttpClient().post(
        `users/${userTenant.userId}/tenants`,
        userTenant
      );

      return dispatch(addUserTenantSuccess(userTenant));
    } catch (e) {
      return dispatch(addUserTenantFailure());
    }
  };
};

export const authorizeUser: ActionCreator<
  ThunkAction<Promise<AnyAction>, {}, {}, AnyAction>
> = (user: User) => {
  return async (
    dispatch: ThunkDispatch<{}, {}, AnyAction>,
    _getState: any
  ): Promise<AnyAction> => {
    try {
      const promotedUser = { ...user, userType: UserType.MANAGER };
      await new HttpClient().post("users", promotedUser);

      return dispatch(authorizeUserSuccess(promotedUser));
    } catch (e) {
      return dispatch(authorizeUserFailure());
    }
  };
};

export const fetchUsersTenants: ActionCreator<
  ThunkAction<Promise<AnyAction>, {}, {}, AnyAction>
> = () => {
  return async (
    dispatch: ThunkDispatch<{}, {}, AnyAction>,
    getState: any
  ): Promise<AnyAction> => {
    try {
      dispatch(fetchUsersTenantsRequest());
      const { user }: { user: UserState } = getState();
      const userTenants: UserTenant[] = await new HttpClient().get(
        `users/${user?.data?.userId}/tenants`
      );
      return dispatch(fetchUsersTenantsSuccess(userTenants));
    } catch (e) {
      return dispatch(fetchUsersTenantsFailure());
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
      console.log(user);

      if (user.userType === undefined) {
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
