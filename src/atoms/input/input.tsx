import React from "react";
import PropTypes from "prop-types";

interface IInput {
  label: string;
  name: string;
  refProp: any;
}

const Input = ({ label, name, refProp }: IInput): JSX.Element => (
  <div className="input">
    <label htmlFor={name} className="input__label">
      <span className="input__span">{label}</span>
    </label>
    <input name={name} ref={refProp} type="text" />
  </div>
);

Input.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  refProp: PropTypes.func.isRequired
};

export { Input };
