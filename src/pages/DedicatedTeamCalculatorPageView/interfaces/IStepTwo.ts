import {
  ITechnologies,
} from './ICalculatorData';

export default interface IStepTwo {
  technologies: ITechnologies,
  changeTechnologyValue: (
    isIncrement: boolean,
    item:string,
    direction: keyof ITechnologies
  ) => void,
}
