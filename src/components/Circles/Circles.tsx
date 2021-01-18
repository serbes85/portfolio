import React, { FC } from "react";
import { CirclesProps } from "./interfaces";
import styles from "./Circles.module.scss";

export const Circles: FC<CirclesProps> = ({
  percents,
  strokeUnderCircle,
  strokeAboveCircle,
}) => {
  return (
    <svg width="120" height="120" className={styles.circlesSvg}>
      <circle r="50" cx="60" cy="60" stroke={strokeUnderCircle} />
      <circle
        r="50"
        cx="60"
        cy="60"
        transform="rotate(-90 60 60)"
        stroke={strokeAboveCircle}
        strokeDasharray={2 * 3.1415 * 50 * (percents / 100) + " 630"}
        className={styles.aboveCircle}
      />
    </svg>
  );
};
