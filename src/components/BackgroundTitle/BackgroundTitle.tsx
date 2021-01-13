import React, { FC } from "react";
import { BackgroundTitleProps } from "./interfaces";
import classNames from "classnames/bind";
import styles from "./BackgroundTitle.module.scss";

const cx = classNames.bind(styles);

export const BackgroundTitle: FC<BackgroundTitleProps> = ({
  backgroundUrl,
  backgroundTitle,
  size,
}) => {
  const img = cx({
    img: true,
    high: size === "high",
    medium: size === "medium",
    small: size === "small",
  });
  return <img className={img} src={backgroundUrl} alt={backgroundTitle} />;
};
