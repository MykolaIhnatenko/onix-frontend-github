export default interface IItemText {
  content: string | string[];
  marginBottomAbsent?: boolean;
  classes?: {
    itemText?: string;
  };
  withAnimate?: boolean;
}
