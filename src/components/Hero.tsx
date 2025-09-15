import React, { useState, useEffect } from 'react';
import styles from './Hero.module.css';

const images = [
  '/images/hero1.png',
  '/images/hero2.png',
  '/images/hero3.png',
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000); // 5秒ごとに切り替え
    return () => clearInterval(timer);
  }, []);

  return (
    <section className={styles.hero}>
      {images.map((image, index) => (
        <div
          key={index}
          className={`${styles.slide} ${index === current ? styles.active : ''}`}
          style={{ backgroundImage: `url(${image})` }}
        >
          <div className={styles.overlay}>
            <div className={styles.content}>
               <h1 className={styles.title}>
          指先に<span className={styles.pink}>咲く</span>、わたしだけの<span className={styles.blue}>美しさ</span>。
        </h1>
              {/* <h1 className={styles.title}>あなたらしさを、もっと自由に。</h1> */}
              {/* <p className={styles.subtitle}>BBネイルサロンは、あなたの美しさを引き出します</p> */}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Hero;
