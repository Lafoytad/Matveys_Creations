import Image from "next/image";
import styles from "./marketCS2Section.module.scss";
import SliderMarketCS2 from "@/app/components/Molecules/sliderMarketCS2/sliderMarketCS2";

export default function MarketCS2() {
  return (
    <section className={styles.content}>
      <h2 className={styles.title}>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/Lafoytad/MARKET-CS2"
        >
          Market-cs2
        </a>
      </h2>
      <p className={styles.text}>
        Это магазин, созданный с использованием React и Next.js. Проект доступен
        по ссылке:
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://market-cs2.vercel.app/"
        >
          market-cs2.vercel.app.
        </a>
        Основные функции: <br /> • Главная страница: Содержит карусель с
        популярными и новыми предметами. <br />• Новости: Подключены через Steam
        API для отображения и перехода по ссылкам на посты. <br />• Магазин:
        Предлагает ежедневный набор предметов (доступно 2 шт. в день), а также
        сохранение предметов в корзину. Локальная база данных содержит подробную
        информацию о каждом предмете. <br />• Корзина: Пользователи могут
        покупать предметы поштучно или все сразу. Данные о покупках отображаются
        на странице &ldquo;Инвентарь&rdquo;, где предметы можно фильтровать по
        различным критериям. <br />• Чат: Реализован с использованием базы
        данных SQLite
      </p>
      <div className={styles.laptop}>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://market-cs2.vercel.app/"
        >
          <Image
            src={"/background/MarketCS2/MarketCS2Laptop.png"}
            alt="#"
            width={873}
            height={547}
          />
        </a>
      </div>
      <p className={styles.skills}>
        React (фреймфорк next.js) • Redux (toolkit, Slice) • JavaScript • Axios
        • Ant Design • <br />
        SQLite(prisma) • local database • REST API • dynamicLoading •
        LocalStorage • <br />
        SessionStorage • SCSS • Atomic design • Hooks • Git • Postman •
        Photoshop
      </p>
      <SliderMarketCS2 />
    </section>
  );
}
