import {
  motion, useMotionValueEvent, useScroll, useTransform,
} from 'framer-motion';
import {
  useRef, useState,
} from 'react';

import useWindowSize from '../../../hook/useWindowSize';
import ContentText from '../../../components/ContentText/ContentText';
import ImageComponent from '../../../components/Image/Image';
import { LG_DEVICE } from '../../../constants/constants';
import motionGraphicsSliderData from '../data/motionGraphicsSliderData';
import MotionMainBlockBg from '@/images/motionGraphics/background/img_motionMainBg.webp';
import MotionGraphicsSlider4MobileMain from '@/images/motionGraphics/imageSlider/img_4_mobile_main@.webp';

import styles from '../sass/motionMainblock.module.scss';

export const getHeadingStylesTablets1 = (scrollProgress: number) => ({
  top: `${scrollProgress * 200}%`,
  right: `${scrollProgress < 0.6 ? scrollProgress * 100 : 0.6 * 100}px`,
});

function MotionMainBlock() {
  const { width } = useWindowSize();
  const ref = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const isTablet = width <= LG_DEVICE;

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'center center'],
  });

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    setScrollProgress(latest);
  });

  const setWidth = useTransform(scrollYProgress, (value) => {
    if (value > 0.3) {
      return `${value * 100}%`;
    }
    return '30%';
  });
  const opacity = useTransform(scrollYProgress, [0.95, 1], [0, 1]);

  const variants = {
    enter: () => ({
      zIndex: 0,
      x: 0,
      y: 0,
    }),
    exit: () => ({
      zIndex: 0,
      x: -scrollProgress * 350,
      y: scrollProgress * 230,
    }),
  };

  const variantsSecond = {
    enter: () => ({
      zIndex: 0,
      x: 0,
      y: 0,
    }),
    exit: () => ({
      zIndex: 0,
      x: scrollProgress * 350,
      y: scrollProgress * 100,
    }),
  };

  const variantsImg = {
    enter: { x: 2100 },
    exit: { x: 0 },
  };

  return (
    <div className={styles.container}>
      <div
        style={isTablet
          ? { height: '100%' } : { height: '1600px' }}
        ref={ref}
        className={styles.background}
      />
      {(!isTablet && scrollProgress !== 1) && (
        <div
          style={scrollProgress === 1 ? { display: 'none' } : {}}
          className={styles.imageBg}
        >
          <ImageComponent
            src={MotionMainBlockBg}
            alt="background"
            sizes="100vw"
          />
        </div>
      )}
      <motion.h1
        className={styles.titleContainer}
        ref={titleRef}
      >
        <motion.span
          className={`${styles.titleAnimate} ${styles.title}`}
          variants={variants}
          initial={isTablet ? '' : 'enter'}
          animate={isTablet ? '' : 'exit'}
          transition={{ type: 'linear', duration: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          Motion Design
        </motion.span>
        <motion.span
          className={`${styles.titleAnimate} ${styles.title} ${styles.second} `}
          variants={variantsSecond}
          initial={isTablet ? '' : 'enter'}
          animate={isTablet ? '' : 'exit'}
          transition={{ type: 'linear', duration: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          Services
        </motion.span>
      </motion.h1>
      <div className={styles.imageContainer}>
        <div className={styles.content}>
          {isTablet ? (
            <motion.div
              className={`${styles.imagePairContainer} ${styles.visibilImg}`}
            >
              <div
                className={styles.imageTransition}
              >
                <ImageComponent
                  sizes="(max-width: 768px) 50vw, (min-width: 768px) 100vw"
                  width={320}
                  className={styles.imageBig}
                  src={MotionGraphicsSlider4MobileMain}
                  priority
                />
              </div>
            </motion.div>
          ) : (
            motionGraphicsSliderData.map(({
              id,
              mainImage,
              secondaryImage,
              secondaryImagePositionId,
              visibil,
              animateNumber,
            }) => (
              <motion.div
                key={id}
                className={`${styles.imagePairContainer} ${visibil ? styles.visibilImg : ''}`}
                style={(scrollProgress >= 0.3 && !visibil) || isTablet
                  ? { display: 'none' } : {
                    display: 'block',
                    width: setWidth,
                  }}
                transition={{ ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <motion.div
                  key={id}
                  transition={{ duration: +`${animateNumber * 4}` * 0.1 + 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
                  variants={variantsImg}
                  initial="enter"
                  animate="exit"
                  className={styles.imageTransition}
                >
                  <ImageComponent
                    sizes="(max-width: 768px) 50vw, (min-width: 768px) 100vw"
                    width={320}
                    className={styles.imageBig}
                    src={mainImage}
                    priority
                  />
                </motion.div>
                <motion.div
                  style={scrollProgress >= 0.3 || isTablet
                    ? { display: 'none' } : {
                      display: 'block',
                      transitionDelay: `0.${id}`,
                    }}
                  transition={{ duration: +`${animateNumber * 3}` * 0.1 + 2, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className={secondaryImagePositionId ? styles[`imageSmall${secondaryImagePositionId}`] : ''}
                  variants={variantsImg}
                  initial="enter"
                  animate="exit"
                >
                  {secondaryImage && (
                  <ImageComponent
                    className={styles.image}
                    src={secondaryImage}
                    priority
                  />
                  )}
                </motion.div>
              </motion.div>
            ))
          )}
        </div>
        <motion.div
          ref={textRef}
          style={isTablet ? { opacity: 1 } : { opacity }}
          className={styles.textContainer}
        >
          <div className={styles.contentContainer}>
            <ContentText tag="p" className={styles.text}>
              Whether you&apos;re looking to enhance your brand recognition, simplify complex ideas, or
              tell your brand&apos;s story in a new and exciting way, we tailor our motion graphics design
              services to meet your unique needs.
            </ContentText>
            <ContentText tag="p" className={`${styles.text} ${styles.second}`}>
              Our team of experienced designers specializes in creating high-quality animations and videos
              that will grab your audience&apos;s attention.
            </ContentText>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default MotionMainBlock;
