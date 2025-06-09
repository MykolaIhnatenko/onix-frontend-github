import { ElementType } from 'react';

import ItemText from 'components/ItemText/ItemText';
import { IAccordionData } from 'components/AccordionTemplate/interfaces/IAccordion';

export interface IAccordionTextData {
  id?: number;
  number?: string;
  title: string;
  tagTitle?: ElementType;
  content: string[];
  marginBottomAbsent?: boolean;
}

const getAccordionTextData = (data: IAccordionTextData[]): IAccordionData[] => (
  data.map(({
    id, number, title, tagTitle, content, marginBottomAbsent,
  }, index) => ({
    id: id || index + 1,
    number,
    title,
    tagTitle,
    content: <ItemText content={content} marginBottomAbsent={marginBottomAbsent} />,
  }))
);

export default getAccordionTextData;
