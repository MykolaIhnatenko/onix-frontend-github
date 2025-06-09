import IAccordion from 'components/AccordionTemplate/interfaces/IAccordion';
import { AccordionBlackStyleTypes } from 'constants/AccordionStyleTypes';

type IAccordionBlack = Omit<IAccordion, 'isAccordionBlack'> & { accordionStyleTypes?: AccordionBlackStyleTypes };

export default IAccordionBlack;
