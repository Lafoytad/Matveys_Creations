import HomeTemplate from "@/app/components/Templates/home/home";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <HomeTemplate />
    </main>
  );
}
