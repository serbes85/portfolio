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
  const step = 20;
  let currentX = 0;

  const moveSliderRight = (e: any) => {
    e.preventDefault();

    if (currentX < 80) {
      currentX += step;

      sliderList.current!.style.transform = "translateX(-" + currentX + "%)";
    } else if (currentX === 80) {
      currentX = 0;

      sliderList.current!.style.transform = "translateX(-" + currentX + "%)";
    }
  };
  const moveSliderLeft = (e: any) => {
    e.preventDefault();

    if (currentX > 0) {
      currentX -= step;

      sliderList.current!.style.transform = "translateX(-" + currentX + "%)";
    } else if (currentX === 0) {
      currentX = 80;

      sliderList.current!.style.transform = "translateX(-" + currentX + "%)";
    }
  };
  return (
    <div className={styles.slider}>
      <div className={styles.sliderContainer}>
        <div className={styles.sliderArrows}>
          <button
            type="button"
            className={styles.sliderArrow}
            onClick={moveSliderLeft}
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
            onClick={moveSliderRight}
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
