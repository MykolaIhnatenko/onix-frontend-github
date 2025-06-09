import ContentText from '../../../components/ContentText/ContentText';
import VRARContent from '../../../components/VRARContent/VRARContent';

const resultsBlockData = {
  title: 'The Onix team was responsible for:',
  content: (
    <>
      <VRARContent>
        <ContentText tag="p" marginAbsent className="!mb-[30px] screen-md:!mb-[20px]">
          Developing the idea of an online quiz to assess
          and categorize users&apos; habits
        </ContentText>
      </VRARContent>
      <VRARContent>
        <ContentText tag="p" marginAbsent className="!mb-[30px] screen-md:!mb-[20px]">
          Creating a visually appealing and interactive web design
        </ContentText>
      </VRARContent>
      <VRARContent>
        <ContentText tag="p" marginAbsent className="!mb-[30px] screen-md:!mb-[20px]">
          Drawing 3D illustrations for a dynamic and engaging user experience
        </ContentText>
      </VRARContent>
      <VRARContent>
        <ContentText tag="p" marginAbsent>
          Ensuring the quiz&apos;s compatibility with mobile devices through adaptive design
        </ContentText>
      </VRARContent>
    </>
  ),
};

export default resultsBlockData;
