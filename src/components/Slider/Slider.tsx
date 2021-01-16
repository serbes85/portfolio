import React, { FC, useState } from "react";
import { Icon } from "../../components/Icon/Icon";
import { SliderData, SliderProps } from "./interfaces";
import styles from "./Slider.module.scss";

const getSliderList = (sliderList: SliderData[]) => {
  return sliderList.map(({ id, name, imgUrl }) => {
    return (
      <li key={id} className={styles.sliderItem}>
        <img className={styles.sliderImg} src={imgUrl} alt={name} />
      </li>
    );
  });
};

export const Slider: FC<SliderProps> = ({ sliderList }) => {
  const [currentX, setCurrentX] = useState(0);
  const [index, setIndex] = useState(1);
  const length = sliderList.length;
  const step = 100;

  const moveSlidesRight = () => {
    setIndex(index + 1);

    if (index < length) {
      setCurrentX(currentX + step);
    } else if (index === length) {
      setIndex(1);
      setCurrentX(0);
    }
  };
  const moveSlidesLeft = () => {
    setIndex(index - 1);

    if (index > 1) {
      setCurrentX(currentX - step);
    } else if (index === 1) {
      setIndex(length);
      setCurrentX(step * length - step);
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
              size="2.5rem"
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
              size="2.5rem"
            />
          </button>
        </div>
        <ul
          className={styles.sliderList}
          style={{ transform: "translateX(-" + currentX + "%)" }}
        >
          {getSliderList(sliderList)}
        </ul>
      </div>
    </div>
  );
};
