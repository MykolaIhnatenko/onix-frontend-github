import ContentText from '../../../components/ContentText/ContentText';
import VRARContent from '../../../components/VRARContent/VRARContent';

const resultsBlockData = {
  name: '[ Results ]',
  title: (
    <>
      The final product exceeded expectations. The&nbsp;immersive VR showroom enabled users to&nbsp;explore
      luxury cars in unprecedented detail, customize various features, and enjoy a fully
      simulated driving experience.
    </>
  ),
  content: (
    <>
      <VRARContent>
        <ContentText marginAbsent className="!mb-[30px] screen-md:!mb-[20px]" tag="p">
          Customers could visualize their dream car from every angle, right down to&nbsp;the stitching on&nbsp;the
          seats. The standout feature, the 360-degree driving simulation, added a&nbsp;level of&nbsp;excitement
          and engagement that went far beyond what any physical showroom could offer.
        </ContentText>
      </VRARContent>
      <VRARContent>
        <ContentText marginAbsent tag="p">
          When Onix presented the completed project to&nbsp;the client, the feedback was overwhelmingly positive.
          The client was thrilled with the functionality and the experience’s immersive quality. Not only did
          the VR&nbsp;showroom meet&nbsp;the retailer’s&nbsp;initial goals, but it&nbsp;also offered a&nbsp;glimpse
          into the future of&nbsp;automotive retail.
        </ContentText>
      </VRARContent>
    </>
  ),
};

export default resultsBlockData;
