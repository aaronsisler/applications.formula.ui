import React from "react";
import cn from "classnames";
import PropTypes from "prop-types";

interface IButton {
  className?: string;
  isDisabled: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  text: string;
}

const buttonClassBase = "px-4 py-2 border rounded-md bg-indigo-500 text-white";
const buttonClassHover =
  "hover:bg-white hover:text-indigo-500 border-indigo-500";

const buttonClassDisabled = "opacity-50 bg-blue-900 cursor-not-allowed";

export const Button = ({ className, isDisabled, onClick, text }: IButton) => (
  <button
    disabled={isDisabled}
    onClick={onClick}
    className={cn(
      className,
      buttonClassBase,
      buttonClassHover,
      isDisabled ? buttonClassDisabled : ""
    )}
  >
    {text}
  </button>
);

Button.propTypes = {
  className: PropTypes.string,
  isDisabled: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
};
