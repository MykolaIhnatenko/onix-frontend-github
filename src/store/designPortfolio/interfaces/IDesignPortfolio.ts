import { IProject } from 'interfaces/IProjectsList';

interface IDesignPortfolio {
  paginationWorks: {
    current: number,
    maxPage: number,
  },
  isLoading: boolean,
  listProjects: IProject[],
}

export default IDesignPortfolio;
