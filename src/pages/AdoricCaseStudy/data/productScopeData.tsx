import ContentText from 'components/ContentText/ContentText';
import VRARContent from 'components/VRARContent/VRARContent';

const ProductScopeData = {
  titleBlock: '[ Product scope ]',
  title: 'The Onix team needed to:',
  listPerformance: (
    <>
      <VRARContent>
        <ContentText marginAbsent className="!mb-[30px] screen-md:!mb-[20px]" tag="p">
          Establish a streamlined and transparent development approach
        </ContentText>
      </VRARContent>
      <VRARContent>
        <ContentText marginAbsent className="!mb-[30px] screen-md:!mb-[20px]" tag="p">
          Gather requirements to determine core product functionalities and align with business objectives
        </ContentText>
      </VRARContent>
      <VRARContent>
        <ContentText marginAbsent className="!mb-[30px] screen-md:!mb-[20px]" tag="p">
          Build an unobtrusive and straightforward SaaS product for setting up marketing campaigns
        </ContentText>
      </VRARContent>
      <VRARContent>
        <ContentText marginAbsent tag="p">
          Employ robust technologies to strengthen app operation and enrich its functionality
        </ContentText>
      </VRARContent>
    </>
  ),
};

export default ProductScopeData;
