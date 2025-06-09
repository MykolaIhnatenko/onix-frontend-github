import { BreadcrumbsVariant } from '../../constants/enums';

export default interface IBreadcrumbs {
  breadcrumbs:IBreadcrumbsItem[];
  variant?: BreadcrumbsVariant;
}

export interface IBreadcrumbsItem {
  id:number,
  title:string,
  path:string
}
