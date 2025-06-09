import React from 'react';
import PropTypes from 'prop-types';
import { useInView } from 'react-intersection-observer';
import { useSpring, animated } from '@react-spring/web';

function UpwardTextAnimation({ children, classes, config }) {
  const { translatey } = config;
  const [ref, inView] = useInView({
    rootMargin: '200% 0px -15%',
    triggerOnce: false,
  });
  const translateYValue = inView ? '0vh' : `${translatey}`;

  const movingStyle = useSpring({
    opacity: inView ? 1 : 0,
    transform: `translateY(${translateYValue})`,
    delay: 0,
    config: { duration: 400 },
  });

  return (
    <animated.div ref={ref} style={movingStyle} className={classes}>
      {children}
    </animated.div>
  );
}

UpwardTextAnimation.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.element,
  ]).isRequired,
  classes: PropTypes.string,
  config: PropTypes.shape({
    translatey: PropTypes.string,
  }),
};

UpwardTextAnimation.defaultProps = {
  classes: '',
  config: {
    translatey: '4vh',
  },
};

export default UpwardTextAnimation;
