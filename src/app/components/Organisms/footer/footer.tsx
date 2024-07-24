import Image from "next/image";
import styles from "./footer.module.scss";
import Link from "next/link";
import SliderHeader from "../../Molecules/sliderHeader/sliderHeader";

export default function Footer() {
  return (
    <footer className={styles.content}>
      <h2 className={styles.title}>
        <Link rel="noopener noreferrer" href="/">
          Главная
        </Link>
        |
        <Link rel="noopener noreferrer" href="/AboutMe">
          Обо мне
        </Link>
      </h2>
      <SliderHeader />
    </footer>
  );
}
