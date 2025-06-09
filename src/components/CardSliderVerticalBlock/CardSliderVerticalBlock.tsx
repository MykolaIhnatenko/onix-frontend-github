import { useMotionValueEvent, motion, useScroll } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

import { useAppSelector } from '../../hook/reduxToolkit';
import ImageComponent from '../Image/Image';
import MainTitle from '../MainTitle/MainTitle';
import CardVerticalSliderItem from './components/CardVerticalSliderItem';
import { ICardSliderVerticalBlock } from './interfaces/ICardSliderVerticalBlock';

function CardSliderVerticalBlock({ blockTitle, background, data }: ICardSliderVerticalBlock) {
  const containerRef = useRef<HTMLDivElement>(null);
  const slideRef = useRef<HTMLDivElement>(null);
  const [translateY, setTranslateY] = useState<number>(0);
  const [sliderHeight, setSliderHeight] = useState<number>(0);

  const {
    screenSizes: {
      isSMDevice,
      isXSDevice,
    },
  } = useAppSelector((state) => state?.app);
  const isMobile = isXSDevice || isSMDevice;

  useEffect(() => {
    const height = slideRef.current?.clientHeight;
    if (height) {
      setSliderHeight(height * data.length);
    }
  }, [data]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['-50%', '80%'],
  });

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    setTranslateY(latest * sliderHeight);
  });

  return (
    <div
      ref={containerRef}
      className="relative h-[800px] overflow-hidden p-[0_120px]
      screen-xl:p-[0_70px] screen-lg:p-[0_30px]
      screen-md:py-0 screen-md:px-[15px] screen-md:h-auto screen-md:bg-white
    "
    >
      <div className="absolute left-0 bottom-0 w-full h-full">
        <ImageComponent
          src={background}
          alt="background"
          sizes="100vw"
          className="w-full h-full object-cover screen-md:h-auto"
        />
      </div>
      <div className="relative flex screen-md:flex-col">
        <div className="w-1/2 h-[800px] flex items-center screen-xl:w-1/2 screen-md:w-full screen-md:h-auto">
          <MainTitle
            className="!text-[50px] !leading-[64px] max-w-[560px]
            screen-lg:!text-[30px] screen-lg:!leading-[40px] screen-lg:max-w-[330px]
            screen-md:pt-[80px] screen-md:!text-[25px] screen-md:!leading-[35px]
            "
          >
            {blockTitle}
          </MainTitle>
        </div>
        <div className="pt-[240px] w-1/2 flex justify-end
             screen-md:pt-[60px] screen-md:w-full screen-md:justify-center"
        >
          <motion.div
            animate={isMobile ? { y: 0 } : { y: -translateY }}
            transition={{ ease: 'easeOut', duration: 1, bounce: 0 }}
          >
            {data.map(({
              bg, icon, title, id, bgTablet, bgMobile,
            }) => (
              <div key={id} ref={slideRef}>
                <CardVerticalSliderItem
                  icon={icon}
                  title={title}
                  id={id}
                  bg={bg}
                  bgTablet={bgTablet}
                  bgMobile={bgMobile}
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default CardSliderVerticalBlock;
