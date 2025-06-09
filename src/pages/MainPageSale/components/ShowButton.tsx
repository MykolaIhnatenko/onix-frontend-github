import { motion } from 'framer-motion';

import Icons from '../../../assets/icon';
import { IShowButton } from '../interfaces/IShowButton';

import styles from '../sass/showButton.module.scss';

function ShowButton({ setIsShowAll, prevState }: IShowButton) {
  const variantsShowAll = {
    hidden: { y: '0' },
    visible: { y: '-22px' },
  };

  const variantsShowLess = {
    hidden: { y: '0' },
    visible: { y: '-22px' },
  };

  return (
    <div
      className={styles.showButton}
      onClick={() => setIsShowAll(!prevState)}
      role="presentation"
    >
      <div>
        <motion.div
          className={styles.textWrapper}
          variants={variantsShowAll}
          initial="hidden"
          animate={prevState ? 'visible' : 'hidden'}
          transition={{ duration: 0.3 }}
        >
          <span className={styles.title}>show all</span>
        </motion.div>
        <motion.div
          className={styles.textWrapper}
          variants={variantsShowLess}
          initial="hidden"
          animate={prevState ? 'visible' : 'hidden'}
          transition={{ duration: 0.3 }}
        >
          <span className={styles.title}>show less</span>
        </motion.div>
      </div>
      <Icons.IconChevron
        width={13}
        className={`${styles.icon} ${prevState ? styles.openIcon : ''}`}
      />
    </div>
  );
}

export default ShowButton;
