import React, { ElementType, ReactNode } from 'react';
import { StaticImageData } from 'next/image';

import { ProcessBlockVariant } from '../../../constants/enums';

export interface IProcessImage {
  id: number;
  src: StaticImageData;
  srcTablet: StaticImageData;
  srcBigDesk: StaticImageData;
}

export interface IProcessAccordionItem {
  id: number;
  itemTitle: React.ReactNode;
  content?: string[];
  contentText?: string | ReactNode;
  src: StaticImageData;
}

export interface IProcessImageItem {
  id: number;
  src: StaticImageData;
  srcTablet: StaticImageData;
  srcBigDesk: StaticImageData;
  activeId: number;
  classes?: string;
  variant?: ProcessBlockVariant,
}

export interface IProcessBlock {
  title?: string,
  tagTitle?: ElementType,
  subtitle?: React.ReactNode,
  variant?: ProcessBlockVariant,
  firstText?: React.ReactNode,
  secondText?: React.ReactNode,
  data: IProcessAccordionItem[],
  imagesData: IProcessImage[],
  bottomTitle?: string | React.ReactNode,
  notice?: string,
  withoutAnimate?: boolean;
  withoutPrefix?: boolean;
  classes?: {
    container?: string,
    title?: string,
    textContainer?: string,
    imageContainer?: string,
    bottomTitle?: string,
    accordionTitle?: string,
    content?: string,
    contentTextInner?: string,
    contentInner?: string,
    contentInnerText?: string,
    list?: string,
    contentListItem?: string,
    imagesBlock?: string,
    img?: string,
    accordion?: string,
    accordionBlock?: string,
    activeAccordionTitle?: string,
    item?: string,
    plus?: string,
    arrow?: string,
    accordionTitleFirst?: string,
  };
}
