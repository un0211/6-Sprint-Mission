import { Article } from "@/interfaces/Article.interface";
import styles from "./Article.module.scss";
import Image from "next/image";
import formatDateWithDot from "@/utils/formatDateWithDot";
import { IMAGE_DOMAIN_ALLOWED } from "@/constants/boards";

const filterImageSrc = (image: string | null) => {
  if (image?.startsWith(IMAGE_DOMAIN_ALLOWED)) {
    return image;
  } else {
    return "";
  }
};

export function NormalArticle({ article }: { article: Article }) {
  const imageSrc = filterImageSrc(article.image);

  return (
    <>
      <article className={styles.article}>
        <div className={styles.content}>
          <header className={styles.header}>
            <h3 className={styles.title}>{article.title}</h3>
            {imageSrc && <ArticleImage imageSrc={imageSrc} />}
          </header>

          <footer className={styles.footer}>
            <div className={styles.info_container}>
              <Image
                src="/boards/profile.svg"
                alt="프로필 이미지"
                width={24}
                height={24}
              />
              <p>{article.writer.nickname}</p>
              <p className={styles.created_at}>
                {formatDateWithDot(article.createdAt)}
              </p>
            </div>
            <LikeCount count={article.likeCount} size={24} />
          </footer>
        </div>
      </article>
      <div className={styles.divider} />
    </>
  );
}

export function BestArticle({ article }: { article: Article }) {
  const imageSrc = filterImageSrc(article.image);

  return (
    <article className={`${styles.article} ${styles.best}`}>
      <Image
        className={styles.badge}
        src="/boards/badge.png"
        alt="베스트 상품 뱃지"
        width="102"
        height="30"
      />

      <div className={styles.content}>
        <header className={styles.header}>
          <h3 className={styles.title}>{article.title}</h3>
          {imageSrc && <ArticleImage imageSrc={imageSrc} />}
        </header>

        <footer className={styles.footer}>
          <div className={styles.info_container}>
            <p>{article.writer.nickname}</p>
            <LikeCount count={article.likeCount} size={16} />
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

function LikeCount({ count, size }: { count: number; size: number }) {
  return (
    <div className={styles.count_container}>
      <Image src="/boards/heart.svg" alt="좋아요" width={size} height={size} />
      <p>{count}</p>
    </div>
  );
}
