import React, { FC } from "react";
import { Circles } from "../Circles/Circles";
import { SkillsListData, SkillsData, SkillsListProps } from "./interfaces";
import styles from "./Skills.module.scss";

const getSkills = (skills: SkillsData[]) => {
  return skills.map(({ id, title, percent }) => (
    <li key={id} className={styles.skillsRowItem}>
      <div className={styles.skill}>
        <Circles
          strokeUnderCircle="#ccc"
          strokeAboveCircle="#639155"
          percents={percent}
        />
        <h4 className={styles.skillTitle}>{title}</h4>
      </div>
    </li>
  ));
};
const getSkillsList = (skillsList: SkillsListData[]) => {
  return skillsList.map(({ title, skills }) => (
    <li className={styles.skillsItem}>
      <div className={styles.skillsRow}>
        <h2 className={styles.skillsTitle}>{title}</h2>
        <ul className={styles.skillsRowList}>{getSkills(skills)}</ul>
      </div>
    </li>
  ));
};

export const Skills: FC<SkillsListProps> = ({ skillsList }) => {
  return <ul className={styles.skillsList}>{getSkillsList(skillsList)} </ul>;
};
