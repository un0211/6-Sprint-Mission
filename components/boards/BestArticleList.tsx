import { NUM_BEST_ARTICLES } from "@/constants/boards";
import useFetchData from "@/hooks/useFetchData";
import { ArticleList } from "@/interfaces/Article.interface";
import { useDevice } from "@/lib/DeviceContext";
import Spinner from "../common/Spinner";
import styles from "./BestArticleList.module.scss";
import { BestArticle } from "./Article";
import Link from "next/link";

function BestArticleList() {
  const device = useDevice();
  const query = `?pageSize=${NUM_BEST_ARTICLES[device]}`;
  const fetchedData = useFetchData<ArticleList>(`/articles${query}`);
  const { data: articles, isLoading, loadingError } = fetchedData;

  return (
    <section className={styles.section}>
      {isLoading ? (
        <div className={styles.spinner_container}>
          <Spinner />
        </div>
      ) : (
        <>
          <h2 className={styles.title}>베스트 게시글</h2>
          <ol className={styles.list}>
            {articles?.list.map((article) => (
              <li key={article.id}>
                <Link href={`/boards/${article.id}`}>
                  <BestArticle article={article} />
                </Link>
              </li>
            ))}
          </ol>
        </>
      )}
      {loadingError && <p>{loadingError.message}</p>}
    </section>
  );
}

export default BestArticleList;
