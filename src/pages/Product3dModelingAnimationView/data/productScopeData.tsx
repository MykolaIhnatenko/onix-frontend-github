import ContentText from '../../../components/ContentText/ContentText';
import VRARContent from '../../../components/VRARContent/VRARContent';

const ProductScopeData = {
  titleBlock: '[ Product scope ]',
  title: 'The Onix team needed to:',
  content: (
    <>
      <VRARContent>
        <ContentText tag="p" marginAbsent className="!mb-[30px] screen-md:!mb-[20px]">
          Set up an effective and transparent development process.
        </ContentText>
      </VRARContent>
      <VRARContent>
        <ContentText tag="p" marginAbsent className="!mb-[30px] screen-md:!mb-[20px]">
          Design a 3D prototype based on the existing light.
        </ContentText>
      </VRARContent>
      <VRARContent>
        <ContentText tag="p" marginAbsent className="!mb-[30px] screen-md:!mb-[20px]">
          Create a compelling animated video that effectively communicates the product&apos;s unique selling points.
        </ContentText>
      </VRARContent>
      <VRARContent>
        <ContentText tag="p" marginAbsent>
          Ensure the proper selection of realistic textures to enhance the visual fidelity of
          the lights in their 3D modeling and rendering process.
        </ContentText>
      </VRARContent>
    </>
  ),
};

export default ProductScopeData;
