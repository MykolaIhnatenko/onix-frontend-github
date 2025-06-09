import { StaticImageData } from 'next/image';
import { ReactNode } from 'react';

interface IGameArtMainScreen {
  title: ReactNode;
  firstText: string;
  secondText: string;
  blockBg: StaticImageData;
  video: string;
  btnText: string;
  classes?: {
    videoPlayer?: string;
    video?: string;
    container?: string;
  }
}

export default IGameArtMainScreen;
