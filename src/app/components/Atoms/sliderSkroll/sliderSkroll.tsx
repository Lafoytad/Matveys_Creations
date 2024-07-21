import Image from "next/image";
import styles from "./sliderSkroll.module.scss";

interface ISliderProps {
  images: string[];
}

const SliderSkroll: React.FC<ISliderProps> = ({ images }) => {
  return (
    <div className={styles.sliderContainer}>
      {images.map((item, index) => (
        <Image
          src={item}
          alt={`image-${index}`}
          width={590}
          height={291}
          key={index}
          className={styles.image}
        />
      ))}
    </div>
  );
};

export default SliderSkroll;
