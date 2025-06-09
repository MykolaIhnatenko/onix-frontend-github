import { DepartmentsCareer } from '../../../constants/enums';

export default interface ICareerInfoBlock {
  name: string;
  description: string;
  department: DepartmentsCareer;
}
