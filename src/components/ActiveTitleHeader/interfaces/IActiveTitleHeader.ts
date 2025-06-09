import { IDesignTagList } from '../../../interfaces/ITechnologies';

export default interface IActiveTitleHeader {
  title?: string;
  arrayText: string[];
  typeFilter: string;
  typeFilterHandle: (id: string) => void;
  technologiesList?: IDesignTagList;
}
