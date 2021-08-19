import { adminInitialState } from "../reducers/admin";
import { applicantInitialState } from "../reducers/applicant";
import { applicationInitialState } from "../reducers/application";
import { tenantInitialState } from "../reducers/tenant";
import { userInitialState } from "../reducers/user";
import {
  AdminState,
  ApplicantState,
  ApplicationState,
  TenantState,
  UserState
} from "../store";

export interface AppState {
  admin: AdminState;
  applicant: ApplicantState;
  application: ApplicationState;
  tenant: TenantState;
  user: UserState;
}

export const initialAppState: AppState = {
  admin: adminInitialState,
  applicant: applicantInitialState,
  application: applicationInitialState,
  tenant: tenantInitialState,
  user: userInitialState
};
