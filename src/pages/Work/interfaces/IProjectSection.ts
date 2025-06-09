import { IProject } from '../../../interfaces/IProjectsList';
import { IFilterItems } from './IWork';

export default interface IProjectsSection {
  typeFilter: string;
  selectFilter: string;
  filters:IFilterItems[];
  selectFilterHandle: (id:string) => void;
  listProjects: IProject[];
  isLoading: boolean;
}
