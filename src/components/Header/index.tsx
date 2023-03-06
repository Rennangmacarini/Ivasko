import styles from './styles.module.scss'

export function Header() {
<<<<<<< HEAD
  const [openMenu, setOpenMenu] = useState(false);

  /*
  function teste(){
  const testeretorno = openMenu ? "./images/close.png" : "./icon/menu.png"
  return testeretorno
  }
  */

  /*
  function handleIcon(status: boolean){
    if(status){
      return "./images/close.png"
     }
     else{
      return "./icon/menu.png"
     }
  }
  */

  const handleOpen = () => {
    setOpenMenu(!openMenu);
  };


  return (
    <header>
      <div className={styles.header}>
        <img className={styles.logo} src="/images/logo.png" alt="Logo ivasko" />
        <span onClick={handleOpen}>
          <img
            className={styles.buttonMobile}
            src={openMenu ? "./icon/close.png" : "./icon/menu.png"}
            alt=""
          />
        </span>
        <div className={styles.menu}>
          <Link href={"/"}>Início</Link>
          <Link href={"/about"}>Quem Somos</Link>
          <Link href={"/stores"}>Lojas</Link>
          <Link href={"/books"}>Livro de Receitas</Link>
          <span className={styles.test}>
            <Link href={"/"}>
              Área gourmet <img src={"/icon/seta.png"} alt="" />{" "}
            </Link>
            <span className={styles.teste}>
              <Link href={"/butchers"}>Açougue</Link>
              <Link href={"/bakers"}>Padaria</Link>
            </span>
          </span>
          <Link
            href="https://app.skeel.com.br/ivasko"
            target={"_blank"}
            rel="noreferrer"
          >
            Trabalhe Conosco
          </Link>
          <Link
            href="https://meucartao.senff.com.br/ivasko/bem-vindo"
            target={"_blank"}
            rel="noreferrer"
          >
            CARTÃO IVASKO
          </Link>
        </div>
        <div className={styles.icon}>
          <div>
            <Link
              href="https://www.facebook.com/superivasko/"
              target={"_blank"}
              rel="noreferrer"
            >
              <img src="/assets/face.png" alt="Logo  facebook" />
            </Link>
          </div>

          <div>
            <Link
              href="https://www.instagram.com/superivasko/"
              target={"_blank"}
              rel="noreferrer"
            >
              <img src="/assets/insta.png" alt="Logo Instagram" />
            </Link>
          </div>

          <div>
            <Link
              href="https://br.linkedin.com/company/grupoivasko"
              target={"_blank"}
              rel="noreferrer"
            >
              <img src="/assets/linkedin.png" alt="Logo Linkdin" />
            </Link>
          </div>
        </div>
      </div>

      {openMenu && (
        <div className={styles.menuContainer}>
          <div className={styles.menuMobile}>
            <div className={styles.contentMenu}>
              <Link href={"/"}>Início</Link>
              <Link href={"/about"}>Quem Somos</Link>
              <Link href={"/stores"}>Lojas</Link>
              <Link href={"/books"}>Livro de Receitas</Link>
              <span className={styles.test}>
                <span className={styles.teste}>
                  <Link href={"/butchers"}>Açougue</Link>
                  <Link href={"/bakers"}>Padaria</Link>
                </span>
              </span>
              <Link
                href="https://app.skeel.com.br/ivasko"
                target={"_blank"}
                rel="noreferrer"
              >
                Trabalhe Conosco
              </Link>
              <Link
                href="https://meucartao.senff.com.br/ivasko/bem-vindo"
                target={"_blank"}
                rel="noreferrer"
              >
                CARTÃO IVASKO
              </Link>
=======
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
>>>>>>> 6e7f864263021792495e9398b414791fd5617c4b
            </div>
        </>
    )
}