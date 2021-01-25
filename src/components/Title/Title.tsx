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
    medium: size === "medium",
    small: size === "small",
    high: size === "high",
  });

  return (
    <div className={title}>
      <h1 className={className}>{textTop}</h1>
      {textBottom && <h1 className={className}>{textBottom}</h1>}
    </div>
  );
};
