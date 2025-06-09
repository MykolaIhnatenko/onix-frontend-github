import { Dispatch, SetStateAction } from 'react';

import {
  ITechnologies,
} from './ICalculatorData';
import { ISpecialistList } from './IDTCCalculator';

export default interface IDedicatedTeamCalculatorPageView {
  technologies: ITechnologies,
  specialists: ISpecialistList,
  resetSpecialistValue: (item: keyof ISpecialistList) => void,
  changeSpecialistValue: (isIncrement: boolean, item: keyof ISpecialistList) => void,
  changeTechnologyValue: (
    isIncrement: boolean,
    item:string,
    direction: keyof ITechnologies
  ) => void,
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
