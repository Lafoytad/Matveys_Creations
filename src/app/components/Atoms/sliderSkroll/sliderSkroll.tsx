import Image from "next/image";
import styles from "./sliderSkroll.module.scss";
import Link from "next/link";

interface ISliderProps {
  images: string[];
}

const SliderSkroll: React.FC<ISliderProps> = ({ images }) => {
  return (
    <div className={styles.sliderContainer}>
      {images.map((item, index) => (
        <a key={index} href="">
          <Image
            src={item}
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
