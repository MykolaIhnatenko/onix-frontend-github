import { useRef, useState } from 'react';
import { useMotionValueEvent, useScroll, motion } from 'framer-motion';

import ImageComponent from '../Image/Image';
import { IRunningRowsProps } from './interfaces/IRunningRows';

function RunningRowsBlock({
  background, runningRows, rowMotionCoefficient = 50, classes,
}: IRunningRowsProps) {
  const containerRef = useRef(null);
  const rowsRef = useRef(null);

  const [scrollProgress, setScrollProgress] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end start'],
  });

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    setScrollProgress(latest);
  });

  return (
    <div
      className={`relative overflow-hidden !h-[385px] bg-color-black min-md:!h-[619px] min-lg:!h-[1044px]
        ${classes ? classes.block : ''}`}
      ref={containerRef}
    >
      { background
        && (
        <div className={`
          absolute top-0 left-0 w-full h-full
          ${classes ? classes.bgContainer : ''}`}
        >
          <ImageComponent
            src={background}
            sizes="100vw"
            alt="background"
            fill
            className="object-cover"
          />
        </div>
        )}
      <div className={`
        relative mt-[30px] mx-auto mb-0 py-0 px-[15px] h-[355px]
        min-md:mt-[50px] min-md:h-[569px] min-md:mx-auto min-md:mb-0 min-md:py-0 min-md:px-[30px]
        min-lg:my-0 min-lg:mx-auto min-lg:py-[80px] min-lg:px-[70px] min-lg:h-[1044px]
        min-xxxl:px-[80px] min-xxxl:py-[80px]
        ${classes ? classes.container : ''}`}
      >
        {Object.entries(runningRows).map(([row, items], i) => (
          <motion.div
            ref={rowsRef}
            key={[row, i].join('_')}
            className={`flex gap-[25px] w-[1359px]
              min-md:w-[2276px] min-md:gap-[35px]
              min-lg:w-[3950px] min-lg:gap-[60px]
              first-of-type:pb-[25px] min-md:first-of-type:pb-[35px] min-lg:first-of-type:pb-[60px]
              last-of-type:absolute last-of-type:bottom-[30px] last-of-type:right-[15px] last-of-type:w-fit
              min-md:last-of-type:bottom-[50px] min-md:right-[30px]
              min-lg:last-of-type:bottom-[80px] min-lg:right-[70px]
              ${classes ? classes.row : ''}`}
          >
            {items.map((item, index) => (
              <motion.div
                key={[item, index].join('_')}
                className={`relative min-w-[222px] h-[150px]
                  min-md:min-w-[358px] min-md:h-[242px]
                  min-lg:min-w-[612px] min-lg:h-[412px]
                  ${classes ? classes.imgContainer : ''}`}
                style={{
                  right: i % 2 ? `-${scrollProgress * rowMotionCoefficient}%`
                    : `${scrollProgress * rowMotionCoefficient}%`,
                }}
              >
                <ImageComponent
                  className={`object-contain ${classes ? classes.img : ''}`}
                  src={item}
                  alt="screen"
                  sizes="100vw"
                  quality={97}
                  fill
                />
              </motion.div>
            ))}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default RunningRowsBlock;
