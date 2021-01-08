import React, { FC } from "react";
import { Icon } from "../Icon/Icon";
import { SocialsProps, SocialsData } from "./interfaces";
import styles from "./Socials.module.scss";
import classNames from "classnames/bind";

import { socials } from "./constants";

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

export const Socials: FC<SocialsProps> = ({ fill, hover }) => {
  const className = cx({
    link: true,
    fillWhite: fill === "fillWhite",
    hoverWhite: hover === "hoverWhite",
  });

  return <ul className={styles.list}>{getSocialList(socials, className)}</ul>;
};
