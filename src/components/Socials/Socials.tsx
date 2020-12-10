import React from "react";
import sprite from "../../sprite.svg";
import styles from "./Socials.module.scss";

export const Socials: React.FC = () => {
  const socialsName = [
    <use xlinkHref={`${sprite}#vk`} />,
    <use xlinkHref={`${sprite}#github`} />,
    <use xlinkHref={`${sprite}#in`} />,
  ];
  const listItems = socialsName.map((item, index) => (
    <li className={styles.item} key={index}>
      <svg className={styles.link}>{item}</svg>
    </li>
  ));
  return <ul className={styles.socials}>{listItems}</ul>;
};
