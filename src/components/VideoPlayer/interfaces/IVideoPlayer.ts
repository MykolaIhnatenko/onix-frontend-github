import { StaticImageData } from 'next/image';
import { Dispatch, SetStateAction } from 'react';

export default interface IVideoPlayerProps {
  src?: string;
  poster?: StaticImageData;
  autoPlayVariant?: boolean;
  mutedVariant?: boolean;
  loopVariant?: boolean;
  withoutBtn?: boolean;
  testimonialVariant?: boolean;
  controls?: boolean;
  linkSource?: boolean;
  id?: number | string;
  buttonText?: string;
  priorityImage?: boolean;
  multiPlayer?: boolean;
  playlist?: {
    id: number;
    src: string;
  }[];
  activeVideo?: number | null,
  setActiveVideo?: Dispatch<SetStateAction<number | null>>
  classes?: {
    container?: string;
    videoPlayer?: string;
    video?: string;
    controls?: string;
    button?: string;
    buttonControls?: string;
    progressBar?: string;
    zoomButton?: string;
  };
}

export interface ICustomHTMLVideoElement extends HTMLVideoElement {
  webkitEnterFullscreen?: () => void;
  enterFullscreen?: () => void;
}
