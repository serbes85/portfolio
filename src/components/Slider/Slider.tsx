import React, { FC, useState, useEffect, useCallback, memo } from "react";
import { Icon } from "../Icon/Icon";
import { SliderData, SliderProps } from "./interfaces";
import styles from "./Slider.module.scss";

const getSliderList = (sliderList: SliderData[]) => {
  return sliderList.map(({ title, imgUrl }, index) => {
    return (
      <li key={index} className={styles.sliderItem}>
        <img className={styles.sliderImg} src={imgUrl} alt={title} />
      </li>
    );
  });
};

export const Slider: FC<SliderProps> = memo(({ sliderList, updateIndex }) => {
  const [slideIndex, setSlideIndex] = useState(1);
  const sliderLength = sliderList.length;
  const step = 100;

  useEffect(() => {
    updateIndex(slideIndex);
  }, [slideIndex, updateIndex]);

  const moveSlidesRight = useCallback(() => {
    setSlideIndex(slideIndex + 1);

    if (slideIndex === sliderLength) {
      setSlideIndex(1);
    }
  }, [setSlideIndex, slideIndex, sliderLength]);

  const moveSlidesLeft = useCallback(() => {
    setSlideIndex(slideIndex - 1);

    if (slideIndex === 1) {
      setSlideIndex(sliderLength);
    }
  }, [setSlideIndex, slideIndex, sliderLength]);

  return (
    <div className={styles.slider}>
      <span className={styles.slideIndex}>{slideIndex}</span>
      <div className={styles.sliderContainer}>
        <div className={styles.sliderArrows}>
          <button
            type="button"
            className={styles.sliderArrow}
            onClick={moveSlidesLeft}
          >
            <Icon
              className={styles.arrowLeft}
              name="arrow-up"
              fill="white"
              size="2rem"
            />
          </button>
          <button
            type="button"
            className={styles.sliderArrow}
            onClick={moveSlidesRight}
          >
            <Icon
              className={styles.arrowRight}
              name="arrow-down"
              fill="white"
              size="2rem"
            />
          </button>
        </div>
        <ul
          className={styles.sliderList}
          style={{ transform: "translateX(-" + (slideIndex - 1) * step + "%)" }}
        >
          {getSliderList(sliderList)}
        </ul>
      </div>
    </div>
  );
});
