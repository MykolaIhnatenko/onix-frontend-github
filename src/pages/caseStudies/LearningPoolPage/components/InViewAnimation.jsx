import React from 'react';
import PropTypes from 'prop-types';
import { useSpring, animated } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';

export default function InViewAnimation({
  up, down, right, left, className, offset, children,
}) {
  const [ref, inView] = useInView({
    rootMargin: '200% 0px -15%',
  });

  const offsetValue = `${offset}vh`;

  const movingStyle = useSpring({
    ...(down ? { transform: `translateY(${inView ? '0' : offsetValue})` } : {}),
    ...(up ? { transform: `translateY(${inView ? '0' : `-${offsetValue}`})` } : {}),
    ...(right ? { transform: `translateX(${inView ? '0' : offsetValue})` } : {}),
    ...(left ? { transform: `translateX(${inView ? '0' : `-${offsetValue}`})` } : {}),
    opacity: inView ? 1 : 0,
    delay: 0,
    config: { duration: 250 },
  });

  return (
    <animated.div ref={ref} style={movingStyle} className={className}>
      {children}
    </animated.div>
  );
}

InViewAnimation.defaultProps = {
  up: false,
  down: false,
  right: false,
  left: false,
  className: '',
  offset: 5,
};

InViewAnimation.propTypes = {
  up: PropTypes.bool,
  down: PropTypes.bool,
  right: PropTypes.bool,
  left: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.element,
  ]).isRequired,
  offset: PropTypes.number,
};
