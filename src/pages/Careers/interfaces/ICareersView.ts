import ICareer from '../../../interfaces/ICareer';
import { ICareerDepartment } from './ICareerDepartment';

export default interface ICareersView {
  departmentList: ICareerDepartment[];
  chosenDepartment: ICareerDepartment;
  setChosenDepartment: (department: ICareerDepartment) => void;
  careerList: ICareer[];
}
