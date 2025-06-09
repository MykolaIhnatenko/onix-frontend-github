import { useDispatch } from 'react-redux';

import { useAppSelector } from '../../../hook/reduxToolkit';
import LinkComponent from '../../../components/Link/Link';
import NavLink from './NavLink';
import { ibmPlexMono } from '../../../fonts/MainFonts';
import Icons from '../../../assets/icon';
import { setNavSubMenuVisibility } from '../../../store/app/slice';
import INavLink from '../interfaces/INavLink';

import styles from '../sass/header.module.scss';

interface IMainMenuProps {
  updateNavLinks: INavLink[];
  fixHeader:boolean ;
}

function MainMenu({ updateNavLinks, fixHeader }:IMainMenuProps) {
  const dispatch = useDispatch();
  const { navSubMenuVisibility } = useAppSelector((state) => state?.app);
  const onMenuOpen = (id:number) => dispatch(setNavSubMenuVisibility({ navSubMenuVisibility: id }));

  return (
    <div
      className={`
          ${styles.container} ${ibmPlexMono.variable}
          ${navSubMenuVisibility ? styles.open : ''}
        `}
      style={
        { position: fixHeader ? 'fixed' : 'relative' }
      }
    >
      <div className={`d-flex d-row d-item-center ${styles.headerContainer}`}>
        <div className={`flex1 d-flex ${styles.navigationBrand}`}>
          <LinkComponent href="/" ariaLabel="logo">
            <Icons.IconLogo width={128} height={32} />
          </LinkComponent>
        </div>
        <div className="d-flex d-justify-end flex1">
          <nav>
            <ul className={styles.navContainer}>
              {updateNavLinks.map(({
                id, title, to, icon, subMenu,
                mobileIndex,
              }) => (
                <li
                  role="presentation"
                  key={id}
                  onMouseEnter={() => onMenuOpen(subMenu ? id : 0)}
                  className={styles.navItem}
                >
                  <NavLink
                    id={id}
                    title={title}
                    to={to}
                    icon={icon}
                    isActive={navSubMenuVisibility === id}
                    styleIconContainer={navSubMenuVisibility === id ? styles.openIcon : ''}
                    mobileIndex={mobileIndex}
                  />
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default MainMenu;
