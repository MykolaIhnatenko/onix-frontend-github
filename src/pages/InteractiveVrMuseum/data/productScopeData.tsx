import ContentText from '../../../components/ContentText/ContentText';
import VRARContent from '../../../components/VRARContent/VRARContent';

const ProductScopeData = {
  titleBlock: '[ Product scope ]',
  title: 'The tasks of Onix’s VR team included:',
  content: (
    <>
      <VRARContent>
        <ContentText tag="p" marginAbsent className="!mb-[30px] screen-md:!mb-[20px]">
          Creating a VR museum with a game for each
          of
          {' '}
          <span className="block screen-md:!hidden min-xxxl:!hidden" />
          {' '}
          the five digitally rendered areas selected by the client.
        </ContentText>
      </VRARContent>
      <VRARContent>
        <ContentText tag="p" marginAbsent>
          Making the immersive museum experience available in several languages spoken in the area and easily
          accessible so that users of any age can start playing after putting on a VR headset.
        </ContentText>
      </VRARContent>
    </>
  ),
};

export default ProductScopeData;
