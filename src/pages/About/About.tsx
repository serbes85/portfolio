import React, { FC } from "react";
import { Hero } from "../../components/Hero/Hero";
import styles from "./About.module.scss";

import portfolio from "./assets/portfolio_header.svg";

export const About: FC = () => {
  return (
    <div className={styles.container}>
      <Hero
        title="Бескровный Сергей"
        description="Личный сайт веб разработчика"
        url={portfolio}
        imgDescription="portfolio"
        size="high"
        position="center"
      />
      <section className={styles.about}>
        <div className={styles.left}></div>
        <div className={styles.right}></div>
      </section>
    </div>
  );
};
