import { IAccordionData } from 'components/AccordionTemplate/interfaces/IAccordion';
import { ScrollVariant } from '../../../constants/enums';

export interface IFAQBlock {
  faqData: IAccordionData[];
  withScroll?: ScrollVariant;
  title?: string;
  animatedText?: boolean;
  borderTop?: boolean;
  classes?: {
    container?: string;
    title?: string;
    accordion?: {
      accordionTitle: string;
    }
  };
}
