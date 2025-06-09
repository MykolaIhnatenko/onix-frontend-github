import PropTypes from 'prop-types';
import { useState } from 'react';

import { SM_DEVICE } from '../../../constants/constants';
import useWindowSize from '../../../hook/useWindowSize';

import styles from './sass/VideoBLock.module.scss';

function VideoBlock({
  imgSrc, videoSrc, children, videoId, imageComponent,
}) {
  const { width } = useWindowSize();
  const isMobile = width < SM_DEVICE;
  const [videoStarted, setVideoStarted] = useState(false);

  const playVideo = (event) => {
    event.preventDefault();
    document.getElementById(videoId)
      .play();
    setVideoStarted(true);
  };

  const stopVideo = (event) => {
    event.preventDefault();
    document.getElementById(videoId)
      .pause();
    setVideoStarted(false);
  };

  const getClassName = () => (videoStarted ? styles.hidden : '');

  return (isMobile ? (
    imageComponent
  ) : (
    <div
      className={`${styles.video} ${styles[videoId]}`}
    >
      <video
        id={videoId}
        poster={imgSrc}
        controls=""
        src={videoSrc}
        onClick={stopVideo}
        onEnded={() => setVideoStarted(false)}
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
  )
  );
}

VideoBlock.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  videoSrc: PropTypes.string.isRequired,
  videoId: PropTypes.string.isRequired,
  children: PropTypes.node,
  imageComponent: PropTypes.node,
};

VideoBlock.defaultProps = {
  children: null,
  imageComponent: null,
};

export default VideoBlock;
