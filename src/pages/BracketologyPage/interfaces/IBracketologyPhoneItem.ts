import { StaticImageData } from 'next/image';

export interface IBracketologyPhoneItem {
  children: React.ReactNode,
  imgSrc: StaticImageData,
  itemClass?: 'secondPhoneItem',
}
