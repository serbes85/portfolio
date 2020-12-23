import React from "react";
import { TitleProps } from "./interfaces";
import styles from "./Title.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export const Title: React.FC<TitleProps> = ({ text, color }) => {
  const className = cx({
    title: true,
    black: color === "black",
  });
  return <h1 className={className}>{text}</h1>;
};
