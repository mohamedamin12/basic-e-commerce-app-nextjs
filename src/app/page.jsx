import Image from "next/image";
import styles from "./page.module.css";
import Hero from "/public/images/hero.svg";

export default function Home() {
  return (
      <div className={styles.container}>
      <div className={styles.colum}>
      <h2 className={styles.title}>Your Best Online Shop destination  </h2>
      <p className={styles.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda voluptates optio minima.</p>
      <button className={styles.button}>Shop Now</button>
      </div>
      <div className={styles.colum}>
        <Image  className={styles.img} src={Hero} alt="Hexa Shop"/>
      </div>
      </div>
  );
}
