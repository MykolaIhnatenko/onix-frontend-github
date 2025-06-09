import { ReactNode } from 'react';

import { ITapAccordionItem } from '../../TapAccordion/interfaces/ITapAccordionData';

interface IIosMainSection {
  sectionTitle: ReactNode;
  firstText: ReactNode;
  secondText: ReactNode;
  btnText: string;
  data: ITapAccordionItem[];
}

export default IIosMainSection;
