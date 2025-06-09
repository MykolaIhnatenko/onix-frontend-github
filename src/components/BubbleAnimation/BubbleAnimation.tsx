import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import IBubbleAnimationProps from './interfaces/IBubbleAnimation';

function BubbleAnimation({ children, classes = '', triggerOnce = false }: IBubbleAnimationProps) {
  const [ref, inView] = useInView({
    rootMargin: '200% 0px -15%',
    triggerOnce,
  });

  return (
    <motion.div
      ref={ref}
      animate={{ scale: inView ? [1, 0.98, 1.01, 0.98, 1] : 1 }}
      transition={{ duration: 0.69 }}
      className={classes}
    >
      {children}
    </motion.div>
  );
}

export default BubbleAnimation;
