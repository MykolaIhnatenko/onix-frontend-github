import { useRef } from 'react';
import { useScroll } from 'framer-motion';

import BrandsBlock from '../BrandsBlock/BrandsBlock';
import ReviewItem from './components/ReviewItem';
import { IReviewBlock } from './interfaces/IReviewBlock';

function ReviewBlock({
  withProjectBlock, quotesList, slider, classes,
}: IReviewBlock) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

  return (
    <div
      className={`relative flex flex-col justify-center items-center min-h-screen py-0 px-[70px] z-[-1]
        min-xxxl:py-0 min-xxxl:px-[80px] screen-lg:py-0 screen-lg:px-[30px]
        screen-md:py-0 screen-md:px-[15px]
        ${classes?.container ?? ''}`}
      ref={container}
    >
      {quotesList.map(({
        text, author, id,
      }, index) => {
        const targetScale = 1 - ((quotesList.length - index) * 0.05);
        return (
          <ReviewItem
            key={id}
            text={text}
            author={author}
            progress={scrollYProgress}
            range={[index * (1 / (quotesList.length - 1)), 1]}
            targetScale={targetScale}
            classes={classes}
            index={index}
          />
        );
      })}
      {withProjectBlock && <BrandsBlock slider={slider} />}
    </div>
  );
}

export default ReviewBlock;
