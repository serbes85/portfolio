import React, { FC } from "react";
import { Hero } from "../../components/Hero/Hero";
import { Title } from "../../components/Title/Title";
import { Button } from "../../components/Button/Button";
import styles from "./Works.module.scss";

import orderTaxi from "./assets/orderTaxi.png";
import portfolio from "./assets/portfolio_header.svg";

export const Works: FC = () => {
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
      <section className={styles.works}>
        <Title size="highFontSize" color="black" text="Мои работы" />
        <div className={styles.description}>
          <div className={styles.left}>
            <Title
              size="mediumFontSize"
              text="Приложение для заказа такси"
              color="gray"
            />
            <span className={styles.technologies}>
              React, Redux, Redux-Form, Redux-Saga, MaterialUI
            </span>
            <Button buttonText="Посмотреть cайт" appearance="view" />
          </div>
          <div className={styles.right}>
            <img className={styles.img} src={orderTaxi} alt="Order taxi" />
          </div>
        </div>
      </section>
    </div>
  );
};
