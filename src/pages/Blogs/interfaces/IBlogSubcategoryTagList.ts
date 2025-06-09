import { BlogSubcategoryVariant } from '../../../constants/enums';

interface IBlogSubcategory {
  id: number | string;
  attributes: {
    name: string;
    url: string;
  }
}
export default interface IBlogSubcategoryTagList {
  data?: IBlogSubcategory[] | [];
  variant?: BlogSubcategoryVariant;
}
