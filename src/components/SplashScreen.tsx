import { useEffect, useState } from 'react';
import styles from './SplashScreen.module.css';

export default function SplashScreen({ onFinish }: { onFinish: () => void }) {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timeout1 = setTimeout(() => setFadeOut(true), 2000); // 2秒後にフェードアウト
    const timeout2 = setTimeout(() => onFinish(), 3000);       // 3秒後に非表示

    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
    };
  }, [onFinish]);

  return (
    <div className={`${styles.splash} ${fadeOut ? styles.fadeOut : ''}`}>
      <div className={styles.blueCircle}></div> 
      <img src="/images/logo3.svg" alt="Logo" className={styles.logo} />
    </div>
  );
}
