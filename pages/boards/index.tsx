import ArticleList from "@/components/boards/ArticleList";
import BestArticleList from "@/components/boards/BestArticleList";
import styles from "@/styles/Boards.module.scss";

function Boards() {
  return (
    <main className={styles.main}>
      <BestArticleList />
      <ArticleList />
    </main>
  );
}

export default Boards;
