
import styles from "./styles.module.scss";


type Post = {
  id: string;
  contentthree: string;
};

interface PostProps {
  contentthree: Post[];
}

export function ContentThree({ contentthree }: PostProps) {
  return (
    <>
      <div className={styles.global}>
        <div className={styles.title}>
          <h1>Uma breve resumo da</h1>
          <h3>Historia Ivasko</h3>
        </div>
        <div className={styles.contentCard}>
          <div className={styles.contentImgOne}>
          {contentthree.map((post) => (
            <div key={post.id}> 
            <img src={post.contentthree} alt="" />
            </div>
            ))}
          </div>
          <div className={styles.contentText}>
            <p>
              A nossa história começou há muitos anos atrás, com um homem
              chamado Mariano Ivasko, que ainda menino saiu de sua terra natal -
              Santa Catarina - para desbravar a sorte no interior do Paraná. Na
              década de 80 abriu seu primeiro bar em frente a sua casa. Com o
              passar dos anos e com ajuda dos seus filhos e nora, o negócio foi
              evoluindo e em 1998, a família inaugurou o seu primeiro
              supermercado na cidade de Irati, apenas há alguns metros de onde
              toda a história começou. Depois disso, vieram muitas histórias,
              gente luta.
            </p>
            <a href="">Conheça mais um pouco da nossa história.</a>
          </div>
          <div className={styles.contentImgThree}>
            <img src="/images/textura.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
