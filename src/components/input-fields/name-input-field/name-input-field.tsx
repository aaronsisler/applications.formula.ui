import React from "react";
import PropTypes from "prop-types";

import { Input } from "../../../atoms/input";

interface INameInputField {
  refProp: any;
}

const NameInputField = ({ refProp }: INameInputField): JSX.Element => (
  <div className="name-input-field">
    <Input label="Name" name="name-input-field" refProp={refProp} />
  </div>
);

NameInputField.propTypes = {
  refProp: PropTypes.func.isRequired
};

export { NameInputField };
