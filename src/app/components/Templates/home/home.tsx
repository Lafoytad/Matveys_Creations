import styles from "./home.module.scss";
import Header from "@/app/components/Organisms/header/header";
import MarketCS2 from "@/app/components/Organisms/marketCS2Section/marketCS2Section";
import QuickCart from "@/app/components/Organisms/quickCartSection/quickCartSection";
import Kronix from "@/app/components/Organisms/kronixSection/kronixSection";
import Organick from "@/app/components/Organisms/organickSection/organickSection";
import MatveysCreations from "../../Organisms/matveysCreationsSection/matveysCreations";

export default function Home() {
  return (
    <div className={styles.background}>
      <Header />
      <MatveysCreations />
      <MarketCS2 />
      <Kronix />
      <QuickCart />
      <Organick />
      <footer></footer>
    </div>
  );
}
