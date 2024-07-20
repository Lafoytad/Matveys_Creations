import SliderRow from "@/app/components/Atoms/sliderRow/sliderRow";
import styles from "./sliderMarketCS2.module.scss";

const images: string[] = [
  "/background/MarketCS2/MarketCS2Slide1.png",
  "/background/MarketCS2/MarketCS2Slide2.png",
  "/background/MarketCS2/MarketCS2Slide3.png",
  "/background/MarketCS2/MarketCS2Slide4.png",
];

const SliderMarketCS2: React.FC = () => {
  return (
    <div className={styles.sliderContent}>
      <SliderRow images={images} />
    </div>
  );
};

export default SliderMarketCS2;
