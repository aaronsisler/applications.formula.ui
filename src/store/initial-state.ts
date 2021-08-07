import { applicantInitialState } from "../reducers/applicant";
import { applicationInitialState } from "../reducers/application";
import { tenantInitialState } from "../reducers/tenant";
import { userInitialState } from "../reducers/user";
import {
  ApplicantState,
  ApplicationState,
  TenantState,
  UserState
} from "../store";

export interface AppState {
  applicant: ApplicantState;
  application: ApplicationState;
  tenant: TenantState;
  user: UserState;
}

export const initialAppState: AppState = {
  applicant: applicantInitialState,
  application: applicationInitialState,
  tenant: tenantInitialState,
  user: userInitialState
};
