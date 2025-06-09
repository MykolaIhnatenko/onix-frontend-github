import { ButtonType } from 'constants/enums';

export interface IJSAContactUs {
  buttonText?: string;
  title: string | React.ReactNode;
  idBtn: ButtonType;
  className?: string;
}
