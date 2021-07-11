import { InputFieldType } from "./input-field-type";

export interface ApplicationField {
  applicationId?: string;
  applicationFieldId?: string;
  applicationSequence: number;
  inputFieldType: InputFieldType;
}
