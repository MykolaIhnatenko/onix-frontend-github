import { useInView } from 'react-intersection-observer';
import { useSpring, animated } from '@react-spring/web';
import PropTypes from 'prop-types';

function OpacityAnimation({
  children, classes, delay,
}) {
  const [ref, inView] = useInView({
    rootMargin: '200% 0px -20%',
    triggerOnce: false,
  });

  const movingStyle = useSpring({
    opacity: inView ? 1 : 0,
    delay,
    config: { duration: 500 },
  });

  return (
    <animated.div ref={ref} style={movingStyle} className={classes}>
      {children}
    </animated.div>
  );
}

OpacityAnimation.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.element,
  ]).isRequired,
  classes: PropTypes.string,
  delay: PropTypes.number,
};

OpacityAnimation.defaultProps = {
  classes: '',
  delay: 0,
};

export default OpacityAnimation;
