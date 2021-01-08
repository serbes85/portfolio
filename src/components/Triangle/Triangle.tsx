import React from "react";
import { TriangleProps } from "./interfaces";
import sprite from "./image/sprite.svg";
import styles from "./Triangle.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export const Triangle: React.FC<TriangleProps> = ({
  name,
  position,
  fill,
  width,
  height,
}) => {
  const className = cx({
    triangle: true,
    left: position === "left",
    right: position === "right",
  });

  return (
    <div className={className}>
      <svg fill={fill} width={width} height={height}>
        <use xlinkHref={`${sprite}#bg-${name}`} />
      </svg>
    </div>
  );
};
