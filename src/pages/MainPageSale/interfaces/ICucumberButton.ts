interface ICucumberButton {
  designTag: string;
  typeFilterHandle: (name: string) => void;
  setButtonWidth?: (width: (prevState: number) => number) => void;
  name: string;
}
export default ICucumberButton;
