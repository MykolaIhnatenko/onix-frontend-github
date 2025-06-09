import React from 'react';

import MainTitle from 'components/MainTitle/MainTitle';
import ImageComponent from 'components/Image/Image';
import ItemText from 'components/ItemText/ItemText';
import IAccordionItemContentTablet from '../interfaces/IAccordionItemContentTablet';

function AccordionItemContentTablet({
  number, image, itemTitle, content, whiteTheme, classes,
}: IAccordionItemContentTablet) {
  return (
    <div
      className={`
        w-full h-full flex flex-col pb-[30px] mb-[30px] border-solid border-b-[2px] last:border-b-0
        last:pb-0 last:mb-0 screen-md:pb-[20px] screen-md:mb-[20px]
        ${whiteTheme ? '!border-color-black' : '!border-color-white'}
        ${classes?.item || ''}
      `}
    >
      <div>
        <div className={`mb-[15px] flex ${classes?.itemTitleContainer || ''}`}>
          {number && (
            <MainTitle
              tag="span"
              className={`
                w-[36px] mr-[15px] !text-[30px]/[40px] screen-md:!text-[20px]/[28px] screen-md:w-[25px]
                ${classes?.itemNumber || ''}
              `}
            >
              {number}
            </MainTitle>
          )}
          <MainTitle
            tag="h3"
            className={`!text-[30px]/[40px] screen-md:!text-[20px]/[28px] ${classes?.itemTitle || ''}`}
          >
            {itemTitle}
          </MainTitle>
        </div>
        <div className={`mb-[20px] ${classes?.itemText || ''}`}>
          {typeof content === 'string' || Array.isArray(content) ? (
            <ItemText
              content={content}
              marginBottomAbsent
            />
          ) : content}
        </div>
      </div>
      <ImageComponent
        src={image}
        alt="image"
        sizes="100vw"
        quality={95}
        className={`w-auto h-auto object-contain ${classes?.itemImage || ''}`}
      />
    </div>
  );
}

export default AccordionItemContentTablet;
