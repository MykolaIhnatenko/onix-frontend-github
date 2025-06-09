import { StaticImageData } from 'next/image';

export default interface IAnimProjectDetailsVr {
  title?: string;
  background?: StaticImageData;
  contentBlock?: React.ReactNode;
  classes?: {
    container?: string;
    bgContainer?: string;
    titleBox?: string;
    contentBlock?: string;
  };
}
