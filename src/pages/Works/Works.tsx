import React, { FC } from "react";
import { HeroSection } from "../../components/HeroSection/HeroSection";
import { Title } from "../../components/Title/Title";
import { BackgroundTitle } from "../../components/BackgroundTitle/BackgroundTitle";
import { Button } from "../../components/Button/Button";
import { Footer } from "../../components/Footer/Footer";
import styles from "./Works.module.scss";

import portfolio from "./assets/portfolio_header.svg";
import works from "./assets/works_header.svg";
import orderTaxi from "./assets/orderTaxi.png";

export const Works: FC = () => {
  return (
    <div className={styles.wrapper}>
      <main className={styles.main}>
        <HeroSection
          title="Бескровный Сергей"
          description="Личный сайт веб разработчика"
          url={portfolio}
          imgDescription="portfolio"
          position="center"
        />
        <section className={styles.works}>
          <div className={styles.title}>
            <BackgroundTitle
              url={works}
              imgDescription="title works"
              position="center"
            />
            <Title size="highFontSize" color="black" text="Мои работы" />
          </div>
          <div className={styles.row}>
            <div className={styles.left}>
              <Title
                size="mediumFontSize"
                color="gray"
                text="Приложение для заказа такси"
              />
              <span className={styles.description}>
                React, Redux, Redux-Form, Redux-Saga, MaterialUI
              </span>
              <Button buttonText="Посмотреть cайт" appearance="view" />
            </div>
            <div className={styles.right}>
              <div className={styles.imgWrapper}>
                <img className={styles.img} src={orderTaxi} alt="Order taxi" />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};
