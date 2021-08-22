import { AnyAction } from "redux";

import {
  CLEAR_TENANTS,
  FETCH_TENANTS_FAILURE,
  FETCH_TENANTS_REQUEST,
  FETCH_TENANTS_SUCCESS
} from "../actions/tenant";
import {
  AUTHORIZE_USER_FAILURE,
  AUTHORIZE_USER_SUCCESS,
  CLEAR_USERS,
  FETCH_USERS_FAILURE,
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS
} from "../actions/user";
import { User } from "../models/user";
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
    case FETCH_TENANTS_REQUEST:
      return { ...state, isLoading: true, tenants: [] };
    case FETCH_TENANTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        tenants: action.payload
      };
    case FETCH_USERS_REQUEST:
      return { ...state, isLoading: true, users: [] };
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        users: action.payload
      };
    case FETCH_USERS_FAILURE:
    case AUTHORIZE_USER_FAILURE:
    case CLEAR_USERS:
      return {
        ...state,
        isLoading: false,
        users: []
      };
    case CLEAR_TENANTS:
    case FETCH_TENANTS_FAILURE:
      return {
        ...state,
        isLoading: false,
        tenants: []
      };
    case AUTHORIZE_USER_SUCCESS:
      const rawUsers: User[] = JSON.parse(JSON.stringify(state.users));

      const users = rawUsers.map((user: User) =>
        action.payload.userId === user.userId ? action.payload : user
      );

      return {
        ...state,
        isLoading: false,
        users
      };
    default:
      return state;
  }
};

export default userReducer;
