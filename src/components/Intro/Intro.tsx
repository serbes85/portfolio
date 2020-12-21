import React from "react";
import { IntroProps } from "./interfaces";
import { Socials } from "../Socials/Socials";
import { Person } from "../Person/Person";
import { NavBar } from "../NavBar/NavBar";
import styles from "./Intro.module.scss";

export const Intro: React.FC<IntroProps> = ({ className }) => {
  return (
    <div className={className}>
      <div className={styles.hero}>
        <Person />
        <Socials />
      </div>
      <NavBar />
    </div>
  );
};
