import { MotionValue, PanInfo } from 'framer-motion';
import { ReactNode } from 'react';

export interface IInfiniteDragSlider {
  data: IInfiniteDragSliderItem[];
  setActiveSlide: (id:number) => void;
}

export interface VirtualizedPageProps {
  children: (props: { index: number }) => JSX.Element;
  activeSlide: (id:number) => void;
}

export interface PageProps {
  index: number;
  renderPage: (props: { index: number }) => JSX.Element;
  x: MotionValue;
  onDragEnd(event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo): void;
}

export interface IInfiniteDragSliderItem {
  id: number,
  title: string,
  text: ReactNode,
  number: string,
}

export interface ChildComponent {
  props: {
    children: {
      props: {
        id: number;
      };
    };
  };
}
