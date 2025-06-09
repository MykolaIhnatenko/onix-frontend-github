import React from 'react';
import { motion } from 'framer-motion';

import INetstatAnimationTextProps from '../interfaces/INetstatAnimationText';

function NetstatAnimationText({
  className = '',
  duration,
  delay = 1,
  inView,
  children,
}: INetstatAnimationTextProps) {
  const variants = {
    visible: { opacity: 1, transition: { duration: duration / 1000, delay: delay / 1000 } },
    hidden: { opacity: 0 },
  };

  return (
    <motion.p
      className={className}
      variants={variants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
    >
      {children}
    </motion.p>
  );
}

export default NetstatAnimationText;
