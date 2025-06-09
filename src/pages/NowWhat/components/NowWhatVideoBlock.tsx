import { useRef, useState } from 'react';

import { INowWhatVideoBlock } from '../interfaces/INowWhatVideoBlock';

import styles from '../sass/NowWhatVideoBLock.module.scss';

function NowWhatVideoBlock({
  imgSrc, videoSrc, children, videoId,
}: INowWhatVideoBlock) {
  const [videoStarted, setVideoStarted] = useState(false);
  const ref = useRef<HTMLVideoElement>(null);
  const playVideo = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.preventDefault();
    ref.current?.play().catch(() => {});
    setVideoStarted(true);
  };

  const stopVideo = (event: React.MouseEvent<HTMLVideoElement, MouseEvent>) => {
    event.preventDefault();
    ref.current?.pause();
    setVideoStarted(false);
  };

  const getClassName = () => (videoStarted ? styles.hidden : '');

  return (
    <div
      className={`${styles.videoWrapper} ${styles[videoId]}`}
    >
      <video
        poster={imgSrc}
        controls={false}
        src={videoSrc}
        onClick={stopVideo}
        onEnded={() => setVideoStarted(false)}
        ref={ref}
      >
        <track kind="captions" src={videoSrc} />
      </video>
      <div
        className={`${styles.cover} ${getClassName()}`}
        onClick={playVideo}
        role="presentation"
      >
        <div className={styles.playButton}>
          {children}
        </div>
      </div>
    </div>
  );
}

export default NowWhatVideoBlock;
