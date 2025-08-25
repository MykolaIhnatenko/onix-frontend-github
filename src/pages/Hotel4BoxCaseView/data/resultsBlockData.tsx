import ContentText from '../../../components/ContentText/ContentText';
import VRARContent from '../../../components/VRARContent/VRARContent';

const resultsBlockData = {
  name: '[ Product scope ]',
  title: <>During our collaboration, the&nbsp;Onix team needed to:</>,
  content: (
    <>
      <VRARContent>
        <ContentText tag="p" marginAbsent className="!mb-[30px] screen-md:!mb-[20px]">
          Rewrite the entire legacy system, migrating from outdated PHP to a modern Laravel framework
        </ContentText>
      </VRARContent>
      <VRARContent>
        <ContentText tag="p" marginAbsent className="!mb-[30px] screen-md:!mb-[20px]">
          ERP solutions development for logistics with complex business logic to handle international shipments
        </ContentText>
      </VRARContent>
      <VRARContent>
        <ContentText tag="p" marginAbsent className="!mb-[30px] screen-md:!mb-[20px]">
          Implement new API functionality to improve order processing and integrate third-party couriers
        </ContentText>
      </VRARContent>
      <VRARContent>
        <ContentText tag="p" marginAbsent className="!mb-[30px] screen-md:!mb-[20px]">
          Enhance package tracking and notifications to ensure real-time shipment visibility
        </ContentText>
      </VRARContent>
      <VRARContent>
        <ContentText tag="p" marginAbsent>
          Introduce a seamless user experience with a restructured dashboard for easy order management
        </ContentText>
      </VRARContent>
    </>
  ),
};

export default resultsBlockData;
