import SliderOrganick from "../../Molecules/sliderOrganick/sliderOrganick";
import styles from "./organickSection.module.scss";

export default function Organick() {
  return (
    <section className={styles.content}>
      <h2 className={styles.title}>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/Lafoytad/Exam1_BorisovMatvei"
        >
          Organick
        </a>
      </h2>
      <p className={styles.text}>
        В процессе разработки интернет-магазина &ldquo;Organick&rdquo; я создал
        адаптивную вёрстку в точном соответствии с дизайн-макетом. Для
        достижения максимально точного соответствия дизайну применялись методы
        Pixel Perfect и PixelParallel, что позволило реализовать все элементы
        интерфейса так, как они были задуманы в макете.
      </p>
      <div className={styles.phone}>
        <SliderOrganick />
      </div>
      <p className={styles.skills}>
        HTML • SASS • Git • Pixel Perfect • PixelParallel • Zeplin • Figma
      </p>
    </section>
  );
}
