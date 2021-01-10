import React, { FC } from "react";
import { AvatarProps } from "./interfaces";
import styles from "./Avatar.module.scss";

export const Avatar: FC<AvatarProps> = ({ url }) => {
  return (
    <div className={styles.avatar}>
      <img className={styles.img} src={url} alt="Person avatar" />
    </div>
  );
};
