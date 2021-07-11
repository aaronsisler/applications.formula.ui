import { ApplicationField } from "./application-field";

export interface Application {
  applicationId?: string;
  applicationName?: string;
  applicationFields?: ApplicationField[];
}
