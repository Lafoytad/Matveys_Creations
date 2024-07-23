import Image from "next/image";
import styles from "./quickCartSection.module.scss";

export default function QuickCart() {
  return (
    <section className={styles.content}>
      <h2 className={styles.title}>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/Lafoytad/Shop"
        >
          QuickCart
        </a>
      </h2>
      <p className={styles.text}>
        Создал удобный и функциональный интерфейс для карточек товаров, где
        пользователи могут легко добавлять товары в корзину и оформлять заказы,
        используя свои данные. Внедрил систему звёздного рейтинга для оценки
        товаров и фильтры для быстрого поиска нужных продуктов. На данном этапе
        сайт предлагает базовый, но интуитивно понятный и полезный функционал.
      </p>
      <div className={styles.wrapper}>
        <Image
          width={340}
          height={190}
          src={"/background/QuickCart/slide1.png"}
          alt="#"
        />
        <Image
          width={340}
          height={190}
          src={"/background/QuickCart/slide2.png"}
          alt="#"
        />
        <Image
          width={340}
          height={190}
          src={"/background/QuickCart/slide3.png"}
          alt="#"
        />
      </div>
      <p className={styles.skills}>
        React • TypeScript • JavaScript • REST API • Redux • Git • Formik •
        Styled-components • lazy • Hooks
      </p>
    </section>
  );
}
