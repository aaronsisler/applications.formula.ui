import React, { ChangeEventHandler, FocusEventHandler } from "react";
import { Input } from "../../../atoms/input";

interface IEmailInputField {
  label: string;
  name: string;
  onBlur: FocusEventHandler;
  onChange: ChangeEventHandler;
}

const EmailInputField = (
  { label, name, onBlur, onChange }: IEmailInputField,
  ref: any
): JSX.Element => {
  return (
    <Input
      label={label}
      name={name}
      onBlur={onBlur}
      onChange={onChange}
      refProp={ref}
      type="email"
    />
  );
};

export { EmailInputField };
