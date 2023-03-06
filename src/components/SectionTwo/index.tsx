import styles from './styles.module.scss'


export function SectionTwo() {

    return (
        <>
            <div className={styles.content}>
                <div className={styles.video}>
                    <video autoPlay loop muted>
                        <source src='./video/video.mp4' />
                    </video>
                </div>

                <h1>QUERO POTENCIALIZAR MEUS TREINOS</h1>

                <h2>TREINAMENTO INTELIGENTE</h2>

                <p><strong>Componentes de uma prescrição sistemáticas individualizada:</strong></p>
                <p>Modalidade - Gasto calórico - Frequência semanal - Intensidade - Duração - Progressão</p>
            </div>

        </>
    )
}