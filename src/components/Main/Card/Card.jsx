import styles from "./Card.module.css"; // 스타일 파일 생성 필요

export default function Card({ item, onClick }) {
  return (
    <div className={styles.card} onClick={onClick}>
      <div className={styles.card_img_area}>
        <img
          src={`https://image.tmdb.org/t/p/w200/${item.poster_path}`}
          alt={item.title || item.name}
        />
      </div>

      <div className={styles.card_text}>
        <div>{item.title || item.name}</div>
        <p>{item.release_date || item.first_air_date}</p>
      </div>
    </div>
  );
}
