import { IFilterItems } from '../../../pages/Work/interfaces/IWork';

export default interface IFilterMenuMobile {
  title:string;
  openModalHandle: () => void;
  selectFilter: string;
  filters:IFilterItems[];
  selectFilterHandle: (id:string) => void;
}
