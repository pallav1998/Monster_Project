import styles from "./home.module.css";
import { SearchBox } from "../Search/SearchBox";

export function Search() {
  return (
    <div>
      <div className={styles.search_div}>
        <SearchBox />
      </div>
    </div>
  );
}
