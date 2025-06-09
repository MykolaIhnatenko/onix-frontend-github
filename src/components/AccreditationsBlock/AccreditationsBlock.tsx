import React from 'react';

import PageContainer from '../PageContainer/PageContainer';
import ImageComponent from '../Image/Image';
import MainTitle from '../MainTitle/MainTitle';
import ContentText from '../ContentText/ContentText';
import AccreditationsBlockItem from './components/AccreditationsBlockItem';
import { IAccreditationsBlock } from './interfaces/IAccreditationsBlock';

import styles from './sass/accreditationsBlock.module.scss';

function AccreditationsBlock({
  data, firstText, secondText, blockTitle, background,
}: IAccreditationsBlock) {
  return (
    <div className="relative">
      <div className="absolute top-0 left-0 w-full h-full
            screen-lg:top-[180px] screen-lg:h-[1440px] screen-md:top-[260px] screen-md:h-[1460px]
            after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[70px]
            after:bg-[linear-gradient(to_bottom,_rgba(255,255,255,0)_0%,_rgba(255,255,255,1)_100%)]
            screen-lg:after:h-[120px] screen-md:after:h-1/2"
      >
        <ImageComponent
          src={background}
          alt="background"
          className="w-full h-full object-cover object-top"
        />
      </div>
      <PageContainer className="relative pt-[80px] pb-[80px]">
        <MainTitle className="pb-[40px] screen-lg:pb-[30px] screen-md:pb-[20px]">
          {blockTitle}
        </MainTitle>
        <ContentText
          tag="p"
          marginAbsent
          className="max-w-[642px] pb-[10px] !text-[20px] !leading-[28px]
            screen-lg:max-w-[708px] screen-lg:pb-[20px]
            screen-md:pb-[20px] screen-md:!text-[16px] screen-md:!leading-[24px]"
        >
          {firstText}
        </ContentText>
        <ContentText
          tag="p"
          className="max-w-[600px] ml-auto !my-0 pb-[60px] text-[20px] leading-[28px]
            min-xxl:ml-[700px] screen-lg:max-w-[708px] screen-lg:!m-0 screen-lg:pb-[100px]
            screen-md:pb-[40px] screen-md:text-[16px] screen-md:leading-[24px]"
        >
          {secondText}
        </ContentText>
        <div className={`grid grid-cols-3 grid-rows-2 gap-x-0 gap-y-[80px] screen-xl:gap-x-0
            screen-lg:grid-cols-2 screen-lg:grid-rows-3 screen-lg:gap-x-[80px] screen-lg:gap-y-[100px]
            screen-md:flex screen-md:flex-col screen-md:gap-[60px] ${styles.content}`}
        >
          {data.map(({ img, title }) => (
            <React.Fragment key={`id_${title}`}>
              <AccreditationsBlockItem
                img={img}
                title={title}
              />
            </React.Fragment>
          ))}
        </div>
      </PageContainer>
    </div>
  );
}

export default AccreditationsBlock;
