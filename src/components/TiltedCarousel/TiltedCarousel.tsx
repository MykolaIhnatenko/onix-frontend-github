import {
  motion, useScroll, useMotionValueEvent, useInView,
} from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

import TiltedCarouselItem from './components/TiltedCarouselItem';
import designAuditTiltedCarousel from '../../pages/DesignAuditServicesPageView/data/designAuditTiltedCarousel';
import { ANIMATION_DECELERATOR } from '../../constants/constants';

function TiltedCarousel() {
  const ref = useRef<HTMLDivElement>(null);
  const [translateX, setTranslateX] = useState<number>(0);
  const [itemStyle, setItemStyle] = useState<boolean>(false);

  const { scrollY } = useScroll();

  const inView = useInView(ref);

  useMotionValueEvent(scrollY, 'change', (latest) => {
    if (inView) {
      setTranslateX(latest / ANIMATION_DECELERATOR);
    }
  });

  useEffect(() => {
    setTimeout(() => {
      setItemStyle(true);
    }, 2000);
  }, []);

  return (
    <div ref={ref} className="relative bg-black overflow-hidden h-[560px] screen-lg:h-[385px] screen-md:h-[360px]">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-[20deg]">
        {designAuditTiltedCarousel.map(({ id, reverse, data }) => (
          <motion.div
            key={id}
            animate={reverse ? { x: translateX } : { x: -translateX }}
            initial={reverse ? { x: 650 } : { x: -650 }}
            transition={{ type: 'spring', x: { duration: 0.4 } }}
            className={`transition-all duration-[2000ms] pb-[10px] last:pb-0 ${itemStyle ? 'duration-200' : ''}`}
          >
            <TiltedCarouselItem data={data} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default TiltedCarousel;
