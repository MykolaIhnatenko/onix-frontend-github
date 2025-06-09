import {
  motion, useScroll, useMotionValueEvent,
} from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

import IScrollSlider from './interfaces/IScrollSliderDefault';
import ScrollSliderItem from '../ScrollSliderItem/ScrollSliderItem';
import { useAppSelector } from 'hook/reduxToolkit';

function ScrollSliderDefault({ data, offset = 0, classes }: IScrollSlider) {
  const {
    windowWidth,
    screenSizes: { isXXXLDevice },
  } = useAppSelector((state) => state.app);

  const ref = useRef<HTMLDivElement>(null);
  const itemRef = useRef<HTMLDivElement>(null);

  const [width, setWidth] = useState<number>(0);
  const [slideWidth, setSlideWidth] = useState<number>(0);
  const [containerHeight, setContainerHeight] = useState<number>(0);
  const [translateX, setTranslateX] = useState<number>(70);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  });

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    if (isXXXLDevice) {
      setTranslateX(80 - (latest * (slideWidth * (data.length) - width + 120) - offset));
    } else {
      setTranslateX(70 - (latest * (slideWidth * (data.length) - width + 100) - offset));
    }
  });

  useEffect(() => {
    const newContainerHeight = slideWidth * (data.length);
    setWidth(ref.current?.clientWidth || 1162);
    setSlideWidth(itemRef.current?.clientWidth || 1162);
    setContainerHeight(newContainerHeight);
  }, [data, slideWidth, windowWidth]);

  return (
    <div
      ref={ref}
      className={`relative z-[1] block ${classes?.scrollContainer || ''}`}
      style={{
        height: `${containerHeight}px`,
      }}
    >
      <div className={`sticky top-[10vh] overflow-hidden ${classes?.stickyWrapper || ''}`}>
        <motion.div
          className="flex"
          style={{
            width: `${(data.length) * slideWidth}px`,
          }}
          animate={{ x: translateX }}
          initial={{ x: 20 }}
          transition={{
            type: 'tween',
          }}
        >
          {data.map(({
            content, id, href, absolute, target,
          }) => (
            <div key={id} ref={itemRef} style={{ display: 'flex' }}>
              {href ? (
                <ScrollSliderItem
                  id={id}
                  content={content}
                  href={href}
                  absolute={absolute}
                  target={target}
                />
              ) : (
                <ScrollSliderItem
                  id={id}
                  content={content}
                />
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default ScrollSliderDefault;
