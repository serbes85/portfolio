import React, { FC, useState, useCallback } from "react";
import { ProjectsProps } from "./interfaces";
import { Title } from "../Title/Title";
import { Icon } from "../Icon/Icon";
import { Slider } from "../Slider/Slider";
import styles from "./Projects.module.scss";

export const Projects: FC<ProjectsProps> = ({ projects }) => {
  const [slideIndex, setSlideIndex] = useState(1);
  const { title, technologies, description, link } = projects[slideIndex - 1];

  const updateIndex = useCallback(
    (value: number) => {
      setSlideIndex(value);
    },
    [setSlideIndex]
  );

  return (
    <>
      <div className={styles.left}>
        <div className={styles.title}>
          <Title textTop={title} size="medium" color="gray" />
        </div>
        <div className={styles.description}>
          <span className={styles.technologies}>{technologies}</span>
          <p className={styles.text}>{description}</p>
        </div>
        <div className={styles.link}>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={link}
            className={styles.linkImg}
          >
            <Icon
              name="link"
              fill=" #4a803a"
              size="1rem"
              className={styles.linkIcon}
            />
            <div className={styles.linkText}>Посмотреть код</div>
          </a>
        </div>
      </div>
      <div className={styles.right}>
        <Slider sliderList={projects} updateIndex={updateIndex} />
      </div>
    </>
  );
};
