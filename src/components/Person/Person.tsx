import React, { FC } from "react";
import { Avatar } from "../Avatar/Avatar";
import { PersonProps } from "./interfaces";
import styles from "./Person.module.scss";

const defaultRender = (title: string, description: string) => (
  <>
    <span className={styles.title}>{title}</span>
    <span className={styles.description}>{description}</span>
  </>
);

export const Person: FC<PersonProps> = ({ title, description, render }) => {
  return (
    <div className={styles.person}>
      <Avatar />
      {render && render(title, description)}
    </div>
  );
};

Person.defaultProps = {
  render: defaultRender,
};
