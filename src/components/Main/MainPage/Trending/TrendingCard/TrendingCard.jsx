import styles from "./TrendingCard.module.css";

export default function TrendingCard({ item }) {
  const imgUrl = `https://image.tmdb.org/t/p/w200/${item.poster_path}`;
  return (
    <div className={styles.trendingCard}>
      <img src={imgUrl} alt="" />
    </div>
  );
}
