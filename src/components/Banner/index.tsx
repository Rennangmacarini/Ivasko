
import Image from 'next/image';
import styles from './styles.module.scss'


type Post = {
    id: string;
    banner: string;
  };
  
  interface PostProps {
    banner: Post[];
  }
  

export function Banner({ banner }: PostProps){
    return(
        <div className={styles.banner}>
            {banner.map((post) => (
            <div key={post.id}>
            <img src={post.banner} alt="" />
            </div>
            ))}
            <div className={styles.text}>
                <h1>QUALIDADE</h1>
                <h3>e preço baixo!</h3>
            </div>
        </div>
    )
}