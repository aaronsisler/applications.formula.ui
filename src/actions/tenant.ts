import axios from "axios";
import { AnyAction, ActionCreator } from "redux";
import { ThunkAction, ThunkDispatch } from "redux-thunk";

import { API_SERVICE_URL } from "../config";
import { Tenant } from "../models/tenant";

const headers = {
  "Content-Type": "application/json"
};

//Action Types
export const CLEAR_TENANT = "CLEAR_TENANT";
export const FETCH_TENANT = "FETCH_TENANT";
export const FETCH_TENANT_SUCCESS = "FETCH_TENANT_SUCCESS";
export const FETCH_TENANT_FAILURE = "FETCH_TENANT_FAILURE";

//Action Creator
export const clearTenant = () => {
  return {
    type: CLEAR_TENANT
  };
};

export const fetchTenantRequest = () => {
  return {
    type: FETCH_TENANT
  };
};

export const fetchTenantSuccess: ActionCreator<AnyAction> = (
  tenant: Tenant
) => {
  return {
    type: FETCH_TENANT_SUCCESS,
    payload: tenant
  };
};

export const fetchTenantFailure = () => {
  return {
    type: FETCH_TENANT_FAILURE
  };
};

// Actions
export const fetchTenant: ActionCreator<
  ThunkAction<Promise<AnyAction>, {}, {}, AnyAction>
> = (tenantId: string) => {
  return async (
    dispatch: ThunkDispatch<{}, {}, AnyAction>,
    getState: any
  ): Promise<AnyAction> => {
    try {
      const { data }: { data: Tenant } = await axios.get(
        `${API_SERVICE_URL}/tenant/${tenantId}`,
        { headers }
      );
      console.log(data);
      return dispatch(fetchTenantSuccess(data));
    } catch (e) {
      return dispatch(fetchTenantFailure());
    }
  };
};
