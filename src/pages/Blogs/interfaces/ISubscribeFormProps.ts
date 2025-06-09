import { ICategoriesList } from '../../../interfaces/ICategories';
import PagesToSalesChannels from '../../../constants/PageToSalesChannels';
import { SubscribeFormVariant } from '../../../constants/enums';

export default interface ISubscribeFormProps {
  salesChannel: string | PagesToSalesChannels;
  categories?:ICategoriesList;
  variant?: SubscribeFormVariant;
  idFocus?: 'focus' | 'unfocused';
}
