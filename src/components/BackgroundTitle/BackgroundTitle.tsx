import React, { FC } from "react";
import { BackgroundTitleProps } from "./interfaces";
import classNames from "classnames/bind";
import styles from "./BackgroundTitle.module.scss";

const cx = classNames.bind(styles);

export const BackgroundTitle: FC<BackgroundTitleProps> = ({
  url,
  imgDescription,
  size,
  position,
}) => {
  const className = cx({
    title: true,
    medium: size === "medium",
    high: size === "high",
    center: position === "center",
    nocenter: position === "nocenter",
  });
  return (
    <div className={className}>
      <img src={url} alt={imgDescription} />
    </div>
  );
};
