import React, { ChangeEventHandler, FocusEventHandler } from "react";
import { InputFieldType } from "../../models/input-field-type";
import { EmailInputField } from "../../components/input-fields/email-input-field";
import { NameInputField } from "../../components/input-fields/name-input-field";
import { ApplicationField } from "../../models/application-field";
import { EmailValidator } from "../email-validator";

const unknownType = (): JSX.Element => {
  return <div>Unknown</div>;
};

interface IRegisterProps {
  label: string;
  name: string;
  onBlur: FocusEventHandler;
  onChange: ChangeEventHandler;
}

interface IRegister {
  props: IRegisterProps;
  ref: any;
}

const buildRegister = (
  register: any,
  inputFieldName: string,
  inputFieldLabel: string,
  options: any = {}
): IRegister => {
  const { name, onBlur, onChange, ref } = register(inputFieldName, {
    ...options
  });

  return { props: { name, onBlur, onChange, label: inputFieldLabel }, ref };
};

export class InputFieldComponentMapper {
  static getInputField = (
    applicationField: ApplicationField,
    register: any
  ): JSX.Element => {
    const { inputFieldLabel, inputFieldName } = applicationField;
    switch (applicationField.inputFieldType) {
      case InputFieldType.NAME__FIRST:
      case InputFieldType.NAME__LAST:
        const nameRegisterResult = buildRegister(
          register,
          inputFieldName,
          inputFieldLabel,
          { required: true }
        );

        return NameInputField(
          { ...nameRegisterResult.props },
          nameRegisterResult.ref
        );
      case InputFieldType.EMAIL:
        const emailRegisterResult = buildRegister(
          register,
          inputFieldName,
          inputFieldLabel,
          {
            required: true,
            validate: (emailAddress: string) =>
              EmailValidator.validate(emailAddress)
          }
        );

        return EmailInputField(
          { ...emailRegisterResult.props },
          emailRegisterResult.ref
        );
      default:
        return unknownType();
    }
  };
}
