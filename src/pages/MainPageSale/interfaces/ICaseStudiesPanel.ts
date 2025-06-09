import { ITechnologiesList } from 'interfaces/ITechnologies';

interface ICaseStudiesPanel {
  technologiesList: ITechnologiesList;
  selectFilterHandle: (name: string) => void;
  typeFilterHandle: (name: string) => void;
}

export default ICaseStudiesPanel;
