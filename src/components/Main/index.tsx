import styles from './styles.module.scss'


export function Main() {
    return (
        <>
            <div className={styles.global}>
                <div className={styles.content}>
                    <h1>E SABE O QUE É MAIS</h1>
                    <h1>FASCINANTE?</h1>
                    <div className={styles.text}>
                        <p>Treinos mais intensos, com estímulos</p>
                        <p>diferentes em cada um deles, para</p>
                        <p>você alcançar objetivos específicos</p>
                        <p>e individualizados.</p>
                    </div>
                    <br />

                    <p>Método que leva em conta a organização</p>
                    <p>de cada etapa do treinamento.</p>
                    <h2>Micro, Meso e Macrociclo.</h2>
                </div>
                <img src="./assets/periodizar.png" alt="" />
            </div>

            <div className={styles.globalText}>
                <div className={styles.cardText}>
                    <h3>Teste de carga máxima</h3>
                    <p>Descubra o peso ideial para utilizar em cada exercício proposto pelo app</p>
                    <p>- + de 300.</p>
                </div>

                <div className={styles.cardText}>
                    <h3>Gráfico de evolução de treino</h3>
                    <p>carga, peso, etc...</p>
                </div>

                <div className={styles.cardText}>
                    <h3>Troca de exercícios</h3>
                    <p>A academia não possui o aparelho &quot;x&quot;? ou ele está ocupado no momento de treino? Troque por outro similar, que trabalhe o mesmo grupo muscular.</p>
                </div>

                <div className={styles.cardText}>
                    <h3>Periodização Aeróbica:</h3>
                    <p>O Gymnamic calcula sua zona-alvo e realiza toda sua periodização aeróbico. Isso vai ajudar você a ter uma melhor performance, evoluir e manter seu corpo sempre saudável</p>
                </div>
            </div>
        </>
    )
}