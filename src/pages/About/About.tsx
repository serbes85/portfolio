import React, { FC, useRef } from "react";
import { HeroSection } from "../../components/HeroSection/HeroSection";
import { TriangleLeft } from "../../components/TriangleLeft/TriangleLeft";
import { TriangleRight } from "../../components/TriangleRight/TriangleRight";
import { Title } from "../../components/Title/Title";
import { BackgroundTitle } from "../../components/BackgroundTitle/BackgroundTitle";
import { Skills } from "../../components/Skills/Skills";
import { Map } from "../../components/Map/Map";
import { Contacts } from "../../components/Contacts/Contacts";
import { Footer } from "../../components/Footer/Footer";
import styles from "./About.module.scss";
import classNames from "classnames/bind";

import { skillsList, contacts } from "./constants";
//img__header
import portfolio from "./assets/header/portfolio.svg";
import about from "./assets/header/about.svg";
//avatar
import avatar from "./assets/avatar/MyAvatar.png";

const cx = classNames.bind(styles);

export const About: FC = () => {
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
              <Title textTop="Обо мне" size="high" color="black" />
              <BackgroundTitle backgroundUrl={about} backgroundTitle="about" />
            </div>
            <div className={styles.titleRight}>
              <Title
                textTop="Чем я могу быть"
                textBottom="Вам полезен"
                size="medium"
                color="gray"
              />
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.left}>
              <div className={styles.person}>
                <div className={styles.avatarWrapper}>
                  <img className={styles.avatar} src={avatar} alt="Сергей" />
                </div>
                <div className={styles.aboutTitle}>
                  <Title textTop="Кто я" size="medium" color="gray" />
                </div>
                <div className={styles.description}>
                  <p>
                    Я веб разработчик из Москвы. Мне 35 лет. Я занимаюсь
                    разработкой современных сайтов и приложений. Мне нравится
                    разбираться в сложных вещах, разрабатывать логику и
                    структуру приложения.
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.right}>
              <div className={styles.skills}>
                <div className={styles.description}>
                  <p>
                    Больше всего меня привлекает Frontend разработка. Имею опыт
                    разработки web-приложений на React.js и Vue.js. К верстке
                    отношусь нормально. Так же знаком и могу решать несложные
                    задачи на Backend.
                  </p>
                </div>
                <Skills skillsList={skillsList} />
              </div>
            </div>
          </div>
        </section>
        <section className={cx("section", "map")}>
          <Map />
          <div className={styles.contacts}>
            <Title textTop="Контакты" size="medium" color="gray" />
            <Contacts contactsList={contacts} />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};
