import React from "react";
import { TitleProps } from "./interfaces";
import styles from "./Title.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export const Title: React.FC<TitleProps> = ({
  textTop,
  textBottom,
  size,
  color,
}) => {
  const title = cx({
    title: true,
    black: color === "black",
    gray: color === "gray",
  });
  const className = cx({
    mediumFontSize: size === "mediumFontSize",
    smallFontSize: size === "smallFontSize",
    highFontSize: size === "highFontSize",
  });

  return (
    <div className={title}>
      <h1 className={className}>{textTop}</h1>
      <h1 className={className}>{textBottom}</h1>
    </div>
  );
};
