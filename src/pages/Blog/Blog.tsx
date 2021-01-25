import React, { FC, useRef, createRef } from "react";
import { HeroSection } from "../../components/HeroSection/HeroSection";
import { Title } from "../../components/Title/Title";
import { TriangleLeft } from "../../components/TriangleLeft/TriangleLeft";
import { TriangleRight } from "../../components/TriangleRight/TriangleRight";
import { SideBar } from "../../components/SideBar/SideBar";
import { BlogContent } from "../../components/BlogContent/BlogContent";
import { Footer } from "../../components/Footer/Footer";
import styles from "./Blog.module.scss";

import { articles } from "./constants";
//img__header
import blog from "./assets/header/blog.svg";

export const Blog: FC = () => {
  const section = useRef<null | HTMLElement>(null);
  const articlesLength = articles.length;
  const refsArticles = useRef(
    Array(articlesLength)
      .fill(null)
      .map(() => createRef())
  );

  const renderProps = (title: string, description: string) => {
    return (
      <>
        <div className={styles.blogTitle}>
          <Title size="high" textTop={title} />
        </div>
        <span>{description}</span>
      </>
    );
  };
  const scrollToSection = () => {
    section.current?.scrollIntoView({
      block: "start",
      behavior: "smooth",
    });
  };

  return (
    <div className={styles.wrapper}>
      <main className={styles.main}>
        <HeroSection
          title="Блог"
          description="Статьи, которые я написал"
          render={renderProps}
          backgroundUrl={blog}
          backgroundTitle="blog"
          size="medium"
          scrollToSection={scrollToSection}
        />
        <section className={styles.blog} ref={section}>
          <div className={styles.triangles}>
            <TriangleLeft
              name="triangle"
              fill="#faf8f0"
              width="100%"
              height="120px"
            />
            <TriangleRight
              name="triangle"
              fill="#faf8f0"
              width="100%"
              height="120px"
            />
          </div>
          <div className={styles.content}>
            <aside className={styles.sidebar}>
              <SideBar contentList={articles} refsArticles={refsArticles} />
            </aside>
            <div className={styles.articles}>
              <BlogContent refsArticles={refsArticles} articles={articles} />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};
