import styles from "./home.module.scss";
import Header from "@/app/components/Organisms/header/header";
import MarketCS2Section from "@/app/components/Organisms/marketCS2Section/marketCS2Section";

export default function Home() {
  return (
    <div className={styles.background}>
      <Header />
      <MarketCS2Section />
      <section></section>
      <footer></footer>
    </div>
  );
}
