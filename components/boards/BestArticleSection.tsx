import { NUM_BEST_ARTICLES } from "@/constants/boards";
import useFetchData from "@/hooks/useFetchData";
import { Articles } from "@/interfaces/Article.interface";
import { useDevice } from "@/lib/DeviceContext";
import Spinner from "../common/Spinner";
import styles from "./BestArticleSection.module.scss";
import { BestArticle } from "./Article";
import Link from "next/link";

function BestArticleSection() {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>베스트 게시글</h2>
      <BestArticleList />
    </section>
  );
}

function BestArticleList() {
  const device = useDevice();
  const query = `?pageSize=${NUM_BEST_ARTICLES[device]}`;
  const fetchedData = useFetchData<Articles>(`/articles${query}`);
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
              <BestArticle article={article} />
            </Link>
          </li>
        ))}
      </ol>
      {loadingError && <p>{loadingError.message}</p>}
    </>
  );
}

export default BestArticleSection;
