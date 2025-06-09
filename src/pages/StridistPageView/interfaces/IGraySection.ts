import { StaticImageData } from 'next/image';
import { ReactNode } from 'react';

export interface IGrayCardProps {
  children: ReactNode,
  type: string,
}

export interface IGraySectionProps {
  img: StaticImageData,
  sectionContent: {
    title: string,
    subtitle: string,
    content: ReactNode,
    alt: string,
  }
  type: 'approach' | 'business',
  cardType: string,
  saleUrl?: boolean,
}
