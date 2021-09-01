import React, { ChangeEventHandler, FocusEventHandler } from "react";
import { Input } from "../../../atoms/input";

interface INameFormGroup {
  register: FocusEventHandler;
}

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
  inputFieldLabel: string,
  inputFieldName: string,
  register: any,
  options: any = {}
): IRegister => {
  const { name, onBlur, onChange, ref } = register(inputFieldName, {
    ...options
  });

  return { props: { label: inputFieldLabel, name, onBlur, onChange }, ref };
};

export const NameFormGroup = (register: any): JSX.Element => {
  const lastNameRegister = buildRegister("Last Name:", "name,last", register);
  const firstNameRegister = buildRegister(
    "First Name:",
    "name,first",
    register
  );
  return (
    <fieldset>
      <legend>Name</legend>
      <br />
      <Input
        label={lastNameRegister.props.label}
        name={lastNameRegister.props.name}
        onBlur={lastNameRegister.props.onBlur}
        onChange={lastNameRegister.props.onChange}
        refProp={lastNameRegister.ref}
      />
      <Input
        label={firstNameRegister.props.label}
        name={firstNameRegister.props.name}
        onBlur={firstNameRegister.props.onBlur}
        onChange={firstNameRegister.props.onChange}
        refProp={firstNameRegister.ref}
      />
    </fieldset>
  );
};
