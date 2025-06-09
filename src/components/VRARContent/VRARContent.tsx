import { motion, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import { useAppSelector } from '../../hook/reduxToolkit';
import IVRARContent from './interfaces/IVRARContent';

function VRARContent({
  children, offset = 4, className = '', withoutAnimateMobile = false, withoutAnimate = false, delay = 0,
  translate = 'translateY', triggerOnce = false, rootMarginBottom = -15, duration = 0.25,
}: IVRARContent) {
  const {
    screenSizes: {
      isSMDevice,
      isXSDevice,
      isMDDevice,
    },
  } = useAppSelector((state) => state?.app);
  const isMobile = isMDDevice || isSMDevice || isXSDevice;
  const animateMobile = isMobile && withoutAnimateMobile;

  const { ref, inView } = useInView({
    rootMargin: `200% 0px ${rootMarginBottom}%`,
    triggerOnce,
  });

  const variants: Variants = {
    hidden: {
      opacity: 0,
      transform: `${translate}(${inView ? 0 : offset}vh)`,
      transition: {
        delay,
        duration,
      },
    },
    visible: {
      opacity: 1,
      transform: `${translate}(${inView ? 0 : 4}vh)`,
      transition: delay ? {
        delay,
      } : {
        duration,
      },
    },
  };

  return (withoutAnimate || (withoutAnimateMobile && isMobile) ? (
    <div className={className}>
      { children }
    </div>
  ) : (
    <motion.div
      className={className}
      initial={animateMobile ? '' : 'hidden'}
      animate={(inView && !animateMobile) ? 'visible' : ''}
      variants={variants}
      transition={{ duration }}
      ref={ref}
    >
      {children}
    </motion.div>
  ));
}

export default VRARContent;
