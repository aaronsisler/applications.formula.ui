import { User } from "../models/user";

export interface UserState {
  isAdmin: boolean;
  isAuthenticated: boolean;
  isAuthorized: boolean;
  isLoading: boolean;
  data?: User;
}
