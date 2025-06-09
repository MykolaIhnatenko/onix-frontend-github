import React, { forwardRef } from 'react';
import { motion, AnimationProps } from 'framer-motion';

import INetstatAnimationTextProps from '../interfaces/INetstatAnimationText';

const NetstatAnimationBlock = forwardRef<HTMLDivElement, INetstatAnimationTextProps>(
  ({
    className = '', duration, delay = 1, inView, children,
  }, ref) => {
    const animation: AnimationProps['animate'] = {
      opacity: inView ? 1 : 0,
      transition: {
        duration: duration / 1000,
        delay: delay / 1000,
      },
    };

    const initialStyle = {
      opacity: 0,
    };

    return (
      <motion.div
        className={className}
        animate={animation}
        initial={initialStyle}
        ref={ref}
      >
        {children}
      </motion.div>
    );
  },
);

export default NetstatAnimationBlock;
