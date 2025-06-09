import { useInView } from 'react-intersection-observer';
import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import PropTypes from 'prop-types';

function VRARPageAppearAnimation({
  children, classes, offset, delay, triggerOnce, translate, duration, list, tag: Tag, disabled,
}) {
  const [ref, inView] = useInView({
    rootMargin: '200% 0px -20%',
    triggerOnce,
  });

  const movingStyle = useSpring({
    opacity: inView ? 1 : 0,
    transform: `${translate}(${inView ? 0 : offset}vh)`,
    delay,
    config: { duration },
  });

  const AnimatedTag = list ? animated.li : animated[Tag];

  return (
    <AnimatedTag ref={ref} style={disabled ? null : movingStyle} className={classes}>
      {children}
    </AnimatedTag>
  );
}

VRARPageAppearAnimation.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.element,
  ]).isRequired,
  classes: PropTypes.string,
  offset: PropTypes.number,
  delay: PropTypes.number,
  triggerOnce: PropTypes.bool,
  translate: PropTypes.oneOf(['translateY', 'translateX']),
  duration: PropTypes.number,
  list: PropTypes.bool,
  tag: PropTypes.string,
  disabled: PropTypes.bool,
};

VRARPageAppearAnimation.defaultProps = {
  classes: '',
  offset: 4,
  delay: 0,
  triggerOnce: false,
  translate: 'translateY',
  duration: 250,
  list: false,
  tag: 'div',
  disabled: false,
};

export default VRARPageAppearAnimation;
