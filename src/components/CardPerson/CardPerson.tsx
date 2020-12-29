import React from "react";
import { Socials } from "../Socials/Socials";
import { Person } from "../Person/Person";
import { NavBar } from "../NavBar/NavBar";
import { NavBarHorizontal } from "../NavBarHorizontal/NavBarHorizontal";
import { CardPersonProps } from "./interfaces";
import styles from "./CardPerson.module.scss";
import classNames from "classnames/bind";

import { links } from "./constants";

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
      <NavBarHorizontal
        links={links}
        render={(links) => <NavBar links={links} />}
      />
    </div>
  );
};
