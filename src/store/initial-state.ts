import { Applicant } from "../models/applicant";
import { Application } from "../models/application";
import { Tenant } from "../models/tenant";
import { userInitialState } from "../reducers/user";
import { UserState } from "../store/user";

export interface AppState {
  applicant: Applicant;
  application: Application;
  tenant: Tenant;
  user: UserState;
}

export const initialState = {
  applicant: {},
  application: {},
  tenant: {},
  user: userInitialState
};
