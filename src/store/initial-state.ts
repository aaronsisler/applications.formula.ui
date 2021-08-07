import { Applicant } from "../models/applicant";
import { Application } from "../models/application";
import { applicationInitialState } from "../reducers/application";
import { tenantInitialState } from "../reducers/tenant";
import { userInitialState } from "../reducers/user";
import { ApplicationState, TenantState, UserState } from "../store";

export interface AppState {
  applicant: Applicant;
  application: ApplicationState;
  tenant: TenantState;
  user: UserState;
}

export const initialState = {
  applicant: {},
  application: applicationInitialState,
  tenant: tenantInitialState,
  user: userInitialState
};
