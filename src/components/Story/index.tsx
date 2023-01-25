import styles from "./styles.module.scss";

type Posts = {
  id: string;
  one: string;
  two: string;
  three: string;
  four: string;
  five: string;

  textone: string;
  texttwo: string;
  textthree: string;
  textfour: string;
  textfive: string;
};

interface PostProps {
  story: Posts[];
}

export function Story({ story }: PostProps) {
  return (
    <>
      <div className={styles.title}>
        <h1>Nossas Histórias</h1>
      </div>

      <div className={styles.content}>
        {story.map((post) => (
          <div key={post.id} className={styles.text}>
            <h1>
              <span>|</span>Mariano
            </h1>
            <p>{post.textone}</p>
          </div>
        ))}
        {story.map((post) => (
          <div key={post.id}>
            <img src={post.one} alt="" />
          </div>
        ))}
      </div>

      <div className={styles.content}>
        {story.map((post) => (
          <div key={post.id} className={styles.imagem}>
            <img src={post.two} alt="" />
          </div>
        ))}
        {story.map((post) => (
          <div key={post.id} className={styles.text}>
            <h1>
              <span>|</span>Mariano e seu bar
            </h1>
            <p>{post.texttwo}</p>
          </div>
        ))}
      </div>

      <div className={styles.content}>
        {story.map((post) => (
          <div key={post.id} className={styles.text}>
            <h1>
              <span>|</span>Família
            </h1>
            <p>{post.textthree}</p>
          </div>
        ))}
        {story.map((post) => (
          <div key={post.id}>
            <img src={post.three} alt="" />
          </div>
        ))}
      </div>

      <div className={styles.content}>
        {story.map((post) => (
          <div key={post.id} className={styles.imagem}>
            <img src={post.four} alt="" />
          </div>
        ))}
        {story.map((post) => (
          <div key={post.id} className={styles.text}>
            <h1>
              <span>|</span>Filhos
            </h1>
            <p>{post.textfour}</p>
          </div>
        ))}
      </div>

      <div className={styles.content}>
        {story.map((post) => (
          <div key={post.id} className={styles.text}>
            <h1>
              <span>|</span>Expansão
            </h1>
            <p>{post.textfive}</p>
          </div>
        ))}
        {story.map((post) => (
          <div key={post.id}>
            <img src={post.five} alt="" />
          </div>
        ))}
      </div>
    </>
  );
}
