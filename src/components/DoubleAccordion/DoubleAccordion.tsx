import { IDoubleAccordion } from './interfaces/IDoubleAccordion';
import { IAccordionData } from 'components/AccordionTemplate/interfaces/IAccordion';
import AccordionWhite from 'components/AccordionWhite/AccordionWhite';
import { AccordionWhiteStyleTypes } from 'constants/AccordionStyleTypes';

function DoubleAccordion({
  data, activeFirst, isMobileOrTablet, borderBottomLast, withoutAccordion = false, classes,
}: IDoubleAccordion) {
  const getAccordionData = () => {
    let result = data;
    const compareFn = (a: IAccordionData, b: IAccordionData) => a.id - b.id;

    if (isMobileOrTablet) {
      result = [...data].sort(compareFn);
    }

    return result;
  };

  return (
    <div className={`${classes?.doubleAccordion || ''}`}>
      <AccordionWhite
        data={getAccordionData()}
        activeFirst={activeFirst}
        accordionStyleTypes={AccordionWhiteStyleTypes.ACTIVE_BLACK_TITLE_AND_CONTENT}
        borderBottomLast={borderBottomLast}
        withoutAccordion={withoutAccordion}
        classes={{
          accordion: 'min-lg:flex min-lg:flex-wrap',
          accordionItem: `relative flex flex-col border-b-2 border-color-black min-lg:w-[50%] min-lg:max-w-[50%]
          min-lg:[&:nth-last-child(1)]:odd:border-b-0 min-lg:[&:nth-last-child(2)]:odd:border-b-0
          min-lg:[&:nth-last-child(1)]:even:border-b-0 screen-lg:last:border-b-0`,

          accordionItemTitle: `
            flex-grow transition-[background-color] duration-[.3s] ease-in-out
            min-lg:p-[30px] min-lg:gap-[10px]
            min-xxxl:px-[80px]
            ${withoutAccordion ? 'cursor-default' : ''}

            before:min-lg:content-[''] before:min-lg:absolute before:min-lg:bottom-0 before:min-lg:left-0
            before:min-lg:w-full before:min-lg:h-0 before:min-lg:bg-color-black
            before:min-lg:transition-[height] before:min-lg:duration-[.3s] before:min-lg:ease-in-out
            ${!withoutAccordion ? `
              hover:min-lg:bg-color-black hover:min-lg:text-color-white hover:min-lg:transition-[background-color]
              hover:min-lg:duration-[.3s] hover:min-lg:delay-[.1s] hover:before:min-lg:h-full
              hover:before:min-lg:ease-in-out
            ` : ''}
          `,

          titleContainer: 'relative z-1 transition-[color] duration-[.3s] ease-in-out',

          accordionNumber: `
            !mr-[45px] screen-lg:!mr-[30px] screen-md:!mr-[15px] screen-md:min-w-[30px]
          `,

          rectangle1: 'min-lg:bg-color-white',
          rectangle2: 'min-lg:bg-color-white',

          accordionItemContent: `
            border-none z-10 min-lg:px-[30px] min-xxxl:px-[80px]
          `,
        }}
      />
    </div>
  );
}

export default DoubleAccordion;
