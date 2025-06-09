import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import { useAppSelector } from '../../../hook/reduxToolkit';
import useBackground from '../../../hook/useBackground';
import ImageComponent from '../../Image/Image';
import MainTitle from '../../MainTitle/MainTitle';
import { ICardSliderVerticalBlockContentData } from '../interfaces/ICardSliderVerticalBlock';

function CardVerticalSliderItem({
  icon, title, bg, bgTablet, bgMobile,
}: ICardSliderVerticalBlockContentData) {
  const background = useBackground(bg, bgTablet, bgMobile);

  const {
    screenSizes: {
      isSMDevice,
      isXSDevice,
    },
  } = useAppSelector((state) => state?.app);
  const isMobile = isSMDevice || isXSDevice;

  const [ref, inView] = useInView({
    threshold: 0.9,
    triggerOnce: false,
    delay: 0,
  });

  const variants = {
    visible: { scale: 1 },
    hidden: {
      scale: 0.8,
    },
  };

  const animateVariant = () => {
    if (isMobile) {
      return 'visible';
    }
    return inView ? 'visible' : 'hidden';
  };

  return (
    <div
      ref={ref}
    >
      <motion.div
        className="relative flex mb-[30px] w-[510px] h-[310px]
        screen-xl:w-[460px] screen-xl:h-[300px]
        screen-lg:w-[288px] screen-lg:h-[282px]
        screen-md:w-full screen-md:h-[282px]
        "
        variants={variants}
        animate={animateVariant()}
        transition={{ ease: 'easeOut', duration: 1 }}
      >
        {background && (
          <div className="absolute left-0 bottom-0 w-full h-full">
            <ImageComponent
              src={background}
              alt="card background"
              className="w-full h-full object-cover"
            />
          </div>
        )}
        <div className="relative p-[30px]">
          {icon}
          <MainTitle
            tag="h3"
            className="pt-[30px] !text-[30px]/[40px] !text-white
                    screen-lg:!text-[24px]/[34px] screen-md:!text-[20px]/[28px]"
          >
            {title}
          </MainTitle>
        </div>
      </motion.div>
    </div>
  );
}

export default CardVerticalSliderItem;
