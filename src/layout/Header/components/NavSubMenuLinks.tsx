import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';

import { useAppSelector } from '../../../hook/reduxToolkit';
import NavLink from './NavLink';
import { ibmPlexMono } from '../../../fonts/MainFonts';
import Icons from '../../../assets/icon';
import { itemMenuVariants, menuVariant, variantChildMenu } from '../animations/headerAnimation';
import { setNavSubMenuVisibility } from '../../../store/app/slice';
import INavLink from '../interfaces/INavLink';

import styles from '../sass/navSubMenuLinks.module.scss';

interface INavSubMenuLinksProps {
  updateNavLinks: INavLink[];
  fixHeader: boolean ;
}

function NavSubMenuLinks({ updateNavLinks, fixHeader }: INavSubMenuLinksProps) {
  const router = useRouter();
  const dispatch = useDispatch();
  const [showChildMenu, setShowChildMenu] = useState(false);
  const navSubMenuLinks = updateNavLinks.filter(({ subMenu }) => subMenu?.length);
  const { navSubMenuVisibility } = useAppSelector((state) => state?.app);
  const onMenuOpen = (id:number) => dispatch(setNavSubMenuVisibility({ navSubMenuVisibility: id }));

  const clickHandlerNavLink = async (url:string | undefined) => {
    if (url) {
      await router.push(url);
    }
    onMenuOpen(0);
  };
  const columns = [1, 2, 3];

  return (
    <>
      <div
        className={`${styles.container} ${fixHeader ? '' : styles.fixHeader} ${ibmPlexMono.variable}`}
        style={{ position: 'fixed' }}
      >
        {
          navSubMenuLinks.map(({ subMenu, id }) => (
            <motion.div
              key={id}
              variants={menuVariant}
              initial="hidden"
              animate={navSubMenuVisibility === id ? 'visible' : 'hidden'}
              className={styles.subMenuContainer}
              style={{ top: fixHeader ? '-1px' : '-70px' }}
            >
              <ul>
                {columns.map((item, index) => (
                  <li key={item}>
                    {subMenu?.map(
                      ({
                        title: subTitle, id: subLinkId, to, icon, mobileIndex, subMenu: childrenMenu,
                      }, subIndex) => {
                        if (subIndex % 3 === index) {
                          return (
                            <motion.div key={subLinkId} variants={itemMenuVariants}>
                              <NavLink
                                id={id}
                                title={subTitle}
                                to={to}
                                icon={icon}
                                styleContainer={styles.subMenuLink}
                                mobileIndex={mobileIndex}
                                onClick={() => clickHandlerNavLink(to)}
                              />
                              {childrenMenu && (
                                <Icons.IconChevron
                                  className={`${!showChildMenu
                                    ? styles.iconChildrenMenu : styles.activeChildrenMenu}`}
                                  onClick={() => setShowChildMenu(!showChildMenu)}
                                  width={13}
                                />
                              )}
                              <AnimatePresence>
                                <motion.div
                                  variants={variantChildMenu}
                                  initial="initial"
                                  animate={showChildMenu ? 'animate' : 'initial'}
                                  exit="exit"
                                  transition={{ duration: 0.4 }}
                                  className={styles.childLinksContainer}
                                >
                                  {childrenMenu?.map(({
                                    id: childrenId, title: childrenTitle, to: link, mobileIndex: childMobileIndex,
                                  }) => (
                                    <div
                                      key={childrenId}
                                    >
                                      <NavLink
                                        id={childrenId}
                                        title={childrenTitle}
                                        to={link}
                                        styleContainer={styles.childLink}
                                        mobileIndex={childMobileIndex}
                                      />
                                    </div>
                                  ))}
                                </motion.div>
                              </AnimatePresence>
                            </motion.div>
                          );
                        }
                        return null;
                      },
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))
        }
      </div>
      {!!navSubMenuVisibility
        && (
          <div
            role="presentation"
            className={styles.overlay}
            onMouseEnter={() => {
              onMenuOpen(0);
              setShowChildMenu(false);
            }}
          />
        )}
    </>
  );
}

export default NavSubMenuLinks;
