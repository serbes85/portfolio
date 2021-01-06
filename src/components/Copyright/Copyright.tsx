import React, { FC } from "react";
import { CopyrightProps } from "./interfaces";
import styles from "./Copyright.module.scss";

export const Copyright: FC<CopyrightProps> = ({ text }) => {
  return (
    <div className={styles.copyright}>
      <span>{text}</span>
    </div>
  );
};
