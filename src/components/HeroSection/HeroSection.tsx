import React, { FC, useState } from "react";
import { Header } from "../Header/Header";
import { Person } from "../Person/Person";
import { BackgroundTitle } from "../BackgroundTitle/BackgroundTitle";
import { Icon } from "../Icon/Icon";
import { ModalWindow } from "../ModalWindow/ModalWindow";
import { HeroProps } from "./interfaces";
import styles from "./HeroSection.module.scss";

export const HeroSection: FC<HeroProps> = ({
  title,
  description,
  backgroundUrl,
  backgroundTitle,
  size,
  render,
  scrollToSection,
}) => {
  const [isActive, setIsActive] = useState(false);

  const hahdleClickSetActiveClass = () => {
    setIsActive(!isActive);
  };

  return (
    <section className={styles.hero}>
      <Header
        isActive={isActive}
        hahdleClickSetActiveClass={hahdleClickSetActiveClass}
      />
      <Person title={title} description={description} render={render} />
      <BackgroundTitle
        backgroundUrl={backgroundUrl}
        backgroundTitle={backgroundTitle}
        size={size}
      />
      <button type="button" className={styles.arrow} onClick={scrollToSection}>
        <Icon
          className={styles.down}
          name="arrow-down"
          fill="white"
          size="1.5625rem"
        />
      </button>
      <ModalWindow isActive={isActive} />
    </section>
  );
};
