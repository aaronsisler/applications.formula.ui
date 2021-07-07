import { AnyAction } from "redux";

import { CLEAR_TENANT, FETCH_TENANT_SUCCESS } from "../actions/tenant";
import { Tenant } from "../models/tenant";

const tenantReducer = (state: Tenant = {}, action: AnyAction) => {
  switch (action.type) {
    case CLEAR_TENANT:
      return {};
    case FETCH_TENANT_SUCCESS:
      return { ...action.payload };
    default:
      return state;
  }
};

export default tenantReducer;
