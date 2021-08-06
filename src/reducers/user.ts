import { AnyAction } from "redux";

import {
  CLEAR_USER,
  FETCH_USER_TENANTS_SUCCESS,
  FETCH_USER_FAILURE,
  FETCH_USER_SUCESS
} from "../actions/user";
import { UserState } from "../store/user";

export const userInitialState: UserState = {
  isAuthorized: false,
  data: null!
};

const userReducer = (
  state: UserState = userInitialState,
  action: AnyAction
) => {
  switch (action.type) {
    case FETCH_USER_SUCESS:
      return { ...state, isAuthorized: true, data: action.payload };
    case FETCH_USER_FAILURE:
      return { ...state, isAuthorized: false, data: null };
    case FETCH_USER_TENANTS_SUCCESS:
      return { ...state, data: { ...state.data, tenants: action.payload } };
    case CLEAR_USER:
      return userInitialState;
    default:
      return state;
  }
};

export default userReducer;
