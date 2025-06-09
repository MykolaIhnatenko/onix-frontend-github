import { useMemo } from 'react';
import { useInView } from 'react-intersection-observer';
import PropTypes from 'prop-types';

import useWindowSize from '../../../../hook/useWindowSize';
import { LG_DEVICE } from '../../../../constants/constants';

function GraphAnimation({ delay, children }) {
  const { width } = useWindowSize();
  const isTablet = useMemo(() => {
    let tablet = false;
    if (width < LG_DEVICE) {
      tablet = true;
    }

    return tablet;
  }, [width]);

  const rootMargin = isTablet ? '100% 0px -20%' : '200% 0px -50%';
  const [ref, inView] = useInView({
    rootMargin,
    triggerOnce: true,
    delay,
  });

  return (
    <div ref={ref}>
      {inView && children}
    </div>
  );
}

GraphAnimation.propTypes = {
  delay: PropTypes.number,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.element,
  ]).isRequired,
};

GraphAnimation.defaultProps = {
  delay: 0,
};

export default GraphAnimation;
