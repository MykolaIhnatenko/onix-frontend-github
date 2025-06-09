import ContentText from '../../../components/ContentText/ContentText';
import VRARContent from '../../../components/VRARContent/VRARContent';

const ProductScopeData = {
  titleBlock: '[ Product scope ]',
  title: 'The Onix team needed to:',
  content: (
    <>
      <VRARContent>
        <ContentText tag="p" marginAbsent className="!mb-[30px] screen-md:!mb-[20px]">
          Collaborate closely with the clients to understand their vision and requirements
          while providing expertise and guidance on technical and design aspects.
        </ContentText>
      </VRARContent>
      <VRARContent>
        <ContentText tag="p" marginAbsent className="!mb-[30px] screen-md:!mb-[20px]">
          Build a kid&apos;s banking app to teach children financial literacy.
        </ContentText>
      </VRARContent>
      <VRARContent>
        <ContentText tag="p" marginAbsent className="!mb-[30px] screen-md:!mb-[20px]">
          Develop an MVP within a tight timeframe of three months.
        </ContentText>
      </VRARContent>
      <VRARContent>
        <ContentText tag="p" marginAbsent className="!mb-[30px] screen-md:!mb-[20px]">
          Ensure compliance with Know Your Customer (KYC) regulations by implementing
          identity verification procedures during the onboarding process.
        </ContentText>
      </VRARContent>
      <VRARContent>
        <ContentText tag="p" marginAbsent>
          Design an intuitive and engaging user interface, focusing on ease of use and accessibility.
        </ContentText>
      </VRARContent>
    </>
  ),
};

export default ProductScopeData;
