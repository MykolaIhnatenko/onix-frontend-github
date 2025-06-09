export default interface IMenuItem {
  title: string;
  url?: string;
  activeGroup?: string;
  setActiveGroup?: (group: string) => void;
  children?: React.ReactNode;
}
