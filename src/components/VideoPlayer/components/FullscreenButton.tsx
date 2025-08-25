import React from 'react';

import IFullscreenButton from '../interfaces/IFullscreenButton';
import IconZoomOut from '../../../assets/icon/videoPlayer/ic_zoom_out.svg';
import IconZoomIn from '../../../assets/icon/videoPlayer/ic_zoom_in.svg';
import { useAppDispatch, useAppSelector } from '../../../hook/reduxToolkit';
import { setVideoFullScreen } from '../../../store/app/videoFullScreenSlice/slice';

import styles from '../sass/videoPlayer.module.scss';

function FullscreenButton({ classes = '' }: IFullscreenButton) {
  const { videoFullScreen } = useAppSelector((state) => state?.videoFullScreen);
  const dispatch = useAppDispatch();

  const toggleFullscreen = () => {
    if (videoFullScreen) {
      dispatch(setVideoFullScreen(false));
    } else {
      dispatch(setVideoFullScreen(true));
    }
  };

  return (
    <button
      onClick={toggleFullscreen}
      type="button"
      className={`
        ${styles.buttonControls}
        ml-[30px] screen-lg:ml-[20px] screen-md:ml-[15px] screen-md:mb-[12px]
        ${classes}
      `}
    >
      <span className="w-[24px] h-[24px] block">
        {videoFullScreen ? (
          <IconZoomOut />
        ) : (
          <IconZoomIn />
        )}
      </span>
    </button>
  );
}

export default FullscreenButton;
