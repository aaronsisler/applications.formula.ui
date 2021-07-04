import { AnyAction } from "redux";

import { FETCH_TENANTS_SUCCESS, SET_USER } from "../actions/user";
import { User } from "../models/user";

const userReducer = (state: User = {}, action: AnyAction) => {
  switch (action.type) {
    case SET_USER:
      return { ...action.payload };
    case FETCH_TENANTS_SUCCESS:
      return { ...state, tenants: action.payload };
    default:
      return state;
  }
};

export default userReducer;
