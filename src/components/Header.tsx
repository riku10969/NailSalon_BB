import { useState } from 'react';
import styles from './Header.module.css';
import logo from '../assets/logo.svg'; // 任意のロゴ画像パスに変更

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <a href="#" className={styles.logo}>
          <img src="/images/logoHeader.svg" alt="BBロゴ" className={styles.logo} />
        </a>

        <nav className={`${styles.nav} ${isOpen ? styles.open : ''}`}>
          <ul className={styles.navList}>
            <li><a href="#about"onClick={() => setIsOpen(false)}><span className={styles.en}>ABOUT US</span><span className={styles.jp}>コンセプト</span></a></li>
            <li><a href="#catalog"onClick={() => setIsOpen(false)}><span className={styles.en}>CATALOG</span><span className={styles.jp}>ネイルカタログ</span></a></li>
            <li><a href="#shop"onClick={() => setIsOpen(false)}><span className={styles.en}>SHOP</span><span className={styles.jp}>店舗情報</span></a></li>
            <li><a href="#news"onClick={() => setIsOpen(false)}><span className={styles.en}>NEWS</span><span className={styles.jp}>ニュース</span></a></li>
            <li><a href="#artist"onClick={() => setIsOpen(false)}><span className={styles.en}>NAIL ARTIST</span><span className={styles.jp}>ネイリスト</span></a></li>
          </ul>
        </nav>

        <a href="/coupon" className={styles.reserveBtn}>
          <span className={styles.en}>WEB COUPON</span>
          <span className={styles.jp}>予約はコチラ</span>
        </a>

        <button
          className={styles.menuBtn}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="メニュー"
        >
          ☰
        </button>
      </div>
    </header>
  );
}


// import { Link } from 'react-router-dom';
// import styles from './Header.module.css';

// export default function Header() {
//   return (
//     <header className={styles.header}>
//       <div className={styles.inner}>
//         {/* ロゴ */}
//         <div className={styles.logo}>
//           <img src="/images/logoHeader.svg" alt="BB Nail Salon Logo" />
//         </div>

//         {/* ナビゲーション */}
//         <nav className={styles.nav}>
//           <ul className={styles.navList}>
//             <li><a href="/#about"><span className={styles.en}>ABOUT US</span><span className={styles.jp}>コンセプト</span></a></li>
//             <li><a href="/#catalog"><span className={styles.en}>CATALOG</span><span className={styles.jp}>ネイルカタログ</span></a></li>
//             <li><a href="/#shop"><span className={styles.en}>SHOP</span><span className={styles.jp}>店舗情報</span></a></li>
//             <li><a href="/#news"><span className={styles.en}>NEWS</span><span className={styles.jp}>ニュース</span></a></li>
//             <li><a href="/#artist"><span className={styles.en}>NAIL ARTIST</span><span className={styles.jp}>ネイリスト</span></a></li>
//           </ul>
//         </nav>

//         {/* クーポンボタン */}
//         <Link to="/Coupon" className={styles.reserveBtn}>
//           WEB COUPON<br /><span className={styles.jp}>予約はコチラ</span>
//         </Link>
//       </div>
//     </header>
//   );
// }
