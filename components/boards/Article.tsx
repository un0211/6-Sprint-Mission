import { Article as BestArticle } from "@/interfaces/Article.interface";
import styles from "./Article.module.scss";
import Image from "next/image";
import formatDateWithDot from "@/utils/formatDateWithDot";

export function BestArticle({ article }: { article: BestArticle }) {
  const imageSrc = article.image?.startsWith(
    "https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com"
  )
    ? article.image
    : "";

  return (
    <article className={`${styles.article} ${styles.best}`}>
      <Image
        className={styles.badge}
        src="/images/boards/badge.png"
        alt="베스트 상품 뱃지"
        width="102"
        height="30"
      />

      <div className={styles.best_content}>
        <header className={styles.header}>
          <h3>{article.title}</h3>
          {imageSrc && <ArticleImage imageSrc={imageSrc} />}
        </header>

        <footer className={styles.footer}>
          <div className={styles.info_container}>
            <p>{article.writer.nickname}</p>
            <LikeCount count={article.likeCount} />
          </div>
          <p className={styles.created_at}>
            {formatDateWithDot(article.createdAt)}
          </p>
        </footer>
      </div>
    </article>
  );
}

function ArticleImage({ imageSrc }: { imageSrc: string }) {
  return (
    <div className={styles.image_container}>
      <Image
        src={imageSrc}
        alt="첨부 이미지"
        width="48"
        height="48"
        style={{ objectFit: "cover" }}
      />
    </div>
  );
}

function LikeCount({ count }: { count: number }) {
  return (
    <div className={styles.count_container}>
      <Image src="/icons/heart.svg" alt="좋아요" width="16" height="16" />
      <p>{count}</p>
    </div>
  );
}
