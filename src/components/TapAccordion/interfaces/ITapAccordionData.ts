import React from 'react';
import { StaticImageData } from 'next/image';

export interface ITapAccordionItem {
  id: number;
  icon: React.ReactNode;
  title: string;
  text: string;
  src: StaticImageData;
}

export interface ITapAccordionData {
  data: ITapAccordionItem[]
  classes?: { [key: string]: string };
}

export interface IAccordionItem {
  item: ITapAccordionItem,
  isActive: boolean,
  setActiveId: (id: number) => void,
  isMobile: boolean,
  classes?: { [key: string]: string },
}

export interface IAccordionTitleProps {
  icon: React.ReactNode;
  title: string;
  isActive: boolean;
  classes?: { [key: string]: string };
  onTap: () => void;
  isMobile: boolean;
}

export interface IAccordionImageProps {
  src: StaticImageData,
  isActive: boolean,
  classes?: { [key: string]: string },
}

export interface IAccordionContentProps {
  text: string;
  isActive: boolean;
  classes?: { [key: string]: string };
}
