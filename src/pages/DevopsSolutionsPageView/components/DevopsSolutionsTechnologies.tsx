import { motion } from 'framer-motion';
import { useState } from 'react';

import MainTitle from '../../../components/MainTitle/MainTitle';
import ContentText from '../../../components/ContentText/ContentText';
import ImageComponent from '../../../components/Image/Image';
import InfiniteDragSlider from '../../../components/InfiniteDragSlider/InfiniteDragSlider';
import devopsSolutionsInfiniteDragSliderdata from '../data/devopsSolutionsInfiniteDragSliderdata';
import IDevopsSolutionsTechnologies from '../interfaces/IDevopsSolutionsTechnologies';

import styles from '../sass/devopsSolutionsTechnologies.module.scss';

function DevopsSolutionsTechnologies({ background, text, title }: IDevopsSolutionsTechnologies) {
  const [activeSlide, setActiveSlide] = useState<number>(1);

  return (
    <div className={styles.container}>
      <div className={styles.background}>
        <ImageComponent
          src={background}
          alt="background"
        />
      </div>
      <div className={styles.content}>
        <MainTitle className={styles.title}>
          {title}
        </MainTitle>
        <ContentText tag="p" className={styles.text}>
          {text}
        </ContentText>
        <InfiniteDragSlider
          data={devopsSolutionsInfiniteDragSliderdata}
          setActiveSlide={(n) => (setActiveSlide(n))}
        />
        <div className={`d-flex d-row d-justify-center ${styles.dotsContainer}`}>
          {devopsSolutionsInfiniteDragSliderdata.map(({ id }) => (
            <motion.div
              key={id}
              variants={{
                active: {
                  width: 20,
                },
                normal: {
                  width: 8,
                },
              }}
              initial="normal"
              animate={activeSlide === id ? 'active' : 'normal'}
              className={`${styles.dots} ${activeSlide === id ? styles.active : ''}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default DevopsSolutionsTechnologies;
