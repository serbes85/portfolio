import React, { FC, useState, useEffect } from "react";
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

export const Slider: FC<SliderProps> = ({ sliderList, updateIndex }) => {
  const [slideIndex, setSlideIndex] = useState(1);
  const sliderLlength = sliderList.length;
  const step = 100;

  useEffect(() => {
    updateIndex(slideIndex);
  });

  const moveSlidesRight = () => {
    setSlideIndex(slideIndex + 1);

    if (slideIndex === sliderLlength) {
      setSlideIndex(1);
    }
  };
  const moveSlidesLeft = () => {
    setSlideIndex(slideIndex - 1);

    if (slideIndex === 1) {
      setSlideIndex(sliderLlength);
    }
  };

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
};
