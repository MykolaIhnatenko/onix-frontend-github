import { motion } from 'framer-motion';

import ImageComponent from '../../../components/Image/Image';
import IHeroImages from '../interfaces/IHeroImages';

import Person from '@/images/faynoMarket/mainSection/img_person.webp';
import Showcase from '@/images/faynoMarket/mainSection/img_showcase.webp';
import styles from '../sass/HeroImages.module.scss';

function HeroImages({ translateY, translateYSecond }: IHeroImages) {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.heroWrapper}>
        <motion.div
          style={{
            translateY,
            height: '100%',
          }}
          className={styles.heroPerson}
        >
          <ImageComponent
            src={Person}
            alt="person_image"
            fill
            priority
            sizes="100vw"
            quality={90}
          />
        </motion.div>
        <motion.div
          style={{
            translateY: translateYSecond,
            height: '100%',
          }}
          className={styles.heroShowcase}
        >
          <ImageComponent
            src={Showcase}
            alt="showcase_image"
            fill
            priority
            sizes="100vw"
            quality={90}
          />
        </motion.div>
      </div>
    </div>
  );
}

export default HeroImages;
