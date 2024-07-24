import Image from "next/image";
import styles from "./matveysCreations.module.scss";

export default function MatveysCreations() {
  return (
    <section className={styles.content}>
      <h2 className={styles.title}>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/Lafoytad/Matveys_Creations"
        >
          Matvey&rsquo;s Creations
        </a>
      </h2>
      <p className={styles.skills}>
        React (фреймфорк next.js) • TypeScript • JavaScript • Git • Hooks •
        Atomic design • Photoshop
      </p>

      <div className={styles.laptop}>
        <Image
          className={styles.laptopImg}
          width={793}
          height={480}
          src={"/background/MatveysCreations/laptop.png"}
          alt="#"
        />
        <div className={styles.contentSlide}>
          <video
            className={styles.LongSlide}
            width={636}
            height={417}
            src="/background/MatveysCreations/MyWork.mp4"
            controls={false}
            autoPlay
            loop
            muted
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <div className={styles.wrapper}>
        <Image
          width={261}
          height={146}
          src={"/background/Header/slide1.png"}
          alt="#"
        />
        <Image
          width={261}
          height={146}
          src={"/background/Header/slide2.png"}
          alt="#"
        />
        <Image
          width={261}
          height={146}
          src={"/background/Header/slide3.png"}
          alt="#"
        />
        <Image
          width={261}
          height={146}
          src={"/background/Header/slide4.png"}
          alt="#"
        />
      </div>
      <p className={styles.text}>
        Этот сайт — не просто витрина моих работ, но и отражение моего
        профессионального роста и стремления к совершенству в сфере
        веб-разработки. Добро пожаловать в мир Matveys_Creations, где каждая
        деталь говорит о моем мастерстве и преданности делу.
      </p>
    </section>
  );
}
