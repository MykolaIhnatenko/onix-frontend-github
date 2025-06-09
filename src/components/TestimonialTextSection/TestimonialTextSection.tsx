import ContentText from '../ContentText/ContentText';
import ITestimonialTextSection from './interfaces/ITestimonialTextSection';
import VRARContent from 'components/VRARContent/VRARContent';
import TestimonialTextList from 'components/TestimonialTextList/TestimonialTextList';
import TestimonialTemplate from 'components/TestimonialTemplate/TestimonialTemplate';

function TestimonialTextSection({
  upTitle, title, testimonialText, authorPosition, authorName,
}: ITestimonialTextSection) {
  return (
    <TestimonialTemplate upTitle={upTitle} title={title}>
      <TestimonialTextList testimonialText={testimonialText} />
      {authorPosition && (
        <VRARContent>
          <ContentText tag="p" marginAbsent>
            {authorPosition}
          </ContentText>
        </VRARContent>
      )}
      {authorName && (
        <VRARContent>
          <ContentText tag="p" marginAbsent>
            {authorName}
          </ContentText>
        </VRARContent>
      )}
    </TestimonialTemplate>
  );
}

export default TestimonialTextSection;
