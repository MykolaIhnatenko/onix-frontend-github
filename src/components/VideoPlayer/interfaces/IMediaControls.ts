import React from 'react';

interface IMediaControls {
  isEnded: boolean,
  multiPlayer: boolean,
  isPlaying: boolean,
  onRestartVideo: (event: React.MouseEvent<HTMLElement> | React.TouchEvent<HTMLButtonElement>) => void,
  onPrevVideo: (event: React.MouseEvent<HTMLElement> | React.TouchEvent<HTMLButtonElement>) => void,
  onNextVideo: (event: React.MouseEvent<HTMLElement> | React.TouchEvent<HTMLButtonElement>) => void,
  onPlayPause: (event: React.MouseEvent<HTMLElement> | React.TouchEvent<HTMLButtonElement>) => void,
  currentVideoIndex: number,
  listLength: number,
  buttonClasses?: string,
  isTouchDevice: boolean,
}

export default IMediaControls;
