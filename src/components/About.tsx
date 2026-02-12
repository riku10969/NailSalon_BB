import { useRef, useEffect, useState } from 'react';
import styles from './About.module.css';

const PARALLAX_FACTOR = 1.1;
/** 右側の花を左より下に表示するオフセット（px） */
const RIGHT_FLOWER_OFFSET = 160;

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const flowerLeftRef = useRef<HTMLDivElement>(null);
  const flowerRightRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const rafIdRef = useRef<number>(0);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const updateParallax = () => {
      const section = sectionRef.current;
      const left = flowerLeftRef.current;
      const right = flowerRightRef.current;
      if (!section || !left || !right) return;
      const rect = section.getBoundingClientRect();
      const y = rect.top * PARALLAX_FACTOR;
      left.style.transform = `translateY(calc(-50% + ${y}px))`;
      right.style.transform = `translateY(calc(-50% + ${y + RIGHT_FLOWER_OFFSET}px))`;
    };

    const onScroll = () => {
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
      rafIdRef.current = requestAnimationFrame(() => {
        updateParallax();
        rafIdRef.current = 0;
      });
    };

    updateParallax();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', updateParallax);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', updateParallax);
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
    };
  }, []);

  return (
    <section className={styles.aboutSection} id="about" ref={sectionRef}>
      <div
        ref={flowerLeftRef}
        className={styles.parallaxFlower}
        aria-hidden
      >
        <img src="/images/blueflower.png" alt="" className={styles.flowerImg} />
      </div>
      <div
        ref={flowerRightRef}
        className={`${styles.parallaxFlower} ${styles.parallaxFlowerRight}`}
        aria-hidden
      >
        <img src="/images/pinkflower.png" alt="" className={styles.flowerImg} />
      </div>

      <div className={styles.intro}>
        <h2 className={styles.title}>ABOUT</h2>
        <h3 className={styles.subtitle}>ネイルサロン　BB</h3>
        <h3 className={styles.catch}>
          <span className={styles.sub}>Beauty</span><span className={styles.and}>&</span><span className={styles.highlight}>Bloom</span>
        </h3>
        <p className={styles.copy}>
          指先に<span className={styles.pink}>咲く</span>、わたしだけの<span className={styles.blue}>美しさ</span>。
        </p>
        <div className={styles.decorations}>
          <img src="/images/chips-left.png" alt="ネイルチップ左" className={styles.chipLeft} />
          <img src="/images/chips-right.png" alt="ネイルチップ右" className={styles.chipRight} />
        </div>
      </div>

      <div className={styles.cardsWrapper}>
        <div className={`${styles.cardRow} ${isVisible ? styles.visible : ''}`} style={{ animationDelay: '0s' }}>
          <img src="/images/about_design.jpg" alt="デザインネイル" className={styles.image} />
          <div className={styles.cardBox}>
            <h4 className={`${styles.cardTitle} ${styles.cardTitleBlue}`}>Design</h4>
            <p>デザインで魅せつけるネイル</p>
            <p>ふんわりと華やぐ上品ネイル。柔らかく凛とした美しさを、あなたの指先へ。</p>
          </div>
        </div>

        <div className={`${styles.cardRow} ${styles.reverse} ${isVisible ? styles.visible : ''}`} style={{ animationDelay: '0.15s' }}>
          <img src="/images/about_salon.jpg" alt="サロン" className={styles.image} />
          <div className={styles.cardBox}>
            <h4 className={styles.cardTitle}>Salon</h4>
            <p>快適空間にこだわった店内</p>
            <p>上品なインテリアと穏やかな空気感。清涼さも心地よさも溶け合う特別な時間を。</p>
          </div>
        </div>

        <div className={`${styles.cardRow} ${isVisible ? styles.visible : ''}`} style={{ animationDelay: '0.3s' }}>
          <img src="/images/about_nailist.jpg" alt="ネイリスト施術中" className={styles.image} />
          <div className={styles.cardBox}>
            <h4 className={`${styles.cardTitle} ${styles.cardTitleBlue}`}>Nailist</h4>
            <p>徹底的なカウンセリング</p>
            <p>お客様の雰囲気、好み、シーンまで考慮して、オーダーメイド感覚のご提案をいたします。</p>
          </div>
        </div>
      </div>
    </section>
  );
}
