import { ReactNode } from 'react';
import { StaticImageData } from 'next/image';

import { IAccordionData } from 'components/AccordionTemplate/interfaces/IAccordion';

interface ISoftwareProductBlock {
  title?: ReactNode;
  mainText?: ReactNode;
  firstNoteText?: ReactNode;
  secondNoteText?: ReactNode;
  data: IAccordionData[];
  background?: StaticImageData,
  withoutAccordion?: boolean,
}

export default ISoftwareProductBlock;
