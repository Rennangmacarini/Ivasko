
import styles from './styles.module.scss'

export function SectionOne() {
    return (
        <>
            <div className={styles.global}>
                <img src="./assets/grafico.png" alt="" />

                <div className={styles.text}>
                    <h1>O MELHOR APLICATIVO DE
                        <br />
                        TREINOS DO MUNDO!
                    </h1>

                    <p>Método 100% baseado em estudos</p>
                    <p>científicos e comprovado ao longo dos</p>
                    <p>8 anos de desenvolvimento e</p>
                    <p>aperfeiçoamento do app garantem</p>
                    <p>sua efetividade</p>

                    <h3>QUERO POTENCIALIZAR MEUS TREINOS</h3>
                </div>
            </div>
            <div className={styles.title}>
                <h1>O ÚNICO APP DO MUNDO</h1>
                <h2>que personaliza seus treinos:</h2>
                <br />
                <br />
                <p>- Estímulos Diferentes Treino a Treino.</p>
                <p>- Treinos Exclusivos para você.</p>
                <p>- Na tela do seu celular.</p>
            </div>

        </>
    )
}