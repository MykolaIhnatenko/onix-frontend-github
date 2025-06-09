import {
  motion, PanInfo, AnimatePresence,
} from 'framer-motion';
import { useState } from 'react';

import Brand from './Brand';
import BrandsBlockPagination from './BrandsBlockPagination';
import { IBrandSlider } from '../interfaces/IBrandsBlock';

function BrandsSlider({
  projectList, typeSlider, classes,
}: IBrandSlider) {
  const directionSlider = typeSlider || [0, 1, 1];
  const [[
    page, direction],
  setPage] = useState<[number, number[]]>([0, directionSlider]);

  const swipeConfidenceThreshold = 10000;

  const variants = {
    enter: (pageDirection: number) => ({
      zIndex: 0,
      x: pageDirection > 0 ? 330 : -330,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (pageDirection: number) => ({
      zIndex: 0,
      x: pageDirection < 0 ? 330 : -330,
      opacity: 0,
    }),
  };
  const swipePower = (offset: number, velocity: number) => Math.abs(offset) * velocity;

  const getNewDirections = (pageNumber: number) => {
    const newDirections: number[] = directionSlider;
    newDirections.forEach((item, index) => {
      if (index === pageNumber) {
        newDirections[index] = 0;
      }
      if (index < pageNumber) {
        newDirections[index] = -1;
      }
      if (index > pageNumber) {
        newDirections[index] = 1;
      }
    });

    return newDirections;
  };

  const getNewPage = (comparisonNumber: number, direct: 1 | -1) => {
    let newPage = 0;
    if (direct === 1 && page !== comparisonNumber) {
      newPage = page + 1;
    } else if (direct === 1 && page === comparisonNumber) {
      newPage = comparisonNumber;
    }

    if (direct === -1 && page !== comparisonNumber) {
      newPage = page - 1;
    } else if (direct === -1 && page === comparisonNumber) {
      newPage = comparisonNumber;
    }

    return newPage;
  };

  const dragEndHandler = (event: MouseEvent | TouchEvent | PointerEvent, { offset, velocity }: PanInfo) => {
    const swipe = swipePower(offset.x, velocity.x);

    if (swipe < -swipeConfidenceThreshold) {
      const newDirections = getNewDirections(page + 1);
      const newPage = getNewPage(newDirections.length - 1, 1);
      setPage([newPage, newDirections]);
    }

    if (swipe > swipeConfidenceThreshold) {
      const newDirections = getNewDirections(page - 1);
      const newPage = getNewPage(0, -1);
      setPage([newPage, newDirections]);
    }
  };

  return (
    <div className={`relative h-[254px] w-[330px] overflow-hidden mx-auto
      ${classes?.slider || ''}`}
    >
      <motion.div>
        {projectList.map((item, i) => (
          <AnimatePresence initial={false} key={['item_', i].join()} custom={direction[i]}>
            <motion.div
              className={`flex justify-center items-center flex-wrap gap-[6px] min-360:gap-[18px]
                absolute top-0 left-0 w-full h-[226px] bg-white opacity-0
                ${classes?.sliderCard || ''}
                ${(page === i) ? 'opacity-0' : ''}`}
              key={['item_', i].join()}
              custom={direction[i]}
              variants={variants}
              initial={page === i ? 'enter' : 'center'}
              animate={page === i ? 'center' : 'enter'}
              exit="exit"
              transition={{
                x: { type: 'spring', stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              drag="x"
              dragConstraints={{
                left: 0,
                right: 0,
              }}
              dragElastic={1}
              onDragEnd={dragEndHandler}
            >
              {item.map((Item, index) => (
                <Brand
                  key={['icon_', index].join()}
                  index={index}
                  Item={Item}
                  classes={classes?.brand}
                />
              ))}
            </motion.div>
          </AnimatePresence>
        ))}
      </motion.div>
      <BrandsBlockPagination
        setActiveId={setPage}
        activeId={page}
        classes={classes?.paginationClasses}
        directionSlider={directionSlider}
      />
    </div>
  );
}

export default BrandsSlider;
