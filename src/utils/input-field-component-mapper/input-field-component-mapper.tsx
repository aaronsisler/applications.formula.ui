import React, { ChangeEventHandler, FocusEventHandler } from "react";
import { InputFieldType } from "../../models/input-field-type";
import { NameInputField } from "../../components/input-fields/name-input-field";
import { ApplicationField } from "../../models/application-field";

const unknownType = (): JSX.Element => {
  return <div>Unknown</div>;
};

interface IRegister {
  name: string;
  onBlur: FocusEventHandler;
  onChange: ChangeEventHandler;
  ref: any;
}

export class InputFieldComponentMapper {
  static getInputField = (
    applicationField: ApplicationField,
    register: IRegister
  ): JSX.Element => {
    switch (applicationField.inputFieldType) {
      case InputFieldType.NAME__FIRST:
      case InputFieldType.NAME__LAST:
        const { name, onBlur, onChange, ref } = register;
        const { inputFieldLabel } = applicationField;

        return NameInputField(
          { name, onBlur, onChange, label: inputFieldLabel },
          ref
        );
      default:
        return unknownType();
    }
  };
}
