import ContentText from '../../../components/ContentText/ContentText';
import VRARContent from '../../../components/VRARContent/VRARContent';

const resultsBlockData = {
  name: '[ Project scope ]',
  title: 'Onix’s team was commissioned to:',
  content: (
    <>
      <VRARContent>
        <ContentText marginAbsent className="!mb-[30px] screen-md:!mb-[20px]" tag="p">
          ﹂ Develop CRM functionality enabling insurance agents to create accounts and plan and manage
          interactions with leads, opportunities, and customers
        </ContentText>
      </VRARContent>
      <VRARContent>
        <ContentText marginAbsent className="!mb-[30px] screen-md:!mb-[20px]" tag="p">
          ﹂ Design an intuitive user experience (UX) and user interface (UI) enabling insurance agents
          to navigate the system easily and perform their daily tasks faster
        </ContentText>
      </VRARContent>
      <VRARContent>
        <ContentText marginAbsent className="!mb-[30px] screen-md:!mb-[20px]" tag="p">
          ﹂ Ensure that the system is HIPAA-compliant, as the CRM would be collecting and storing
          protected health information (PHI)
        </ContentText>
      </VRARContent>
      <VRARContent>
        <ContentText marginAbsent tag="p">
          ﹂ Deploy the system on the company’s private server
        </ContentText>
      </VRARContent>
    </>
  ),
};

export default resultsBlockData;
