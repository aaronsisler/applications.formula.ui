import { AnyAction, ActionCreator } from "redux";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import axios from "axios";

import { API_SERVICE_URL } from "../config";
import { User } from "../models/user";
import { UserTenant } from "../models/user-tenant";

//Action Types
export const FETCH_TENANTS = "FETCH_TENANTS";
export const FETCH_TENANTS_SUCCESS = "FETCH_TENANTS_SUCCESS";
export const FETCH_TENANTS_FAILURE = "FETCH_TENANTS_FAILURE";

const headers = {
  "Content-Type": "application/json"
  // "Access-Control-Allow-Origin": "*",
  // "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
};

//Action Creators
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
      const result: User = await axios.get(
        `${API_SERVICE_URL}/user/tenant/${user.userId}`,
        { headers }
      );
      console.log(result);
      return dispatch(fetchTenantsSuccess(result));
    } catch (e) {
      return dispatch(fetchTenantsFailure());
    }
  };
};
