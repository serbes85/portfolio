import React, { FC } from "react";
import { BlogContentProps } from "./interfaces";
import styles from "./BlogContent.module.scss";

export const BlogContent: FC<BlogContentProps> = ({
  articles,
  refsArticles,
}) => {
  const arrArticles = refsArticles?.current;

  return (
    <ul className={styles.list}>
      {articles.map(({ id, title, date, content }, index) => (
        <li key={id} id={id} className={styles.item} ref={arrArticles[index]}>
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
