import Link from "next/link";
import styles from "./Banner.module.scss";

export default function Banner() {
  return (
    <section className={styles.banner} id="banner-top">
      <div className={styles.content}>
        <div className={styles.text}>
          <p className={styles.title}>일상의 모든 물건을 거래해 보세요</p>
          <Link
            className={`${styles.button} ${styles.button_large}`}
            href="/items"
          >
            구경하러 가기
          </Link>
        </div>
      </div>
    </section>
  );
}
