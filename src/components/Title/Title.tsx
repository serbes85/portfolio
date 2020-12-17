import React from "react";
import { TitleProps } from "./interfaces";
import styles from "./Title.module.scss";

export const Title: React.FC<TitleProps> = ({ text }) => {
  return <h1 className={styles.title}>{text}</h1>;
};
