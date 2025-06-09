import React from 'react';
import { motion } from 'framer-motion';

import PageContainer from '../PageContainer/PageContainer';
import ContentText from '../ContentText/ContentText';
import MainTitleWithoutSize from 'components/MainTitleWithoutSize/MainTitleWithoutSize';
import IIndustryBlockWithAnimate from './interfaces/IIndustryBlockWithAnimate';

const ItemAnimation = { hidden: { y: 150, opacity: 0 }, visible: { y: 0, opacity: 1 } };

function IndustryBlockWithAnimate({ blockTitle, data, blockText }: IIndustryBlockWithAnimate) {
  return (
    <section className="bg-white text-black">
      <PageContainer
        className="flex justify-between p-[80px_70px] min-xxxl:p-[80px_80px]
          screen-lg:flex-col screen-lg:p-[80px_30px] screen-md:p-[60px_15px_80px]"
      >
        <div>
          <div className="sticky top-[80px]">
            {blockTitle}
            {blockText}
          </div>
        </div>
        <ul className="w-[701px] flex flex-col gap-y-[40px] screen-lg:w-full">
          {data.map(({
            id, number, text, title,
          }) => (
            <motion.li
              key={id}
              initial="hidden"
              whileInView="visible"
              variants={ItemAnimation}
              viewport={{ amount: 0.2, once: true }}
            >
              <span
                className="block   font-generalSans text-[50px] leading-[64px] pb-[10px] font-medium
                screen-md:text-[30px] screen-md:leading-[40px]"
              >
                {number}
              </span>
              <MainTitleWithoutSize
                tag="h3"
                className="text-[30px] leading-[40px] pb-[30px] screen-md:text-[24px] screen-md:leading-[34px]"
              >
                {title}
              </MainTitleWithoutSize>
              <ContentText
                tag="p"
                className="!text-[18px] !leading-[26px] !m-0 screen-md:!text-[16px] screen-md:!leading-[24px]"
              >
                {text}
              </ContentText>
            </motion.li>
          ))}
        </ul>
      </PageContainer>
    </section>
  );
}

export default IndustryBlockWithAnimate;
