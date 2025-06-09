import ICareer from './ICareer';
import IPages from './IPages';
import { IDepartmentList } from './ITechnologies';

export default interface ICareerPage extends IPages {
  careerList: ICareer[];
  departments: IDepartmentList;
  hotJobs: ICareer[];
}
