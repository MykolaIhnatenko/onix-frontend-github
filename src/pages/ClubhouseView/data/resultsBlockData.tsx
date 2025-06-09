import ContentText from '../../../components/ContentText/ContentText';
import VRARContent from '../../../components/VRARContent/VRARContent';

const resultsBlockData = {
  name: '[ Product scope ]',
  title: 'During our collaboration, the Onix team needed to:',
  content: (
    <>
      <VRARContent>
        <ContentText tag="p" marginAbsent className="!mb-[30px] screen-md:!mb-[20px]">
          Define the project’s scope and goals to ensure clarity and focus
        </ContentText>
      </VRARContent>
      <VRARContent>
        <ContentText tag="p" marginAbsent className="!mb-[30px] screen-md:!mb-[20px]">
          Build a user-friendly and robust fitness platform for home workouts
        </ContentText>
      </VRARContent>
      <VRARContent>
        <ContentText tag="p" marginAbsent className="!mb-[30px] screen-md:!mb-[20px]">
          Revamp the payment system for a smooth and secure experience
        </ContentText>
      </VRARContent>
      <VRARContent>
        <ContentText tag="p" marginAbsent>
          Enhance UI/UX design to create a highly engaging and enjoyable user journey
        </ContentText>
      </VRARContent>
    </>
  ),
};

export default resultsBlockData;
