export default interface ICloseButton {
  onClick?: () => void;
  type?: 'button';
  classes?: {
    container?: string;
    rectangle?: string;
  };
}
