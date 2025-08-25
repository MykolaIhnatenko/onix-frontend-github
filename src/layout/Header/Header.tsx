import MobileMenu from './components/MobileMenu';
import MainMenu from './components/MainMenu';
import NavSubMenuLinks from './components/NavSubMenuLinks';
import navLinks from './data/navLinks';
import IHeaderProps from './interfaces/IHeader';

import styles from './sass/HeaderContainer.module.scss';

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

export default Header;
