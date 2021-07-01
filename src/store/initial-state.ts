import { User } from "../models/user";
import { UserTenant } from "../models/user-tenant";

export interface IState {
  count: number;
  tenants: UserTenant[];
  user: User;
}

export const initialState = {
  count: 0,
  tenants: [],
  user: {}
};
