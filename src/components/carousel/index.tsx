import * as React from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import styles from './styles.module.scss'


const animation = { duration: 40000, easing: (t: number) => t }

export function Carousel() {
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    renderMode: "performance",
    drag: false,
    created(s) {
      s.moveToIdx(5, true, animation)
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation)
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation)
    },
  })
  return (
    <>
      <div className={styles.carousel}>
        <div ref={sliderRef} className="keen-slider">
          <div className="keen-slider__slide number-slide1">
            <img src="./assets/card-1.jpeg" alt="" />
            <img src="./assets/card-2.jpeg" alt="" />
          </div>
          <div className="keen-slider__slide number-slide2">
            <img src="./assets/card-1.jpeg" alt="" />
            <img src="./assets/card-2.jpeg" alt="" />
          </div>
        </div>
      </div>


      <div className={styles.global}>
        <img src={"./assets/celulares.png"} alt="" />
        <div className={styles.content}>
          <h1>Planejamento</h1>
          <h1>Periodização <span>&amp;</span></h1>

          <div className={styles.text}>
            <p>Com o seu Planejamento você</p>
            <p>potencializa seus <strong>RESULTADOS</strong> em</p>
            <p><span>EMAGRECIMENTO, GANHO DE MÚSCULOS</span></p>
            <p>E <span>AUMENTO DE FORÇA</span></p>
          </div>

          <div className={styles.link}>
            <a href="">QUERO POTENCIALIZAR <br />
              MEUS TREINOS
            </a>
          </div>
        </div>
      </div>
    </>
  )
}