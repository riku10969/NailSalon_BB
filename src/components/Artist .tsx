import { FaInstagram } from 'react-icons/fa';
import styles from './Artist.module.css';

export default function Artist() {
  return (
    <section id="artist" className={styles.artistSection}>
      <h2 className={styles.title}>NAIL ARTIST</h2>
      <p className={styles.subtitle}>ネイリスト</p>

      <div className={styles.container}>
        <div className={styles.imageWrapper}>
          <img src="/images/artist.jpg" alt="SORA" />
        </div>
        <div className={styles.profile}>
          <h3 className={styles.name}>SORA</h3>
          <p className={styles.description}>
            ネイルサロンでの豊富な経験を生かし、一人ひとりのご希望に寄り添った施術を心がけています。
            クイックネイル（短時間施術）にも対応可能で、忙しい方でも美しく仕上げます。
            細部までこだわり、上品で洗練された指先をご提供します。
          </p>
          <p className={styles.instagram}>
            {/* ここが重要！ classNameをdivなどにしてテキストと分離 */}
            <span className={styles.icon}><FaInstagram /></span>
            Instagram：
            <a
              href="https://www.instagram.com/ABCabc123"
              target="_blank"
              rel="noreferrer"
            >
              @ABCabc123
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
