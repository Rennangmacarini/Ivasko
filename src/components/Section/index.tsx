import styles from './styles.module.scss'

export function Section() {
    return (
        <>
            <div className={styles.container}>
                <h1>Atinja Seus Resultados com o <span>FATOR PLANEJAMENTO</span></h1>
                <div className={styles.content}>

                    <p>Sem fichas de academia que duram meses.</p>
                    <p>Adicione sua meta semanai, a melhor divisão de treinos</p>
                    <p>e acompanhe sua evolução diaria.</p>
                </div>

                <div className={styles.title}>
                    <div>
                        <h2>1 ANO TREINO COM <br />
                            A <strong>MESMA FICHINHA</strong>
                        </h2>
                        <img src={"./img/fichas.png"} alt="" />
                    </div>

                    <div>
                        <h2>1 ANO <strong>TREINO PLANEJADOS</strong><br />
                            NA PALMA DA SUA MÃO <br />
                            Em 5 segundos!
                        </h2>
                        <img src={"./img/celular.png"} alt="" />
                    </div>
                </div>
                <div className={styles.text}>
                    <h3>O <span>MÉTODO DE TREINAMENTO</span> QUE <br />
                        PROVOCA RESULTADO COMO ESTE
                    </h3>
                </div>
            </div>
        </>
    )
}