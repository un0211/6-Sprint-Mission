import useFetchData from "@/hooks/useFetchData";
import styles from "./ArticleSection.module.scss";
import { Articles } from "@/interfaces/Article.interface";
import Spinner from "../common/Spinner";
import Link from "next/link";
import { NormalArticle } from "./Article";
import { useState } from "react";
import { Order } from "@/constants/boards";
import SearchBar from "../common/SearchBar";
import Dropdown from "../common/Dropdown";

function ArticleSection() {
  const [order, setOrder] = useState(Order.Recent);
  const [keyword, setKeyword] = useState("");

  const handleOrderChange = (newOrder: Order) => {
    setOrder(newOrder);
  };

  const handleKeywordChange = (newKeyword: string) => {
    setKeyword(newKeyword);
  };

  return (
    <section className={styles.section}>
      <header className={styles.header}>
        <h2 className={styles.title}>게시글</h2>
        <Link className={styles.button} href="/boards/create">
          글쓰기
        </Link>
      </header>

      <div className={styles.toolbar}>
        <SearchBar onKeywordChange={handleKeywordChange} />
        <Dropdown order={order} onOrderChange={handleOrderChange} />
      </div>

      <NormalArticleList order={order} keyword={keyword} />
    </section>
  );
}

function NormalArticleList({
  order,
  keyword,
}: {
  order: Order;
  keyword: string;
}) {
  const query = `?orderBy=${order}&keyword=${keyword}`;
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
