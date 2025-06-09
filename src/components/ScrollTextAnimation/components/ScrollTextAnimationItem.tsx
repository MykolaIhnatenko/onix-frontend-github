import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';
import { useSelector } from 'react-redux';

import IScrollTextAnimationItem from '../interfaces/IScrollTextAnimationItem';
import IStore from 'store/interfaces/IStore';
import { IApp } from 'store/app/interfaces/IApp';

function ScrollTextAnimationItem({
  item, scaleIndex = 1.3,
  scaleIndexTablet,
  scaleIndexMobile = 1.3,
  stylesText, themeBlack,
}: IScrollTextAnimationItem) {
  const ref = useRef<HTMLHeadingElement>(null);
  const {
    screenSizes: {
      isMDDevice,
      isSMDevice,
      isXSDevice,
    },
  } = useSelector<IStore, IApp>((state) => state?.app);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['85% 85%', '15% 15%'],
  });

  const isMobile = isSMDevice || isXSDevice;
  const isTablet = isMDDevice && !isMobile;

  const getActiveScaleIndex = (): number => {
    if (isMobile) return scaleIndexMobile;
    if (isTablet) return scaleIndexTablet || scaleIndex;
    return scaleIndex;
  };

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, getActiveScaleIndex(), 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.4, 1, 0.4]);

  return (
    <motion.h3
      ref={ref}
      className={`
        font-medium font-generalSans text-[48px]/[132px] flex text-center
        my-[100px] screen-lg:text-[40px]/[100px]
        screen-lg:my-[80px] screen-md:text-[24px]/[40px] screen-md:my-[60px]
        ${themeBlack ? 'text-color-white' : 'text-color-black'}
        ${stylesText || ''}
      `}
      style={{ scale, opacity }}
    >
      {item}
    </motion.h3>
  );
}

export default ScrollTextAnimationItem;
