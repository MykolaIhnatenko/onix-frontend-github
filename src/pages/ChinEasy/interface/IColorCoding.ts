import { StaticImageData } from 'next/image';

export default interface IColorCoding {
  img: StaticImageData;
  title: string;
  color: string;
  value: string;
}
