import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styles from './Header.module.css';

export default function Header() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [footerVisible, setFooterVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  useEffect(() => {
    const onEscape = (e: KeyboardEvent) => { if (e.key === 'Escape') setIsOpen(false); };
    if (isOpen) {
      document.addEventListener('keydown', onEscape);
      return () => document.removeEventListener('keydown', onEscape);
    }
  }, [isOpen]);

  useEffect(() => {
    if (location.pathname !== '/') {
      setFooterVisible(false);
      return;
    }
    let observer: IntersectionObserver | null = null;
    const tryAttach = () => {
      const footer = document.getElementById('site-footer');
      if (footer) {
        observer = new IntersectionObserver(
          ([entry]) => setFooterVisible(entry.isIntersecting),
          { threshold: 0.1 }
        );
        observer.observe(footer);
        return true;
      }
      return false;
    };
    if (!tryAttach()) {
      const id = setInterval(() => { if (tryAttach()) clearInterval(id); }, 200);
      const t = setTimeout(() => clearInterval(id), 5000);
      return () => { clearInterval(id); clearTimeout(t); if (observer) observer.disconnect(); };
    }
    return () => { if (observer) observer.disconnect(); };
  }, [location.pathname]);

  return (
    <header className={`${styles.header} ${footerVisible ? styles.headerHidden : ''}`}>
      <div className={styles.inner}>
        <a href="/" className={styles.logo}>
          <img src="/images/logoHeader.svg" alt="BBロゴ" className={styles.logo} />
        </a>

        <nav className={`${styles.nav} ${isOpen ? styles.open : ''}`} aria-hidden={!isOpen}>
          <ul className={styles.navList}>
            <li><a href="#about" onClick={() => setIsOpen(false)}><span className={styles.en}>ABOUT US</span> <span className={styles.jp}>コンセプト</span></a></li>
            <li><a href="#catalog" onClick={() => setIsOpen(false)}><span className={styles.en}>CATALOG</span> <span className={styles.jp}>ネイルカタログ</span></a></li>
            <li><a href="#shop" onClick={() => setIsOpen(false)}><span className={styles.en}>SHOP</span> <span className={styles.jp}>店舗情報</span></a></li>
            <li><a href="#news" onClick={() => setIsOpen(false)}><span className={styles.en}>NEWS</span> <span className={styles.jp}>ニュース</span></a></li>
            <li><a href="#artist" onClick={() => setIsOpen(false)}><span className={styles.en}>NAIL ARTIST</span> <span className={styles.jp}>ネイリスト</span></a></li>
          </ul>
          <a href="/coupon" className={styles.reserveBtnMobile} onClick={() => setIsOpen(false)}>
            <span className={styles.en}>WEB COUPON</span>
            <span className={styles.jp}>予約はコチラ</span>
          </a>
        </nav>

        {/* カーテン用オーバーレイ（クリックで閉じる） */}
        <div
          className={`${styles.overlay} ${isOpen ? styles.overlayOpen : ''}`}
          onClick={() => setIsOpen(false)}
          role="button"
          tabIndex={-1}
          aria-label="メニューを閉じる"
        />

        <a href="/coupon" className={styles.reserveBtn}>
          <span className={styles.en}>WEB COUPON</span>
          <span className={styles.jp}>予約はコチラ</span>
        </a>

        <button
          className={styles.menuBtn}
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'メニューを閉じる' : 'メニューを開く'}
          aria-expanded={isOpen}
        >
          {isOpen ? '×' : '☰'}
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
