import React from "react";
import { Icon } from "../Icon/Icon";
import classNames from "classnames/bind";
import styles from "./Socials.module.scss";
import { SocialsProps } from "./interfaces";

const cx = classNames.bind(styles);

export const Socials: React.FC<SocialsProps> = ({ fill }) => {
  const className = cx({
    link: true,
    white: fill === "white",
  });
  const socials = [
    <Icon name="vk" size="1.5625rem" className={className} />,
    <Icon name="github" size="1.5625rem" className={className} />,
    <Icon name="in" size="1.5625rem" className={className} />,
  ];
  const listItems = socials.map((item, index) => (
    <li className={styles.item} key={index}>
      {item}
    </li>
  ));
  return <ul className={styles.socials}>{listItems}</ul>;
};
