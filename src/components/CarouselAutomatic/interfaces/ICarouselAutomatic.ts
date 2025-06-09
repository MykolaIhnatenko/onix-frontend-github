import { ReactNode } from 'react';

export default interface ICarouselAutomatic {
  data: ICarouselAutomaticData[];
  industriesCarousel?: boolean;
  classes?: {
    container?: string;
    item?: string;
    animation?: string;
  };
}

export interface ICarouselAutomaticData {
  id:number;
  content: ReactNode;
  copy?:boolean;
}
