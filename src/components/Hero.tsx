import React, { useState, useEffect } from "react";
import styles from "./Hero.module.css";

// 画像パスと表示位置をまとめて定義
const IMAGES = [
  { src: "/images/hero1.png", pos: "center 20%" },
  { src: "/images/hero2.png", pos: "center 50%" },
  { src: "/images/hero3.png", pos: "center -20%" },
] as const;

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % IMAGES.length);
    }, 5000); // 5秒ごとに切り替え
    return () => clearInterval(timer);
  }, []); // IMAGESは不変なので依存なしでOK

  return (
    <section className={styles.hero}>
      {IMAGES.map((img, index) => (
        <div
          key={img.src}
          className={`${styles.slide} ${index === current ? styles.active : ""}`}
          style={{
            backgroundImage: `url(${img.src})`,
            backgroundPosition: img.pos,
          }}
        >
          <div className={styles.overlay}>
            <div className={styles.content}>
              <h1 className={styles.title}>
                指先に<span className={styles.pink}>咲く</span>、
                わたしだけの<span className={styles.blue}>美しさ</span>。
              </h1>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
