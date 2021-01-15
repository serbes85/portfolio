import React, { FC, useRef } from "react";
import { Icon } from "../../components/Icon/Icon";
import { SliderData, SliderProps } from "./interfaces";
import styles from "./Slider.module.scss";

const getListImg = (images: SliderData[]) => {
  return images.map(({ id, name, imgUrl }) => {
    return (
      <li key={id} className={styles.sliderItem}>
        <img className={styles.sliderImg} src={imgUrl} alt={name} />
      </li>
    );
  });
};

export const Slider: FC<SliderProps> = ({ images }) => {
  const sliderList = useRef<null | HTMLUListElement>(null);
  const step = 100;
  let slideIndex = 1;
  let currentX = 0;

  const moveSlidesRight = () => {
    const lengthSlider = sliderList.current!.childNodes.length + 1;
    const slider = sliderList.current!;
    slideIndex += 1;

    if (slideIndex < lengthSlider) {
      currentX += step;

      slider.style.transform = "translateX(-" + currentX + "%)";
    } else if (slideIndex === lengthSlider) {
      slideIndex = 1;
      currentX = 0;

      slider.style.transform = "translateX(-" + currentX + "%)";
    }
  };
  const moveSlidesLeft = () => {
    const lengthSlider = sliderList.current!.childNodes.length;
    const slider = sliderList.current!;

    slideIndex -= 1;

    if (slideIndex > 0) {
      currentX -= step;

      slider.style.transform = "translateX(-" + currentX + "%)";
    } else if (slideIndex < 1) {
      currentX = step * lengthSlider - step;
      slideIndex = lengthSlider;

      slider.style.transform = "translateX(-" + currentX + "%)";
    }
  };

  return (
    <div className={styles.slider}>
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
              size="3rem"
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
              size="3rem"
            />
          </button>
        </div>
        <ul className={styles.sliderList} ref={sliderList}>
          {getListImg(images)}
        </ul>
      </div>
    </div>
  );
};
