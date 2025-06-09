import ILinkButton from './ILinkButton';

export default interface ILinkButtonTemplate extends ILinkButton {
  classes?: {
    customContainer?: string;
    customContent?: string;
  } & ILinkButton['classes'];
}
