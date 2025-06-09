import ContentText from '../../../components/ContentText/ContentText';
import VRARContent from '../../../components/VRARContent/VRARContent';

const inneraiResultsBlockData = {
  name: '[ Product scope ]',
  title: 'Client\'s requirements',
  content: (
    <>
      <VRARContent>
        <ContentText tag="p" marginAbsent className="!mb-[30px] screen-md:!mb-[20px]">
          Initially, the client wanted both Android and iOS versions of the app. However, as they planned to target
          the US market, where the majority of users use Apple devices, and given time constraints, the client
          decided to focus on iOS app development first.
        </ContentText>
      </VRARContent>
      <VRARContent>
        <ContentText tag="p" marginAbsent>
          Onix’s experts were tasked with developing a minimum viable product (MVP) with the core feature set required
          to provide personalized meditation sessions and a basic intuitive user interface. The client gave them one
          month to deliver the MVP.
        </ContentText>
      </VRARContent>
    </>
  ),
};

export default inneraiResultsBlockData;
