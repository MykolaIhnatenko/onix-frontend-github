import { IAccordionData } from 'components/AccordionTemplate/interfaces/IAccordion';

interface IOurExpertiseSection {
  upTitle?: string,
  title?: string,
  firstText?: string,
  secondText?: string,
  data: IAccordionData[],
  borderBottomLast?: boolean;
  borderTopFirst?: boolean;
  blackBlock?: boolean;
  classes?: {
    section?: string;
    container?: string;
    upTitle?: string;
    title?: string;
    textContainer?: string;
    text?: string;
    firstText?: string;
    secondText?: string;
    accordionContainer?: string;
  };
}

export default IOurExpertiseSection;
