import {
  motion, useScroll,
  useMotionValueEvent,
  useInView,
} from 'framer-motion';
import {
  useEffect, useRef, useState,
} from 'react';

import IRunningColsBlock from './interfaces/IRunningColsBlock';
import ImageComponent from '../Image/Image';

// default background images:
// import RunningColsBgXXXL from '@/images/runningColsBlock/img_runningColsBgXXXL.webp';
// import RunningColsBg from '@/images/runningColsBlock/img_runningColsBg.webp';
// import RunningColsBgTablet from '@/images/runningColsBlock/img_runningColsBgTablet.webp';
// import RunningColsBgMobile from '@/images/runningColsBlock/img_runningColsBgMobile.webp';

function RunningColsBlock({
  bg, runningCols, imagesQuality = 95, classes,
}: IRunningColsBlock) {
  const itemRef = useRef<HTMLDivElement>(null);
  const blockRef = useRef<HTMLDivElement>(null);
  const [translateY, setTranslateY] = useState<number>(0);
  const [itemHeight, setItemHeight] = useState<number>(0);

  const inView = useInView(blockRef);

  const { scrollYProgress } = useScroll({
    target: blockRef,
    offset: ['start end', 'end start'],
  });

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    if (inView) {
      setTranslateY(latest * 25);
    }
  });

  useEffect(() => {
    if (itemRef.current) {
      const { height } = itemRef.current.getBoundingClientRect();

      const computedStyle = window.getComputedStyle(itemRef.current);
      const marginTop = parseFloat(computedStyle.marginTop);
      const marginBottom = parseFloat(computedStyle.marginBottom);

      setItemHeight(height + marginTop + marginBottom);
    }
  }, []);

  return (
    <div
      ref={blockRef}
      className={`
        relative overflow-hidden flex justify-center mx-auto max-w-[1920px] h-[810px]
        screen-lg:h-[662px] screen-lg:mx-0 screen-md:h-[376px]
        ${classes?.section || ''}
      `}
    >
      {bg && (
        <div className={`absolute top-0 left-0 w-full h-full ${classes?.bgContainer || ''}`}>
          <ImageComponent
            src={bg}
            fill
            sizes="100vw"
            alt="black-background"
            quality={95}
            className={`object-cover ${classes?.image || ''}`}
          />
        </div>
      )}
      <div className={`
          absolute flex justify-between w-auto gap-[50px] screen-lg:gap-[35px] screen-md:gap-[20px]
          ${classes?.container || ''}
        `}
      >
        {runningCols.map(({ id, images }, index) => (
          <motion.div
            key={id}
            className={`relative ${classes?.column || ''}`}
            style={{ top: index % 2 === 0 ? `${-itemHeight / 2}px` : '0px' }}
            animate={{ y: `${-translateY}%` }}
            transition={{ ease: 'easeOut', duration: 0, bounce: 0 }}
          >
            {images.map(({ itemId, image }) => (
              <div
                key={itemId}
                ref={itemRef}
                className={`
                  w-[320px] h-[665px] mb-[50px] screen-lg:w-[240px] screen-lg:h-[492px]
                  screen-lg:mb-[35px] screen-md:w-[140px] screen-md:h-[286px] screen-md:mb-[20px]
                  ${classes?.item || ''}
                `}
              >
                <ImageComponent
                  src={image}
                  alt="phoneImage"
                  sizes="100vw"
                  quality={imagesQuality}
                  className={`w-full h-full ${classes?.itemImage || ''}`}
                />
              </div>
            ))}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default RunningColsBlock;
