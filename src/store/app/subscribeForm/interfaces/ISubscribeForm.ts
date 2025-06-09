import { FormModalVariants } from '../../contactForm/interfaces/IContactForm';

export interface ISubscribeForm {
  isLoadingSubscribeForm: boolean;
  isSubscribeFormSubmitted: boolean;
  subscribeModalView: FormModalVariants;
  isShowSubscribeForm: boolean;
  isOpenTopics: boolean;
}

export interface ISubscribeFormValues {
  name: string,
  email: string,
  topics: string[],
  company: string,
  salesChannel: string,
}

export interface ISubscribeFormSendValues {
  name: string,
  email: string,
  topics: string,
  company: string,
  salesChannel: string,
}
