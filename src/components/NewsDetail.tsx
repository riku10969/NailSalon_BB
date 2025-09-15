import { useParams } from 'react-router-dom';
import styles from './NewsDetail.module.css';

const newsList = [
  {
    id: 'summer-design',
    date: '2025.07.18',
    category: '新デザイン',
    title: '夏限定！ひまわりネイル登場🌻',
    image: '/images/news1.jpg',
    body: 'この夏限定の新デザイン「ひまわりネイル」が登場！明るく元気な指先で夏を楽しみませんか？',
  },
  {
    id: 'coupon',
    date: '2025.07.12',
    category: 'お知らせ',
    title: 'ご新規様限定クーポン配布中🎁',
    image: '/images/news2.jpg',
    body: 'ご来店が初めてのお客様へ、500円OFFのクーポンを配布中です。詳しくはスタッフまで♪',
  },
  {
    id: 'august-schedule',
    date: '2025.07.05',
    category: '営業情報',
    title: '8月の営業日程を公開しました。',
    image: '/images/news3.jpg',
    body: '8月は通常通り営業いたしますが、お盆期間は混雑が予想されますので早めのご予約をおすすめします。',
  },
  {
    id: 'grand-open',
    date: '2025.07.01',
    category: 'ニューオープン',
    title: '🎉 ネイルサロンBB 所沢にオープン！',
    image: '/images/news4.jpg',
    body: 'ついにオープンしました！皆さまに心地よい時間を提供できるよう努めてまいります。ぜひお越しください。',
  },
  {
    id: 'media-feature',
    date: '2025.07.20',
    category: 'メディア掲載',
    title: '雑誌「nailist」に掲載されました📰',
    image: '/images/news5.jpg',
    body: '人気ネイル誌「nailist」にて、当店のデザインが紹介されました。誌面でもご確認ください♪',
  },
];

export default function NewsDetail() {
  const { id } = useParams();
  const article = newsList.find((item) => item.id === id);

  if (!article) {
    return <p style={{ padding: '40px' }}>記事が見つかりませんでした。</p>;
  }

  return (
    <div className={styles.detail}>
      <h2>{article.title}</h2>
      <p className={styles.meta}>
        {article.date} / {article.category}
      </p>
      <img src={article.image} alt={article.title} className={styles.image} />
      <p className={styles.body}>{article.body}</p>
    </div>
  );
}
