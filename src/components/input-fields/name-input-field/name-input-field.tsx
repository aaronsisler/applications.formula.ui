import React, { ChangeEventHandler, FocusEventHandler } from "react";
import { Input } from "../../../atoms/input";

interface INameInputField {
  label: string;
  name: string;
  onBlur: FocusEventHandler;
  onChange: ChangeEventHandler;
}

export const NameInputField = (
  { label, name, onBlur, onChange }: INameInputField,
  ref: any
): JSX.Element => {
  return (
    <Input
      label={label}
      name={name}
      onBlur={onBlur}
      onChange={onChange}
      refProp={ref}
    />
  );
};
