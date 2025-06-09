import { IProject } from '../../../interfaces/IProjectsList';
import { IDesignTagList, ITechnologiesList } from '../../../interfaces/ITechnologies';

export default interface IWork {
  typeFilter: string;
  typeFilterHandle: (id: string) => void;
  technologiesList?: ITechnologiesList;
  selectFilter: string;
  filters:IFilterItems[];
  selectFilterHandle: (id: string) => void;
  listProjects: IProject[];
  openModal: boolean;
  openModalHandle: () => void;
  isLoading: boolean;
}

export interface IWorkMainSection {
  typeFilter: string;
  typeFilterHandle: (id: string) => void;
  technologiesList?: ITechnologiesList | IDesignTagList;
}

export interface IFilterItems {
  id: number;
  name: string;
}
