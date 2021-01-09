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
  url,
  imgDescription,
  size,
  position,
  render,
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
      <BackgroundTitle url={url} imgDescription={imgDescription} size={size} />
      <button className={styles.arrow}>
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
