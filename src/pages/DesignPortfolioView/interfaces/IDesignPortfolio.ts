import { IPagination } from '../../../interfaces/IBlogsList';
import IPages from '../../../interfaces/IPages';
import { IProject } from '../../../interfaces/IProjectsList';
import { IDesignTagList } from '../../../interfaces/ITechnologies';

export default interface IDesignPortfolio {
  typeFilter: string;
  typeFilterHandle: (id: string) => void;
  technologiesList?: IDesignTagList;
  arrayText: string[];
  containerRef: React.MutableRefObject<HTMLDivElement | null>;
  listProjects: IProject[];
  isLoading: boolean;
}

export interface IDesignPortfolioPages extends IPages {
  projectsList: [IProject],
  pagination: IPagination,
}
