import { AnyAction } from "redux";

import {
  CLEAR_USER,
  FETCH_USER_TENANTS_SUCCESS,
  FETCH_USER_FAILURE,
  FETCH_USER_SUCESS
} from "../actions/user";
import { UserState } from "../store/user";

export const userInitialState: UserState = {
  isAuthenticated: false,
  isAuthorized: false,
  data: null!
};

const userReducer = (
  state: UserState = userInitialState,
  action: AnyAction
) => {
  switch (action.type) {
    case FETCH_USER_SUCESS:
      return {
        ...state,
        isAuthenticated: true,
        isAuthorized: true,
        data: action.payload
      };
    case FETCH_USER_FAILURE:
      return {
        ...state,
        isAuthenticated: action.payload,
        isAuthorized: false,
        data: null
      };
    case FETCH_USER_TENANTS_SUCCESS:
      return { ...state, data: { ...state.data, tenants: action.payload } };
    case CLEAR_USER:
      return userInitialState;
    default:
      return state;
  }
};

export default userReducer;
