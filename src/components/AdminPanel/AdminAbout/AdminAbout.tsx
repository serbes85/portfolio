import React, { FC } from "react";
import { InputField } from "../../InputField/InputField";
import { Button } from "../../Button/Button";
import { SkillsListData, SkillsData, SkillsListProps } from "./interfaces";
import styles from "./AdminAbout.module.scss";

import { skillsList } from "./constants";

const getSkills = (skills: SkillsData[]) => {
  return skills.map(({ id, title, percent }) => (
    <li key={id} className={styles.skillsRowItem}>
      <div className={styles.skill}>
        <h4 className={styles.skillTitle}>{title}</h4>
        <div className={styles.skillPercent}>
          <div className={styles.input}>
            <InputField
              label="skill"
              placeholder={percent}
              appearance="borderRadius"
              withIcon="withoutIcon"
            />
          </div>
          <div>%</div>
        </div>
      </div>
    </li>
  ));
};
const getSkillsList = (skillsList: SkillsListData[]) => {
  return skillsList.map(({ title, skills }, index) => (
    <li key={index} className={styles.skillsItem}>
      <div className={styles.skillsRow}>
        <h2 className={styles.skillsTitle}>{title}</h2>
        <ul className={styles.skillsColumnList}>{getSkills(skills)}</ul>
      </div>
    </li>
  ));
};

export const AdminAbout: FC<SkillsListProps> = () => {
  return (
    <>
      <div className={styles.admin}>
        <h2 className={styles.title}>Страница &#171;Обо мне&#187;</h2>
        <ul className={styles.skillsList}>{getSkillsList(skillsList)} </ul>
      </div>
      <div className={styles.button}>
        <Button
          type="button"
          buttonText="Сохранить"
          appearance="borderRadius"
        />
      </div>
    </>
  );
};
