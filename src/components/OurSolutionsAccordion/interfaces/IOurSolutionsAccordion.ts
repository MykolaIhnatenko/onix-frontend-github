import { ReactNode } from 'react';
import { ElementType } from 'react-spring';

import { IAccordionData } from 'components/AccordionTemplate/interfaces/IAccordion';

interface IOurSolutionsAccordion {
  accordionData: IAccordionData[],
  list: {
    title: string | ReactNode
    subTitle?: string;
    desc: string | ReactNode;
  }[],
  iconBlack?: boolean,
  isAccordionBlack?: boolean,
  Tag?: ElementType,
  stylesVariant?: string,
  iconStyles?: {
    item?: string;
    title?: string;
    number?: string;
    icon?: string;
  },
  descStyles?: {
    contentBox?: string;
    listContainer?: string;
    content?: string;
    subTitle?: string;
    desc?: string;
  }
}

export default IOurSolutionsAccordion;
