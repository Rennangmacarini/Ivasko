import styles from "./styles.module.scss";

type Posts = {
  id: string;
  one: string;
  two: string;
  three: string;
  four: string;
  five: string;

  contactone: string;
  saturdayone: string;
  sundayone:string;

  contacttwo:string;
  saturdaytwo: string;
  sundaytwo:string;
};

interface PostProps {
  store: Posts[];
}

export function Store({ store }: PostProps) {
  return (
    <>
      <div className={styles.title}>
        <h1>Conheça nossas lojas</h1>
      </div>

      <div className={styles.content}>
        {store.map((post) => (
          <div key={post.id} className={styles.cards}>
            <h2 className={styles.active}>
              <span>|</span> Ivasko Vicente Machado
            </h2>
            <img src={post.one} alt="" />
          </div>
        ))}

        <div>
        {store.map((post) => (
        <div key={post.id} className={styles.text}>
          <h3>OPÇÕES DE SERVIÇOS:</h3>
          <p>Compras na loja - Retirada na loja - Entrega</p>
          <h3>CONTATO</h3>
          <p>
            <strong>{post.contactone}</strong>
          </p>
          <h3>ENDEREÇO:</h3>
          <p>Av. Dr. Vicente Machado, 1166 - Irati, PR, 84500-000.</p>
          <h3>HORÁRIO DE ATENDIMENTO:</h3>
          <p>{post.saturdayone}</p>
          <p>{post.sundayone}</p>
        </div> 
      ))}
      </div>
      </div>

      <div className={styles.content}>
        {store.map((post) => (
          <div key={post.id} className={styles.cards}>
            <h2 className={styles.active}>
              <span>|</span> Ivasko Dezenove
            </h2>
            <img src={post.two} alt="" />
          </div>
        ))}

        <div> 
        {store.map((post) => (
        <div key={post.id} className={styles.text}>
          <h3>OPÇÕES DE SERVIÇOS:</h3>
          <p>Compras na loja - Retirada na loja - Entrega - Restaurante</p>
          <h3>CONTATO</h3>
          <p>
            <strong>{post.contacttwo}</strong>
          </p>
          <h3>ENDEREÇO:</h3>
          <p>R. Dezenove de Dezembro, 681 - Irati, PR, 84500-016.</p>
          <h3>HORÁRIO DE ATENDIMENTO:</h3>
          <p>{post.saturdaytwo}</p>
          <p>{post.sundaytwo}</p>
        </div>
        ))}
        </div>
      </div>
      <div className={styles.content}>
        {store.map((post) => (
          <div key={post.id} className={styles.cards}>
            <h2 className={styles.active}>
              <span>|</span> Ivasko Dona Noca
            </h2>
            <img src={post.three} alt="" />
          </div>
        ))}
        <div className={styles.text}>
          <h3>OPÇÕES DE SERVIÇOS:</h3>
          <p>
            Compras na loja - Retirada na loja - Entrega - Restaurante - Espaço
            Gourmet
          </p>
          <h3>CONTATO</h3>
          <p>
            <strong>(42) 3422-3030</strong>
          </p>
          <h3>ENDEREÇO:</h3>
          <p>Rua Dona Noca, 707 - Irati, PR, 84500-000.</p>
          <h3>HORÁRIO DE ATENDIMENTO:</h3>
          <p>SEGUNDA - SÁBADO: 08:30 - 21:00.</p>
          <p>DOMINGO - 09:00 - 20:00</p>
        </div>
      </div>

      <div className={styles.content}>
        {store.map((post) => (
          <div key={post.id} className={styles.cards}>
            <h2 className={styles.active}>
              <span>|</span> Ivasko Getúlio Vargas
            </h2>
            <img src={post.four} alt="" />
          </div>
        ))}
        <div className={styles.text}>
          <h3>OPÇÕES DE SERVIÇOS:</h3>
          <p>Compras na loja - Retirada na loja - Entrega</p>
          <h3>CONTATO</h3>
          <p>
            <strong>(42) 3422-8400</strong>
          </p>
          <h3>ENDEREÇO:</h3>
          <p>R. Pres. Getúlio Vargas - Irati, PR, 84500-000.</p>
          <h3>HORÁRIO DE ATENDIMENTO:</h3>
          <p>SEGUNDA - SÁBADO: 08:00 - 20:00.</p>
          <p>DOMINGO - FECHADO</p>
        </div>
      </div>

      <div className={styles.content}>
        {store.map((post) => (
          <div key={post.id} className={styles.cards}>
            <h2 className={styles.active}>
              <span>|</span> Ivasko São Mateus do Sul
            </h2>
            <img src={post.five} alt="" />
          </div>
        ))}
        <div className={styles.text}>
          <h3>OPÇÕES DE SERVIÇOS:</h3>
          <p>Compras na loja - Retirada na loja - Entrega</p>
          <h3>CONTATO</h3>
          <p>
            <strong>(42) 3532-2298</strong>
          </p>
          <h3>ENDEREÇO:</h3>
          <p>
            R. Barão do Rio Branco, 661 - Centro São Mateus do Sul - PR,
            83900-000
          </p>
          <h3>HORÁRIO DE ATENDIMENTO:</h3>
          <p>SEGUNDA - SÁBADO: 08:00 - 20:00.</p>
          <p>DOMINGO - FECHADO</p>
        </div>
      </div>
    </>
  );
}
