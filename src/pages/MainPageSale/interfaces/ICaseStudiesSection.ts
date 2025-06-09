import { ITechnologiesList } from 'interfaces/ITechnologies';
import { IFilterItems } from 'pages/Work/interfaces/IWork';

interface ICaseStudiesSection {
  technologiesList: ITechnologiesList | null;
  filters: IFilterItems[];
  setFilters: (filters: IFilterItems[]) => void;
}

export default ICaseStudiesSection;
