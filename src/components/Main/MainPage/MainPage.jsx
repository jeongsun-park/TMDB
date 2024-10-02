import styles from "./MainPage.module.css";
import Search from "./Search/Search";

import Trending from "./Trending/Trending";

export default function MainPage() {
  return (
    <div>
      <div className={styles.mainPage_conteiner}>
        <Search />
        <Trending />
      </div>
    </div>
  );
}
