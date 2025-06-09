import { MouseEventHandler } from 'react';

interface IProgressBar {
  duration: number;
  currentTime: number;
  onProgressHover: MouseEventHandler<HTMLInputElement>;
  onProgressLive: () => void;
  onSeekTo: (time: number) => void;
  hoverPosition: number | null;
  hoverTime: number | null;
  progressBarClasses?: string;
}

export default IProgressBar;
