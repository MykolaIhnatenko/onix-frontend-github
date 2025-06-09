import {
  Variants, motion, useMotionValue, useTransform, animate,
} from 'framer-motion';

import MainTitle from '../../../components/MainTitle/MainTitle';
import { IBDNumberBlockProps } from '../interfaces/IBDNumberBlockProps';

import styles from '../sass/bdNumberBlock.module.scss';

function BDNumberBlock({ variant, data }:IBDNumberBlockProps) {
  const item = data[0];
  const countLeft = useMotionValue(-item.leftTitle);
  const countCentral = useMotionValue(-item.centralTitle);
  const countRight = useMotionValue(-item.rightTitle);
  const roundedLeft = useTransform(countLeft, (latest) => Math.round(latest));
  const roundedCentral = useTransform(countCentral, (latest) => Math.round(latest));
  const roundedRight = useTransform(countRight, (latest) => Math.round(latest));

  const cardVariants: Variants = {
    offscreen: {
      y: 300,
    },
    onscreen: {
      y: 0,
      transition: {
        type: 'spring',
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };

  const onView = ():void => {
    animate(countLeft, item.leftTitle).then(() => {}).catch(() => {});
    animate(countCentral, item.centralTitle).then(() => {}).catch(() => {});
    animate(countRight, item.rightTitle).then(() => {}).catch(() => {});
  };

  return (
    <motion.div
      className={`${styles.tableRow} ${variant ? styles[variant] : ''}`}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true }}
    >
      <motion.div
        className={styles.tableCol}
        variants={cardVariants}
        onViewportEnter={() => onView()}
        viewport={{ once: true }}
      >
        <MainTitle tag="p" className={styles.title}>
          <motion.span>
            {roundedLeft}
          </motion.span>
          {item.leftPrefix}
        </MainTitle>
        {item.leftContent}
      </motion.div>
      <motion.div
        className={styles.tableCol}
        variants={cardVariants}
        onViewportEnter={() => onView()}
        viewport={{ once: true }}
      >
        <MainTitle tag="p" className={styles.title}>
          <motion.span>{roundedCentral}</motion.span>
          {item.centralPrefix}
        </MainTitle>
        {item.centralContent}
      </motion.div>
      <motion.div
        className={styles.tableCol}
        variants={cardVariants}
        viewport={{ once: true, amount: 0.8 }}
      >
        <MainTitle tag="p" className={styles.title}>
          <motion.span>{roundedRight}</motion.span>
          {item.rightPrefix}
        </MainTitle>
        {item.rightContent}
      </motion.div>
    </motion.div>
  );
}

export default BDNumberBlock;
