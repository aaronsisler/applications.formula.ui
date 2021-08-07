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
// TODO This might not be needed in the long run.
// Not being used currently given API is returning entire tenant
export const fetchApplications: ActionCreator<
  ThunkAction<Promise<AnyAction>, {}, {}, AnyAction>
> = () => {
  return async (
    dispatch: ThunkDispatch<{}, {}, AnyAction>,
    getState: any
  ): Promise<AnyAction> => {
    try {
      const { tenant }: { tenant: Tenant } = getState();
      const tenantApplications: TenantApplication[] =
        await new HttpClient().get(`tenant/${tenant.tenantId}/application`);
      return dispatch(fetchApplicationsSuccess(tenantApplications));
    } catch (e) {
      return dispatch(fetchApplicationsFailure());
    }
  };
};

export const fetchTenant: ActionCreator<
  ThunkAction<Promise<AnyAction>, {}, {}, AnyAction>
> = (tenantId: string) => {
  return async (
    dispatch: ThunkDispatch<{}, {}, AnyAction>,
    getState: any
  ): Promise<AnyAction> => {
    try {
      dispatch(fetchTenantRequest());
      const tenant: Tenant = await new HttpClient().get(`tenant/${tenantId}`);
      return dispatch(fetchTenantSuccess(tenant));
    } catch (e) {
      return dispatch(fetchTenantFailure());
    }
  };
};
