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
  sundayone: string;

  contacttwo: string;
  saturdaytwo: string;
  sundaytwo: string;

  contactthree: string;
  saturdaythree: string;
  sundaythree: string;

  contactfour: string;
  saturdayfour: string;
  sundayfour: string;

  contactfive: string;
  saturdayfive: string;
  sundayfive: string;
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

        <div>
          {store.map((post) => (
            <div key={post.id} className={styles.text}>
              <h3>OPÇÕES DE SERVIÇOS:</h3>
              <p>
                Compras na loja - Retirada na loja - Entrega - Restaurante -
                Espaço Gourmet
              </p>
              <h3>CONTATO</h3>
              <p>
                <strong>{post.contactthree}</strong>
              </p>
              <h3>ENDEREÇO:</h3>
              <p>Rua Dona Noca, 707 - Irati, PR, 84500-000.</p>
              <h3>HORÁRIO DE ATENDIMENTO:</h3>
              <p>{post.saturdaythree}</p>
              <p>{post.sundaythree}</p>
            </div>
          ))}
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
        <div>
          {store.map((post) => (
            <div key={post.id} className={styles.text}>
              <h3>OPÇÕES DE SERVIÇOS:</h3>
              <p>Compras na loja - Retirada na loja - Entrega</p>
              <h3>CONTATO</h3>
              <p>
                <strong>{post.contactfour}</strong>
              </p>
              <h3>ENDEREÇO:</h3>
              <p>R. Pres. Getúlio Vargas - Irati, PR, 84500-000.</p>
              <h3>HORÁRIO DE ATENDIMENTO:</h3>
              <p>{post.saturdayfour}</p>
              <p>{post.sundayfour}</p>
            </div>
          ))}
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

        <div>
          {store.map((post) => (
            <div key={post.id} className={styles.text}>
              <h3>OPÇÕES DE SERVIÇOS:</h3>
              <p>Compras na loja - Retirada na loja - Entrega</p>
              <h3>CONTATO</h3>
              <p>
                <strong>{post.contactfive}</strong>
              </p>
              <h3>ENDEREÇO:</h3>
              <p>
                R. Barão do Rio Branco, 661 - Centro São Mateus do Sul - PR,
                83900-000
              </p>
              <h3>HORÁRIO DE ATENDIMENTO:</h3>
              <p>{post.saturdayfive}</p>
              <p>{post.sundayfive}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
