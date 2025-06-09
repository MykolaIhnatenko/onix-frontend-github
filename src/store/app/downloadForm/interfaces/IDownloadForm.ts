import { FormModalVariants } from '../../contactForm/interfaces/IContactForm';

export interface IDownloadForm {
  isLoadingDownloadForm: boolean;
  isDownloadFormSubmitted: boolean;
  downloadModalView: FormModalVariants;
  isShowDownloadForm: boolean;
}

export interface IDownloadFormValues {
  name: string,
  email: string,
  company: string,
  phone: string,
  salesChannel: string
  mailerliteId: string,
}
