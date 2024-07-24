import AboutMe from "@/app/components/Templates/aboutMe/aboutMe";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <AboutMe />
    </main>
  );
}
