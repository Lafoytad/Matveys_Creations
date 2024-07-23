import SliderSkroll from "@/app/components/Atoms/sliderSkroll/sliderSkroll";
import styles from "./sliderHeader.module.scss";

const images: { slide: string; path: string }[] = [
  {
    slide: "/background/Header/slide1.png",
    path: "https://github.com/Lafoytad/MARKET-CS2",
  },
  {
    slide: "/background/Header/slide2.png",
    path: "https://github.com/Lafoytad/Shop",
  },
  {
    slide: "/background/Header/slide3.png",
    path: "https://github.com/Lafoytad/Kronix",
  },
  {
    slide: "/background/Header/slide4.png",
    path: "https://github.com/Lafoytad/Exam1_BorisovMatvei",
  },
];

const SliderHeader: React.FC = () => {
  return (
    <div className={styles.wrap}>
      <SliderSkroll images={images} />
    </div>
  );
};

export default SliderHeader;
