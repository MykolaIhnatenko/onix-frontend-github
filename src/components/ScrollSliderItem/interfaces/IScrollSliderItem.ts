import { ReactNode } from 'react';

export default interface IScrollSliderItem {
  id: number;
  content: ReactNode;
  setActiveSlide?: (id:number) => void;
  href?: string;
  absolute?: boolean;
  target?: '_blank' | '_self' | '_parent' | '_top';
}
