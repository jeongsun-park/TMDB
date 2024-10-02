import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer>
      <div className={styles.footer_conteiner}>
        <div className={styles.footer_text}>
          <h4>
            이 사이트는 TMDB API를 사용하여 영화 및 TV 프로그램 정보를
            제공합니다.
          </h4>
          <ul>
            <li>서비스 약관</li>
            <li>개인정보 처리방침</li>
            <li>도움말 센터</li>
          </ul>
          <p>© 2024 TMDB. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
