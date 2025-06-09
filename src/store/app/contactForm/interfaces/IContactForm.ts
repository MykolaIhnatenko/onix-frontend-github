import Modeltype from '../../../../constants/Modeltype';

export enum FormModalVariants {
  FORM = 'form',
  SUCCESS = 'success',
  ERROR = 'error',
}

export interface IContactForm {
  isShowContactForm: boolean,
  isLoadingContactForm: boolean,
  isFormSubmitted: boolean,
  modalView: FormModalVariants,
  isDragListen: boolean,
  isFormSendFromPage: boolean,
  modeltype: Modeltype
}

export interface IContactFormValues {
  name: string,
  email: string,
  company: string,
  country: string,
  message: string,
  client: Blob[],
  project: string[],
  salesChannel: string
  modeltype: Modeltype,
  captcha: string,
  referralKey: string,
  leadIp: string,
  additionalInfoField?: string,
  lastSource: string,
  leadSource: string,
}

export interface IAdditionalValues {
  [key: string]: number | string;
}
export interface IContactFormSendValues {
  name: string,
  email: string,
  company: string,
  country: string,
  message: string,
  project: string,
  salesChannel: string
  modeltype: Modeltype,
  captcha: string,
  referralKey: string,
  leadIp: string,
  additionalInfoField?: string
  lastSource: string
  leadSource: string,
}
