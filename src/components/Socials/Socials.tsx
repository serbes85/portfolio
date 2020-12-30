import React, { FC } from "react";
import { Icon } from "../Icon/Icon";
import { SocialsProps, SocialsData } from "./interfaces";
import styles from "./Socials.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const getSocialList = (socials: SocialsData[], className: string) => {
  return socials.map(({ id, link, name }) => (
    <li className={styles.item} key={id}>
      <a target="_blank" rel="noopener noreferrer" href={link}>
        <Icon className={className} name={name} size="1.5625rem" />
      </a>
    </li>
  ));
};

export const Socials: FC<SocialsProps> = ({ socials, fill }) => {
  const className = cx({
    link: true,
    white: fill === "white",
  });

  return (
    <ul className={styles.socials}>{getSocialList(socials, className)}</ul>
  );
};
