import { useDispatch } from 'react-redux';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';

import Icons from '../../../assets/icon';
import LinkComponent from '../../../components/Link/Link';
import NavLink from './NavLink';
import { rectangleAVariant, rectangleBVariant } from '../animations/mobileMenuAnimation';
import { setNavSubMenuVisibility } from '../../../store/app/slice';
import INavLink from '../interfaces/INavLink';
import PageLinks from '../../../constants/PageLinks';
import Logo from '../../../assets/images/img_logo.webp';
import { deepEqual } from '../../../utils/helpers';

import styles from '../sass/mobileMenu.module.scss';

const MobileNavigation = dynamic(() => import('./MobileNavigation'));

interface IMobileMenuProps {
  fixHeader:boolean ;
  updateNavLinks: INavLink[];
  isMDDevice: boolean;
}

const areEqual = (prevProps:IMobileMenuProps, nextProps:IMobileMenuProps) => prevProps.fixHeader === nextProps.fixHeader
    && deepEqual(prevProps.updateNavLinks, nextProps.updateNavLinks)
    && prevProps.isMDDevice === nextProps.isMDDevice;

function MobileMenu({
  fixHeader, updateNavLinks, isMDDevice,
}: IMobileMenuProps) {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    dispatch(setNavSubMenuVisibility({ navSubMenuVisibility: isOpen ? 1 : 0 }));
  }, [isOpen, dispatch]);

  return (
    <div
      className={`
        ${styles.mobileMenu}
        ${!fixHeader && isOpen ? styles.fixHeader : ' '}
        ${styles.menuPosition}
      `}
      style={{
        ...isOpen && ({ width: '50%', right: '0' }),
        position: fixHeader ? 'fixed' : 'relative',
        mixBlendMode: isOpen ? 'unset' : 'difference',
      }}
    >
      <div
        className={`d-flex d-row d-justify-between ${styles.container} ${isOpen ? styles.open : ''}`}
      >
        <div className={`d-flex d-item-center ${styles.link}`}>
          <LinkComponent href="/" ariaLabel="logo" prefetch className={styles.link}>
            <Icons.IconLogo width={128} height={32} />
          </LinkComponent>
        </div>
        {isOpen && isMDDevice
           && (
           <Image
             src={Logo}
             alt="Logo"
             width={128}
             height={32}
             quality={100}
             className={styles.logoTablet}
           />
           )}
        <div className="d-flex d-row">
          {!isOpen && (
            <NavLink
              id={1}
              to={PageLinks.CONTACT_US}
              title="CONTACT"
              icon={<Icons.IconArrowUp45 color="#222" width={16} />}
              styleContainer={`${styles.subMenuLink} ${styles.hideMobile}`}
              mobileIndex={0}
            />
          )}
          <motion.div
            role="presentation"
            className={`d-flex d-col d-justify-center d-item-center ${styles.menuBtn}`}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            initial="close"
            animate={isOpen ? 'open' : 'close'}
          >
            <motion.div className={styles.rectangle} variants={rectangleAVariant} />
            <motion.div className={styles.rectangle} variants={rectangleBVariant} />
          </motion.div>
        </div>
        <MobileNavigation isOpen={isOpen} updateNavLinks={updateNavLinks} />
      </div>
    </div>
  );
}

export default React.memo(MobileMenu, areEqual);
