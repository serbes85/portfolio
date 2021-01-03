import React, { FC } from "react";
import Photo from "./assets/MyAvatar.png";
import styles from "./Avatar.module.scss";

export const Avatar: FC = () => {
  return (
    <div className={styles.avatar}>
      <img src={Photo} alt="Person avatar" />
    </div>
  );
};
