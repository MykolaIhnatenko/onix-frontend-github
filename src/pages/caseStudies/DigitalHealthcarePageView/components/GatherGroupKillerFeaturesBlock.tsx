import { motion } from 'framer-motion';
import { useRef } from 'react';

import VRARContent from '../../../../components/VRARContent/VRARContent';
import MainTitle from '../../../../components/MainTitle/MainTitle';
import ImageComponent from '../../../../components/Image/Image';
import IKillerFeaturesBlockProps from '../interfaces/IKillerFeaturesBlock';

import styles from '../sass/gatherGroupKillerFeaturesBlock.module.scss';

function GatherGroupKillerFeaturesBlock({ data }: IKillerFeaturesBlockProps) {
  const constraintsRef = useRef < HTMLDivElement | null >(null);

  return (
    <section
      className={`${styles.section}`}
    >
      <VRARContent withoutAnimate className={styles.titleWrapper}>
        <MainTitle className={styles.mainTitle}>
          The app’s &apos;killer&apos; features
        </MainTitle>
      </VRARContent>
      <motion.div
        className={styles.dragWrapper}
        ref={constraintsRef}
      >
        <motion.div
          id="gatherGroupKillerFeaturesBlock"
          className={styles.contentItems}
          drag="x"
          dragConstraints={constraintsRef}
          dragElastic={0}
          dragMomentum={false}
        >
          {data.map(({
            id, title, img, text,
          }) => (
            <div key={id} className={styles.itemCard}>
              {title}
              <div className={styles.imagesWrapper}>
                <ImageComponent src={img} alt="phone" sizes="100vw" />
              </div>
              {text}
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

export default GatherGroupKillerFeaturesBlock;
