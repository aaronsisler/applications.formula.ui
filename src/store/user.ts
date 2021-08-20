import { User } from "../models/user";

export interface UserState {
  isAuthenticated: boolean;
  isLoading: boolean;
  data?: User;
}
