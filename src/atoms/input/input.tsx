import React, { ChangeEventHandler, FocusEventHandler } from "react";
import PropTypes from "prop-types";

interface IInput {
  label: string;
  name: string;
  onBlur: FocusEventHandler;
  onChange: ChangeEventHandler;
  refProp: any;
}

const Input = ({
  label,
  name,
  onBlur,
  onChange,
  refProp
}: IInput): JSX.Element => (
  <div className="input">
    <label htmlFor={name} className="input__label">
      <span className="input__span">{label}</span>
    </label>
    <input
      name={name}
      onBlur={onBlur}
      onChange={onChange}
      ref={refProp}
      type="text"
    />
  </div>
);

Input.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onBlur: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  refProp: PropTypes.func.isRequired
};

export { Input };
