import { AnyAction } from "redux";

import { CLEAR_TENANT, FETCH_TENANT_SUCCESS } from "../actions/tenant";
import { Tenant } from "../models/tenant";

const tenantReducer = (state: Tenant = null!, action: AnyAction) => {
  switch (action.type) {
    case FETCH_TENANT_SUCCESS:
      return { ...action.payload };
    case CLEAR_TENANT:
      return null!;
    default:
      return state;
  }
};

export default tenantReducer;
