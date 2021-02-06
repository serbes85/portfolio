import React from "react";
import { ButtonProps } from "./interface";
import styles from "./Button.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export const Button: React.FC<ButtonProps> = ({
  buttonText,
  appearance,
  onClick,
  ...rest
}) => {
  const className = cx({
    link: true,
    borderRadius: appearance === "borderRadius",
    borderRadiusLeft: appearance === "borderRadiusLeft",
    borderRadiusRight: appearance === "borderRadiusRight",
    borderRight: appearance === "borderRight",
    authorize: appearance === "authorize",
  });
  return (
    <button {...rest} className={className} onClick={onClick}>
      {buttonText}
    </button>
  );
};
