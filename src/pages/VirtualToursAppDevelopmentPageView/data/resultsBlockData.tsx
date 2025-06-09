import ContentText from '../../../components/ContentText/ContentText';
import VRARContent from '../../../components/VRARContent/VRARContent';

const resultsBlockData = {
  name: '[ Product scope ]',
  title: 'The Onix team needed to:',
  content: (
    <>
      <VRARContent>
        <ContentText marginAbsent className="!mb-[30px] screen-md:!mb-[20px]" tag="p">
          Develop a VR application that could host and distribute 360-degree videos.
        </ContentText>
      </VRARContent>
      <VRARContent>
        <ContentText marginAbsent className="!mb-[30px] screen-md:!mb-[20px]" tag="p">
          Integrate a 3D interactive map with geographically correct points representing different locations.
        </ContentText>
      </VRARContent>
      <VRARContent>
        <ContentText marginAbsent className="!mb-[30px] screen-md:!mb-[20px]" tag="p">
          Ensure high-quality textures and a realistic visual experience.
        </ContentText>
      </VRARContent>
      <VRARContent>
        <ContentText marginAbsent tag="p">
          Implement video hosting and integration with the Headjack service for uploading and managing videos.
        </ContentText>
      </VRARContent>
    </>
  ),
};

export default resultsBlockData;
