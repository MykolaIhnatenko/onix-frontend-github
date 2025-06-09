import ContentText from '../../../components/ContentText/ContentText';
import VRARContent from '../../../components/VRARContent/VRARContent';

const resultsBlockData = {
  name: '[ Product scope ]',
  title: 'The Onix team was tasked with:',
  content: (
    <>
      <VRARContent>
        <ContentText marginAbsent className="!mb-[30px] screen-md:!mb-[20px]" tag="p">
          Creating the user experience (UX) and user interface (UI)
          for streamlined accommodations booking using preliminary wireframes provided by the client.
        </ContentText>
      </VRARContent>
      <VRARContent>
        <ContentText marginAbsent className="!mb-[30px] screen-md:!mb-[20px]" tag="p">
          Developing a unique brand identity for the online accommodation booking service.
        </ContentText>
      </VRARContent>
      <VRARContent>
        <ContentText marginAbsent tag="p">
          Building a scalable platform and integrating it
          with the client’s chosen channel manager.
        </ContentText>
      </VRARContent>
    </>
  ),
};

export default resultsBlockData;
