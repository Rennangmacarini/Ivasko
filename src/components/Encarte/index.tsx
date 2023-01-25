import * as React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import styles from './styles.module.scss'

export function Ofertas() {
  const [ref] = useKeenSlider<HTMLDivElement>();
  return (
    <div className={styles.carousel}>
      <div ref={ref} className="keen-slider">
        <div className="keen-slider__slide number-slide1">
          <img src={"./images/encarte.png"} alt="" />
        </div>
        <div className="keen-slider__slide number-slide2">
          <img src={"./images/encarte.png"} alt="" />
        </div>
        <div className="keen-slider__slide number-slide3">
          <img src={"./images/encarte.png"} alt="" />
        </div>
        <div className="keen-slider__slide number-slide4">
          <img src={"./images/encarte.png"} alt="" />
        </div>
        <div className="keen-slider__slide number-slide5">
          <img src={"./images/encarte.png"} alt="" />
        </div>
        <div className="keen-slider__slide number-slide6">
          <img src={"./images/encarte.png"} alt="" />
        </div>
      </div>
    </div>
  );
}