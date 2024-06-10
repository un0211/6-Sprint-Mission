import { NUM_BEST_ARTICLES } from "@/constants/boards";
import useFetchData from "@/hooks/useFetchData";
import { Article, ArticleList } from "@/interfaces/Article.interface";
import { useDevice } from "@/lib/DeviceContext";
import Spinner from "../common/Spinner";
import styles from "./BestArticles.module.scss";

function BestArticles() {
  const device = useDevice();
  const query = `?pageSize=${NUM_BEST_ARTICLES[device]}`;
  const fetchedData = useFetchData<ArticleList>(`/articles${query}`);
  const { data: articles, isLoading, loadingError } = fetchedData;

  return (
    <section className={styles.section}>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <h2>베스트 게시글</h2>
          <ol>
            {articles?.list.map((article) => (
              <li key={article.id}>{article.title}</li>
            ))}
          </ol>
        </>
      )}
      {loadingError && <p>{loadingError.message}</p>}
    </section>
  );
}

export default BestArticles;
