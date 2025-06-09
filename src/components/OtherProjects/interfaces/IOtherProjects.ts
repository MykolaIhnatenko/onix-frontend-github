import { IProject } from '../../../interfaces/IProjectsList';

export interface IOtherProjects {
  projects: IProject[];
  classes?: {
    section?: string;
    card?: string;
    cardImageContainer?: string;
    cardImage?: string;
    cardTitle?: string;
    cardSubTitle?: string;
  };
}
