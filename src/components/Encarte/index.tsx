import * as React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import styles from './styles.module.scss'

type Post = {
  id: string;
  carouselone: string;
  carouseltwo: string;
  carouselthree: string;
  carouselfour: string;
  carouselfive: string;
  carouselsix: string;
  carouselseven: string;
  carouseleight: string
};

interface PostProps{
 carousel : Post[]
}

export function Ofertas({ carousel } : PostProps) {
  const [ref] = useKeenSlider<HTMLDivElement>({
    loop: true,
  });

  return (
    <div className={styles.carousel}>
        <h1>OFERTAS</h1>
        <p></p>
        <h2>Preço muito mais barato no Ivasko</h2>
      <div ref={ref} className="keen-slider">
        {carousel.map((post) => (
          <div key={post.id} className="keen-slider__slide number-slide1">
          <img src={post.carouselone} alt="" />
          </div>
        ) )}
        {carousel.map((post) => (
          <div key={post.id} className="keen-slider__slide number-slide2">
          <img src={post.carouseltwo} alt="" />
          </div>
        ) )}
        {carousel.map((post) => (
          <div key={post.id} className="keen-slider__slide number-slide3">
          <img src={post.carouselthree} alt="" />
          </div>
        ) )}
          {carousel.map((post) => (
          <div key={post.id} className="keen-slider__slide number-slide4">
          <img src={post.carouselfour} alt="" />
          </div>
        ) )}
             {carousel.map((post) => (
          <div key={post.id} className="keen-slider__slide number-slide5">
          <img src={post.carouselfive} alt="" />
          </div>
        ) )}
             {carousel.map((post) => (
          <div key={post.id} className="keen-slider__slide number-slide6">
          <img src={post.carouselsix} alt="" />
          </div>
        ) )}
             {carousel.map((post) => (
          <div key={post.id} className="keen-slider__slide number-slide7">
          <img src={post.carouselseven} alt="" />
          </div>
        ) )}
             {carousel.map((post) => (
          <div key={post.id} className="keen-slider__slide number-slide8">
          <img src={post.carouseleight} alt="" />
          </div>
        ) )}
      </div>
    </div>
  );
}
