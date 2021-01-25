import React, { FC } from "react";
import { BlogContentProps } from "./interfaces";
import styles from "./BlogContent.module.scss";

export const BlogContent: FC<BlogContentProps> = ({
  articles,
  refsArticles,
}) => {
  return (
    <ul className={styles.list}>
      {articles.map(({ id, title, date, content }, index) => (
        <li ref={refsArticles?.current[index]} key={id} className={styles.item}>
          <article className={styles.article}>
            <h2 className={styles.title}>{title}</h2>
            <time className={styles.date}>{date}</time>
            <p
              className={styles.text}
              dangerouslySetInnerHTML={{
                __html: content.replace(/"\n"/g, "<br>"),
              }}
            ></p>
          </article>
        </li>
      ))}
    </ul>
  );
};
