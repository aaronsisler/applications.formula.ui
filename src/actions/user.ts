import axios from "axios";
import { AnyAction, ActionCreator } from "redux";
import { ThunkAction, ThunkDispatch } from "redux-thunk";

import { API_SERVICE_URL } from "../config";
import { User } from "../models/user";
import { UserTenant } from "../models/user-tenant";

const headers = {
  "Content-Type": "application/json"
};

//Action Types
export const SET_USER = "SET_USER";
export const FETCH_TENANTS = "FETCH_TENANTS";
export const FETCH_TENANTS_SUCCESS = "FETCH_TENANTS_SUCCESS";
export const FETCH_TENANTS_FAILURE = "FETCH_TENANTS_FAILURE";

//Action Creator
export const setUser = (user: User) => ({
  type: SET_USER,
  payload: user
});

export const fetchTenantsRequest = () => {
  return {
    type: FETCH_TENANTS
  };
};

export const fetchTenantsSuccess: ActionCreator<AnyAction> = (
  userTenants: UserTenant[]
) => {
  return {
    type: FETCH_TENANTS_SUCCESS,
    payload: userTenants
  };
};

export const fetchTenantsFailure = () => {
  return {
    type: FETCH_TENANTS_FAILURE
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
      const { user }: { user: User } = getState();
      const { data }: { data: UserTenant[] } = await axios.get(
        `${API_SERVICE_URL}/user/${user.userId}/tenant`,
        { headers }
      );
      console.log(data);
      return dispatch(fetchTenantsSuccess(data));
    } catch (e) {
      return dispatch(fetchTenantsFailure());
    }
  };
};
