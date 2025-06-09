import { StaticImageData } from 'next/image';

export interface IJSASolutionItem {
  isSmallDevice?: boolean;
  item: {
    id: number;
    picture: StaticImageData;
    width: number;
    height: number;
    title: string | React.ReactNode;
    description: string | React.ReactNode;
  }
}
