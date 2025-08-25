import Head from 'next/head';
import { renderToString } from 'react-dom/server';
import { ReactElement } from 'react';

import MainTitle from '../MainTitle/MainTitle';
import { IFAQBlock } from './interfaces/IFAQBlock';
import { ScrollVariant } from '../../constants/enums';
import FaqJsonLd from '../FaqJsonLd/FaqJsonLd';
import AccordionBlack from 'components/AccordionBlack/AccordionBlack';
import VRARContent from '../VRARContent/VRARContent';

function FAQBlock({
  faqData, withScroll = ScrollVariant.TO_TOP_BLOCK, title = 'FAQ', animatedText = false, classes = {}, borderTop,
}: IFAQBlock) {
  const getFaqSEOData = () => faqData.map(({ title: dataTitle, content }) => ({
    question: renderToString(dataTitle as unknown as ReactElement)
      .replace(/<[^>]+>/g, '')
      .replace(/&#x27;/g, "'")
      .replace(/\s+/g, ' '),
    answer: renderToString(content as ReactElement)
      .replace(/<[^>]+>/g, '')
      .replace(/&#x27;/g, "'")
      .replace(/\s+/g, ' '),
  }));

  return (
    <>
      <Head>
        {faqData && faqData?.length && FaqJsonLd(getFaqSEOData())}
      </Head>
      <VRARContent
        className={`bg-black text-white p-[80px_0px] screen-lg:p-[80px_30px] screen-md:p-[80px_15px] 
         ${classes?.container || ''}`}
        withoutAnimate={!animatedText}
      >
        <MainTitle
          className={`p-[0px_70px_40px] min-xxxl:p-[0px_80px] screen-lg:p-[0px_0px_40px] screen-md:pb-[20px]
          ${classes?.title || ''}`}
          tag="h2"
        >
          {title}
        </MainTitle>
        <AccordionBlack
          data={faqData}
          withScroll={withScroll}
          activeFirst
          faq
          borderBottomLast
          borderTop={borderTop}
          classes={{
            accordionItem: 'relative z-[1]',
            accordionItemTitle: `relative !h-fit !p-0 !py-[30px] !m-[0px_80px] screen-xxxl:!m-[0px_70px] 
            screen-xxxl:!p-[30px_0px]
            screen-lg:!m-0 screen-md:!p-[20px_0]
            before:content-[''] before:absolute before:bottom-0 before:left-[5%] before:w-[90%]
            before:h-0 before:bg-white before:transition-all before:duration-300 before:ease-in-out
            group hover:before:h-[104%] hover:before:w-full hover:before:left-0 hover:before:bottom-[-2px]`,
            accordionItemTitleOpen: 'hover:before:hidden',
            accordionTitle: `!text-[24px]/[34px] screen-md:!text-[16px]/[24px] 
             ${classes?.accordion?.accordionTitle || ''} `,
            titleContainer: 'group-hover:mix-blend-difference',
            iconContainer: 'group-hover:mix-blend-difference !p-0',
            accordionItemContent: '!m-[0px_80px] screen-xxxl:!m-[0px_70px] screen-lg:!m-0 !p-0',
          }}
        />
      </VRARContent>
    </>
  );
}

export default FAQBlock;
