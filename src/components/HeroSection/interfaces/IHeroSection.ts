import { StaticImageData } from 'next/image';

export default interface IHeroSection {
  title: string | React.ReactNode;
  backgroundImg: StaticImageData;
  styleTitleContainer?: string;
  styleContainer?: string;
}
