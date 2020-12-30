import React, { FC } from "react";
import { Icon } from "../Icon/Icon";
import classNames from "classnames/bind";
import { SocialsProps, SocialsData } from "./interfaces";
import styles from "./Socials.module.scss";

const cx = classNames.bind(styles);

const getSocialList = (socials: SocialsData[]) => {
  return socials.map(({ id, socialIcon, link }) => (
    <li className={styles.item} key={id}>
      <a target="_blank" rel="noopener noreferrer" href={link}>
        {socialIcon}
      </a>
    </li>
  ));
};

export const Socials: FC<SocialsProps> = ({ fill }) => {
  const className = cx({
    link: true,
    white: fill === "white",
  });
  const socials = [
    {
      id: 0,
      socialIcon: <Icon name="vk" size="1.5625rem" className={className} />,
      link: "https://vk.com/id90801984",
    },
    {
      id: 1,
      socialIcon: <Icon name="github" size="1.5625rem" className={className} />,
      link: "https://github.com/serbes85",
    },
    {
      id: 2,
      socialIcon: (
        <Icon name="telegram" size="1.5625rem" className={className} />
      ),
      link: "https://t.me/serbes85",
    },
  ];

  return <ul className={styles.socials}>{getSocialList(socials)}</ul>;
};
