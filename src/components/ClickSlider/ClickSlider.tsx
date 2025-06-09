import {
  PanInfo, animate, motion, useMotionValue,
} from 'framer-motion';
import {
  useCallback, useEffect, useRef, useState,
} from 'react';
import { useInView } from 'react-intersection-observer';

import ClickSliderItem from './components/ClickSliderItem';
import Icons from '../../assets/icon';
import { IClickSlider } from './interfaces/IClickSlider';
import { useAppSelector } from 'hook/reduxToolkit';

import styles from './sass/clickSlider.module.scss';

function ClickSlider({ data, activeShadow, classes }: IClickSlider) {
  const {
    screenSizes: {
      isSMDevice, isXSDevice,
    },
    windowWidth,
  } = useAppSelector((state) => state.app);
  const sliderItemRef = useRef<HTMLDivElement>(null);
  const [translateX, setTranslateX] = useState<number>(0);
  const [slideWidth, setSlideWidth] = useState<number>(0);
  const [activeSlide, setActiveSlide] = useState<number>(1);
  const [trajectory, setTrajectory] = useState('right');
  const isMobile = isSMDevice || isXSDevice;
  const x = useMotionValue(0);
  const { ref, inView } = useInView({
    threshold: 0.7,
  });

  useEffect(() => {
    const setSliderItemWidth = () => {
      const sliderItemWidth = sliderItemRef.current?.clientWidth;
      if (sliderItemWidth) {
        setSlideWidth(sliderItemWidth);
      }
    };

    setSliderItemWidth();
  }, [windowWidth]);

  const prevSlide = useCallback(() => {
    if (translateX >= 0 - slideWidth) {
      setTrajectory('right');
    } else {
      setTrajectory('left');
    }
    if (translateX !== 0) {
      setTranslateX(translateX + slideWidth);
    }
  }, [translateX, slideWidth]);

  const nextSlide = useCallback(() => {
    if (translateX === 0 || translateX > -(slideWidth * (data.length - 1))) {
      setTranslateX(translateX - slideWidth);
    }
    if (translateX < -(slideWidth * (data.length - 1))) {
      setTrajectory('left');
      setTranslateX(translateX - slideWidth);
    }
    if (translateX === -(slideWidth * (data.length - 1))) {
      setTrajectory('right');
      setActiveSlide(0);
      setTranslateX(0);
    }
  }, [translateX, slideWidth, data]);

  const handleAutoSlideChange = useCallback(() => {
    nextSlide();
  }, [nextSlide, prevSlide, trajectory]);

  useEffect(() => {
    let intervalId: NodeJS.Timer;

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        intervalId = setInterval(() => {
          handleAutoSlideChange();
        }, 5000);
      } else {
        clearInterval(intervalId);
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    if (inView) {
      intervalId = setInterval(() => {
        handleAutoSlideChange();
      }, 5000);
    }

    return () => {
      clearInterval(intervalId);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [handleAutoSlideChange, inView]);

  const handleEndDrag = async (e: Event, dragProps: PanInfo) => {
    const { offset } = dragProps;
    if (offset && offset.x > slideWidth / 4 && translateX < 0) {
      setTranslateX(translateX + slideWidth);
    } else if (offset?.x < -slideWidth / 4 && translateX > -(slideWidth * (data.length - 1))) {
      setTranslateX(translateX - slideWidth);
    } else {
      setTranslateX(translateX);
      await animate(x, translateX);
    }
  };

  return (
    <div ref={ref} className="relative overflow-hidden bg-black">
      {isMobile ? (
        <div>
          <motion.div
            style={{ x }}
            drag="x"
            className="relative flex"
            animate={{ x: translateX }}
            transition={{ type: 'spring', x: { duration: 0.8 } }}
            onDragEnd={handleEndDrag}
            dragConstraints={{ left: -(slideWidth * (data.length - 1)), right: 0 }}
          >
            {data.map(({
              img, number, text, title, imgTablet, id,
            }) => (
              <div key={`id_${number}`} ref={sliderItemRef}>
                <ClickSliderItem
                  id={id}
                  img={img}
                  number={number}
                  text={text}
                  title={title}
                  imgTablet={imgTablet}
                  setActiveSlide={(n) => (setActiveSlide(n))}
                  activeShadow={activeShadow}
                  classes={classes?.item}
                />
              </div>
            ))}
          </motion.div>
          <div className={`flex flex-row justify-center p-[20px_0_40px] ${classes?.dotsContainer || ''}`}>
            {data.map(({ id }) => (
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
                className={`w-[8px] h-[8px] rounded-full bg-white opacity-40 mr-[8px]
                  ${activeSlide === id ? 'rounded-[4px] opacity-[1]' : ''}`}
              />
            ))}
          </div>
        </div>
      ) : (
        <div>
          <motion.div
            className="relative flex"
            animate={{ x: translateX }}
            transition={{ type: 'spring', x: { duration: 0.8 } }}
          >
            {data.map(({
              img, number, text, title, imgTablet, id,
            }) => (
              <div key={`id_${number}`} ref={sliderItemRef}>
                <ClickSliderItem
                  id={id}
                  img={img}
                  number={number}
                  text={text}
                  title={title}
                  imgTablet={imgTablet}
                  activeShadow={activeShadow}
                  classes={classes?.item}
                />
              </div>
            ))}
          </motion.div>
          <div
            className="absolute flex justify-between right-[70px] bottom-[70px]
            screen-lg:right-[30px] screen-lg:bottom-[30px]"
          >
            <motion.button
              onClick={prevSlide}
              type="button"
              disabled={translateX >= 0}
              className={`disabled:opacity-40 border-none bg-none p-0 transition duration-[400ms] mr-[30px]
                ${styles.button}`}
              whileTap={{ scale: 0.9 }}
              aria-label="Previous Slide"
            >
              <Icons.IconArrowSlide
                className="w-[80px] h-[80px] screen-lg:w-[43px] screen-lg:h-[43px] rotate-180"
              />
            </motion.button>
            <motion.button
              onClick={nextSlide}
              type="button"
              className={`disabled:opacity-40 border-none bg-none p-0 transition duration-[400ms]
                ${styles.button}`}
              whileTap={{ scale: 0.9 }}
              aria-label="Next Slide"
            >
              <Icons.IconArrowSlide
                className="w-[80px] h-[80px] screen-lg:w-[43px] screen-lg:h-[43px]"
              />
            </motion.button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ClickSlider;
