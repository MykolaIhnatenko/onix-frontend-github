'use client';

import IGradientBackground from './interfaces/IGradientBackground';

import styles from './sass/gradientBackground.module.scss';

export default function GradientBackground({ lightMode = false }:IGradientBackground) {
  return (
    <div className={`${styles.gradientBg} ${lightMode ? styles.lightMode : ''}`}>
      <svg viewBox="0 0 100vw 100vw" xmlns="http://www.w3.org/2000/svg" className={styles.noiseBg}>
        <filter id="noiseFilterBg">
          <feTurbulence type="fractalNoise" baseFrequency="0.6" stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" preserveAspectRatio="xMidYMid meet" filter="url(#noiseFilterBg)" />
      </svg>
      <div className={styles.gradientsContainer}>
        <div className={styles.g1} />
        <div className={styles.g2} />
        <div className={styles.g3} />
        <div className={styles.g4} />
        <div className={styles.g5} />
      </div>
    </div>
  );
}
