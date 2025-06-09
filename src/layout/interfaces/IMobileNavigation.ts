import INavLink from '../Header/interfaces/INavLink';

export default interface IMobileNavigation {
  isOpen: boolean;
  updateNavLinks: INavLink[];
}
