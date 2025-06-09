import VRARContent from 'components/VRARContent/VRARContent';
import ContentText from 'components/ContentText/ContentText';

const productScopeContent = {
  subtitle: (
    <>
      The Onix team was
      <br className="hidden screen-md:block" />
      {' '}
      tasked with:
    </>
  ),
  progressBlockContent: (
    <>
      <VRARContent>
        <ContentText tag="p" marginAbsent className="!mb-[30px] screen-md:!mb-[20px]">
          Creating the M-learning app’s user experience (UX) and user interface (UI)
        </ContentText>
      </VRARContent>
      <VRARContent>
        <ContentText tag="p" marginAbsent className="!mb-[30px] screen-md:!mb-[20px]">
          Developing the brand identity for a language learning service
        </ContentText>
      </VRARContent>
      <VRARContent>
        <ContentText tag="p" marginAbsent>
          Designing motion graphics for the app
        </ContentText>
      </VRARContent>
    </>
  ),
};

export default productScopeContent;
