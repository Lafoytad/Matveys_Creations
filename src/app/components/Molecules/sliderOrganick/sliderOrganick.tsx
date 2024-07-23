import styles from "./sliderOrganick.module.scss";
import Image from "next/image";

const imagesDesktop: string[] = [
  "/background/Organick/slide1.png",
  "/background/Organick/slide2.png",
  "/background/Organick/slide3.png",
  "/background/Organick/slide4.png",
  "/background/Organick/slide5.png",
  "/background/Organick/slide6.png",
  "/background/Organick/slide7.png",
  "/background/Organick/slide8.png",
  "/background/Organick/slide9.png",
  "/background/Organick/slide10.png",
  "/background/Organick/slide11.png",
];

const imagesPhone: string[] = [
  "/background/Organick/slidePhone1.png",
  "/background/Organick/slidePhone2.png",
  "/background/Organick/slidePhone3.png",
  "/background/Organick/slidePhone4.png",
  "/background/Organick/slidePhone5.png",
  "/background/Organick/slidePhone6.png",
];

const SliderOrganick: React.FC = () => {
  return (
    <div className={styles.sliderContent}>
      <Image
        width={431}
        height={888}
        src={"/background/Organick/phone.png"}
        alt="#"
      />
      <div className={styles.wrapper}>
        {imagesDesktop.map((item, index) => (
          <a
            key={index}
            target="_blank"
            href="https://github.com/Lafoytad/Exam1_BorisovMatvei"
          >
            <Image
              className={styles.imagesDesktop}
              width={338}
              height={188}
              src={item}
              alt="#"
            />
          </a>
        ))}
        {imagesPhone.map((item, index) => (
          <a
            key={index}
            target="_blank"
            href="https://github.com/Lafoytad/Exam1_BorisovMatvei"
          >
            <Image
              className={styles.imagesPhone}
              width={338}
              height={888}
              src={item}
              alt="#"
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default SliderOrganick;
