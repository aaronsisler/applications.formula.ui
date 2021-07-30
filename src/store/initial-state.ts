import { Applicant } from "../models/applicant";
import { Application } from "../models/application";
import { Tenant } from "../models/tenant";
import { User } from "../models/user";

export interface IState {
  applicant: Applicant;
  application: Application;
  tenant: Tenant;
  user: User;
}

export const initialState = {
  applicant: {},
  application: {},
  tenant: {},
  user: {}
};
