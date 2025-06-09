import { IAccordionData } from 'components/AccordionTemplate/interfaces/IAccordion';

export default interface IAboutCardBlock {
  data: IAccordionData[];
  whiteBlock?: boolean;
  classes?: { readonly [key: string]: string; };
}
