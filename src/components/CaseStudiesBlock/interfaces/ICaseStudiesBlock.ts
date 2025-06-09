import { StaticImageData } from 'next/image';

interface ICaseStudiesBlock {
  sliderIds: number[];
  upTitle?: string;
  title?: string;
  desc?: string;
  desc2?: string;
  background?: StaticImageData;
  saleUrl?: boolean;
  classes?: {
    section?: string;
    bgContainer?: string;
    bgImg?: string;
    container?: string;
    upTitle?: string;
    title?: string;
    desc?: string;
    desc2?: string;
  };
}

export default ICaseStudiesBlock;
