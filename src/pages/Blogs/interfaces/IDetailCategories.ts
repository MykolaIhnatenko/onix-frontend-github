import { ICategories } from 'interfaces/ICategories';
import IBlog from 'interfaces/IBlog';

export default interface IDetailCategories {
  filteredCategories: ICategories[] | undefined;
  newestBlog: IBlog[];
}
