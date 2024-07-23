import styles from "./home.module.scss";
import Header from "@/app/components/Organisms/header/header";
import MarketCS2 from "@/app/components/Organisms/marketCS2Section/marketCS2Section";
import QuickCart from "../../Organisms/quickCartSection copy/quickCartSection";
import Kronix from "../../Organisms/kronixSection/kronixSection";
import Organick from "../../Organisms/organickSection/organickSection";

export default function Home() {
  return (
    <div className={styles.background}>
      <Header />
      <MarketCS2 />
      <Kronix />
      <QuickCart />
      <Organick />
      <footer></footer>
    </div>
  );
}
