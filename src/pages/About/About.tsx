import React, { FC } from "react";
import { HeroSection } from "../../components/HeroSection/HeroSection";
import styles from "./About.module.scss";

import portfolio from "./assets/portfolio_header.svg";

export const About: FC = () => {
  return (
    <div className={styles.container}>
      <HeroSection
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
