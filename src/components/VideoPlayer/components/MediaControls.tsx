import React from 'react';

import IconReload from '../../../assets/icon/videoPlayer/ic_reload_video.svg';
import IconVideoPause from '../../../assets/icon/videoPlayer/ic_pause_btn.svg';
import IconVideoPlay from '../../../assets/icon/videoPlayer/ic_play_btn.svg';
import IconPrevVideo from '../../../assets/icon/videoPlayer/ic_prev_button.svg';
import IconNextVideo from '../../../assets/icon/videoPlayer/ic_next_button.svg';
import IMediaControls from '../interfaces/IMediaControls';

import styles from '../sass/videoPlayer.module.scss';

function MediaControls({
  isEnded,
  multiPlayer,
  currentVideoIndex,
  onRestartVideo,
  isPlaying,
  onPrevVideo,
  onNextVideo,
  listLength,
  onPlayPause,
  buttonClasses = '',
  isTouchDevice = false,
}: IMediaControls) {
  return (
    <div className={`flex screen-md:absolute screen-md:top-1/2 screen-md:left-1/2 screen-md:-translate-x-1/2
                    screen-md:-translate-y-1/2`}
    >
      <button
        className={`${styles.buttonControls} screen-lg:ml-[20px] ml-[15px] mr-[20px] 
        screen-md:ml-0 screen-md:mr-10`}
        style={{ display: multiPlayer ? 'block' : 'none' }}
        onClick={(e) => (isTouchDevice ? undefined : onPrevVideo(e))}
        onTouchStart={(e) => (isTouchDevice ? onPrevVideo(e) : undefined)}
        disabled={currentVideoIndex === 0}
        type="button"
      >
        <IconPrevVideo className={`${buttonClasses}`} />
      </button>
      <div>
        {isEnded ? (
          <button
            className={`w-14 h-14 screen-lg:w-12 screen-lg:h-12 ${styles.buttonControls} 
            ${buttonClasses}`}
            onClick={(e) => (isTouchDevice ? undefined : onRestartVideo(e))}
            onTouchStart={(e) => (isTouchDevice ? onRestartVideo(e) : undefined)}
            type="button"
          >
            <IconReload className={`${buttonClasses}`} />
          </button>
        ) : (
          <button
            onClick={(e) => (isTouchDevice ? undefined : onPlayPause(e))}
            onTouchStart={(e) => (isTouchDevice ? onPlayPause(e) : undefined)}
            className={`w-14 h-14 screen-lg:w-12 screen-lg:h-12 ${styles.buttonControls}
            ${buttonClasses}`}
            type="button"
          >
            {isPlaying
              ? <IconVideoPause className={`${buttonClasses}`} />
              : <IconVideoPlay className={`${buttonClasses}`} />}
          </button>
        )}
      </div>
      <button
        className={`${styles.buttonControls} screen-lg:ml-[20px] ml-5
        mr-[30px] screen-lg:mr-0 screen-md:ml-10 ${buttonClasses}`}
        onClick={(e) => (isTouchDevice ? undefined : onNextVideo(e))}
        onTouchStart={(e) => (isTouchDevice ? onNextVideo(e) : undefined)}
        style={{ display: multiPlayer ? 'block' : 'none' }}
        disabled={currentVideoIndex === listLength - 1}
        type="button"
      >
        <IconNextVideo className={`${buttonClasses}`} />
      </button>
    </div>
  );
}

export default MediaControls;
