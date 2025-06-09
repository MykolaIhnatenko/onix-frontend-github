export default interface IList {
  listTitle: string;
  links: Array<{
    id: number;
    title: string | React.ReactNode;
    url: string;
  }>;
  activeGroup: string;
  setActiveGroup: (group: string) => void;
  style?: string;
  children?: React.ReactNode;
}
