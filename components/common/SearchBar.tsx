import Image from "next/image";
import styles from "./SearchBar.module.scss";

function SearchBar({
  keyword,
  onKeywordChange,
}: {
  keyword: string;
  onKeywordChange: (k: string) => void;
}) {
  return (
    <div className={styles.search_bar}>
      <Image src="/boards/search.svg" alt="검색" width={24} height={24} />
      <input
        type="text"
        id="keyword"
        placeholder="검색할 상품을 입력해주세요"
      />
    </div>
  );
}

export default SearchBar;
