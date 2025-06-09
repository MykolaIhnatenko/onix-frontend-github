import { motion } from 'framer-motion';

import ImageComponent from '../../../components/Image/Image';
import { useAppSelector } from '../../../hook/reduxToolkit';
import phoneFrame from '../../../assets/images/bracketology/functionalitySection/img_phone@2x.webp';

import styles from '../sass/FunctionalityCarousel.module.scss';

function FunctionalityCarousel({ isShowItem }: { isShowItem: number }) {
  const items = useAppSelector((state) => state.bracketology.items);
  const variants = {
    show: { scale: 1 },
    hide: { scale: 1 },
  };

  return (
    <div className={styles.functionalityCarousel}>
      <div className={styles.mockups}>
        {items.map((item) => (
          <motion.div
            className={styles.mockup}
            key={item.id}
            animate={isShowItem === item.id ? 'show' : 'hide'}
            variants={variants}
          >
            <ImageComponent
              src={item.imgSrc}
              width={321}
              height={695}
              alt="mockup"
            />
          </motion.div>
        ))}
      </div>
      <div className={styles.frame}>
        <ImageComponent
          src={phoneFrame}
          width={360}
          height={732}
          alt="phone-frame"
        />
      </div>
    </div>
  );
}

export default FunctionalityCarousel;
