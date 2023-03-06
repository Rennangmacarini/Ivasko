import styles from './styles.module.scss'

export function Footer() {
    return (
        <>

            <div className={styles.global}>
                <div className={styles.container}>
                    <img src="./img/selo.png" alt="" />
                    <div className={styles.content}>
                        <h1>GARANTIA INCONDICIONAL</h1>
                        <p>O app Gymnamic é risco zero, você terá 7 dias</p>
                        <p>para experimentar, é nosso compromisso com a </p>
                        <p>sua satisfação total, se não gostar do app é só</p>
                        <p>mandar um email para solicitar 100% de reembolso.</p>
                    </div>
                </div>

                <div className={styles.text}>
                    <h1>DÚVIDAS FREQUENTES</h1>
                    <h2>O QUE É O GYMNAMIC?  <span>+</span></h2>
                    <h2>COMO É O ACESSO?  <span>+</span></h2>
                    <h2>QUANTOS DIAS EU TENHO PARA EXPERIMENTAR?  <span>+</span></h2>
                    <h2>QUANTO TEMPO TENHO DE ACESSO?  <span>+</span></h2>
                </div>

            </div>
        </>
    )
}