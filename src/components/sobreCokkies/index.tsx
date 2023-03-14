import styles from "./styles.module.scss";

export function SobreCokkies() {
  return (
    <>
      <div className={styles.global}>
        <h1>POLÍTICA DE PRIVACIDADE E SEGURANÇA</h1>
        <div className={styles.cardText}>
          <p>
            Cookies de terceiros Nosso site trabalha com alguns parceiros
            confiáveis como o Google Adsenses ou Google Analytics, por esse
            motivo utilizamos cookies que são necessários para o desempenho
            desse sistema. O Google Analytics é uma das ferramentas utilizadas
            em nosso site para podermos entender a forma como você utiliza nosso
            site, por meio das informações fornecidas podemos melhorar o
            desempenho da nossa plataforma. Consulte a página oficial do Google
            Analytics para ter mais informações a respeito dos cookies
            utilizados por ele e da forma como procedem o tratamento dos dados
            armazenados. O Google Adsenses disponibiliza uma página para que os
            usuários possam acessar as suas políticas de privacidade e a FAQ.
            Utilizamos os cookies descritos acima para monitorar o uso do nosso
            site pelos usuários, assim poderemos observar métricas e continuar a
            produzir conteúdo atrativo e de grande valor para você, ademais,
            assim, temos informações a respeito do tempo que você permanece em
            cada uma de nossas publicações.
          </p>
        </div>
      </div>
    </>
  );
}
