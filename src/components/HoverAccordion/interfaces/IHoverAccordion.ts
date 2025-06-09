import { StaticImageData } from 'next/image';

export interface IHoverAccordionItem {
  id: number;
  number: string;
  title: string;
  image: StaticImageData;
  activeItem: number;
  setActiveItem: (id:number) => void;
  priority?: boolean;
  whiteVariant?: boolean;
}

export interface IHoverAccordionItemData {
  id: number;
  number: string;
  title: string;
  image: StaticImageData;
}

export interface IHoverAccordion {
  data: IHoverAccordionItemData[];
  priority?: boolean;
  whiteVariant?: boolean;
}
