import Link from "next/link";
import styles from "./styles.module.scss";

export function Departament() {
  return (
    <div className={styles.global}>
      <div className={styles.content}>
        <div>
        <Link href={"/butches"}>Açougue</Link>
        </div>
        <div>
          <Link href={"/bakerys"}>Padaria</Link>
        </div>
        <div>
          <Link href={"/frutis"}>Horti</Link>
        </div>
        <div>
          <Link href={"/beverages"}>Bebidas</Link>
        </div>
        <div>
          <Link href={''}>Encartes</Link>
        </div>
      </div>
    </div>
  );
}
