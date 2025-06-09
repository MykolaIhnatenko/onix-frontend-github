import { IPagination } from '../../../interfaces/IBlogsList';

export default interface IPaginationData {
  pagination?:IPagination;
  category?:string;
  subcategory?:string;
  author?:string;
}
