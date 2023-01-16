import styles from "./styles.module.scss";

//ESTRUTURA EM ANDAMENTO //

type Post = {
  id: string;
  contentone: string;
};

interface PostProps {
  contentone: Post[];
}

export function ContentOne({ contentone }: PostProps) {
  return (
      <> 
    <div className={styles.main}>
      <div className={styles.content}>
        <h1>
          Há 23 anos proporcionando
          <br />o que há de
        </h1>
        <h3>melhor</h3>
        <p>
          O Super Ivasko busca levar ao seus clientes produtos com preço baixo,
          sempre prezando pela qualidade. Além do nosso amplo mix de produtos,
          possui um padrão de qualidade para melhor atender o cliente, desde o
          atendimento até o açougue e panificadoras, onde todos os produtos são
          produzidos artesanalmente dentro das lojas.
        </p>
      </div>
      {contentone.map((post) => (
        <div key={post.id}>
          <div className={styles.imagem}>
            <img src={post.contentone} alt="" />
          </div>
        </div>
      ))}
      <div>
    </div>
    </div>
    </>
  );
}
