import { StaticImageData } from 'next/image';

import IAccordionHorizontal, { IAccordionHorizontalData } from 'components/AccordionHorizontal/interfaces/IAccordionHorizontal';

export interface ICooperateBlock {
  whiteTheme?: boolean;
  title?: string;
  subtitle?: string;
  background?: StaticImageData;
  data: IAccordionHorizontalData[];
  classes?: {
    section?: string;
    sectionImage?: string;
    background?: string;
    title?: string;
    subTitle?: string;
  } & IAccordionHorizontal['classes'];
}
