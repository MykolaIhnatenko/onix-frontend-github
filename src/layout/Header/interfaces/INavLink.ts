export default interface INavLink {
  id: number;
  title: string | React.ReactNode;
  to?: string;
  styleIconContainer?: string;
  styleContainer?: string;
  isActive?:boolean;
  asLink?:boolean;
  icon?: React.ReactNode;
  subMenu?:INavLink[];
  isSubmenuItem?: boolean;
  mobileIndex: number;
  onClick?: () => void;
}
