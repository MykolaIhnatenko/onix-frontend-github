import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';

import ImageComponent from '../Image/Image';
import MainTitle from '../MainTitle/MainTitle';
import PageContainer from '../PageContainer/PageContainer';
import VRARContent from '../VRARContent/VRARContent';
import IResultsBlock from './interfaces/IResultsBlock';
import ContentText from '../ContentText/ContentText';
import ItemText from 'components/ItemText/ItemText';

// @/images/ResultsBlockBg/

function ResultsBlock({
  title,
  content,
  background,
  name,
  text,
  titleBlock,
  saleUrl,
  subText,
  classes,
  productScope = false,
}: IResultsBlock) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start center', 'end center'],
  });

  const setHeight = useTransform(scrollYProgress, (value) => `${value * 100}%`);

  return (
    <div
      ref={ref}
      className={`
        relative overflow-hidden py-[120px] screen-lg:py-[80px] bg-black text-white
        ${classes?.resultBlock || ''} ${saleUrl ? 'pb-0' : ''} ${productScope ? 'screen-md:!pb-[60px]' : ''}
      `}
    >
      {background && (
        <div className={`absolute inset-0 max-h-[100%] ${classes?.background || ''}`}>
          <ImageComponent
            src={background}
            alt="background"
            width={0}
            height={0}
            sizes="100vw"
            className="object-cover object-top w-full h-auto max-h-[100%]"
          />
        </div>
      )}
      <PageContainer className={`relative ${classes?.container || ''}`}>
        {name && (
          <VRARContent>
            <ContentText
              marginAbsent
              className={`!mb-[20px] screen-md:!mb-[15px] screen-md:!text-[14px] ${classes?.name || ''}`}
              tag="p"
            >
              {name}
            </ContentText>
          </VRARContent>
        )}
        {titleBlock && (
          <VRARContent>
            <MainTitle
              className={`
                mb-[20px] screen-md:mb-[15px] !text-[18px] screen-md:!text-[14px]
                !leading-[26px] font-normal screen-md:!leading-[20px] ${classes?.titleBlock || ''}
              `}
            >
              {titleBlock}
            </MainTitle>
          </VRARContent>
        )}
        {title && (
          <VRARContent>
            <MainTitle
              className={`
                pb-[80px] screen-md:pb-[60px] max-w-[1080px] min-xxxl:max-w-[1480px] ${classes?.title || ''}
              `}
            >
              {title}
            </MainTitle>
          </VRARContent>
        )}
        {text}
        <div
          className={`
            flex max-w-[692px] ml-auto screen-lg:ml-0 min-xxxl:max-w-[850px] screen-lg:max-w-[708px]
            screen-md:max-w-full
            ${classes?.contentContainer || ''}
          `}
        >
          <VRARContent>
            <div
              className={`w-[2px] h-full bg-[#333333] mr-[18px] ${classes?.line || ''}`}
            >
              <motion.div
                className={`w-[2px] bg-white ${classes?.lineActive || ''}`}
                style={{ height: setHeight }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </VRARContent>
          <div className={`flex-1 ${classes?.content || ''}`}>
            {Array.isArray(content) ? (
              <ItemText content={content} marginBottomAbsent withAnimate />
            ) : content}
          </div>
        </div>
        {subText && (
          <VRARContent>
            <MainTitle
              tag="p"
              className={`
                !text-[24px] !leading-[34px] pt-[80px] screen-md:pt-[60px]
                screen-md:!text-[20px] screen-md:!leading-[28px] ${classes?.subText || ''}
              `}
            >
              {subText}
            </MainTitle>
          </VRARContent>
        )}
      </PageContainer>
    </div>
  );
}

export default ResultsBlock;
