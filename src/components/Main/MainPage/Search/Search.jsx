import { useContext, useEffect } from "react";
import styles from "./Search.module.css";
import { MovieContext } from "../../../../provider/MovieProvider";

export default function Search() {
  const { state, getTrending } = useContext(MovieContext);

  useEffect(() => {
    getTrending();
  }, []);

  function getRandomImageUrl() {
    if (state.trendings && state.trendings.length > 0) {
      const randomIndex = Math.floor(Math.random() * state.trendings.length);
      const randomBackdropPath = state.trendings[randomIndex].backdrop_path;

      if (randomBackdropPath) {
        return `https://image.tmdb.org/t/p/original${randomBackdropPath}`;
      }
    }
    return ""; // 이미지가 없을 경우 빈 값 반환
  }

  return (
    <div
      className={styles.back_img}
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(24, 24, 24,0.9)  , rgba(24, 24, 24, 0.4) ), url(${getRandomImageUrl()})`,
      }}
    >
      <div className={styles.search_conteiner}>
        <div className={styles.greeting}>
          <h2>환영합니다</h2>
          <p>
            수백만 개의 영화, TV 프로그램 및 인물을 발견하세요. 지금 살펴보세요.
          </p>
        </div>

        <div className={styles.conteiner}>
          <div className={styles.search}>
            <input type="text" placeholder="영화, TV 프로그램 검색" />
            <button>Search</button>
          </div>
        </div>
      </div>
    </div>
  );
}
