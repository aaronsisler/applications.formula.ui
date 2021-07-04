import { User } from "../models/user";

export interface IState {
  user: User;
}

export const initialState = {
  user: {}
};
