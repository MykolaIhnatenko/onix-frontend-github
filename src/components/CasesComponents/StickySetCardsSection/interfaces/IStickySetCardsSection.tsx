import { StaticImageData } from 'next/image';

import { BorderedNumberCardBgVariant } from '../../../../constants/enums';

interface IStickySetCardsSection {
  title: string;
  content: IStickySetCardsSectionContent[];
  background: StaticImageData;
  variant: BorderedNumberCardBgVariant;
  classesComponent?: {
    container: string;
    title: string;
    text: string;
    number: string;
    content: string;
  },
}

interface IStickySetCardsSectionContent {
  id: string,
  title: string,
  content: string,
}

export default IStickySetCardsSection;
