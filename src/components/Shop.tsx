import styles from './Shop.module.css';

export default function Shop() {
  return (
    <section id="shop"className={styles.shopSection}>
      <h2 className={styles.title}>SHOP</h2>
      <p className={styles.subtitle}>店舗情報</p>

      <div className={styles.content}>
        <div className={styles.imageWrapper}>
          <img src="/images/shop.jpg" alt="店舗外観" />
        </div>

        <div className={styles.info}>
          <p className={styles.address}>
            〒350-1123 埼玉県所沢市日吉町◯◯-×× <br />
            ◯◯ビル 2階<br />
            所沢駅から徒歩〇分
          </p>

          <p className={styles.map}>
            📍{' '}
            <a
              href="https://www.google.com/maps"
              target="_blank"
              rel="noreferrer"
            >
              Google Mapで見る
            </a>
          </p>
          <p className={styles.hours}>
  🕒 営業時間：10:00〜19:00（最終受付 17:30）<br />
  🚪 定休日：水曜日
</p>

          <p className={styles.tel}>📞 TEL：080-1111-2222</p>
        </div>
      </div>
    </section>
  );
}
