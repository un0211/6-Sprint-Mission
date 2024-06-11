import styles from "./ArticleSection.module.scss";
import Link from "next/link";
import { useState } from "react";
import { Order } from "@/constants/boards";
import SearchBar from "../common/SearchBar";
import Dropdown from "../common/Dropdown";
import { NormalArticleList } from "./ArticleList";

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

export default ArticleSection;
