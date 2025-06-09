import { motion } from 'framer-motion';

import MainTitle from '../../../components/MainTitle/MainTitle';

import styles from '../sass/Solomiya.module.scss';

const titleMainBlock = (
  <motion.div
    className={styles.titleContainer}
    initial={{
      opacity: 0,
      y: 50,
    }}
    whileInView={{
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
      },
    }}
    viewport={{ once: true }}
  >
    <MainTitle tag="h1" className={styles.title}>
      Solomiya –
      <br className={styles.hideItem} />
      {' '}
      a mental health app
      <br className={styles.hideItem} />
      {' '}
      case study
    </MainTitle>
  </motion.div>
);

export default titleMainBlock;
