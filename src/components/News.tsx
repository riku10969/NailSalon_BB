import { useState } from 'react';
import styles from './News.module.css';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';


const newsList = [
  {
    id: 'summer-design',
    date: '2025.07.18',
    category: '新デザイン',
    content: '夏限定！ひまわりネイル登場🌻',
    image: '/images/news1.jpg',
  },
  {
    id: 'coupon',
    date: '2025.07.12',
    category: 'お知らせ',
    content: 'ご新規様限定クーポン配布中🎁',
    image: '/images/news2.jpg',
  },
  {
    id: 'august-schedule',
    date: '2025.07.05',
    category: '営業情報',
    content: '8月の営業日程を公開しました。',
    image: '/images/news3.jpg',
  },
  {
    id: 'grand-open',
    date: '2025.07.01',
    category: 'ニューオープン',
    content: '🎉 ネイルサロンBBが所沢にグランドオープンしました！',
    image: '/images/news4.jpg',
  },
  {
    id: 'media-feature',
    date: '2025.07.20',
    category: 'メディア掲載',
    content: '雑誌「nailist 8月号」に当店が掲載されました📰',
    image: '/images/news5.jpg',
  },
];

export default function News() {
  //const [showAll, setShowAll] = useState(false);
  //const visibleNews = showAll ? newsList : newsList.slice(0, 3);
  const visibleNews = newsList;

  return (
    <section id="news" className={styles.newsSection}>
      <h2 className={styles.title}>NEWS</h2>
      <p className={styles.subtitle}>お知らせ</p>

      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={20}
        slidesPerView={1.2}
        breakpoints={{
          768: { slidesPerView: 2.5 },
          1024: { slidesPerView: 3 },
        }}
      >
        {visibleNews.map((item) => (
          <SwiperSlide key={item.id}>
            <div className={styles.card}>
              <img src={item.image} alt="" className={styles.image} />
              <span className={styles.category}>{item.category}</span>
              <p className={styles.date}>{item.date}</p>
              <p className={styles.content}>{item.content}</p>
              <Link to={`/news/${item.id}`} className={styles.readMore}>
                →続きを読む
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* ⭐ もっと見るボタン */}
      {/*{!showAll && (
        <button
          className={styles.moreButton}
          onClick={() => setShowAll(true)}
        >
          もっと見る
        </button>
      )}*/}
    </section>
  );
}
