import { ReactNode } from 'react';

import { IAccordionData } from 'components/AccordionTemplate/interfaces/IAccordion';

export default interface IFeaterProvideSystems {
  list: IAccordionData[];
  title: string | ReactNode;
  isMobileOrTablet: boolean;
}
