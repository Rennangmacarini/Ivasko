import styles from "./styles.module.scss";

export function Butcher() {
  return (
    <>
      <div className={styles.banner}>
        <img src={"./images/banners.png"} alt="" />
      </div>
      <div className={styles.global}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h1>Qualidade e economia</h1>
            <h3>lado a lado</h3>
            </div>
            <img src={"./images/carnetwo.png"} alt="" />
        </div>
        <div className={styles.text}>
          <p>
            No açougue do super Ivasko você encontra carne de primeira, peças
            selecionadas e todas os cortes que você precisa. Contamos com um
            açougue completo e recheado de carnes de qualidade e procedência
            para te atender desde o churrasco até a carne de panela. Além de uma
            equipe preparada pra oferecer o melhor atendimento! Carne de
            qualidade é no Ivasko
          </p>
        </div>
      </div>

      <div className={styles.title}>
        <h1>Dicas de cortes</h1>
        <p></p>
      </div>

      <div className={styles.cardImg}>
        <div className={styles.card}>
          <div>
            <img src={"./images/costela.png"} alt="" />
            <div>
              <h1>Costela</h1>
              <p>Espeto, grelha ou forno</p>
            </div>
          </div>

          <div>
            <img src={"./images/alcatra.png"} alt="" />
            <div>
              <h1>Alcatra</h1>
              <p>Grelha ou espeto</p>
            </div>
          </div>

          <div>
            <img src={"./images/contrafile.png"} alt="" />
            <div>
              <h1>Contra filé</h1>
              <p>Grelha</p>
            </div>
          </div>
          <div>
            <img src={"./images/picanha.png"} alt="" />
            <div>
              <h1>Picanha</h1>
              <p>Grelha ou espeto</p>
            </div>
          </div>

          <div>
            <img src={"./images/mignon.png"} alt="" />
            <div>
              <h1>Mignon</h1>
              <p>Grelha ou espeto</p>
            </div>
          </div>

          <div>
            <img src={"./images/cordeiro.png"} alt="" />
            <div>
              <h1>Cordeiro</h1>
              <p>Grelha ou espeto</p>
            </div>
          </div>
        </div>

        <div className={styles.cardLast}>
          <div>
            <img src={"./images/pernil.png"} alt="" />
            <div>
              <h1>Pernil</h1>
              <p>Espeto, grelha ou forno</p>
            </div>
          </div>

          <div>
            <img src={"./images/linguica.png"} alt="" />
            <div>
              <h1>Linguiça</h1>
              <p>Grelha ou espeto</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
