import { StaticImageData } from 'next/image';

import { IBorderedColumn } from 'components/TwoBorderedColumnsAnim/interfaces/ITwoBorderedColumnsAnim';

export default interface IBorderedColumns {
  title: string;
  data: IBorderedColumn[];
  background: StaticImageData;
  isMobile: boolean;
}
