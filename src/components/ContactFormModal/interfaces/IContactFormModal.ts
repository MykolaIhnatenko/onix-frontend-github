import Modeltype from 'constants/Modeltype';
import PagesToSalesChannels from '../../../constants/PageToSalesChannels';

interface IContactFormModal {
  salesChannel?: PagesToSalesChannels | string;
  modeltypeProps?: Modeltype;
  pageMode?: boolean;
  isReferralPage?: boolean;
  id?: 'focus' | 'unfocused';
}

export default IContactFormModal;
