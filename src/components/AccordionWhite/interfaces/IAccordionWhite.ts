import IAccordion from 'components/AccordionTemplate/interfaces/IAccordion';
import { AccordionWhiteStyleTypes } from 'constants/AccordionStyleTypes';

type IAccordionWhite = Omit<IAccordion, 'isAccordionBlack' | 'faq'> & {
  accordionStyleTypes?: AccordionWhiteStyleTypes
};

export default IAccordionWhite;
