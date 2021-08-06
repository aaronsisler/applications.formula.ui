import { User } from "../models/user";

export interface UserState {
  isAuthorized: boolean;
  data?: User;
}
