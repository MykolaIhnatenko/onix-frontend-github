import { StaticImageData } from 'next/image';

import { ICaseStudiesData } from 'components/ScrollSliderDefault/interfaces/IScrollSliderDefault';

export default interface IDragInfoBlock {
  name?: string;
  title?: string;
  backgroundImg?: StaticImageData;
  data: ICaseStudiesData[];
  classes?: {
    section?: string;
    bgContainer?: string;
    img?: string;
    container?: string;
    name?: string;
    titleBlock?: string;
  }
}
