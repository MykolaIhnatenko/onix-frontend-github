import { motion } from 'framer-motion';

import { IModal } from '../interfaces/IModal';
import ClientOnlyPortal from '../../ClientOnlyPortal/ClientOnlyPortal';

import styles from '../sass/modal.module.scss';

function Modal({
  isShow, children, isVisible = true, onClose,
}: IModal) {
  const backdrop = {
    visible: { opacity: 1, display: 'block' },
    hidden: {
      opacity: 0,
      display: 'none',
      transition: {
        display: { delay: 0.2 },
      },
    },
  };

  return (
    <ClientOnlyPortal selector="#modal">
      <motion.div
        className={styles.container}
        initial="hidden"
        variants={backdrop}
        animate={isShow && isVisible ? 'visible' : 'hidden'}
        onClick={onClose}
      >
        {isShow && children}
      </motion.div>
    </ClientOnlyPortal>
  );
}

export default Modal;
