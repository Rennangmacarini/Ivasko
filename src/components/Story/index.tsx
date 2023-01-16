import styles from "./styles.module.scss";

type Posts = {
  id: string;
  one: string;
  two: string;
  three: string;
  four: string;
  five: string
}

interface PostProps{
  story: Posts[]
}


export function Story({ story }: PostProps) {
  return (
    <>
      <div className={styles.title}>
        <h1>Nossas Histórias</h1>
      </div>

      <div className={styles.content}>
        <div className={styles.text}>
          <h1>
            <span>|</span>Mariano
          </h1>
          <p>
            A nossa história começou há muitos anos atrás, Com um homem chamado
            Mariano Ivasko, que ainda menino saiu de sua terra natal - Santa
            Catarina - para desbravar a sorte no interior do Paraná. Na década
            de 80, Seu Mariano iniciava um negócio em Irati-PR: Um pequeno bar
            que passou por muitas mudanças durante os anos.
          </p>
        </div>
        {story.map((post) => (
        <div key={post.id}>
          <img src={post.one} alt="" />
        </div>
        ))}
      </div>
      
      <div className={styles.content}>
      {story.map((post) => (
        <div key={post.id} className={styles.imagem}>
          <img src={post.two}alt="" />
        </div>
         ))}
        <div className={styles.text}>
        <h1>
            <span>|</span>Mariano e seu bar
         </h1>
         <p>
         O bar transformou-se em mercearia, e dela para um mini mercado, até que em 1998, com a ajuda do seu filho mais velho e esposa, a família inaugurou o primeiro supermercado, localizado na mesma cidade, conscientemente ou não, na mesma rua onde iniciaram anos antes. Logo a empresa ganhou corpo e o filho mais novo do Seu Mariano juntou-se à equipe. Durante anos, a família trabalhou lado a lado e a história do Seu Mariano e de seus filhos passou por diversas dificuldades, mas o coração e a vontade de vencer eram maiores.
         </p>
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.text}>
          <h1>
            <span>|</span>Família
          </h1>
          <p>
          A união da família sempre foi o alicerce de tudo. Na foto ao lado, vemos o Seu Mariano vendendo pêssegos, os quais ele mesmo plantava. E nessas idas e vindas, o Super Ivasko participou de festas da região, rodeios e diversos eventos. Em 1999, uma nova oportunidade aparece. Uma segunda loja, na mesma cidade. O Super Ivasko da rua Dezenove de Dezembro é inaugurada e passa a ser a sede da empresa, que nesse período ainda era muito pequena, contava com poucos funcionários e as tarefas ainda eram muito indefinidas.
          </p>
        </div>
        {story.map((post) => (
        <div key={post.id}>
          <img src={post.three} alt="" />
        </div>
        ))}
      </div>

      <div className={styles.content}>
      {story.map((post) => (
        <div key={post.id} className={styles.imagem}>
          <img  src={post.four} alt="" />
        </div>
         ))}
        <div className={styles.text}>
        <h1>
            <span>|</span>Filhos
         </h1>
         <p>
         Zeka e Paulo - filhos do Seu Mariano - contam as noites mal dormidas devido a ansiedade e a incerteza. Relatam ainda as dificuldades de qualquer início, quando eles mesmos descarregavam os caminhões e colocavam os itens nas prateleiras. Em 2008, inauguram a sua maior loja na cidade de Irati, na Rua Dona Noca. A loja, além de contar com ampla área de venda, ainda trouxe todas as inovações da época. Mais uma vez, a central mudou para um espaço novo, com escrítorio mais amplo, devido ao tamanho que a equipe tomava. Em 2016, a quarta loja do grupo é Inaugurada, Na Avenida Getúlio Vargas.
         </p>
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.text}>
          <h1>
            <span>|</span>Expansão
          </h1>
          <p>
          A expansão da marca para outras cidades se deu com o primeiro supermercado Ivasko aberto fora de Irati, em São Mateus do Sul, em 2019. Com o passar dos anos, o Super Ivasko tornou-se Grupo Ivasko diversificando o seu negócio, que hoje é formado por 29 portas abertas em 13 cidades, distribuídas em todo o Paraná, e conta com supermercados, atacados, postos de gasolina, distribuidoras de gás e a recém formada IvaskoTech, que engloba o ramo tecnológico do grupo, com dois aplicativos: Gymnamic e Gasss. O Grupo Ivasko surgiu com o seu Mariano e a família, e hoje está em transição para a terceira geração, empregando mais de 1.200 pessoas diretamente.
          </p>
        </div>
        {story.map((post) => (
        <div key={post.id}>
          <img src={post.five} alt="" />
        </div>
        ))}
      </div>
    </>
  );
}
