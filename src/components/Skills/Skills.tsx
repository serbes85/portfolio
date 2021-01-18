import React, { FC } from "react";
import { Circles } from "../Circles/Circles";
import { SkillsData, SkillsProps } from "./interfaces";
import styles from "./Skills.module.scss";

const getSkillsList = (skills: SkillsData[]) => {
  return skills.map(({ id, title, name, percents }) => (
    <li key={id} className={styles.skillsItem}>
      <div className={styles.skillsRow}>
        <h2 className={styles.skllsTitle}>{title}</h2>
        <ul className={styles.skillsRowList}>
          <li className={styles.skillsRowItem}>
            <div className={styles.skill}>
              <Circles
                strokeUnderCircle="#ccc"
                strokeAboveCircle="#639155"
                percents={percents}
              />
              <div className={styles.skillTitle}>{name}</div>
            </div>
          </li>
        </ul>
      </div>
    </li>
  ));
};

export const Skills: FC<SkillsProps> = ({ skills }) => {
  return <ul className={styles.skillsList}>{getSkillsList(skills)} </ul>;
};
