import styles from './styles.module.scss'

export function Header() {
    return (
        <>
            <div className={styles.container}>
                <img className={styles.banner} src={"/img/banner.png"} alt="" />
                <div className={styles.content}>
                    <div className={styles.title}>
                        <h1>POTENCIALIZE SEUS TREINOS</h1>
                        <h1>EM 5 SEGUNDOS</h1>
                        <p>Acelere seus resultado através da <strong>Metodologia Gymnamic</strong></p>
                    </div>
                    <div className={styles.paragraph}>
                        <p>Com o seu próprio Planejamento você</p>
                        <p><strong>Potencializa seus Resultados</strong> em</p>
                        <p>EMRAGRECIMENTO, GANHO DE MÚSCULOS</p>
                        <p>e AUMENTO DE FORÇA.</p>
                    </div>
                    <div className={styles.button}>
                        <h2>QUERO PONTENCIALIZAR <br /> MEUS TREINOS</h2>
                    </div>
                </div>
                <div>
                    <img className={styles.logo} src={"./img/logo.png"} alt="" />
                </div>
            </div>
        </>
    )
}