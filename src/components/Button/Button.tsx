import React from "react";
import styles from "./Button.module.scss";
import classNames from "classnames/bind";
import { ButtonProps } from "./interface";

const cx = classNames.bind(styles);

export const Button: React.FC<ButtonProps> = ({ buttonText, appearance }) => {
  const className = cx({
    link: true,
    borderRadiusLeft: appearance === "borderRadiusLeft",
    borderRadiusRight: appearance === "borderRadiusRight",
    authorize: appearance === "authorize",
  });
  return <button className={className}>{buttonText}</button>;
};
