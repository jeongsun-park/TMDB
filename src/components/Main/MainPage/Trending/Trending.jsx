import styles from "./Trending.module.css";
import { useContext, useEffect } from "react";
import { MovieContext } from "../../../../provider/MovieProvider";
import TrendingCard from "./TrendingCard/TrendingCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation"; // Navigation 스타일
import { Autoplay, Navigation, Pagination } from "swiper/modules";

export default function Trending() {
  const { state, getTrending } = useContext(MovieContext);

  useEffect(() => {
    getTrending();
  }, []);

  return (
    <div className={styles.trending}>
      <div className={styles.trending_conteiner}>
        <div className={styles.trending_header}>
          <p>Trending</p>
          <div>
            <button onClick={() => getTrending("all")}>전체</button>
            <button onClick={() => getTrending("movie")}>영화</button>
            <button onClick={() => getTrending("tv")}>TV</button>
          </div>
        </div>
        <div className={styles.TrendingCard_conteiner}>
          {state.loading && <p>로딩중...</p>}
          {state.error && <p>에러발생</p>}
          {!state.loading &&
            !state.error &&
            state.trendings &&
            state.trendings.length > 0 && (
              <Swiper
                effect={"slide"}
                grabCursor={true}
                centeredSlides={false}
                spaceBetween={30}
                slidesPerView={4.5} // 한 번에 3개의 슬라이드 표시
                style={{ height: "380px" }}
                loop={true} // 슬라이드 무한 반복
                navigation={true} // Navigation 버튼 활성화
                pagination={{ clickable: true }} // Pagination 활성화
                modules={[Autoplay, Navigation, Pagination]} // 모듈 추가
                // style={{ height: "340px" }} // 슬라이드 높이 설정
                autoplay={{ delay: 2000, disableOnInteraction: false }} // 3초 간격으로 자동 슬라이드
                // 반응형 설정 추가
                breakpoints={{
                  320: {
                    // 화면 너비가 320px 이상일 때
                    slidesPerView: 1, // 한 번에 1개의 슬라이드 표시
                    spaceBetween: 10, // 슬라이드 간격 10px
                  },
                  550: {
                    // 화면 너비가 320px 이상일 때
                    slidesPerView: 2, // 한 번에 1개의 슬라이드 표시
                    spaceBetween: 10, // 슬라이드 간격 10px
                  },
                  768: {
                    // 화면 너비가 768px 이상일 때 (태블릿)
                    slidesPerView: 3, // 한 번에 2.5개의 슬라이드 표시
                    spaceBetween: 20, // 슬라이드 간격 20px
                  },
                  1024: {
                    // 화면 너비가 1024px 이상일 때 (데스크탑)
                    slidesPerView: 4, // 한 번에 4개의 슬라이드 표시
                    spaceBetween: 30, // 슬라이드 간격 30px
                  },
                  1440: {
                    // 화면 너비가 1440px 이상일 때 (대형 화면)
                    slidesPerView: 4.5, // 한 번에 4.5개의 슬라이드 표시
                    spaceBetween: 30, // 슬라이드 간격 30px
                  },
                }}
              >
                {state.trendings.map((trending) => (
                  <SwiperSlide key={trending.id}>
                    <TrendingCard item={trending} />
                  </SwiperSlide>
                ))}
              </Swiper>
            )}
        </div>
      </div>
    </div>
  );
}
