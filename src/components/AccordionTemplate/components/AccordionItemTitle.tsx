import React from 'react';

import IAccordionItemTitle from '../interfaces/IAccordionItemTitle';
import IconRotate from './IconRotate';
import { AccordionBlackStyleTypes, AccordionWhiteStyleTypes } from 'constants/AccordionStyleTypes';
import AccordionItemTitleContainer from './AccordionItemTitleContainer';

function AccordionItemTitle({
  number, title, tagTitle, withoutAccordion, activeItem, isAccordionBlack, accordionStyleTypes,
  smallerTitleText, classes, onClick, onMouseEnter, borderTop, firstOfType,
}: IAccordionItemTitle) {
  const { ACTIVE_WHITE_TITLE_AND_CONTENT } = AccordionBlackStyleTypes;
  const { ACTIVE_BLACK_TITLE_AND_CONTENT } = AccordionWhiteStyleTypes;

  return (
    <div
      role="presentation"
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      className={`
        flex justify-between gap-[30px] cursor-pointer py-[30px] screen-lg:p-[30px]
        screen-lg:cursor-default screen-md:gap-[10px] screen-md:py-[20px] screen-md:px-[15px]
        ${activeItem && accordionStyleTypes === ACTIVE_BLACK_TITLE_AND_CONTENT ? 'text-color-white bg-color-black' : ''}
        ${activeItem && accordionStyleTypes === ACTIVE_WHITE_TITLE_AND_CONTENT ? 'text-color-black bg-color-white' : ''}
        ${borderTop && firstOfType ? 'border-t-2 border-solid border-t-color-white' : ''}
        ${accordionStyleTypes === ACTIVE_BLACK_TITLE_AND_CONTENT
        ? 'transition-[background-color] duration-[.2s] ease-in-out'
        : ''
        }
        ${accordionStyleTypes === ACTIVE_WHITE_TITLE_AND_CONTENT
          ? 'transition-[background-color] duration-[.2s] ease-in-out'
          : ''
        }
        ${withoutAccordion ? `${classes?.withoutAccordion || ''}` : ''}
        ${activeItem ? classes?.accordionItemTitleOpen || '' : ''}
        ${classes?.accordionItemTitle || ''}
      `}
    >
      <AccordionItemTitleContainer
        number={number}
        title={title}
        tagTitle={tagTitle}
        smallerTitleText={smallerTitleText}
        classes={classes}
      />
      {!withoutAccordion && (
        <IconRotate
          activeItem={activeItem}
          isAccordionBlack={isAccordionBlack}
          accordionStyleTypes={accordionStyleTypes}
          smallerTitleText={smallerTitleText}
          classes={classes}
        />
      )}
    </div>
  );
}

export default AccordionItemTitle;
