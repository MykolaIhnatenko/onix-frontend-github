import {
  useCallback, useEffect, useMemo, useRef, useState,
} from 'react';
import {
  animate,
  motion,
  PanInfo,
  useMotionValue,
  AnimationOptionsWithValueOverrides,
} from 'framer-motion';

import { ChildComponent, VirtualizedPageProps } from '../interfaces/IInfiniteDragSlider';
import Page from './Page';

function VirtualizedPage({ children, activeSlide }: VirtualizedPageProps) {
  const x = useMotionValue(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const [sliderDrag, setSliderDrag] = useState(false);

  const range = [-4, -3, -2, -1, 0, 1, 2, 3, 4];

  const transition: AnimationOptionsWithValueOverrides = useMemo(() => ({
    type: 'spring',
    bounce: 0,
  }), []);

  const calculateNewX = useCallback(() => -index * (containerRef.current?.clientWidth || 0), [index]);

  const handleEndDrag = async (e: Event, dragProps: PanInfo) => {
    const clientWidth = containerRef.current?.clientWidth || 0;

    const { offset } = dragProps;

    if (offset && offset.x > clientWidth / 4) {
      const skipSlides = offset?.x > clientWidth + clientWidth / 4 ? 2 : 1;
      setIndex(index - skipSlides);
      setSliderDrag(true);
    } else if (offset?.x < -clientWidth / 4) {
      const skipSlides = offset?.x < -clientWidth - clientWidth / 4 ? 2 : 1;
      setIndex(index + skipSlides);
    } else {
      await animate(x, calculateNewX(), transition);
    }
  };

  const child: ChildComponent = useMemo(() => children({ index }), [index, children]);
  const childId = child.props.children.props.id;

  useEffect(() => {
    const controls = animate(x, calculateNewX(), transition);
    activeSlide(childId);

    return () => {
      controls.stop();
    };
  }, [index, calculateNewX, x, transition, childId, activeSlide, sliderDrag]);
  return (
    <motion.div ref={containerRef} className="relative w-full h-full">
      {range.map((rangeValue) => (
        <Page
          key={rangeValue + index}
          x={x}
          onDragEnd={handleEndDrag}
          index={rangeValue + index}
          renderPage={children}
        />
      ))}
    </motion.div>
  );
}

export default VirtualizedPage;
