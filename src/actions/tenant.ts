import { AnyAction, ActionCreator } from "redux";
import { ThunkAction, ThunkDispatch } from "redux-thunk";

import { Tenant } from "../models/tenant";
import { TenantApplication } from "../models/tenant-application";
import { HttpClient } from "../utils/http-client";

//Action Types
export const CLEAR_TENANT = "CLEAR_TENANT";
export const FETCH_TENANT_FAILURE = "FETCH_TENANT_FAILURE";
export const FETCH_TENANT_REQUEST = "FETCH_TENANT_REQUEST";
export const FETCH_TENANT_SUCCESS = "FETCH_TENANT_SUCCESS";

export const CLEAR_TENANTS = "CLEAR_TENANTS";
export const FETCH_TENANTS_FAILURE = "FETCH_TENANTS_FAILURE";
export const FETCH_TENANTS_REQUEST = "FETCH_TENANTS_REQUEST";
export const FETCH_TENANTS_SUCCESS = "FETCH_TENANTS_SUCCESS";

export const FETCH_TENANT_APPLICATIONS_FAILURE =
  "FETCH_TENANT_APPLICATIONS_FAILURE";
export const FETCH_TENANT_APPLICATIONS_SUCCESS =
  "FETCH_TENANT_APPLICATIONS_SUCCESS";

//Action Creator
export const clearTenant = () => {
  return {
    type: CLEAR_TENANT
  };
};

export const clearTenants = () => {
  return {
    type: CLEAR_TENANTS
  };
};

export const fetchTenantFailure: ActionCreator<AnyAction> = () => {
  return {
    type: FETCH_TENANT_FAILURE
  };
};

export const fetchTenantRequest: ActionCreator<AnyAction> = () => {
  return {
    type: FETCH_TENANT_REQUEST
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

export const fetchTenantsFailure: ActionCreator<AnyAction> = () => {
  return {
    type: FETCH_TENANTS_FAILURE
  };
};

export const fetchTenantsRequest: ActionCreator<AnyAction> = () => {
  return {
    type: FETCH_TENANTS_REQUEST
  };
};

export const fetchTenantsSuccess: ActionCreator<AnyAction> = (
  tenants: Tenant[]
) => {
  return {
    type: FETCH_TENANTS_SUCCESS,
    payload: tenants
  };
};

export const fetchApplicationsFailure: ActionCreator<AnyAction> = () => {
  return {
    type: FETCH_TENANT_APPLICATIONS_FAILURE
  };
};

export const fetchApplicationsSuccess: ActionCreator<AnyAction> = (
  tenantApplications: TenantApplication[]
) => {
  return {
    type: FETCH_TENANT_APPLICATIONS_SUCCESS,
    payload: tenantApplications
  };
};

// Actions
export const fetchTenant: ActionCreator<
  ThunkAction<Promise<AnyAction>, {}, {}, AnyAction>
> = (tenantId: string) => {
  return async (
    dispatch: ThunkDispatch<{}, {}, AnyAction>,
    _getState: any
  ): Promise<AnyAction> => {
    try {
      dispatch(fetchTenantRequest());
      const tenant: Tenant = await new HttpClient().get(`tenants/${tenantId}`);
      return dispatch(fetchTenantSuccess(tenant));
    } catch (e) {
      return dispatch(fetchTenantFailure());
    }
  };
};

export const fetchTenants: ActionCreator<
  ThunkAction<Promise<AnyAction>, {}, {}, AnyAction>
> = () => {
  return async (
    dispatch: ThunkDispatch<{}, {}, AnyAction>,
    _getState: any
  ): Promise<AnyAction> => {
    try {
      dispatch(fetchTenantsRequest());
      const tenants: Tenant[] = await new HttpClient().get("tenants");

      return dispatch(fetchTenantsSuccess(tenants));
    } catch (e) {
      return dispatch(fetchTenantsFailure());
    }
  };
};
