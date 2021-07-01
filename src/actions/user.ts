import { User } from "../models/user";

//Action Types
export const SET_USER = "SET_USER";

//Action Creator
export const setUser = (user: User) => ({
  type: SET_USER,
  payload: user
});
