import { ButtonType } from 'constants/enums';

export default interface IButtonOpenContactForm {
  styleClass: string;
  title: string;
  idBtn: ButtonType;
  openForm: () => void;
}
