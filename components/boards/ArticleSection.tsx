import useFetchData from "@/hooks/useFetchData";
import styles from "./ArticleSection.module.scss";
import { Articles } from "@/interfaces/Article.interface";
import Spinner from "../common/Spinner";
import Link from "next/link";
import { NormalArticle } from "./Article";
import Toolbar from "./Toolbar";

function ArticleSection() {
  const fetchedData = useFetchData<Articles>(`/articles`);
  const { data: articles, isLoading, loadingError } = fetchedData;

  return (
    <section className={styles.section}>
      {isLoading ? (
        <div className={styles.spinner_container}>
          <Spinner />
        </div>
      ) : (
        <>
          <header className={styles.header}>
            <h2 className={styles.title}>게시글</h2>
            <Link className={`button ${styles.button}`} href="/boards/create">
              글쓰기
            </Link>
          </header>

          <Toolbar />

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
        </>
      )}
      {loadingError && <p>{loadingError.message}</p>}
    </section>
  );
}

export default ArticleSection;
