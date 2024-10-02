import styles from "./Main.module.css";
import MainPage from "./MainPage/MainPage";
import Card from "./Card/Card";
import { useContext, useEffect, useState } from "react";
import { MovieContext } from "../../provider/MovieProvider";
// import Detail from "./Detail/Detail";

export default function Main({ currentPage }) {
  const { state, getMovie, getTv } = useContext(MovieContext);
  const [selectedItem, setSelectedItem] = useState(null); // 선택한 아이템 상태 추가

  useEffect(() => {
    if (currentPage === "movies") {
      getMovie();
    } else if (currentPage === "tv") {
      getTv();
    } else currentPage === "mainPage";
  }, [currentPage]);

  const handleCardClick = (item) => {
    console.log(item.media_type, item.id);
    setSelectedItem(item); // 클릭한 아이템 저장
  };

  return (
    <main>
      {state.loading && <p>로딩중...</p>}
      {state.error && <p>에러발생</p>}

      {/* 디테일화면 */}
      {/* {!state.loading && selectedItem && (
        <Detail
          type={selectedItem.media_type ? selectedItem.media_type : "movie"}
          id={selectedItem.id}
        />
      )} */}

      {/* 메인화면 */}
      {currentPage === "mainPage" && <MainPage />}

      {/* 영화화면 */}
      <div className={styles.page}>
        {!state.loading && currentPage === "movies" && state.movies && (
          <h1 className={styles.pagetitle}>영화</h1>
        )}
        {!state.loading && currentPage === "movies" && state.movies && (
          <div className={styles.card_conteiner}>
            {state.movies.map((movie) => (
              <Card
                key={movie.id}
                item={{ ...movie, media_type: "movie" }}
                onClick={() =>
                  handleCardClick({ ...movie, media_type: "movie" })
                }
              />
            ))}
          </div>
        )}
      </div>

      {/* TV화면 */}
      <div className={styles.page}>
        {!state.loading && currentPage === "tv" && state.movies && (
          <h1 className={styles.pagetitle}>TV 프로그램</h1>
        )}
        {!state.loading && currentPage === "tv" && state.tvShows && (
          <div className={styles.card_conteiner}>
            {state.tvShows.map((tvShow) => (
              <Card
                key={tvShow.id}
                item={{ ...tvShow, media_type: "tv" }}
                onClick={() => handleCardClick({ ...tvShow, media_type: "tv" })}
              />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
