import React, { useRef } from 'react';

import IAccordionItemContent from '../interfaces/IAccordionItemContent';
import { AccordionBlackStyleTypes, AccordionWhiteStyleTypes } from 'constants/AccordionStyleTypes';
import ItemText from 'components/ItemText/ItemText';

function AccordionItemContent({
  content, activeItem, isLastItem, isAccordionBlack, accordionStyleTypes,
  smallerTitleText, borderBottomLast, classes,
}: IAccordionItemContent) {
  const contentRef = useRef<HTMLDivElement>(null);
  const { ACTIVE_WHITE_TITLE_AND_CONTENT } = AccordionBlackStyleTypes;
  const { ACTIVE_BLACK_TITLE_AND_CONTENT } = AccordionWhiteStyleTypes;

  return (
    <div
      ref={contentRef}
      style={{ maxHeight: activeItem ? contentRef.current?.scrollHeight : '0px' }}
      className={`
        border-b-2 border-solid border-color-black overflow-hidden max-h-0 transition-[max-height]
        duration-[.25s] ease-in-out pl-[70px] pr-[60px] screen-lg:px-[30px] screen-md:px-[15px]
        ${smallerTitleText ? 'min-lg:pl-[74px] min-lg:pr-[60px]' : ''}
        ${activeItem ? `delay-100 ${classes?.showContent || ''}` : ''}
        ${isLastItem ? 'border-none' : ''}
        ${borderBottomLast ? '!border-b-2 !border-solid' : ''}
        ${isAccordionBlack ? '!border-color-white' : ''}
        ${accordionStyleTypes === ACTIVE_BLACK_TITLE_AND_CONTENT ? 'text-color-white bg-color-black' : ''}
        ${accordionStyleTypes === ACTIVE_WHITE_TITLE_AND_CONTENT ? 'text-color-black bg-color-white' : ''}
        ${classes?.accordionItemContent || ''}
      `}
    >
      {Array.isArray(content) ? (
        <ItemText content={content} marginBottomAbsent={isLastItem} />
      ) : content}
    </div>
  );
}

export default AccordionItemContent;
