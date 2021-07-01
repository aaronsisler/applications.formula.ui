import { AnyAction } from "redux";

import {
  FETCH_TENANTS,
  FETCH_TENANTS_FAILURE,
  FETCH_TENANTS_SUCCESS
} from "../actions/tenants";
import { UserTenant } from "../models/user-tenant";

const tenantsReducer = (state: UserTenant[] = [], action: AnyAction) => {
  switch (action.type) {
    case FETCH_TENANTS_SUCCESS:
      return { ...action.payload };
    default:
      return state;
  }
};

export default tenantsReducer;
