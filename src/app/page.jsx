import Image from "next/image";
import styles from "./page.module.css";
// import Hero from "public/hero.png";
import Button from "@/components/Button/Button";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>
          Better design for your digital products.
        </h1>
        <p className={styles.desc}>
          Turning your Idea into Reality. We bring together the teams from the
          global tech industry.
        </p>
        <Button url="/portfolio" text="See Our Works"/>
      </div>
      <div className={styles.item}>
        <Image width={500} height={500} src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className={styles.img} />
      </div>
    </div>
  );
}