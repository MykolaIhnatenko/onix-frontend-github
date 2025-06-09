import { ButtonType } from 'constants/enums';

export default interface IButtonOpenContactForm {
  title: string;
  idBtn: ButtonType;
  openForm: () => void;
}
