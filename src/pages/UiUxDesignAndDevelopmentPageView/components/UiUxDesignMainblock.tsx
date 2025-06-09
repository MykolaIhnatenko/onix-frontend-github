import {
  motion, useMotionValueEvent, useScroll, useTransform,
} from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';

import useWindowSize from '../../../hook/useWindowSize';
import VideoPlayer from '../../../components/VideoPlayer/VideoPlayer';
import ContentText from '../../../components/ContentText/ContentText';
import { LG_DEVICE, MD_DEVICE } from '../../../constants/constants';
import VideoPosterTablet from '@/images/uiUxPage/mainBlock/img_video_poster_tablet.webp';
import { setUiUxSoudn } from '../../../store/cursorFollower/slice';

import styles from '../sass/uiUxDesignMainblock.module.scss';

export const getHeadingStylesTablets1 = (scrollProgress: number) => ({
  top: `${scrollProgress * 200}%`,
  right: `${scrollProgress < 0.6 ? scrollProgress * 100 : 0.6 * 100}px`,
});

function UiUxDesignMainblock() {
  const { width } = useWindowSize();
  const isTablet = width <= LG_DEVICE;
  const isMobile = width < MD_DEVICE;
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const [titleHeight, setTitleHeight] = useState(0);

  const [scrollProgress, setScrollProgress] = useState<number>(0);

  const dispatch = useDispatch();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'center center'],
  });

  const setWidth = useTransform(scrollYProgress, (value) => {
    if (value > 0.40) {
      return `${value * 100}%`;
    }
    return '40%';
  });

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    setScrollProgress(latest);
  });

  const opacity = useTransform(scrollYProgress, [0.95, 1], [0, 1]);
  const titleOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  useEffect(() => {
    if (titleRef.current?.clientHeight) {
      setTitleHeight(titleRef.current?.clientHeight);
    }
  });

  return (
    <div ref={containerRef} className={styles.container}>
      <div
        style={isTablet
          ? { height: 'calc(100% + 151px)' } : { height: '1600px' }}
        ref={ref}
        className={styles.background}
      />
      <motion.h1
        style={isTablet ? { opacity: 1 } : { opacity: titleOpacity }}
        ref={titleRef}
        className={styles.titleContainer}
      >
        <motion.span
          className={`${styles.titleAnimate} ${styles.title}`}
          style={!isTablet ? {
            top: `${scrollProgress * 150}px`,
            right: `${scrollProgress * 200}px`,
          } : {}}
        >
          UI/UX Design &
        </motion.span>
        <motion.span
          className={`${styles.titleAnimate} ${styles.title}  ${styles.second}`}
          style={!isTablet ? {
            left: `${scrollProgress * 30}%`,
          } : {}}
        >
          Development Services
        </motion.span>
      </motion.h1>
      <div
        className={styles.videoContainer}
        style={!isTablet ? { paddingTop: titleHeight } : { }}
      >
        <div className={styles.videoFlex}>
          <motion.div
            className={styles.video}
            style={isTablet ? { width: '100%' } : { width: setWidth }}
            onClick={() => dispatch(setUiUxSoudn())}
          >
            <VideoPlayer
              src="/static/video/uiUx_video.mp4"
              poster={VideoPosterTablet}
              autoPlayVariant={!isMobile}
              mutedVariant={!isMobile}
              loopVariant={!isMobile}
              withoutBtn={!isMobile}
              controls={isMobile}
              id={!isMobile ? 'uiUxVideo' : ''}
              buttonText="View showreel"
              classes={{
                button: 'hover:min-lg:w-[213px]',
                video: 'object-cover',
              }}
              priorityImage
            />
          </motion.div>
        </div>
        <motion.div
          style={isTablet ? { opacity: 1 } : { opacity }}
          className={styles.textContainer}
        >
          <div className={styles.contentContainer}>
            <ContentText tag="p" className={styles.text}>
              We create exceptional user experiences that elevate your brand and drive measurable results.
            </ContentText>
            <ContentText tag="p" className={`${styles.text} ${styles.second}`}>
              Our expert UI/UX designers combine cutting-edge technology with intuitive design principles
              to craft visually stunning interfaces that are also user-friendly and efficient.
            </ContentText>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default UiUxDesignMainblock;
