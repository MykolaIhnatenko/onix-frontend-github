import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

import IProgressLine from '../../interfaces/IProgressLine';

function ProgressLine({
  classes, delay = 0.3, vertical = false, withoutAnimate = false,
}: IProgressLine) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.5 });

  const variants = {
    visible: vertical
      ? {
        height: '100%',
        transition: { duration: 1.3, ease: 'easeInOut', delay },
      }
      : {
        width: '100%',
        transition: { duration: 1.3, ease: 'easeInOut', delay },
      },
    hidden: vertical
      ? {
        height: '0%',
        transition: { duration: 0, delay: 0 },
      }
      : {
        width: '0%',
        transition: { duration: 0, delay: 0 },
      },
  };

  return (
    <div
      ref={ref}
      className={`${vertical ? 'w-[1px] h-full bg-color-cruise' : 'w-full h-[1px] bg-color-cruise'}
      ${classes?.container || ''}`}
    >
      {withoutAnimate ? (
        <div
          className={`${vertical ? 'h-full w-full bg-white' : 'w-full h-full bg-white'}
          ${classes?.line || ''}`}
        />
      ) : (
        <motion.div
          className={`${vertical ? 'w-full bg-white' : 'h-full bg-white'}
          ${classes?.line || ''}`}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={variants}
        />
      )}
    </div>
  );
}

export default ProgressLine;
