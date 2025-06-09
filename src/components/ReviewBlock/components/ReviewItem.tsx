import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef } from 'react';

import MainTitle from '../../MainTitle/MainTitle';
import ContentText from '../../ContentText/ContentText';
import { IQuotesObj } from '../interfaces/IReviewBlock';
import { LG_DEVICE } from '../../../constants/constants';
import { useAppSelector } from 'hook/reduxToolkit';

function ReviewItem({
  text,
  author,
  range,
  progress,
  targetScale,
  index,
  classes,
}: IQuotesObj) {
  const { windowWidth } = useAppSelector((state) => state.app);
  const TOP_SECOND_CARD = 160;
  const SPACE_BETWEEN_CARDS = 20;
  const scale = useTransform(progress, range, [1, targetScale]);
  const targetRef = useRef<HTMLDivElement>(null);
  const isDesktop = windowWidth > LG_DEVICE;
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start end', 'end end'],
  });
  const opacity = useTransform(scrollYProgress, [0.1, isDesktop ? 0.70 : 0.45], [0, 1]);

  useEffect(() => {
    const handleScroll = () => {
      const elements: NodeListOf<HTMLElement> = document.querySelectorAll('#noteContainer');

      elements?.forEach((element, i) => {
        const nextElement = elements[i + 1];
        const nextElementTop = nextElement ? nextElement.getBoundingClientRect().top : null;
        const newStyles: Partial<CSSStyleDeclaration> = {};
        if (nextElementTop && (nextElementTop < (TOP_SECOND_CARD + (i * SPACE_BETWEEN_CARDS)))) {
          newStyles.borderColor = 'var(--color-light-gray)';
        } else {
          newStyles.borderColor = 'var(--color-light-black)';
        }
        Object.assign(element.style, newStyles);
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`h-fit flex items-center justify-center sticky top-[120px] text-center overflow-y-hidden
      ${classes?.wrapper ?? ''}`}
    >
      <motion.div
        ref={targetRef}
        id={`noteContainer-${index}`}
        className={`
          flex w-full max-w-[1300px] flex-col relative text-center h-screen
          pt-[60px] bg-color-white origin-top 
          transition-[border-top-color] duration-400 min-md:pt-[130px] min-lg:pt-[84px]
          ${index !== 0 ? 'border-t-2 border-color-black' : ''}
          ${classes?.noteContainer ?? ''}`}
        style={{
          scale,
          opacity,
          top: `calc(${index * SPACE_BETWEEN_CARDS}px)`,
        }}
      >
        <>
          <MainTitle
            className={`my-0 mx-auto !max-w-[1080px] !text-[36px] !leading-[50px]
              screen-lg:!max-w-[588px] screen-lg:!text-[27px] screen-lg:!leading-[37px]
              screen-md:!text-[17px] screen-md:!leading-[23px]
              ${classes?.text ?? ''}`}
            tag="p"
          >
            {text}
          </MainTitle>
          <ContentText
            tag="p"
            className={`mt-10 !text-[18px] !leading-[26px]
              screen-lg:!text-[16px] screen-lg:!leading-[26px] screen-lg:!mt-5
              screen-md:!text-[14px] screen-md:!leading-[24px]
              ${classes?.author ?? ''}`}
          >
            {author}
          </ContentText>
        </>
      </motion.div>
    </div>
  );
}

export default ReviewItem;
