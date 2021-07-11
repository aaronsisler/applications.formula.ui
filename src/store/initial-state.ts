import { Application } from "../models/application";
import { Tenant } from "../models/tenant";
import { User } from "../models/user";

export interface IState {
  application: Application;
  tenant: Tenant;
  user: User;
}

export const initialState = {
  application: {},
  tenant: {},
  user: {}
};
