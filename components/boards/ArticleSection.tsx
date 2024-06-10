import useFetchData from "@/hooks/useFetchData";
import styles from "./ArticleSection.module.scss";
import { Articles } from "@/interfaces/Article.interface";
import Spinner from "../common/Spinner";
import Link from "next/link";
import { NormalArticle } from "./Article";
import Toolbar from "./Toolbar";

function ArticleSection() {
  return (
    <section className={styles.section}>
      <header className={styles.header}>
        <h2 className={styles.title}>게시글</h2>
        <Link className={`button ${styles.button}`} href="/boards/create">
          글쓰기
        </Link>
      </header>
      <Toolbar />
      <NormalArticleList />
    </section>
  );
}

function NormalArticleList() {
  const fetchedData = useFetchData<Articles>(`/articles`);
  const { data: articles, isLoading, loadingError } = fetchedData;

  if (isLoading) {
    return (
      <div className={styles.spinner_container}>
        <Spinner />
      </div>
    );
  }

  return (
    <>
      <ol className={styles.list}>
        {articles?.list.map((article) => (
          <li key={article.id}>
            <Link href={`/boards/${article.id}`}>
              <NormalArticle article={article} />
            </Link>
            <div className={styles.divider} />
          </li>
        ))}
      </ol>
      {loadingError && <p>{loadingError.message}</p>}
    </>
  );
}

export default ArticleSection;
