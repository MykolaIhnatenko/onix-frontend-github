import {
  useCallback, useEffect, useRef, useState,
} from 'react';
import {
  useScroll, motion, useMotionValueEvent,
} from 'framer-motion';

import useBackground from '../../hook/useBackground';
import { IPartnerSection } from './interfaces/IPartnerSection';
import ImageComponent from '../Image/Image';
import MainTitle from '../MainTitle/MainTitle';
import ContentText from '../ContentText/ContentText';
import { PartnerSectionScrollVariant, PartnerSectionVariant } from '../../constants/enums';
import DragSlider from '../DragSlider/DragSlider';
import { useAppSelector } from 'hook/reduxToolkit';

function PartnerSection({
  pageTitle, subTitle, data, background, backgroundTablet,
  backgroundMobile, variant, scrollVariant, sectionText, classes = {},
}: IPartnerSection) {
  const {
    screenSizes: {
      isMDDevice, isXSDevice, isSMDevice,
    },
    windowWidth,
  } = useAppSelector((state) => state.app);
  const containerRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const sliderTargetRef = useRef<HTMLDivElement>(null);
  const scrollVariantCheck = scrollVariant === PartnerSectionScrollVariant.WEBFLOW;

  const [translateX, setTranslateX] = useState<string>('0%');
  const [coefficient, setCoefficient] = useState<number>(0);
  const [sliderWidth, setSliderWidth] = useState<number>(0);

  const dragVariant = data.length >= 5;
  const convertScrollToTranslateX = (latest: number) => {
    const newLatest = Math.floor(latest * 100);
    const translateXValue = newLatest / coefficient;

    return `-${translateXValue || 0}%`;
  };
  const backgroundVariant = useBackground(background, backgroundTablet, backgroundMobile);
  const resizeHandler = useCallback(() => {
    const slidWidth = sliderRef?.current?.clientWidth;
    let scrollWidth = 0;
    if (slidWidth) {
      scrollWidth = slidWidth * data.length;
    }
    setSliderWidth(scrollWidth);
    const clientWidth = containerRef?.current?.clientWidth;
    let delta = 110;
    let scrollOffset;
    if (isMDDevice) {
      delta = 30;
    }
    if (isXSDevice || isSMDevice) {
      delta = 15;
    }
    if (scrollWidth && clientWidth) {
      scrollOffset = scrollWidth - clientWidth + delta;
      const coefValue = scrollWidth / scrollOffset;
      setCoefficient(coefValue);
    }
  }, [data, isMDDevice, isXSDevice, isSMDevice]);

  useEffect(() => {
    resizeHandler();
  }, [windowWidth]);

  const { scrollYProgress } = useScroll({
    target: scrollVariantCheck ? sliderTargetRef : containerRef,
    offset: scrollVariantCheck ? ['50%', '100%'] : ['start start', 'end end'],
  });

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    setTranslateX(convertScrollToTranslateX(latest));
  });

  return (
    <section
      className={`bg-black relative
       ${classes?.partnerSection || ''}
      `}
    >
      <motion.div
        className={`relative z-3 max-w-[1920px] mx-auto pt-0 h-[250vh] pb-0 min-md:py-[40px] min-lg:pt-[80px]
        ${dragVariant ? '!h-auto' : ''}
        ${classes?.container || ''}`}
        ref={containerRef}
      >
        <div className={`sticky top-[40px] bg-no-repeat bg-scroll bg-[length:100vw]
           ${dragVariant ? '!static !top-0' : ''}
           ${classes?.innerContainer || ''}`}
        >
          {
            backgroundVariant && (
              <div className={`absolute right-0 bottom-0 z-[-1] w-full h-full bg-[length:100vw] bg-no-repeat
                   bg-scroll overflow-hidden ${classes?.bgContainer || ''}`}
              >
                <ImageComponent
                  sizes=""
                  className={`${classes?.bgImage || ''}`}
                  src={backgroundVariant}
                  fill
                  alt="models-section-background"
                />
              </div>
            )
          }
          <div
            ref={sliderTargetRef}
            className={`
            px-[15px]  
            min-md:px-[30px]  
            min-lg:px-[70px]  
            min-xxxl:px-[80px] ${classes?.contentWrapper || ''}`}
          >
            {pageTitle && (
              <MainTitle
                tag="h2"
                className={`relative text-white min-lg:max-w-[1024px] 
                ${classes?.title || ''}`}
              >
                {pageTitle}
              </MainTitle>
            )}
            {!!subTitle && (
              <ContentText
                className={`!text-white 
                 !mt-[30px] !mb-[20px] !text-[14px] !leading-[20px] 
                 min-md:!mt-[40px] min-md:!mb-[40px] min-md:!text-[20px] min-md:!leading-[28px] 
                 min-lg:max-w-[670px] min-lg:!text-[18px] min-lg:!leading-[26px]
                ${classes?.text || ''}`}
                tag={variant === PartnerSectionVariant.WEBFLOW ? 'div' : 'p'}
              >
                {subTitle}
              </ContentText>
            )}
            {sectionText}
          </div>
          <div
            className={`pl-[15px] w-full overflow-hidden  
            min-md:pl-[30px]  
            min-lg:pl-[70px]  
            min-xxxl:pl-[80px] 
            ${dragVariant ? '!pl-0' : ''}
            ${classes?.sliderContainer || ''}`}
          >
            {dragVariant ? (
              <DragSlider
                data={data}
                withoutDots
                classes={{ container: 'pt-[40px] pb-[80px]' }}
              />
            ) : (
              <motion.div
                className={`flex gap-0 min-md:gap-0 ${classes?.slider || ''}`}
                style={{ translateX, width: `${sliderWidth}px` }}
              >
                {data.map(({
                  id, content,
                }) => (
                  <div key={id} ref={sliderRef}>
                    {content}
                  </div>
                ))}
              </motion.div>
            )}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default PartnerSection;
