import React, { FC } from "react";
import { HeroSection } from "../../components/HeroSection/HeroSection";
import { Triangle } from "../../components/Triangle/Triangle";
import { Title } from "../../components/Title/Title";
import { BackgroundTitle } from "../../components/BackgroundTitle/BackgroundTitle";
import { Button } from "../../components/Button/Button";
import { Comments } from "../../components/Comments/Comments";
import { CardFeedback } from "../../components/CardFeedback/CardFeedback";
import { Icon } from "../../components/Icon/Icon";
import { Footer } from "../../components/Footer/Footer";
import styles from "./Works.module.scss";
import classNames from "classnames/bind";

import { comments } from "./constants";
//img__header
import portfolio from "./assets/header/portfolio.svg";
import works from "./assets/header/works.svg";
import about from "./assets/header/about.svg";
//img__prj
import orderTaxi from "./assets/prj/orderTaxi.png";
//background
import bg from "./assets/bg/bg-about.png";
import list2 from "./assets/bg/list2.png";

const cx = classNames.bind(styles);

export const Works: FC = () => {
  return (
    <div className={styles.wrapper}>
      <main className={styles.main}>
        <HeroSection
          title="Бескровный Сергей"
          description="Личный сайт веб разработчика"
          url={portfolio}
          size="high"
          imgDescription="portfolio"
        />
        <section className={cx("section", "works")}>
          <Triangle
            name="triangle"
            fill="#f8f9f5"
            width="100%"
            height="120px"
          />
          <div className={styles.worksTitle}>
            <BackgroundTitle url={works} imgDescription="title works" />
            <Title size="highFontSize" color="black" text="Мои работы" />
          </div>
          <div className={styles.row}>
            <div className={styles.left}>
              <div className={styles.leftTitle}>
                <Title
                  size="mediumFontSize"
                  color="gray"
                  text="Приложение для заказа такси"
                />
              </div>
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
        <section className={cx("section", "about")}>
          <div className={styles.background}>
            <img className={styles.imgBackground} src={bg} alt="background" />
            <img src={list2} className={styles.elementBg} alt="list" />
          </div>
          <div className={styles.feedback}>
            <div className={styles.aboutTitle}>
              <BackgroundTitle url={about} imgDescription="title about" />
              <Title
                size="highFontSize"
                color="black"
                text="Что обо мне говорят"
              />
            </div>
            <div className={styles.comments}>
              <Comments comments={comments} />
            </div>
            <div className={styles.feedbackForm}>
              <CardFeedback />
            </div>
            <button type="button" className={styles.arrow}>
              <Icon
                className={styles.up}
                name="arrow-up"
                fill="white"
                size="1.5625rem"
              />
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};
