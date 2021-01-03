import React from "react";
import styles from "./Button.module.scss";
import classNames from "classnames/bind";
import { ButtonProps } from "./interface";

const cx = classNames.bind(styles);

export const Button: React.FC<ButtonProps> = ({
  buttonText,
  appearance,
  onClick,
  ...rest
}) => {
  const className = cx({
    link: true,
    borderRadiusLeft: appearance === "borderRadiusLeft",
    borderRadiusRight: appearance === "borderRadiusRight",
    borderRight: appearance === "borderRight",
    authorize: appearance === "authorize",
    view: appearance === "view",
  });
  return (
    <button {...rest} className={className} onClick={onClick}>
      {buttonText}
    </button>
  );
};
