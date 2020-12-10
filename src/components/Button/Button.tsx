import React from "react";
import styles from "./Button.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

interface ButtonProps {
  buttonText: string;
  appearence?: "left" | "right" | "authorize";
}
export const Button: React.FC<ButtonProps> = ({ buttonText, appearence }) => {
  const className = cx({
    link: true,
    borderRadiusLeft: appearence === "left",
    borderRadiusRight: appearence === "right",
    linkAuthorize: appearence === "authorize",
  });
  return <button className={className}>{buttonText}</button>;
};
