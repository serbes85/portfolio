import React, { FC } from "react";
import { SideBarProps } from "./interfaces";
import styles from "./SideBar.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export const SideBar: FC<SideBarProps> = ({
  contentList,
  refsArticles,
  activeArticleId,
}) => {
  const arrArticles = refsArticles?.current;

  return (
    <ul className={styles.list}>
      {contentList.map(({ title, id }, index) => (
        <li
          onClick={() => {
            arrArticles[index]?.current.scrollIntoView({
              block: "start",
              behavior: "smooth",
            });
          }}
          key={id}
          className={styles.item}
        >
          {activeArticleId === id ? (
            <a
              href={`#article${index}`}
              className={cx("link", { active: true })}
            >
              {title}
            </a>
          ) : (
            <a
              href={`#article${index}`}
              className={cx("link", { active: false })}
            >
              {title}
            </a>
          )}
        </li>
      ))}
    </ul>
  );
};
