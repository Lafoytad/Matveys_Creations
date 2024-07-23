import Image from "next/image";
import styles from "./kronixSection.module.scss";

export default function Kronix() {
  return (
    <section className={styles.content}>
      <h2 className={styles.title}>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/Lafoytad/Kronix"
        >
          Kronix
        </a>
      </h2>
      <p className={styles.text}>
        В процессе разработки сайта услуг дизайнеров я реализовал разнообразный
        функционал, включая: <br />• Слайдеры для представления контента <br />•
        Выпадающие списки для выбора опций <br />• Формы для ввода данных <br />
        • Скроллинг по элементам интерфейса <br />• Возможность задать вопросы{" "}
        <br />• Система оформления заказов
      </p>
      <div className={styles.laptop}>
        <Image
          className={styles.laptopImg}
          width={920}
          height={557}
          src={"/background/Kronix/laptop.png"}
          alt="#"
        />
        <div className={styles.contentSlide}>
          <Image
            className={styles.LongSlide}
            width={740}
            height={4489}
            src={"/background/Kronix/LongSlide.png"}
            alt="#"
          />
        </div>
      </div>
      <p className={styles.skills}>
        JavaScript • Pixel Perfect • Git • SCSS • RegExp
      </p>
    </section>
  );
}
