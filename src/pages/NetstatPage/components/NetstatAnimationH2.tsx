import React from 'react';
import { motion } from 'framer-motion';

import INetstatAnimationTextProps from '../interfaces/INetstatAnimationText';

function NetstatAnimationH2({
  className = '', duration, delay = 100, inView, children,
}:INetstatAnimationTextProps) {
  const variants = {
    visible: { opacity: 1, transition: { duration: duration / 1000, delay: delay / 1000 } },
    hidden: { opacity: 0 },
  };

  return (
    <motion.h2
      className={className}
      variants={variants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
    >
      {children}
    </motion.h2>
  );
}
export default NetstatAnimationH2;
