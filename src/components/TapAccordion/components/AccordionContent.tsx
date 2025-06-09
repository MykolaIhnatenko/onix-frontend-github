import ContentText from 'components/ContentText/ContentText';
import { IAccordionContentProps } from '../interfaces/ITapAccordionData';

function AccordionContent({ text, isActive, classes }:IAccordionContentProps) {
  return (
    <div
      className={`
        overflow-hidden
        ${isActive ? 'block opacity-100 bg-color-black z-[1] relative '
          + 'transition-all duration-300 ease-linear' : ''}
        ${classes ? classes.content : ''}`}
    >
      <ContentText
        tag="p"
        className={`text-color-black pt-0 px-[15px] pb-[30px]
          min-md:px-[30px] min-md:pb-[40px]
          ${isActive ? '!my-0 !mx-0 text-color-white' : ''}
          ${classes ? classes.contentInner : ''}`}
      >
        {text}
      </ContentText>
    </div>
  );
}

export default AccordionContent;
