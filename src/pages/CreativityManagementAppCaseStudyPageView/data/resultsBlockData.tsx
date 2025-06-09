import ContentText from '../../../components/ContentText/ContentText';
import VRARContent from '../../../components/VRARContent/VRARContent';

const resultsBlockData = {
  name: '[ Product scope ]',
  title: 'The Onix team was tasked with developing LIVBOX from scratch.'
  + ' The creativity app development process required:',
  content: (
    <>
      <VRARContent>
        <ContentText marginAbsent className="!mb-[30px] screen-md:!mb-[20px]" tag="p">
          Setting up a fine-tuned development process included gathering requirements, defining milestones,
          and establishing collaboration channels.
        </ContentText>
      </VRARContent>
      <VRARContent>
        <ContentText marginAbsent className="!mb-[30px] screen-md:!mb-[20px]" tag="p">
          Collecting and analyzing user needs to define the core features that would best serve LIVBOX&apos;s user base.
        </ContentText>
      </VRARContent>
      <VRARContent>
        <ContentText marginAbsent className="!mb-[30px] screen-md:!mb-[20px]" tag="p">
          Building an iOS app for creatives that allows to capture and organize their ideas in various
          formats (text, voice, and images).
        </ContentText>
      </VRARContent>
      <VRARContent>
        <ContentText marginAbsent tag="p">
          Implementing advanced and reliable technologies to ensure smooth and efficient idea-capturing app performance.
        </ContentText>
      </VRARContent>
    </>
  ),
};

export default resultsBlockData;
