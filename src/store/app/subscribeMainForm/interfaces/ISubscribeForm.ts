import { FormModalVariants } from '../../contactForm/interfaces/IContactForm';
import Modeltype from '../../../../constants/Modeltype';

export interface ISubscribeMainForm {
  isLoadingSubscribeForm: boolean;
  isSubscribeFormSubmitted: boolean;
  modalView: FormModalVariants;
  isShowSubscribeForm: boolean;
  modeltype: Modeltype,
}

export interface ISubscribeFormMainValues {
  name: string,
  email: string,
  position: string,
  modeltype: Modeltype,
}

export interface ISubscribeFormSendValues {
  name: string,
  email: string,
  position: string,
  modeltype: Modeltype,
}
