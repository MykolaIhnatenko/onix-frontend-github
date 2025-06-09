import { Dispatch, SetStateAction } from 'react';

import { ITechnologies } from './ICalculatorData';
import { ISpecialistList } from './IDTCCalculator';

export default interface IBudgies {
  resetSpecialistValue: (item: keyof ISpecialistList) => void,
  resetTechnologyValue: (
    item: string,
    direction: keyof ITechnologies
  ) => void,
  setDuration: Dispatch<SetStateAction<string>>,
  setDomains: Dispatch<SetStateAction<string>>,
  specialists: ISpecialistList,
  technologies: ITechnologies,
  duration: string,
  currentDomain: string,
}
