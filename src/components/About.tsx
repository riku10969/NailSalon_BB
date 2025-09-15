import styles from './About.module.css';

export default function About() {
  return (
    <section className={styles.aboutSection} id="about">
      <div className={styles.intro}>
        <h2 className={styles.title}>ABOUT</h2>
      <h3 className={styles.subtitle}>ネイルサロン　BB</h3>
        <h3 className={styles.catch}>
          <span className={styles.sub}>Beauty</span><span className={styles.and}>&</span><span className={styles.highlight}>Bloom</span>
        </h3>
        <p className={styles.copy}>
          指先に<span className={styles.pink}>咲く</span>、わたしだけの<span className={styles.blue}>美しさ</span>。
        </p>
        {/* <p className={styles.subCopy}>
          自分らしく輝く瞬間を、ネイルとともに重ねていく
        </p> */}
        <div className={styles.decorations}>
  <img src="/images/chips-left.png" alt="ネイルチップ左" className={styles.chipLeft} />
  <img src="/images/chips-right.png" alt="ネイルチップ右" className={styles.chipRight} />
</div>
      </div>

      <section className={styles.aboutSection} id="about">

  {/* Design */}
  <div className={styles.cardRow}>
        <img src="/images/about_design.jpg" alt="デザインネイル" className={styles.image}/>
        <div className={styles.cardBox}>
          <h4 className={styles.cardTitle}>Design</h4>
          <p>デザインで魅せつけるネイル</p>
          <p>ふんわりと華やぐ上品ネイル。柔らかく凛とした美しさを、あなたの指先へ。</p>
        </div>
      </div>

      <div className={`${styles.cardRow} ${styles.reverse}`}>
        <img src="/images/about_salon.jpg" alt="サロン" className={styles.image}/>
        <div className={styles.cardBox}>
          <h4 className={styles.cardTitle}>Salon</h4>
          <p>快適空間にこだわった店内</p>
          <p>上品なインテリアと穏やかな空気感。清涼さも心地よさも溶け合う特別な時間を。</p>
        </div>
      </div>

      <div className={styles.cardRow}>
        <img src="/images/about_nailist.jpg" alt="ネイリスト施術中" className={styles.image}/>
        <div className={styles.cardBox}>
          <h4 className={styles.cardTitle}>Nailist</h4>
          <p>徹底的なカウンセリング</p>
          <p>お客様の雰囲気、好み、シーンまで考慮して、オーダーメイド感覚のご提案をいたします。</p>
        </div>
      </div>
</section>

    </section>
  );
}
