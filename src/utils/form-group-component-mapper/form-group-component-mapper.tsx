import React from "react";
import { NameFormGroup } from "../../components/form-groups/name-form-group";
import { FormGroupType } from "../../models/form-group-type";

const unknownFormGroup = (): JSX.Element => {
  return <div>Unknown Form Group</div>;
};

export class FormGroupComponentMapper {
  static getFormGroup = (
    formGroupType: FormGroupType,
    register: any
  ): JSX.Element => {
    switch (formGroupType) {
      case FormGroupType.NAME:
        return NameFormGroup(register);
      default:
        return unknownFormGroup();
    }
  };
}
