import { ITag } from 'interfaces/ITechnologies';

interface IFiltersView {
  id: number;
  attributes: { name: string; order: number; tags: ITag; }
  technology: string;
  openHandle: (name: string) => void;
  openCheck: (name: string) => boolean;
  selectFilterHandle: (name: string) => void;
  tag: string;
  getActiveStyles: () => string;
  getClassName: (name: string) => string;
  styles: Record<string, string>;
}

export default IFiltersView;
