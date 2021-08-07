import { AnyAction } from "redux";

import {
  CLEAR_TENANT,
  FETCH_TENANT_FAILURE,
  FETCH_TENANT_REQUEST,
  FETCH_TENANT_SUCCESS
} from "../actions/tenant";
import { TenantState } from "../store";

export const tenantInitialState: TenantState = {
  isLoading: false,
  data: null!
};

const tenantReducer = (
  state: TenantState = tenantInitialState,
  action: AnyAction
) => {
  switch (action.type) {
    case FETCH_TENANT_REQUEST:
      return { ...state, isLoading: true, data: null };
    case FETCH_TENANT_SUCCESS:
      return { ...state, isLoading: false, data: action.payload };
    case FETCH_TENANT_FAILURE:
      return { ...state, isLoading: false, data: null };
    case CLEAR_TENANT:
      return tenantInitialState;
    default:
      return state;
  }
};

export default tenantReducer;
