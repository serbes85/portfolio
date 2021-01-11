import React from "react";
import { TriangleLeftProps } from "./interfaces";
import sprite from "./image/triangle.svg";
import styles from "./TriangleLeft.module.scss";

export const TriangleLeft: React.FC<TriangleLeftProps> = ({
  name,
  fill,
  width,
  height,
}) => {
  return (
    <div className={styles.left}>
      <svg fill={fill} width={width} height={height}>
        <use xlinkHref={`${sprite}#bg-${name}`} />
      </svg>
    </div>
  );
};
