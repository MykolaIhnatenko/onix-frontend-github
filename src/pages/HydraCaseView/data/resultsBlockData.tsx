import ContentText from '../../../components/ContentText/ContentText';
import VRARContent from '../../../components/VRARContent/VRARContent';

const resultsBlockData = {
  name: '[ Product scope ]',
  title: 'The Onix team needed to:',
  content: (
    <>
      <VRARContent>
        <ContentText tag="p" marginAbsent className="!mb-[30px] screen-md:!mb-[20px]">
          Automate time tracking and approval to reduce manual errors.
        </ContentText>
      </VRARContent>
      <VRARContent>
        <ContentText tag="p" marginAbsent className="!mb-[30px] screen-md:!mb-[20px]">
          Integrate billing and payroll systems for seamless invoice generation.
        </ContentText>
      </VRARContent>
      <VRARContent>
        <ContentText tag="p" marginAbsent className="!mb-[30px] screen-md:!mb-[20px]">
          Consolidate data across multiple platforms (JIRA, Pipedrive, Xero).
        </ContentText>
      </VRARContent>
      <VRARContent>
        <ContentText tag="p" marginAbsent>
          Create a scalable solution to accommodate business growth without additional administrative workload.
        </ContentText>
      </VRARContent>
    </>
  ),
};

export default resultsBlockData;
