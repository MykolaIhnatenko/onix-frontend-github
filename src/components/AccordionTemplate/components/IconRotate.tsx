import { AccordionBlackStyleTypes, AccordionWhiteStyleTypes } from 'constants/AccordionStyleTypes';
import { IIconRotate } from '../interfaces/IAccordionItemTitle';

function IconRotate({
  activeItem, isAccordionBlack, accordionStyleTypes, smallerTitleText, classes,
}: IIconRotate) {
  const { ACTIVE_WHITE_TITLE_AND_CONTENT } = AccordionBlackStyleTypes;
  const { ACTIVE_BLACK_TITLE_AND_CONTENT } = AccordionWhiteStyleTypes;

  const accordionStyles = `
    ${activeItem && accordionStyleTypes === ACTIVE_BLACK_TITLE_AND_CONTENT ? '!bg-color-white' : ''}
    ${activeItem && accordionStyleTypes === ACTIVE_WHITE_TITLE_AND_CONTENT ? '!bg-color-black' : ''}
  `;

  return (
    <div className={`
      relative p-[5px] screen-md:p-[4px]
      ${smallerTitleText ? 'py-[2px] screen-md:p-[4px]' : ''}
      ${classes?.iconContainer || ''}
      `}
    >
      <div className={`
          flex relative items-center h-[30px] screen-md:h-[20px]
          ${classes?.iconRotateContainer || ''}
        `}
      >
        <div className={`
            w-[30px] h-[2px] bg-color-black screen-md:w-[20px] block
            transition-all duration-[.3s] ease-in-out
            ${isAccordionBlack ? 'bg-color-white' : ''}
            ${activeItem ? 'rotate-180' : ''}
            ${accordionStyles}
            ${classes?.rectangle1 || ''}
          `}
        />
        <div className={`
            w-[30px] h-[2px] bg-color-black screen-md:w-[20px] block
            transition-all duration-[.3s] ease-in-out absolute rotate-90
            ${isAccordionBlack ? 'bg-color-white' : ''}
            ${activeItem ? '!rotate-180 left-0' : ''}
            ${accordionStyles}
            ${classes?.rectangle2 || ''}
          `}
        />
      </div>
    </div>
  );
}

export default IconRotate;
