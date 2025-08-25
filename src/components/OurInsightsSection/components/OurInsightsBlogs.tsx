import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

import { useAppSelector } from '../../../hook/reduxToolkit';
import Link from '../../Link/Link';
import ImageComponent from '../../Image/Image';
import MainTitle from '../../MainTitle/MainTitle';
import { IOurInsightsBlogs } from '../interfaces/interfaces';
import getCarouselWidth from '../../../utils/getCarouselWidth';

function OurInsightsBlogs({ blogs, classes }: IOurInsightsBlogs) {
  const [isDragListen, setIsDragListen] = useState<boolean>(false);
  const [carouselWidth, setCarouselWidth] = useState<number>(0);
  const carousel = useRef<HTMLDivElement>(null);
  const carouselItem = useRef<HTMLDivElement>(null);
  const {
    isMDDevice,
    isSMDevice,
    isXSDevice,
    isLGDevice,
    isXLDevice,
    isXXLDevice,
    isXXXLDevice,
  } = useAppSelector((state) => state.app.screenSizes);

  const { windowWidth } = useAppSelector((state) => state.app);

  const isMobile = isSMDevice || isXSDevice;
  const isTablet = isMDDevice;
  const isDesktop = isLGDevice || isXLDevice || isXXLDevice || isXXXLDevice;

  useEffect(() => {
    const { clientWidth } = document.body;
    const itemWidth = carouselItem?.current?.clientWidth;

    getCarouselWidth(itemWidth, blogs?.length, setCarouselWidth);

    setIsDragListen(clientWidth < carouselWidth);
  }, [blogs?.length, carouselWidth, isMobile, isTablet, isDesktop, windowWidth]);

  return (
    <div
      style={{
        cursor: isDragListen ? 'grab' : 'auto',
      }}
    >
      <motion.div
        ref={carousel}
        style={{
          maxWidth: `${carouselWidth}px`,
        }}
      >
        <motion.div
          className={`flex gap-[20px] ${classes?.wrapper || ''}`}
          drag="x"
          dragConstraints={carousel}
          dragMomentum={false}
          dragListener={isDragListen}
          style={{
            width: `${carouselWidth}px`,
            margin: isDragListen ? 'unset' : '0 auto',
          }}
        >
          {blogs?.map(({
            id, link, title, picture,
          }) => (
            <motion.div
              key={id}
              className={`
                w-[420px] screen-lg:w-[320px] screen-md:w-[280px] min-xxl:basis-1/3 group/blog`}
              ref={carouselItem}
            >
              <Link href={link}>
                <motion.div
                  draggable="false"
                  className={`
                    relative overflow-hidden w-[420px] h-[298px] screen-lg:w-[320px]
                    screen-lg:h-[227px] screen-md:w-[280px] screen-md:h-[198px]
                  `}
                >
                  <ImageComponent
                    src={picture}
                    alt="Blog Image"
                    fill
                    sizes="100vw"
                    className={`group-hover/blog:scale-[1.3] transition-all duration-300
                      ease-in-out object-cover`}
                  />
                </motion.div>
                <MainTitle
                  tag="h3"
                  className={`
                    !text-[24px]/[34px] screen-lg:!text-[20px]/[28px] group-hover/blog:underline pt-[20px]
                    ${classes?.blogTitle || ''}
                  `}
                >
                  {title}
                </MainTitle>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default OurInsightsBlogs;
