import { IAccordionData } from 'components/AccordionTemplate/interfaces/IAccordion';

export interface IApproachBlock {
  title: string;
  text?: string;
  data: IAccordionData[];
  isMobileOrTablet: boolean;
  borderTopFirst?: boolean;
  smallerTitleText?: boolean;
  classes?: { readonly [key: string]: string };
}
