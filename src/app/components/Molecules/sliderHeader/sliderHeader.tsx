import SliderSkroll from "@/app/components/Atoms/sliderSkroll/sliderSkroll";
import styles from "./sliderHeader.module.scss";

const images: string[] = [
  "/background/Header/slide1.png",
  "/background/Header/slide2.png",
  "/background/Header/slide3.png",
  "/background/Header/slide4.png",
];

const SliderHeader: React.FC = () => {
  return (
    <div className={styles.wrap}>
      <SliderSkroll images={images} />
    </div>
  );
};

export default SliderHeader;
