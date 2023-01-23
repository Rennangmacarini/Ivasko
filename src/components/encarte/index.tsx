import { useKeenSlider } from "keen-slider/react";
import styles from "./styles.module.scss";

import "keen-slider/keen-slider.min.css";

const animation = { duration: 50000, easing: (t: number) => t };

export function Encarte() {
  const [sliderRef] = useKeenSlider({
    loop: true,
    renderMode: "performance",
    drag: false,
    created(s) {
      s.moveToIdx(5, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 4, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
  });

  return (
    <>
      <div className={styles.body}>
        <div className={styles.global}>
          <div className={"keen-slider"} ref={sliderRef}>
            <div className={styles.carousel}>
              <img
                className={"keen-slider__slide number-slide1"}
                src={"./images/encarte.png"}
                alt=""
              />
            </div>
            <div className={styles.carousel}>
              <img
                className={"keen-slider__slide number-slide2"}
                src={"./images/encarte.png"}
                alt=""
              />
            </div>
            <div className={styles.carousel}>
              <img
                className={"keen-slider__slide number-slide3"}
                src={"./images/encarte.png"}
                alt=""
              />
            </div>
            <div className={styles.carousel}>
              <img
                className={"keen-slider__slide number-slide4"}
                src={"./images/encarte.png"}
                alt=""
              />
            </div>
            <div className={styles.carousel}>
              <img
                className={"keen-slider__slide number-slide4"}
                src={"./images/encarte.png"}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
