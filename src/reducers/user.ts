import { AnyAction } from "redux";

import {
  CLEAR_USER,
  FETCH_USER_TENANTS_REQUEST,
  FETCH_USER_TENANTS_SUCCESS,
  FETCH_USER_FAILURE,
  FETCH_USER_SUCCESS
} from "../actions/user";
import { UserState } from "../store";

export const userInitialState: UserState = {
  isAuthenticated: false,
  isLoading: false,
  data: null!
};

const userReducer = (
  state: UserState = userInitialState,
  action: AnyAction
) => {
  switch (action.type) {
    case FETCH_USER_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
        data: action.payload
      };
    case FETCH_USER_FAILURE:
      return {
        ...state,
        isAuthenticated: action.payload,
        isLoading: false,
        data: null
      };
    case FETCH_USER_TENANTS_REQUEST:
      return { ...state, isLoading: true };
    case FETCH_USER_TENANTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: { ...state.data, tenants: action.payload }
      };
    case CLEAR_USER:
      return userInitialState;
    default:
      return state;
  }
};

export default userReducer;
