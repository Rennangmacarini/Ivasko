import styles from "./styles.module.scss";

export function Bakery() {
  return (
    <>
      <div className={styles.body}>
        <div className={styles.banner}>
          <img src={"./images/padaria.png"} alt="" />
        </div>
        <div>
          <div className={styles.global}>
            <div className={styles.content}>
              <h1>Tá sentido o </h1>
              <h3>cheirinho?</h3>
              <p>
                A padaria do Ivasko conta com o delicioso pão francês quentinho,
                bolos feitos a mão e salgados fresquinhos, é o combo perfeito
                para o seu café da manhã ou lanche da tarde.
              </p>
            </div>
              <img src={"/images/paes.png"} alt="" />
          </div>
        </div>

        <div className={styles.title}>
          <img src={"/images/pizza.png"} alt="" />
          <div className={styles.text}>
            <h1>Vai uma fatia de</h1>
            <h3>pizza ?</h3>
            <p>
              O Super Ivasko da Dona Noca conta também com uma padaria gourmet
              com pizzas de fermentação natural, bruschettas e deliciosos
              cheesecakes e brownies. As pizzas são montadas e preparadas em
              cinto minutos, podendo levá-las quentinhas para casa. A melhor e
              mais completa padaria da cidade, é a do Ivasko!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
