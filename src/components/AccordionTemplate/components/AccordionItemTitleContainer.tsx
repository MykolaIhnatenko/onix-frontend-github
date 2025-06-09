import React from 'react';

import { IAccordionItemTitleContainer } from '../interfaces/IAccordionItemTitle';
import MainTitleWithoutSize from 'components/MainTitleWithoutSize/MainTitleWithoutSize';

function AccordionItemTitleContainer({
  number, title, tagTitle, smallerTitleText, classes,
}: IAccordionItemTitleContainer) {
  return (
    <div className={`flex ${classes?.titleContainer || ''}`}>
      {number && (
        <span className={`
          font-generalSans font-medium text-3xl/10 screen-md:text-xl
          min-w-[40px] mr-[30px] screen-md:min-w-[30px] screen-md:mr-[10px]
          ${smallerTitleText
          ? '!text-2xl/[34px] screen-md:!text-xl !min-w-[29px] mr-[45px] screen-lg:mr-[20px] screen-md:mr-[10px]'
          : ''}
          ${classes?.accordionNumber || ''}
          `}
        >
          {number}
        </span>
      )}
      <MainTitleWithoutSize
        tag={tagTitle}
        className={`
          text-[30px]/[40px] screen-md:text-[20px]/[28px]
          ${smallerTitleText ? '!text-[24px]/[34px] screen-md:!text-xl' : ''}
          ${classes?.accordionTitle || ''}
        `}
      >
        {title}
      </MainTitleWithoutSize>
    </div>
  );
}

export default AccordionItemTitleContainer;
