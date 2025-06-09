import React from 'react';

import IAccordionItemContent from '../interfaces/IAccordionItemContent';
import MainTitle from 'components/MainTitle/MainTitle';
import ImageComponent from 'components/Image/Image';
import ItemText from 'components/ItemText/ItemText';

function AccordionItemContent({
  image, itemTitle, content, activeItem, contentWidth, classes,
}: IAccordionItemContent) {
  return (
    <div
      className={`transition-[width] duration-[.6s] ease overflow-hidden ${classes?.itemContentContainer || ''}`}
      style={{ width: activeItem ? `${contentWidth}px` : '0px' }}
    >
      <div
        className={`
          w-full h-full flex flex-col gap-[40px] justify-between pl-[70px] pr-[30px]
          ${classes?.itemContent || ''}
        `}
        style={{ minWidth: `${contentWidth}px` }}
      >
        <div className={`max-w-[652px] min-xxxl:max-w-[1000px] flex flex-col ${classes?.itemTextContainer || ''}`}>
          <MainTitle tag="h3" className={`!text-[30px]/[40px] mb-[30px] ${classes?.itemTitle || ''}`}>
            {itemTitle}
          </MainTitle>
          {typeof content === 'string' || Array.isArray(content) ? (
            <div>
              <ItemText
                content={content}
                marginBottomAbsent
              />
            </div>
          ) : content}
        </div>
        <ImageComponent
          src={image}
          alt="image"
          sizes="100vw"
          quality={95}
          className={`w-auto h-auto object-contain max-h-[434px] max-w-[700px] object-left
          min-xxxl:object-cover min-xxxl:max-w-[1000px] min-xxxl:max-h-[592px]
           ${classes?.itemImage || ''}`}
        />
      </div>
    </div>
  );
}

export default AccordionItemContent;
