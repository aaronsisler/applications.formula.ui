import { User } from "../models/user";

export interface UserState {
  isAuthenticated: boolean;
  isAuthorized: boolean;
  isLoading: boolean;
  data?: User;
}
