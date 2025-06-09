import { ITechnologiesList } from 'interfaces/ITechnologies';

interface ICaseStudiesPanelModal {
  openModal: boolean;
  setOpenModal: (value: boolean) => void;
  technologiesList: ITechnologiesList;
  openHandle: (name: string) => void;
  open: boolean;
  technology: string;
  tag: string;
  selectFilterHandle: (name: string) => void;
}

export default ICaseStudiesPanelModal;
