import React, { FC } from "react";
import { Hero } from "../../components/Hero/Hero";
import styles from "./Blog.module.scss";

export const Blog: FC = () => {
  return (
    <div className={styles.container}>
      <Hero description={"Статьи, которые я написал"} />
    </div>
  );
};
