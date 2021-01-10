import React, { FC } from "react";
import { HeroSection } from "../../components/HeroSection/HeroSection";
import { Title } from "../../components/Title/Title";
import { Footer } from "../../components/Footer/Footer";
import styles from "./Blog.module.scss";

import blog from "./assets/blog_header.svg";

export const Blog: FC = () => {
  const renderProps = (title: string, description: string) => {
    return (
      <>
        <div className={styles.blogTitle}>
          <Title size="highFontSize" text={title} />
        </div>
        <span>{description}</span>
      </>
    );
  };

  return (
    <div className={styles.wrapper}>
      <main className={styles.main}>
        <HeroSection
          title="Блог"
          description="Статьи, которые я написал"
          render={renderProps}
          url={blog}
          size="medium"
          imgDescription="blog"
        />
        <section className={styles.blog}>
          <article></article>
        </section>
      </main>
      <Footer />
    </div>
  );
};
