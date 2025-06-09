import React from 'react';

import IFullscreenButton from '../interfaces/IFullscreenButton';
import useScrollBlocked from '../../../hook/useScrollBlocked';
import IconZoomOut from '../../../assets/icon/videoPlayer/ic_zoom_out.svg';
import IconZoomIn from '../../../assets/icon/videoPlayer/ic_zoom_in.svg';

import styles from '../sass/videoPlayer.module.scss';

function FullscreenButton({ isFullscreen, onClick, classes = '' }: IFullscreenButton) {
  useScrollBlocked(isFullscreen);

  return (
    <button
      onClick={onClick}
      type="button"
      className={`
        ${styles.buttonControls}
        ml-[30px] screen-lg:ml-[20px] screen-md:ml-[15px] screen-md:mb-[12px]
        ${classes}
      `}
    >
      <span className="w-[24px] h-[24px] block">
        {isFullscreen ? (
          <IconZoomOut />
        ) : (
          <IconZoomIn />
        )}
      </span>
    </button>
  );
}

export default FullscreenButton;
