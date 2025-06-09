import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

import IScrollSliderItem from './interfaces/IScrollSliderItem';
import LinkComponent from '../Link/Link';

function ScrollSliderItem({
  id, content, setActiveSlide, href, absolute = true, target = '_self',
}: IScrollSliderItem) {
  const { ref, inView } = useInView({
    threshold: 0.8,
  });

  useEffect(() => {
    if (inView && setActiveSlide) {
      setActiveSlide(id);
    }
  }, [inView, setActiveSlide, id]);

  return (
    href ? (
      <div>
        <LinkComponent href={href} absolute={absolute} target={target}>
          <motion.div
            key={id}
            ref={ref}
            initial={{ opacity: 0.1 }}
            whileInView={{ opacity: 1 }}
          >
            {content}
          </motion.div>
        </LinkComponent>
      </div>
    ) : (
      <motion.div
        key={id}
        ref={ref}
        initial={{ opacity: 0.1 }}
        whileInView={{ opacity: 1 }}
        style={{ display: 'flex' }}
      >
        {content}
      </motion.div>
    )
  );
}

export default ScrollSliderItem;
