import ContentText from 'components/ContentText/ContentText';
import VRARContent from 'components/VRARContent/VRARContent';

const resultsData = {
  titleBlock: '[ Results ]',
  title: 'Onix’s VR game developers pride themselves on building a VR museum experience '
  + 'that helps Anija Manor continue its mission by',
  listPerformance: (
    <>
      <VRARContent>
        <ContentText marginAbsent className="!mb-[30px] screen-md:!mb-[20px]" tag="p">
          Exposing people of all ages to a part of Estonia’s history and culture through
          multi-sensory immersive experiences
        </ContentText>
      </VRARContent>
      <VRARContent>
        <ContentText marginAbsent className="!mb-[30px] screen-md:!mb-[20px]" tag="p">
          Increasing the exhibition’s appeal using modern technology
        </ContentText>
      </VRARContent>
      <VRARContent>
        <ContentText marginAbsent tag="p">
          Enabling cultural exploration and learning for people who can’t visit Anija Manor in person
        </ContentText>
      </VRARContent>
    </>
  ),
};

export default resultsData;
