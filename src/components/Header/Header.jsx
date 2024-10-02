import styles from "./Header.module.css";

export default function Header({ setCurrentPage }) {
  return (
    <header>
      <div className={styles.header_conteiner}>
        <div
          className={styles.title}
          onClick={() => setCurrentPage("mainPage")}
        >
          TMDB
        </div>
        <nav>
          <ul>
            <li onClick={() => setCurrentPage("movies")}>영화</li>
            <li onClick={() => setCurrentPage("tv")}>TV프로그램</li>
            <li>인물</li>
            <li>더보기</li>
          </ul>
          <ul>
            <li>로그인</li>
            <li>회원가입</li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
