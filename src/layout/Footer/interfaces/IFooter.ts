import { IFieldsContent } from 'interfaces/IFooterContent';
import PagesToSalesChannels from '../../../constants/PageToSalesChannels';

export interface IFooter {
  salesChannel?: PagesToSalesChannels | string;
  isBlogsPage?: boolean;
  topFields?: IFieldsContent[];
  bottomFields?: IFieldsContent[];
}
