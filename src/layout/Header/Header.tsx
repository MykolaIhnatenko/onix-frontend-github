import MobileMenu from './components/MobileMenu';
import MainMenu from './components/MainMenu';
import NavSubMenuLinks from './components/NavSubMenuLinks';
import navLinks from './data/navLinks';
import { HeaderColorVariant } from '../../constants/enums';

import styles from './sass/HeaderContainer.module.scss';

interface IHeaderProps {
  fixHeader: boolean;
  headerColorVariant?: HeaderColorVariant;
  isMDDevice: boolean;
}

function Header({
  fixHeader, headerColorVariant, isMDDevice,
} :IHeaderProps) {
  return (
    <header>
      <div className={`${styles.menuMobile} ${headerColorVariant ? styles[headerColorVariant] : ''}`}>
        <MobileMenu
          fixHeader={fixHeader}
          updateNavLinks={navLinks}
          isMDDevice={isMDDevice}
        />
      </div>
      <div className={`${styles.menuDesktop} ${headerColorVariant ? styles[headerColorVariant] : ''}`}>
        <MainMenu
          fixHeader={fixHeader}
          updateNavLinks={navLinks}
        />
        <NavSubMenuLinks fixHeader={fixHeader} updateNavLinks={navLinks} />
      </div>
    </header>
  );
}

Header.defaultProps = {
  headerColorVariant: undefined,
};

export default Header;
