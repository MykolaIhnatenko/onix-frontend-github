import { Dispatch, SetStateAction } from 'react';

import PagesToSalesChannels from '../../../constants/PageToSalesChannels';
import { ITechnologies } from './ICalculatorData';
import { ISpecialistList } from './IDTCCalculator';

interface IContactFormModal {
  salesChannel: PagesToSalesChannels,
  technologies: ITechnologies,
  specialists: ISpecialistList,
  resetSpecialistValue: (item: keyof ISpecialistList) => void,
  resetTechnologyValue: (
    item: string,
    direction: keyof ITechnologies
  ) => void,
  duration: string,
  setDuration: Dispatch<SetStateAction<string>>
  currentDomain: string,
  setDomains: Dispatch<SetStateAction<string>>,
  resetAllValues: () => void,
}

export default IContactFormModal;
