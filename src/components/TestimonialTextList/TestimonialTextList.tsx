import ContentText from '../ContentText/ContentText';
import VRARContent from 'components/VRARContent/VRARContent';
import ITestimonialTextList from './interfaces/ITestimonialTextList';

function TestimonialTextList({ testimonialText }: ITestimonialTextList) {
  return (
    <div className="max-w-[1080px] screen-lg:max-w-full">
      {testimonialText.map((text, index) => (
        <VRARContent
          key={`text_${index + 1}`}
          className={`
            pb-[26px] screen-md:pb-[24px]
            ${index === testimonialText.length - 1 ? '!pb-[40px] screen-md:!pb-[30px]' : ''}
          `}
        >
          <ContentText tag="p" marginAbsent>
            {text}
          </ContentText>
        </VRARContent>
      ))}
    </div>
  );
}

export default TestimonialTextList;
