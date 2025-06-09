import ContentText from '../../../components/ContentText/ContentText';
import VRARContent from '../../../components/VRARContent/VRARContent';

const resultsBlockData = {
  title: 'The Onix team needed to:',
  content: (
    <>
      <VRARContent>
        <ContentText marginAbsent className="!mb-[30px] screen-md:!mb-[20px]" tag="p">
          Develop an MVP for a user-friendly platform that addresses the unique requirements
          of both pet owners and their pets during travel.
        </ContentText>
      </VRARContent>
      <VRARContent>
        <ContentText marginAbsent className="!mb-[30px] screen-md:!mb-[20px]" tag="p">
          Create a distinctive brand identity for the platform, emphasizing adventure and companionship.
        </ContentText>
      </VRARContent>
      <VRARContent>
        <ContentText marginAbsent className="!mb-[30px] screen-md:!mb-[20px]" tag="p">
          Craft a design style guide for a consistent and visually appealing presentation.
        </ContentText>
      </VRARContent>
      <VRARContent>
        <ContentText marginAbsent tag="p">
          Establish a robust technological foundation for responsive and user-friendly front-end development.
        </ContentText>
      </VRARContent>
    </>
  ),
};

export default resultsBlockData;
