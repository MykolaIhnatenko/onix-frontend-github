import { useCallback, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import PageContainer from '../../../components/PageContainer/PageContainer';
import MainTitle from '../../../components/MainTitle/MainTitle';
import ImageComponent from '../../../components/Image/Image';
import ContentText from '../../../components/ContentText/ContentText';
import data from '../data/bdMainSectionData';
import {
  getSlideClassName, transitionText, variantTextMobile,
} from '../animationVariants';

import BDBackgroundMobile from '@/images/brandingDesign/img_main_block_mobile.webp';
import styles from '../sass/bdMainSectionMobile.module.scss';

function BDMainSectionMobile() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);
  const [trajectory, setTrajectory] = useState('right');

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentSlide(currentSlide - 1);
    if (currentSlide === 1) {
      setTrajectory('right');
    }
  }, [currentSlide]);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentSlide(currentSlide + 1);
    if (currentSlide === 1) {
      setTrajectory('left');
    }
  }, [currentSlide]);

  const dragEndHandler = (offset: number, velocity: number) => {
    const swipePower = Math.abs(offset) * velocity;
    const swipeConfidenceThreshold = 1000;
    if (swipePower < -swipeConfidenceThreshold && currentSlide !== 0) {
      prevSlide();
    } else if (swipePower > swipeConfidenceThreshold && currentSlide !== 2) {
      nextSlide();
    }
  };

  const handleAutoSlideChange = useCallback(() => {
    if (trajectory === 'right') {
      nextSlide();
    } else {
      prevSlide();
    }
  }, [nextSlide, prevSlide, trajectory]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      handleAutoSlideChange();
    }, 5000);

    return () => clearInterval(intervalId);
  }, [handleAutoSlideChange]);

  return (
    <section className={styles.section}>
      <ImageComponent
        src={BDBackgroundMobile}
        alt="background"
        className={styles.background}
        priority
      />
      <PageContainer className={styles.container}>
        <motion.div
          className={styles.slide}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={(e, { offset, velocity }) => { dragEndHandler(offset?.x, velocity?.x); }}
        />
        <MainTitle tag="h1" className={styles.title}>Branding Design Services</MainTitle>
        <div className={styles.imageContainer}>
          {data.map(({ id, imageMobile, titleImg }) => (
            <div key={id} className={styles[getSlideClassName(currentSlide)]}>
              <ImageComponent src={imageMobile} alt={titleImg} fill />
            </div>
          ))}
        </div>
        <AnimatePresence custom={direction}>
          <motion.div
            key={currentSlide}
            custom={direction}
            variants={variantTextMobile}
            initial="enter"
            animate="center"
            exit="exit"
            transition={transitionText}
            className={styles.titleImgWrapper}
          >
            <MainTitle tag="h2" className={styles.titleImg}>
              {data[currentSlide].titleImg}
            </MainTitle>
          </motion.div>
        </AnimatePresence>
        <div className={styles.indicatorSlide}>
          {data.map(({ id }, index) => (
            <div
              key={id}
              className={`${styles.circle} 
              ${(data.length - 1 - index) === currentSlide ? styles.activeCircle : ''}`}
            />
          ))}
        </div>
        <div className={styles.textWrapper}>
          <AnimatePresence custom={direction}>
            <motion.div
              key={currentSlide}
              className={styles.textWrapper}
              custom={direction}
              variants={variantTextMobile}
              initial="enter"
              animate="center"
              exit="exit"
              transition={transitionText}
            >
              <ContentText tag="p" className={styles.text}>
                {data[currentSlide].text}
              </ContentText>
            </motion.div>
          </AnimatePresence>
        </div>
      </PageContainer>
    </section>
  );
}

export default BDMainSectionMobile;
