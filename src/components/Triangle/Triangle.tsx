import React from "react";
import { TriangleProps } from "./interfaces";
import sprite from "./image/sprite.svg";
import styles from "./Triangle.module.scss";

export const Triangle: React.FC<TriangleProps> = ({
  name,
  fill,
  width,
  height,
}) => {
  return (
    <div className={styles.triangle}>
      <div className={styles.left}>
        <svg fill={fill} width={width} height={height}>
          <use xlinkHref={`${sprite}#bg-${name}`} />
        </svg>
      </div>
      <div className={styles.right}>
        <svg fill={fill} width={width} height={height}>
          <use xlinkHref={`${sprite}#bg-${name}`} />
        </svg>
      </div>
    </div>
  );
};
