import React from "react";
import { TriangleLeftProps } from "./interfaces";
import sprite from "./image/triangle.svg";
import styles from "./TriangleLeft.module.scss";

export const TriangleLeft: React.FC<TriangleLeftProps> = ({
  name,
  fill,
  width,
}) => {
  return (
    <div className={styles.left}>
      <svg fill={fill} width={width}>
        <use xlinkHref={`${sprite}#bg-${name}`} />
      </svg>
    </div>
  );
};
