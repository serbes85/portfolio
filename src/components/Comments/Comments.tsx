import React, { FC } from "react";
import { Avatar } from "../Avatar/Avatar";
import { CommentsData, CommentsProps } from "./interfaces";
import styles from "./Comments.module.scss";

const getCommentsList = (comments: CommentsData[]) => {
  return comments.map(({ id, url, title, text }) => (
    <li key={id} className={styles.item}>
      <Avatar url={url} />
      <div className={styles.comment}>
        <p className={styles.text}>{text}</p>
        <p className={styles.title}>{title}</p>
      </div>
    </li>
  ));
};

export const Comments: FC<CommentsProps> = ({ comments }) => {
  return <ul className={styles.list}>{getCommentsList(comments)}</ul>;
};
