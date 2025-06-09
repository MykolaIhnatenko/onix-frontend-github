import React, {
  useRef, useState, useEffect, useCallback, useMemo,
} from 'react';
import {
  animate,
  AnimationOptionsWithValueOverrides,
  motion,
  PanInfo,
  useMotionValue,
} from 'framer-motion';

import { useAppSelector } from 'hook/reduxToolkit';
import ScrollSliderItem from '../ScrollSliderItem/ScrollSliderItem';
import IDragSliderDefault from './interfaces/IDragSliderDefault';
import { XXXL_DEVICE } from 'constants/constants';

function DragSlider({ data, withoutDots, classes }: IDragSliderDefault) {
  const [activeSlide, setActiveSlide] = useState<number>(1);
  const [index, setIndex] = useState(0);

  const slideRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const clientWidth = slideRef.current?.clientWidth || 0;
  const containerWidth = containerRef.current?.clientWidth || 0;

  const {
    isSMDevice, isXSDevice, isMDDevice, screenWidth,
  } = useAppSelector((state) => state.app.screenSizes);

  let lastItemX = -(clientWidth * data.length - containerWidth + 110);
  if (isSMDevice || isXSDevice) {
    lastItemX = -(clientWidth * data.length - containerWidth + 15);
  } else if (isMDDevice) {
    lastItemX = -(clientWidth * data.length - containerWidth + 30);
  } else if (screenWidth >= XXXL_DEVICE) {
    lastItemX = -(clientWidth * data.length - containerWidth + 130);
  }

  const transition: AnimationOptionsWithValueOverrides = useMemo(() => ({
    type: 'keyframes',
    bounce: 0,
    duration: 1,
  }), []);

  const setIndexValue = (newXSelector: boolean, skip: number) => {
    setIndex((prevIndex) => (newXSelector ? prevIndex : prevIndex - skip));
  };

  const toLeftSide = (offset: number, newXSelector: boolean, skipTwoSlides: number, skipSlides: number) => {
    const severalSlidesVisible = lastItemX - (-(index - 1)) * clientWidth >= -30;
    if (severalSlidesVisible) {
      const skipSlideslast = offset > clientWidth + clientWidth / 4 ? 3 : 2;
      const skipTwoSlideslast = offset > (clientWidth * 2) + clientWidth / 4 ? 4 : skipSlideslast;

      setIndex((prevIndex) => {
        const newIndex = prevIndex - skipTwoSlideslast;

        return newIndex < 0 ? 0 : newIndex;
      });
      return;
    }
    if (index === 1) {
      setIndexValue(newXSelector, 1);
      return;
    }
    if (index === 2) {
      setIndexValue(newXSelector, skipSlides);
      return;
    }
    setIndexValue(newXSelector, skipTwoSlides);
  };

  const calculateNewX = useCallback(() => -index * clientWidth, [index]);
  const x = useMotionValue(0);
  const newX = calculateNewX();

  const handleEndDrag = useCallback(async (e: Event, dragProps: PanInfo) => {
    const { offset } = dragProps;
    const skipSlides = offset?.x > clientWidth + clientWidth / 4 ? 2 : 1;
    const skipTwoSlides = offset?.x > (clientWidth * 2) + clientWidth / 4 ? 3 : skipSlides;
    const skipSlidesRevers = offset?.x < -clientWidth - clientWidth / 4 ? 2 : 1;
    const skipTwoSlidesRevers = offset?.x < -(clientWidth * 2) - clientWidth / 4 ? 3 : skipSlidesRevers;
    const newXSelector = newX >= 0;

    if (offset && offset?.x > clientWidth / 4) {
      toLeftSide(offset?.x, newXSelector, skipTwoSlides, skipSlides);
    } else if (offset?.x < -clientWidth / 4) {
      if (newX <= lastItemX) {
        await animate(x, lastItemX, transition);
        return;
      }
      setIndex((prevIndex) => prevIndex + skipTwoSlidesRevers);
    } else if (newX <= lastItemX) {
      await animate(x, lastItemX, transition);
      return;
    }

    await animate(x, calculateNewX(), transition);
  }, [calculateNewX, x, newX, lastItemX, clientWidth]);

  useEffect(() => {
    let controls = animate(x, calculateNewX(), transition);

    if (index === data.length - 1 || newX - 2 <= lastItemX) {
      controls = animate(x, lastItemX, transition);
    }

    return () => {
      controls.stop();
    };
  }, [calculateNewX, x, lastItemX, index, newX, data.length, transition, clientWidth]);

  return (
    <div
      ref={containerRef}
      className={`
        relative w-full overflow-hidden pl-[70px] min-xxxl:pl-[80px] screen-lg:pl-[30px] screen-md:pl-[15px]
        ${classes?.container || ''}
      `}
    >
      <motion.div
        drag="x"
        className={`cursor-grab flex relative select-none touch-pan-y ${classes?.slides || ''} `}
        onDragEnd={handleEndDrag}
        draggable
        dragElastic={1}
        style={{
          x,
        }}
      >
        {data.map(({ content, id, href }) => (
          <div key={id} ref={slideRef} className="flex">
            <ScrollSliderItem
              href={href || undefined}
              id={id}
              content={content}
              setActiveSlide={(n) => (setActiveSlide(n))}
            />
          </div>
        ))}
      </motion.div>
      {!withoutDots && (
        <div className="flex-row justify-center z-[2] mt-[20px] hidden screen-sm:flex">
          {data.map(({ id }, i) => (
            <motion.div
              key={id}
              variants={{
                active: {
                  width: 20,
                  opacity: 1,
                  borderRadius: '4px',
                },
                normal: {
                  width: 8,
                },
              }}
              onClick={() => setIndex(i)}
              initial="normal"
              animate={activeSlide === id ? 'active' : 'normal'}
              className="w-[8px] h-[8px] rounded-[50%] bg-color-white opacity-40 mr-[8px]"
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default DragSlider;
