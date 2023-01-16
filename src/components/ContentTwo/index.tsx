import styles from "./styles.module.scss";

type Post = {
  id: string;
  contenttwo: string;
  contenttwos: string;
};

interface PostProps {
  contenttwo: Post[];
}

export function ContentTwo({ contenttwo }: PostProps) {
  return (
    <main>
      <div >
      {contenttwo.map((post) => (
        <div className={styles.card} key={post.id}> 
        <img src={post.contenttwo} alt="" />
        <img src={post.contenttwos} alt="" />
        </div>
        ))}
      </div>


      <a href="https://online.flippingbook.com/view/499716801/">Sem título-2</a>

    </main>
  );
}
