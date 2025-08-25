import React, { useCallback, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import PageContainer from '../../../components/PageContainer/PageContainer';
import MainTitle from '../../../components/MainTitle/MainTitle';
import ImageComponent from '../../../components/Image/Image';
import data from '../data/bdMainSectionData';
import {
  getSlideClassName,
  transitionText,
  variantText,
  variantTitleImage,
} from '../animationVariants';
import Icons from '../../../assets/icon';

import BDBackgroundMain from '@/images/brandingDesign/img_bd_Main_bg.webp';
import styles from '../sass/brandingDesignMainSection.module.scss';

function BrandingDesignMainSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);
  const [trajectory, setTrajectory] = useState('right');

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentSlide(currentSlide + 1);
    if (currentSlide === 1) {
      setTrajectory('left');
    }
  }, [currentSlide]);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentSlide(currentSlide - 1);
    if (currentSlide === 1) {
      setTrajectory('right');
    }
  }, [currentSlide]);

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
        src={BDBackgroundMain}
        alt="background"
        className={styles.background}
        sizes="(max-width: 768px) 50vw, (min-width: 768px) 100vw"
        priority
      />
      <PageContainer className={styles.container}>
        <div className={styles.content}>
          <div>
            <MainTitle tag="h1" className={styles.title}>Branding Design Services</MainTitle>
            <AnimatePresence custom={direction}>
              <motion.p
                key={currentSlide}
                custom={direction}
                variants={variantText}
                initial="enter"
                animate="center"
                exit="exit"
                transition={transitionText}
                className={styles.text}
              >
                {data[currentSlide].text}
              </motion.p>
            </AnimatePresence>
          </div>
          <div className={styles.imageContainer}>
            {data.map(({ id, image, titleImg }) => (
              <div key={id} className={styles[getSlideClassName(currentSlide)]}>
                <ImageComponent
                  src={image}
                  alt={titleImg}
                  fill
                  sizes="(max-width: 768px) 50vw, (min-width: 768px) 100vw"
                />
              </div>
            ))}
            <motion.h2
              key={currentSlide}
              custom={direction}
              variants={variantTitleImage}
              initial="enter"
              animate="center"
              exit="exit"
              transition={transitionText}
              className={styles.titleImg}
            >
              {data[currentSlide].titleImg}
            </motion.h2>
          </div>
        </div>
      </PageContainer>
      <div className={styles.buttonContainer}>
        <motion.button
          onClick={prevSlide}
          type="button"
          disabled={currentSlide <= 0}
          className={styles.btnSlidePrev}
          whileTap={{ scale: 0.9 }}
          aria-label="Previous Slide"
        >
          <Icons.IconArrowSlide />
        </motion.button>
        <motion.button
          onClick={nextSlide}
          type="button"
          disabled={currentSlide >= data.length - 1}
          className={styles.btnSlideNext}
          whileTap={{ scale: 0.9 }}
          aria-label="Next Slide"
        >
          <Icons.IconArrowSlide />
        </motion.button>
      </div>
    </section>
  );
}

export default BrandingDesignMainSection;
