'use client';

import styles from '../sass/achievementsGradientBackground.module.scss';

function AchievementsGradientBackground() {
  return (
    <div
      className={styles.gradientBg}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={styles.noiseBg}
      >
        <filter
          id="achievementsNoiseFilterBg"
        >
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.6"
            stitchTiles="stitch"
          />
        </filter>
        <rect
          width="100%"
          height="100%"
          filter="url(#noiseFilterBgAchiv)"
        />
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

export default AchievementsGradientBackground;
