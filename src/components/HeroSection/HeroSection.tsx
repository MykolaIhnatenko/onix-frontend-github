import { motion } from 'framer-motion';

import ImageComponent from '../Image/Image';
import MainTitle from '../MainTitle/MainTitle';
import IHeroSection from './interfaces/IHeroSection';

import styles from './sass/HeroSection.module.scss';

function HeroSection({
  title, backgroundImg, styleTitleContainer, styleContainer,
}: IHeroSection) {
  return (
    <div className={`${styles.container} ${styleContainer || ''}`}>
      {backgroundImg && (
        <div className={styles.bgContainer}>
          <ImageComponent
            src={backgroundImg}
            alt="MainBackground"
            fill
            priority
            sizes="100vw"
          />
        </div>
      )}
      <motion.div
        className={`${styles.titleContainer} ${styleTitleContainer || ''}`}
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
        <MainTitle tag="div" className={styles.title}>
          {title || ''}
        </MainTitle>
      </motion.div>
    </div>
  );
}

export default HeroSection;
