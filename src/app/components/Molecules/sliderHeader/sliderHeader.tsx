import SliderSkroll from "@/app/components/Atoms/sliderSkroll/sliderSkroll";
import styles from "./sliderHeader.module.scss";

const images: string[] = [
  "/test/test1.png",
  "/test/test1.png",
  "/test/test1.png",
  "/test/test1.png",
];

const SliderHeader: React.FC = () => {
  return (
    <div className={styles.wrap}>
      <SliderSkroll images={images} />
    </div>
  );
};

export default SliderHeader;
