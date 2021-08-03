import { AnyAction } from "redux";

import {
  CLEAR_USER,
  FETCH_USER_TENANTS_SUCCESS,
  FETCH_USER_SUCESS
} from "../actions/user";
import { User } from "../models/user";

const userReducer = (state: User = null!, action: AnyAction) => {
  switch (action.type) {
    case FETCH_USER_SUCESS:
      return { ...state, ...action.payload };
    case FETCH_USER_TENANTS_SUCCESS:
      return { ...state, tenants: action.payload };
    case CLEAR_USER:
      return null;
    default:
      return state;
  }
};

export default userReducer;
