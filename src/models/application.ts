import { ApplicationApplicant } from "./application-applicant";
import { ApplicationField } from "./application-field";
import { ApplicationFormGroup } from "./application-form-group";

export interface Application {
  applicationId?: string;
  tenantId?: string;
  applicationName?: string;
  applicationFormGroups?: ApplicationFormGroup[];
  applicationFields?: ApplicationField[];
  applicants?: ApplicationApplicant[];
}
