import * as React from "react";
import "keen-slider/keen-slider.min.css";
import styles from "./styles.module.scss";
import { useKeenSlider, TrackDetails } from "keen-slider/react";

const images = [
  "images/encarte.png",
  "images/encarte.png",
  "images/encarte.png",
];

export function Ofertas() {
  const [details, setDetails] = React.useState<TrackDetails | null>(null);

  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    detailsChanged(s) {
      setDetails(s.track.details);
    },
    initial: 2,
  });

  function scaleStyle(idx: number) {
    if (!details) return {};
    const slide = details.slides[idx];
    const scale_size = 0.2;
    const scale = 1 - (scale_size - scale_size * slide.portion);
    return {
      transform: `scale(${scale})`,
      WebkitTransform: `scale(${scale})`,
    };
  }

  return (
    <div className={styles.global}>
      <h1>Ofertas</h1>
      <p></p>
      <h2>Muito mais barato no Ivasko</h2>
      <div ref={sliderRef} className="keen-slider zoom-out">
        {images.map((src, idx) => (
          <div key={idx} className="keen-slider__slide zoom-out__slide">
            <div style={scaleStyle(idx)}>
              <img src={src} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
