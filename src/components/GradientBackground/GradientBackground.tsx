import { useSelector } from 'react-redux';
import { useEffect, useRef, useState } from 'react';

import IStore from 'store/interfaces/IStore';
import IGradientBackground from './interfaces/IGradientBackground';
import { IApp } from 'store/app/interfaces/IApp';

import styles from './sass/gradientBackground.module.scss';

export default function GradientBackground({ lightMode = false, id = 'noiseFilterBg' }: IGradientBackground) {
  const {
    screenSizes: { screenWidth },
  } = useSelector<IStore, IApp>((state) => state?.app);

  const cursorFollowerVisible = screenWidth > 1024;
  const [coordinates, setCoordinates] = useState({ left: 0, top: -15 });

  const mouseX = useRef(0);
  const mouseY = useRef(0);
  const animFrame = useRef<number>();

  useEffect(() => {
    if (!lightMode && cursorFollowerVisible) {
      const handleMouseMove = (event: MouseEvent) => {
        if (Number.isFinite(event.clientX) && Number.isFinite(event.clientY)) {
          mouseX.current = event.clientX;
          mouseY.current = event.clientY;
        }
      };

      window.addEventListener('mousemove', handleMouseMove);

      let x = mouseX.current;
      let y = mouseY.current;

      const animate = () => {
        x += (mouseX.current - x) * 0.15;
        y += (mouseY.current - y) * 0.15;

        setCoordinates({ left: x, top: y });

        animFrame.current = requestAnimationFrame(animate);
      };

      animFrame.current = requestAnimationFrame(animate);

      return () => {
        if (animFrame.current !== undefined) {
          cancelAnimationFrame(animFrame.current);
        }
        window.removeEventListener('mousemove', handleMouseMove);
      };
    }

    return undefined;
  }, [lightMode, cursorFollowerVisible]);

  return (
    <div className={`${styles.gradientBg} ${lightMode ? styles.lightMode : ''}`}>
      <svg xmlns="http://www.w3.org/2000/svg" className={styles.noiseBg}>
        <filter id={id}>
          <feTurbulence type="fractalNoise" baseFrequency="0.6" stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#noiseFilterBg)" />
      </svg>
      <div className={styles.gradientsContainer}>
        <div className={styles.g1} />
        <div className={styles.g2} />
        <div className={styles.g3} />
        <div className={styles.g4} />
        <div className={styles.g5} />
        {cursorFollowerVisible && !lightMode && (
          <div
            className={styles.interactive}
            style={{
              transform: `translate(-50%, -50%) translate(${coordinates.left}px, ${coordinates.top}px)`,
            }}
          />
        )}
      </div>
    </div>
  );
}
