import React from "react";
import { Socials } from "../Socials/Socials";
import { Person } from "../Person/Person";
import { NavBar } from "../NavBar/NavBar";
import { CardPersonProps } from "./interfaces";
import styles from "./CardPerson.module.scss";
import classNames from "classnames/bind";

import { links } from "./mock";

const cx = classNames.bind(styles);

export const CardPerson: React.FC<CardPersonProps> = ({ isFlipped }) => {
  const className = cx({
    cardFront: true,
    flipped: isFlipped,
  });

  return (
    <div className={className}>
      <div className={styles.hero}>
        <Person />
        <Socials />
      </div>
      <NavBar links={links} />
    </div>
  );
};
