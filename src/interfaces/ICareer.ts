import { DepartmentsCareer } from '../constants/enums';
import IPicture from './IPicture';

export default interface ICareer {
  id: number;
  attributes: {
    url: string;
    name: string;
    title: string;
    text: string;
    canonical: string;
    description: string;
    keywords: string;
    department: string;
    departmentType: {
      data: {
        id: number;
        attributes: {
          name: DepartmentsCareer;
        }
      }
    },
    picture?: IPicture;
    hotJob: boolean | null;
  }
}
