import React from "react";
import { InputFieldType } from "../../models/input-field-type";
import { NameInputField } from "../../components/input-fields/name-input-field";

const emptyDiv = (): JSX.Element => {
  return <div>Empty</div>;
};

export class InputFieldComponentMapper {
  getInputField = (
    inputFieldType: InputFieldType,
    refProp: any
  ): JSX.Element => {
    switch (inputFieldType) {
      case InputFieldType.NAME:
        return NameInputField({ refProp });
      default:
        return emptyDiv();
    }
  };
}
