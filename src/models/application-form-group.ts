import { FormGroupType } from "./form-group-type";

export interface ApplicationFormGroup {
  applicationId: string;
  applicationFormGroupId: string;
  applicationFormGroupSequence: number;
  formGroupType: FormGroupType;
}
