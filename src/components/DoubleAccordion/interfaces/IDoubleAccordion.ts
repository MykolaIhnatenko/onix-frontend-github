import { IAccordionData } from 'components/AccordionTemplate/interfaces/IAccordion';

export interface IDoubleAccordion {
  data: IAccordionData[],
  activeFirst?: boolean;
  isMobileOrTablet: boolean;
  borderBottomLast?: boolean;
  withoutAccordion?: boolean;
  classes?: { readonly [key: string]: string; };
}
