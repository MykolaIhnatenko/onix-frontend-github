export default interface ICustomWindow extends Window {
  CLUTCHCO?: {
    Init: () => void;
    Destroy: () => void;
  }
}
