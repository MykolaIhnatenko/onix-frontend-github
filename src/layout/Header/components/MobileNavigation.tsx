import { useState, Fragment } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useSelector } from 'react-redux';

import { itemVariants, menuVariants, variantAnimate } from '../animations/mobileMenuAnimation';
import { generalSans, ibmPlexMono } from '../../../fonts/MainFonts';
import NavMobileLink from './NavMobileLink';
import Icons from '../../../assets/icon';
import IMobileNavigation from '../../interfaces/IMobileNavigation';
import { IContactForm } from '../../../store/app/contactForm/interfaces/IContactForm';
import IStore from '../../../store/interfaces/IStore';

import styles from '../sass/mobileNavigation.module.scss';

function MobileNavigation({ isOpen, updateNavLinks }:IMobileNavigation) {
  const { isShowContactForm } = useSelector<IStore, IContactForm>((state) => state.contactForm);
  const [subMenuId, setSubMenuId] = useState(0);

  const [showChildMenu, setShowChildMenu] = useState(false);
  const getStyleIconContainer = (id: number) => {
    let style = '';
    if ((subMenuId === id && subMenuId !== 6) || (subMenuId === 6 && isShowContactForm)) {
      style = styles.openIcon;
    }
    return style;
  };

  return (
    <motion.div
      className={`${styles.container} ${ibmPlexMono.variable} ${isOpen ? styles.open : ''}`}
      initial="close"
      animate={isOpen ? 'open' : 'close'}
    >
      <motion.div className={styles.mobileMenuContainer}>
        <motion.ul
          variants={menuVariants}
          className={`${styles.mobileMenuList} ${isOpen ? styles.open : ''}`}
        >
          {updateNavLinks.map(({
            id,
            title,
            to,
            icon,
            subMenu,
            mobileIndex,
          }) => (
            <motion.li
              key={id}
              role="presentation"
              variants={itemVariants}
              onClick={() => setSubMenuId(id === subMenuId ? 0 : id)}
            >
              <NavMobileLink
                id={id}
                title={title}
                to={to}
                icon={icon}
                isActive={false}
                styleIconContainer={getStyleIconContainer(id)}
                mobileIndex={mobileIndex}
              />
              <AnimatePresence>
                {subMenu?.length && subMenuId === id && (
                  <motion.ul
                    variants={variantAnimate}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{ duration: 0.4 }}
                    className={`${styles.subMenuContainer}
                    ${generalSans.variable}
                    ${styles.open}`}
                  >
                    {subMenu.sort((a, b) => a.mobileIndex - b.mobileIndex).map(({
                      id: subId, title: subTitle, to: subTo, mobileIndex: subMobileIndex, subMenu: childrenMenu,
                    }) => (
                      <Fragment key={subId}>
                        <li
                          className={`${childrenMenu ? styles.navLinkContainer : ''}`}
                        >
                          <NavMobileLink
                            id={subId}
                            title={subTitle}
                            to={subTo}
                            isActive={false}
                            styleContainer={styles.subMenuLink}
                            isSubmenuItem
                            mobileIndex={subMobileIndex}
                          />
                          {childrenMenu && (
                          <div
                            role="presentation"
                            onClick={(e) => {
                              e.stopPropagation();
                              setShowChildMenu(!showChildMenu);
                            }}
                          >
                            <Icons.IconChevron
                              className={`${!showChildMenu
                                ? styles.iconChildrenMenu : styles.activeChildrenMenu}`}
                              width={13}
                            />
                          </div>
                          )}
                        </li>
                        <AnimatePresence>
                          { showChildMenu && (
                          <motion.div
                            variants={variantAnimate}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            transition={{ duration: 0.4 }}
                            className={styles.childLinksContainer}
                          >
                            {childrenMenu?.map(({
                              id: childrenId, title: childrenTitle, to: link, mobileIndex: childMobileIndex,
                            }) => (
                              <div key={childrenId}>
                                <NavMobileLink
                                  id={childrenId}
                                  title={childrenTitle}
                                  to={link}
                                  styleContainer={styles.childLink}
                                  mobileIndex={childMobileIndex}
                                />
                              </div>
                            ))}
                          </motion.div>
                          )}
                        </AnimatePresence>
                      </Fragment>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </motion.div>
  );
}

export default MobileNavigation;
