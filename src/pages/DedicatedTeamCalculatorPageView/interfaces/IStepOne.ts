import { ISpecialistList } from './IDTCCalculator';

export default interface IStepOne {
  specialists: ISpecialistList,
  changeSpecialistValue: (isIncrement: boolean, item: keyof ISpecialistList) => void,
}
