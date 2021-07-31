import { ApplicationField } from "./application-field";
import { ApplicationApplicant } from "./application-applicant";

export interface Application {
  applicationId?: string;
  tenantId?: string;
  applicationName?: string;
  applicationFields?: ApplicationField[];
  applicants?: ApplicationApplicant[];
}
