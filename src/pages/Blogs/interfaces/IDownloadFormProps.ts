import { DownloadFormVariant } from '../../../constants/enums';

export default interface IDownloadFormProps {
  salesChannel?: string;
  bookletUrl?: string;
  variant?: DownloadFormVariant;
  mailerliteId?: string;
}
