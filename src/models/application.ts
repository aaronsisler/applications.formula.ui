import { ApplicationApplicant } from "./application-applicant";
import { ApplicationFormGroup } from "./application-form-group";

export interface Application {
  applicationId?: string;
  tenantId?: string;
  applicationName?: string;
  applicationFormGroups?: ApplicationFormGroup[];
  applicants?: ApplicationApplicant[];
}
