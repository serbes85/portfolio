import React, { FC, useRef } from "react";
import { HeroSection } from "../../components/HeroSection/HeroSection";
import { TriangleLeft } from "../../components/TriangleLeft/TriangleLeft";
import { TriangleRight } from "../../components/TriangleRight/TriangleRight";
import { Title } from "../../components/Title/Title";
import { BackgroundTitle } from "../../components/BackgroundTitle/BackgroundTitle";
import { Projects } from "../../components/Projects/Projects";
import { Comments } from "../../components/Comments/Comments";
import { CardFeedback } from "../../components/CardFeedback/CardFeedback";
import { Icon } from "../../components/Icon/Icon";
import { Footer } from "../../components/Footer/Footer";
import styles from "./Works.module.scss";
import classNames from "classnames/bind";

import { comments, sliderList } from "./constants";
//img__header
import portfolio from "./assets/header/portfolio.svg";
import works from "./assets/header/works.svg";
import about from "./assets/header/about.svg";

//background
import bg from "./assets/bg/bg-about.png";
import list2 from "./assets/bg/list2.png";
import list3 from "./assets/bg/list3.png";

const cx = classNames.bind(styles);

export const Works: FC = () => {
  const section = useRef<null | HTMLElement>(null);

  const scrollToSection = () => {
    section.current?.scrollIntoView({
      block: "start",
      behavior: "smooth",
    });
  };

  return (
    <div className={styles.wrapper}>
      <main className={styles.main}>
        <HeroSection
          title="Бескровный Сергей"
          description="Личный сайт веб разработчика"
          backgroundUrl={portfolio}
          backgroundTitle="portfolio"
          size="high"
          scrollToSection={scrollToSection}
        />
        <section className={cx("section", "works")} ref={section}>
          <div className={styles.triangles}>
            <TriangleLeft
              name="triangle"
              fill="#f8f9f5"
              width="100%"
              height="120px"
            />
            <TriangleRight
              name="triangle"
              fill="#f8f9f5"
              width="100%"
              height="120px"
            />
          </div>
          <div className={styles.worksTitle}>
            <Title textTop="Мои работы" size="high" color="black" />
            <BackgroundTitle backgroundUrl={works} backgroundTitle="works" />
          </div>
          <div className={styles.row}>
            <Projects projects={sliderList} />
          </div>
        </section>
        <section className={cx("section", "about")}>
          <div className={styles.background}>
            <img className={styles.imgBackground} src={bg} alt="background" />
            <img src={list2} className={styles.list2} alt="list" />
            <img src={list3} className={styles.list3} alt="list" />
          </div>
          <div className={styles.feedback}>
            <div className={styles.aboutTitle}>
              <Title
                size="high"
                color="black"
                textTop="Что обо мне "
                textBottom="говорят"
              />
              <BackgroundTitle backgroundUrl={about} backgroundTitle="about" />
            </div>
            <div className={styles.comments}>
              <Comments comments={comments} />
            </div>
            <div className={styles.feedbackForm}>
              <CardFeedback />
            </div>
            <button
              type="button"
              className={styles.arrow}
              onClick={scrollToSection}
            >
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
