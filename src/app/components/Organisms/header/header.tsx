import Image from "next/image";
import styles from "./header.module.scss";
import Link from "next/link";
import SliderHeader from "@/app/components/Molecules/sliderHeader/sliderHeader";

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.сontent}>
        <ul>
          <li>
            <Link href={"/"}>Главная</Link>
          </li>
          <li>
            <Link href={"AboutMe"}>Обо мне</Link>
          </li>
        </ul>
      </nav>
      <div className={styles.wrapper}>
        <div className={styles.column}>
          <h1 className={styles.title}>Матвей Борис&nbsp;&nbsp;в</h1>
          <p className={styles.text}>
            Меня зовут Матвей, я frontend-разработчик <br /> с основным стеком
            технологий React, TypeScript <br /> и Next.js. Я открыт к новым
            проектам и сотрудничеству.
          </p>
        </div>
        <div className={styles.peaple}>
          <Image
            className={styles.Matvey}
            src="/background/Header/Matvey.png"
            alt="Матвей"
            width={464}
            height={715}
          />
          <Image
            className={styles.Mask}
            src="/background/Header/ElonMusk.png"
            alt="Илон Маск"
            width={304}
            height={528}
          />
        </div>
      </div>
      <SliderHeader />
    </header>
  );
}
