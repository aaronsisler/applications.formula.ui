import React, { ChangeEventHandler, FocusEventHandler } from "react";
import PropTypes from "prop-types";

interface IInput {
  label: string;
  name: string;
  onBlur: FocusEventHandler;
  onChange: ChangeEventHandler;
  refProp: any;
  type?: string;
}

const Input = ({
  label,
  name,
  onBlur,
  onChange,
  refProp,
  type = "text"
}: IInput): JSX.Element => (
  <div className="relative h-10 mb-5 max-w-xs">
    <label
      htmlFor={name}
      className="input__label absolute left-2 transition-all bg-white px-1"
    >
      {label}
    </label>
    <input
      className="input__input h-full w-full transition-all border border-gray-600 px-2 rounded-sm"
      name={name}
      onBlur={onBlur}
      onChange={onChange}
      ref={refProp}
      type={type}
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
