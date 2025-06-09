import React, { forwardRef } from 'react';

import IAccordionItemTitle from '../interfaces/IAccordionItemTitle';
import ContentText from 'components/ContentText/ContentText';

const AccordionItemTitle = forwardRef<HTMLDivElement, IAccordionItemTitle>(({
  number, title, classes,
}, ref) => (
  <div
    ref={ref}
    className={`
      flex flex-col justify-between gap-[30px] cursor-pointer px-[30px]
      ${classes?.itemTitleContainer || ''}
    `}
  >
    {number && (
      <span className={`
          font-generalSans font-medium text-3xl/10 screen-md:text-xl w-[36px]
          ${classes?.itemNumber || ''}
        `}
      >
        {number}
      </span>
    )}
    <ContentText
      tag="p"
      marginAbsent
      className={`
        [writing-mode:vertical-rl] rotate-180 flex items-center
        ${classes?.itemTitle || ''}
      `}
    >
      {title}
    </ContentText>
  </div>
));

export default AccordionItemTitle;
