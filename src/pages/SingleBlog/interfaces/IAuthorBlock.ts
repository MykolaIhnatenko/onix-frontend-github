import { IBlogAuthorData } from '../../../interfaces/IBlogAuthor';

export default interface IAuthorBlock {
  isColumn?: boolean;
  writers?: IBlogAuthorData[];
  executor: IBlogAuthorData;
}

export interface IAuthorIconBlock {
  linkedin: string;
  email: string;
}
