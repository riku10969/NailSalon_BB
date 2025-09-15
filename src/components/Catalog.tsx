import { Link } from 'react-router-dom';
import styles from './Catalog.module.css';

const catalogItems = [
  {
    image: '/images/catalog/all.jpg',
    titleEn: 'ALL CATALOG',
    titleJa: '全カテゴリ',
    slug: 'all',
  },
  {
    image: '/images/catalog/feminine.jpg',
    titleEn: 'FEMININE',
    titleJa: 'フェミニン',
    slug: 'feminine',
  },
  {
    image: '/images/catalog/casual.jpg',
    titleEn: 'CASUAL',
    titleJa: 'カジュアル',
    slug: 'casual',
  },
  {
    image: '/images/catalog/natural.jpg',
    titleEn: 'NATURAL',
    titleJa: 'ナチュラル',
    slug: 'natural',
  },
  {
    image: '/images/catalog/wanghong.jpg',
    titleEn: 'WANGHONG',
    titleJa: 'ワンホン',
    slug: 'wanghong',
  },
  {
    image: '/images/catalog/foot.jpg', // 画像なしでも表示
    titleEn: 'FOOT',
    titleJa: 'フットネイル',
    slug: 'foot',
  },
];

export default function Catalog() {
  return (
    <section id="catalog" className={styles.catalogSection}>
      <h2 className={styles.title}>CATALOG</h2>
      <h3 className={styles.subtitle}>ネイルカタログ</h3>

<div className={styles.grid}>
  {catalogItems.map((item, index) => (
    <Link to={`/design/${item.slug}`} className={styles.card} key={index}>
      {item.image && <img src={item.image} alt={item.titleEn} className={styles.image} />}
      <div className={styles.caption}>
        <strong>{item.titleEn}</strong>
        <span>{item.titleJa}</span>
      </div>
      <span className={styles.arrow}>▶</span>
    </Link>
  ))}
</div>
    </section>
  );
}
