import { motion } from 'framer-motion';
import { useRef } from 'react';

import itIndustryDragComponentData from '../data/itIndustryDragComponentData';

import styles from '../sass/itIndustryDragComponent.module.scss';

function ITIndustryDragComponent() {
  const constraintsRef = useRef<HTMLDivElement | null>(null);

  return (
    <motion.div className={styles.container} ref={constraintsRef}>
      <motion.div
        className={styles.wrapper}
        drag="x"
        dragConstraints={constraintsRef}
        dragElastic={0.3}
        dragMomentum
      >
        {itIndustryDragComponentData.map(({
          id, image, title, text,
        }) => (
          <div key={id} className={styles.item}>
            {image}
            {title}
            {text}
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
}

export default ITIndustryDragComponent;
