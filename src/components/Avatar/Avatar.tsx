import React, { FC } from "react";
import { AvatarProps } from "./interfaces";
import styles from "./Avatar.module.scss";

export const Avatar: FC<AvatarProps> = ({ avatarUrl, name }) => {
  return (
    <div className={styles.avatar}>
      <img className={styles.img} src={avatarUrl} alt={name} />
    </div>
  );
};
