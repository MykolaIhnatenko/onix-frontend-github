import IButton from './IButton';

export default interface IButtonTemplate extends IButton {
  classes?: {
    customContainer?: string;
    customContent?: string;
  } & IButton['classes'];
}
