import React, { FC } from "react";
import { Avatar } from "../Avatar/Avatar";
import { PersonProps } from "./interfaces";
import styles from "./Person.module.scss";

export const Person: FC<PersonProps> = ({ description }) => {
  return (
    <div className={styles.person}>
      <Avatar />
      <span className={styles.name}>Бескровный Сергей</span>
      <span className={styles.description}>{description}</span>
    </div>
  );
};
