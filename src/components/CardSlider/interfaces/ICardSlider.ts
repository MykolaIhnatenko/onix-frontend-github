import { ReactNode } from 'react';

export interface ICardSliderItem {
  id: string,
  title: ReactNode,
  text: ReactNode,
  height?: number,
}
