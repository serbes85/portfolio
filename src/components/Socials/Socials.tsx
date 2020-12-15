import React from "react";
import styles from "./Socials.module.scss";
import { Icon } from "../Icon/Icon";

export const Socials: React.FC = () => {
  const socials = [
    <Icon name="vk" fill="#949f99" size="1.5625rem" className={styles.link} />,
    <Icon
      name="github"
      fill="#949f99"
      size="1.5625rem"
      className={styles.link}
    />,
    <Icon name="in" fill="#949f99" size="1.5625rem" className={styles.link} />,
  ];
  const listItems = socials.map((item, index) => (
    <li className={styles.item} key={index}>
      {item}
    </li>
  ));
  return <ul className={styles.socials}>{listItems}</ul>;
};
