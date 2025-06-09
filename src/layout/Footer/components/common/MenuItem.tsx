import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';

import IMenuItem from '../../interfaces/IMenuItem';
import SubHeader from './SubHeader';
import LinkComponent from '../../../../components/Link/Link';
import Icons from '../../../../assets/icon';
import IStore from '../../../../store/interfaces/IStore';
import { IApp } from '../../../../store/app/interfaces/IApp';
import { setHiddenAndVisibleAnimation } from '../../../../utils/helpers';

import styles from '../../sass/menuItem.module.scss';

function MenuItem({
  title, url, activeGroup, setActiveGroup, children,
}: IMenuItem) {
  const {
    screenSizes: {
      isSMDevice,
      isXSDevice,
    },
  } = useSelector<IStore, IApp>((state) => state?.app);
  const isTablet = isXSDevice || isSMDevice;

  const isGroupActive = activeGroup === title;

  const onClickHandler = () => {
    if (setActiveGroup) {
      setActiveGroup(isGroupActive ? '' : title);
    }
  };

  const accordionItem = setHiddenAndVisibleAnimation(0.3, 0.8, '82px', 0.1);

  return (
    <motion.div
      role="menuitem"
      tabIndex={0}
      className={`
      ${isGroupActive ? styles.active : ''} 
      ${styles.menuItem}
      `}
      onClick={onClickHandler}
      onKeyDown={onClickHandler}
      initial="hidden"
      variants={accordionItem}
      animate={(isTablet && isGroupActive) || !isTablet ? 'visible' : 'hidden'}
    >
      <SubHeader>
        {url ? (
          <LinkComponent href={url}>
            {title}
          </LinkComponent>
        ) : title}
        {!url && <Icons.IconArrowDown2 className={styles.arrow} />}
      </SubHeader>
      {children}
    </motion.div>
  );
}

export default MenuItem;
