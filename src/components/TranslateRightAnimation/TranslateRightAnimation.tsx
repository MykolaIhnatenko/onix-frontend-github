import React from 'react';
import { useInView } from 'react-intersection-observer';
import { useSpring, animated } from '@react-spring/web';

import ITranslateRightAnimation from './interfaces/ITranslateRightAnimation';

function TranslateRightAnimation({
  children, classes, offset, delay, triggerOnce,
}: ITranslateRightAnimation) {
  const [ref, inView] = useInView({
    rootMargin: '100% 0px -20%',
    triggerOnce,
  });

  const movingStyle = useSpring({
    opacity: inView ? 1 : 0,
    transform: `translateX(${inView ? '0vh' : `${offset || 0}vh`})`,
    delay,
    config: { duration: 250 },
  });
  return (
    <animated.div ref={ref} style={movingStyle} className={classes}>
      {children}
    </animated.div>
  );
}

export default TranslateRightAnimation;
