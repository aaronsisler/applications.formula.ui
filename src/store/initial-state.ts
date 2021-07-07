import { Tenant } from "../models/tenant";
import { User } from "../models/user";

export interface IState {
  tenant: Tenant;
  user: User;
}

export const initialState = {
  tenant: {},
  user: {}
};
