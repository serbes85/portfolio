import React, { FC } from "react";
import { Hero } from "../../components/Hero/Hero";
import { Title } from "../../components/Title/Title";
import { Button } from "../../components/Button/Button";
import styles from "./Works.module.scss";

import orderTaxi from "./assets/orderTaxi.png";

export const Works: FC = () => {
  return (
    <div className={styles.container}>
      <Hero description={"Личный сайт веб разработчика"} />
      <section className={styles.works}>
        <Title size="highFontSize" text={"Мои работы"} color="black" />
        <div className={styles.description}>
          <div className={styles.left}>
            <Title
              size="mediumFontSize"
              text={"Приложение для заказа такси"}
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
