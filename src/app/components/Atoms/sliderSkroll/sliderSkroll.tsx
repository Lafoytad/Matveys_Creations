import styles from "./sliderSkroll.module.scss";

interface ISliderProps {
  images: string[];
}

const SliderSkroll: React.FC<ISliderProps> = ({ images }) => {
  return (
    <div className={styles.sliderContainer}>
      {images.map((item, index) => (
        <span
          key={index}
          className={styles.image}
          style={{
            backgroundImage: `url(${item})`,
          }}
        ></span>
      ))}
    </div>
  );
};

export default SliderSkroll;
