import Footer from "@/app/components/Organisms/footer/footer";
import styles from "./aboutMe.module.scss";

export default function AboutMe() {
  return (
    <div className={styles.background}>
      <embed
        className={styles.pdf}
        width="100%"
        height="1040px"
        src="/background/cv_Borisov_Matvey_Frontend.pdf"
        type="application/pdf"
      />
      <Footer />
    </div>
  );
}
