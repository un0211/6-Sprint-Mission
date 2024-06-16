import { NUM_BEST_ARTICLES, Order } from "@/constants/boards";
import useFetchData from "@/hooks/useFetchData";
import { Articles } from "@/interfaces/Article.interface";
import Spinner from "@/components/common/Spinner";
import styles from "./ArticleList.module.scss";
import Link from "next/link";
import { BestArticle, NormalArticle } from "./Article";
import { useDevice } from "@/contexts/DeviceContext";

function ArticleList({
  articles,
  isLoading,
  loadingError,
  isBest = false,
}: {
  articles: Articles | undefined;
  isLoading: boolean;
  loadingError: Error | null;
  isBest?: boolean;
}) {
  const className = isBest ? styles.best : styles.normal;

  if (isLoading) {
    return (
      <div className={styles.spinner_container}>
        <Spinner />
      </div>
    );
  }

  return (
    <>
      <ol className={`${styles.list} ${className}`}>
        {articles?.list.map((article) => (
          <li key={article.id}>
            <Link href={`/boards/${article.id}`}>
              {isBest ? (
                <BestArticle article={article} />
              ) : (
                <NormalArticle article={article} />
              )}
            </Link>
            <div className={styles.divider} />
          </li>
        ))}
      </ol>
      {loadingError && <p>{loadingError.message}</p>}
    </>
  );
}

export function NormalArticleList({
  order,
  keyword,
}: {
  order: Order;
  keyword: string;
}) {
  const query = `?orderBy=${order}&keyword=${keyword}`;
  const fetchedData = useFetchData<Articles>(`/articles${query}`);
  const { data: articles, isLoading, loadingError } = fetchedData;

  return (
    <ArticleList
      articles={articles}
      isLoading={isLoading}
      loadingError={loadingError}
    />
  );
}

export function BestArticleList() {
  const device = useDevice();
  const query = `?pageSize=${NUM_BEST_ARTICLES[device]}&orderBy=like`;
  const fetchedData = useFetchData<Articles>(`/articles${query}`);
  const { data: articles, isLoading, loadingError } = fetchedData;

  return (
    <ArticleList
      articles={articles}
      isLoading={isLoading}
      loadingError={loadingError}
      isBest={true}
    />
  );
}
