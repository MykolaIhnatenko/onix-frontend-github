import {
  useEffect, useRef, useState,
} from 'react';
import {
  useMotionValueEvent, useScroll, motion,
} from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import ProcessImageItem from './components/ProcessImageItem';
import IconArrowRight from '../IconArrowRight/IconArrowRight';
import ImageComponent from '../Image/Image';
import ContentText from '../ContentText/ContentText';
import { IProcessBlock } from '../../pages/MainPage/interfaces/IProcess';
import ProcessNotice from './components/ProcessNotice';
import VRARContent from '../VRARContent/VRARContent';
import { ProcessBlockVariant } from '../../constants/enums';
import { useAppSelector } from 'hook/reduxToolkit';

function ProcessBlock({
  title, subtitle, variant, firstText, secondText, tagTitle = 'p',
  data, imagesData, bottomTitle, notice, classes = {}, withoutPrefix,
  withoutAnimate = true,
}: IProcessBlock) {
  const [activeId, setActiveId] = useState<number>(1);
  const [containerHeight, setContainerHeight] = useState<number>(0);
  const {
    screenSizes: {
      isSMDevice, isXSDevice, isMDDevice, isLGDevice,
    },
    windowWidth,
  } = useAppSelector((state) => state.app);
  const isMobile = isXSDevice || isSMDevice;
  const isTablet = isMobile || isMDDevice || isLGDevice;
  const containerRef = useRef<HTMLDivElement>(null);
  const accordionBlockRef = useRef<HTMLDivElement>(null);
  const [translateY, setTranslateY] = useState<number>(20);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const { ref } = useInView({
    threshold: 0.1,
  });

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    setTranslateY(latest);
  });

  useEffect(() => {
    const height = accordionBlockRef?.current?.offsetHeight;
    const offset = isTablet ? 30 : 100;

    if (height) {
      const newContainerHeight = variant === ProcessBlockVariant.USABILITY_TESTING ? height : height + offset;
      setContainerHeight(newContainerHeight);
    }
  }, [isTablet, windowWidth]);

  const variants = {
    visible: { height: 'auto' },
    hidden: { height: 0 },
  };

  const onClickHandler = (id: number, index: number) => {
    setActiveId(id);
    const target: HTMLElement | null = document.getElementById([id, index].join('_'));
    if (isMobile && target) {
      setTimeout(() => {
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition && elementPosition - 70;

        window.scrollBy({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }, 500);
    }
  };

  return (
    <div
      ref={ref}
      className={`max-w-[1920px] py-20 px-0 my-0 mx-auto min-md:p-[80px_30px] 
       min-lg:p-[80px_70px_140px] min-xxxl:p-[80px_80px_140px]
       ${classes?.container || ''} `}
    >
      {title && (
        <VRARContent withoutAnimate={withoutAnimate}>
          <ContentText
            tag={tagTitle}
            className={`!mt-0 !mb-[15px] !text-[14px] !leading-[20px] !p-[0_15px] min-md:!p-0
            min-md:!mb-5 min-md:!text-[18px] min-md:!leading-[26px] min-lg:!mb-[13px] min-xxxl:!mb-[16px]
            ${classes?.title || ''} `}
          >
            {title}
          </ContentText>
        </VRARContent>
      )}
      {subtitle}
      <div className={`min-lg:max-w-[1300px] min-xxxl:max-w-[1480px] ${classes?.textContainer || ''} `}>
        {firstText}
        {secondText}
      </div>
      <div
        ref={containerRef}
        style={{ height: isMobile ? 'unset' : `${containerHeight}px` }}
      >
        <motion.div
          className={`min-md:flex min-md:items-end min-md:gap-[4.1%] min-md:h-[773px] min-md:sticky min-md:top-0
            min-xl:gap-[5%] min-xl:h-[962px] min-xl:min-h-screen  min-xxxl:gap-[3.9%] min-xxxl:min-h-0
            ${classes?.accordionBlock || ''}`}
          ref={accordionBlockRef}
          animate={{ y: isMobile ? 0 : translateY }}
          transition={{ type: 'tween' }}
        >
          <VRARContent
            withoutAnimate={withoutAnimate}
            className={`list-none min-md:basis-[51.5%] min-xl:basis-[43.2%] min-xxxl:basis-[48.1%] 
            ${classes?.accordion || ''}`}
          >
            <ul>
              {data.map(({
                id, itemTitle, content, contentText, src,
              }, index) => (
                <li
                  key={[itemTitle, index].join('_')}
                  className={`${index !== 0 ? 'border-t-2 border-color-light-gray2 screen-md:border-black' : ''
                  } ${classes?.item || ''}`}
                >
                  <div
                    className={`flex font-generalSans text-[20px] leading-7 font-medium w-full 
                    relative cursor-pointer outline-none p-[20px_35px_20px_15px] 
                    min-md:p-[18px_23px_18px_0] min-md:text-[24px] min-md:leading-[34px]
                    min-lg:cursor-default 
                    min-xl:p-[30px_32px_30px_0] min-xl:text-[30px] min-xl:leading-[40px]
                    ${classes?.accordionTitle || ''}
                    ${activeId === id ? classes?.activeAccordionTitle || '' : ''}
                    ${index === 0 ? classes?.accordionTitleFirst || '' : ''}
                    `}
                    onMouseMove={() => onClickHandler(id, index)}
                    role="presentation"
                    tabIndex={-1}
                    id={[id, index].join('_')}
                  >
                    {itemTitle}
                    <span className={`inline-block absolute w-[20px] h-[20px] top-[26px] 
                           right-[15px] pr-0 md:hidden  ${classes?.plus || ''}`}
                    >
                      <span className="relative inline-block w-[20px] h-[20px]">
                        <span
                          className="absolute top-[8px] left-0 right-0 h-[2px] bg-black z-9
                          transition-transform ease-in-out duration-300"
                          style={{ transform: activeId === id ? 'rotate(180deg)' : 'rotate(0deg)' }}
                        />
                        <span
                          className="absolute top-[8px] left-0 right-0 h-[2px] bg-black z-9
                          transition-transform ease-in-out duration-300"
                          style={{ transform: activeId === id ? 'rotate(180deg)' : 'rotate(90deg)' }}
                        />
                      </span>
                    </span>
                    <div
                      className={`!hidden 
                            min-md:!block min-md:absolute min-md:right-0 min-md:opacity-0 min-md:transition-opacity 
                            min-md:duration-300 min-md:ease-in-out min-md:top-[18px] min-md:w-[24px] min-md:h-[23px] 
                            min-xl:top-[34px] min-xl:w-[32px] min-xl:h-[32px]
                            ${activeId === id ? '!opacity-100' : ''} 
                            ${classes?.arrow || ''}
                          `}
                    >
                      <IconArrowRight id={`clip_${id}`} />
                    </div>
                  </div>
                  <motion.div
                    variants={variants}
                    initial="hidden"
                    animate={activeId === id ? 'visible' : 'hidden'}
                    transition={{ duration: 0.5 }}
                    className={`overflow-hidden transition-[max-height] duration-400 ease-[cubic-bezier(0.5,0,1,0)]
                    delay-0 min-md:h-auto min-md:block ${classes?.content || ''}`}
                    key={id}
                  >
                    <div className={`overflow-hidden screen-md::h-auto ${classes?.contentInner || ''}`}>
                      {contentText && (
                        <ContentText
                          tag="p"
                          className={` ${classes?.contentInnerText || ''}`}
                        >
                          {contentText}
                        </ContentText>
                      )}
                      {!!content && (
                        <ul
                          className={`relative list-none pr-[15px] pb-[14px] pl-[54px] 
                          min-xl:pb-[28px] min-xl:pl-[88px] 
                          ${classes?.list || ''}`}
                        >
                          {content?.map((item, indexItem) => (
                            <li
                              key={[item, indexItem].join('_')}
                              className={`flex font-ibmPlexMono font-normal text-[16px] leading-[24px] gap-2.5
                              min-xl:text-[18px] min-xl:leading-[26px]
                              ${classes?.contentListItem || ''}`}
                            >
                              <p>
                                { !withoutPrefix && <span>﹂</span> }
                                {' '}
                                {item}
                              </p>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                    <div className={`relative w-full h-[408px] min-md:hidden min-md:h-0 min-md:w-0 
                      ${classes?.imageContainer || ''}`}
                    >
                      {!!notice && (
                        <ProcessNotice notice={notice} />
                      )}
                      <ImageComponent
                        src={src}
                        fill
                        className="object-cover"
                        alt="figures"
                      />
                    </div>
                  </motion.div>
                </li>
              ))}
            </ul>
          </VRARContent>
          <VRARContent
            className={`hidden min-md:block min-md:relative min-md:flex-[0_0_44.5%] min-md:h-full 
            min-xl:flex-[0_0_51.7%] min-xxxl::flex-[0_0_48.1%] ${classes?.imagesBlock || ''}`}
            withoutAnimate={withoutAnimate}
          >
            {!!notice && (
              <ProcessNotice notice={notice} />
            )}
            {imagesData.map(({
              id, src, srcTablet, srcBigDesk,
            }) => (
              <ProcessImageItem
                id={id}
                key={id}
                src={src}
                srcTablet={srcTablet}
                srcBigDesk={srcBigDesk}
                activeId={activeId}
              />
            ))}
          </VRARContent>
        </motion.div>
      </div>
      {
        !!bottomTitle && (
          <ContentText
            className={`
              !font-generalSans !text-[30px]/[40px] !m-[80px_auto_0_auto] !font-medium max-w-[1080px] !text-center
              screen-md:!text-[20px]/[28px] screen-md:!m-[40px_15px_0] ${classes?.bottomTitle || ''}
            `}
            tag="p"
          >
            {bottomTitle}
          </ContentText>
        )
      }
    </div>
  );
}

export default ProcessBlock;
