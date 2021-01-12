import React, { FC, useRef } from "react";
import { HeroSection } from "../../components/HeroSection/HeroSection";
import { TriangleLeft } from "../../components/TriangleLeft/TriangleLeft";
import { TriangleRight } from "../../components/TriangleRight/TriangleRight";
import { Title } from "../../components/Title/Title";
import { BackgroundTitle } from "../../components/BackgroundTitle/BackgroundTitle";
import { Footer } from "../../components/Footer/Footer";
import styles from "./About.module.scss";
import classNames from "classnames/bind";

//img__header
import portfolio from "./assets/header/portfolio.svg";
import about from "./assets/header/about.svg";

const cx = classNames.bind(styles);

export const About: FC = () => {
  const section = useRef<null | HTMLElement>(null);

  const scrollToSection = () => {
    section.current?.scrollIntoView({
      block: "center",
      behavior: "smooth",
    });
  };

  return (
    <div className={styles.wrapper}>
      <main className={styles.main}>
        <HeroSection
          title="Бескровный Сергей"
          description="Личный сайт веб разработчика"
          url={portfolio}
          imgDescription="portfolio"
          size="high"
          scrollToSection={scrollToSection}
        />
        <section className={cx("section", "about")} ref={section}>
          <div className={styles.triangles}>
            <TriangleLeft
              name="triangle"
              fill="#ebefe2"
              width="100%"
              height="120px"
            />
            <TriangleRight
              name="triangle"
              fill="#f4f5f0"
              width="100%"
              height="120px"
            />
          </div>
          <div className={styles.title}>
            <div className={styles.titleLeft}>
              <Title textTop="Обо мне" size="highFontSize" color="black" />
              <BackgroundTitle url={about} imgDescription="about" />
            </div>
            <div className={styles.titleRight}>
              <Title
                textTop="Чем я могу быть"
                textBottom="Вам полезен"
                size="mediumFontSize"
                color="gray"
              />
            </div>
          </div>
          <div className={styles.left}></div>
          <div className={styles.right}></div>
        </section>
      </main>
      <Footer />
    </div>
  );
};
