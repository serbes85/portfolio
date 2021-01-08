import React from "react";
import { TitleProps } from "./interfaces";
import styles from "./Title.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export const Title: React.FC<TitleProps> = ({ text, size, color }) => {
  const className = cx({
    title: true,
    mediumFontSize: size === "mediumFontSize",
    smallFontSize: size === "smallFontSize",
    highFontSize: size === "highFontSize",
    black: color === "black",
    gray: color === "gray",
  });

  return <h1 className={className}>{text}</h1>;
};
