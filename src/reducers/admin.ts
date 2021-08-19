import { AnyAction } from "redux";

import {
  CLEAR_USERS,
  FETCH_USERS_FAILURE,
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS
} from "../actions/user";
import { AdminState } from "../store";

export const adminInitialState: AdminState = {
  isLoading: false,
  tenants: [],
  users: []
};

const userReducer = (
  state: AdminState = adminInitialState,
  action: AnyAction
) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return { ...state, isLoading: true, users: [] };
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        users: action.payload
      };
    case FETCH_USERS_FAILURE:
      return {
        ...state,
        isLoading: false,
        users: []
      };
    case CLEAR_USERS:
      return { ...state, isLoading: false, users: [] };
    default:
      return state;
  }
};

export default userReducer;
