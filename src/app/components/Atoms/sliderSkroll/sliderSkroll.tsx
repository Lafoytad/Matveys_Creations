import Image from "next/image";
import styles from "./sliderSkroll.module.scss";
interface ISliderProps {
  images: { slide: string; path: string }[];
}

const SliderSkroll: React.FC<ISliderProps> = ({ images }) => {
  return (
    <div className={styles.sliderContainer}>
      {images.map((item, index) => (
        <a key={index} target="blank" href={item.path}>
          <Image
            src={item.slide}
            alt={`image-${index}`}
            width={590}
            height={291}
            className={styles.image}
          />
        </a>
      ))}
    </div>
  );
};

export default SliderSkroll;
