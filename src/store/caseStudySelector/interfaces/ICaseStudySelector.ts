import { IProject } from 'interfaces/IProjectsList';

interface ICaseStudySelector {
  technology: string,
  tag: string,
  designTag: string,
  paginationWorks: {
    current: number,
    maxPage: number,
  },
  isLoading: boolean,
  listProjects: IProject[],
}

export default ICaseStudySelector;
