export default interface IBadge {
  text: string;
  name: string;
  onChangeHandler: (value: string) => void;
}
