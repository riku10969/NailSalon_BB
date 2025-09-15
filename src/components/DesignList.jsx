import { useParams } from 'react-router-dom';
import styles from './DesignList.module.css';

const designData = {
  all: [
    '/images/designs/feminine1.jpg',
    '/images/designs/foot1.jpg',
    '/images/designs/wanghong1.jpg',
    '/images/designs/natural1.jpg',
    '/images/designs/casual1.jpg',
    // ...
  ],
  feminine: [
    '/images/designs/feminine1.jpg',
    '/images/designs/feminine2.jpg',
    // ...
  ],
  wanghong: [
    '/images/designs/wanghong1.jpg',
    '/images/designs/casual2.jpg',
    // ...
  ],
  natural: [
    '/images/designs/natural1.jpg',
    '/images/designs/casual2.jpg',
    // ...
  ],
  casual: [
    '/images/designs/casual1.jpg',
    '/images/designs/casual2.jpg',
    // ...
  ],
  foot: [
    '/images/designs/foot1.jpg',
    '/images/designs/casual2.jpg',
    // ...
  ],
  // 他のカテゴリも追加
};

export default function DesignList() {
  const { category } = useParams();
  const images = designData[category] || [];

  return (
    <section className={styles.designList}>
      <h2 className={styles.title}>{category.toUpperCase()}</h2>
      <div className={styles.grid}>
        {images.map((src, i) => (
          <div key={i} className={styles.imageBox}>
            <img src={src} alt={`design-${i}`} />
          </div>
        ))}
      </div>
    </section>
  );
}
