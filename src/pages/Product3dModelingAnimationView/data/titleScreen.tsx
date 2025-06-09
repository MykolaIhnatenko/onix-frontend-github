import { motion } from 'framer-motion';

import MainTitle from '../../../components/MainTitle/MainTitle';
import ContentText from 'components/ContentText/ContentText';

import styles from '../sass/Product.module.scss';

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
      3D Modeling &
      <br className={styles.hideItem} />
      {' '}
      Animation to Transform
      <br className={styles.hideItem} />
      {' '}
      Product Representation
    </MainTitle>
    <ContentText className={styles.description} tag="p">
      Driving engagement through 3D modeling and animated video
    </ContentText>
  </motion.div>
);

export default titleMainBlock;
