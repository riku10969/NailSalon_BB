import { FaInstagram } from 'react-icons/fa';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer id="site-footer" className={styles.footer}>
      <div className={styles.inner}>
        <img src="/images/logo-footer.svg" alt="BBロゴ" className={styles.logo} />

        <ul className={styles.nav}>
  <li>
    <a href="#about">
      <span className={styles.en}>ABOUT US</span><br />
      <span className={styles.jp}>コンセプト</span>
    </a>
  </li>
  <li>
    <a href="#catalog">
      <span className={styles.en}>CATALOG</span><br />
      <span className={styles.jp}>カタログ</span>
    </a>
  </li>
  <li>
    <a href="#artist">
      <span className={styles.en}>NAILARTIST</span><br />
      <span className={styles.jp}>ネイリスト</span>
    </a>
  </li>
  <li>
    <a href="#shop">
      <span className={styles.en}>SHOP</span><br />
      <span className={styles.jp}>店舗情報</span>
    </a>
  </li>
  <li>
    <a href="#news">
      <span className={styles.en}>NEWS</span><br />
      <span className={styles.jp}>ニュース</span>
    </a>
  </li>
</ul>

        <a href="/coupon" className={styles.coupon}>
  <div className={styles.textBlock}>
    <span className={styles.couponMain}>WEB COUPON</span>
    <span className={styles.couponSub}>予約はコチラ</span>
  </div>
  <span className={styles.arrow}>→</span>
</a>


        <div className={styles.contact}>
          <span className={styles.contactItem} aria-label="Instagram">
            <FaInstagram />
          </span>
          <span className={`${styles.contactItem} ${styles.contactItemTel}`}>TEL：080-1111-2222</span>
        </div>
      </div>

      <div className={styles.credit}>
        <span>© 2025 Nail Salon BB</span>
        <span className={styles.divider}>|</span>
        <span>Designed by Riku</span>
      </div>
    </footer>
  );
}
