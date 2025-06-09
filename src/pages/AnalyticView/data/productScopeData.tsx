import ContentText from '../../../components/ContentText/ContentText';
import VRARContent from '../../../components/VRARContent/VRARContent';

const ProductScopeData = {
  titleBlock: '[ Result ]',
  title: 'The intuitive dashboards and graphics led to improved '
  + 'decision-making capabilities, enabling organizations to identify trends and opportunities with greater clarity.',
  content: (
    <>
      <VRARContent>
        <ContentText tag="p" marginAbsent className="!mb-[30px] screen-md:!mb-[20px]">
          Users praised the user-friendly interface and seamless integration of
          survey functionalities, resulting in increased satisfaction and engagement.
        </ContentText>
      </VRARContent>
      <VRARContent>
        <ContentText tag="p" marginAbsent className="!mb-[30px] screen-md:!mb-[20px]">
          Furthermore, the platform facilitated the generation of actionable
          insights from survey data, providing deeper insights into feedback and operational performance.
        </ContentText>
      </VRARContent>
      <VRARContent>
        <ContentText tag="p" marginAbsent>
          The scalable architecture and optimized performance ensured reliable operation,
          even under heavy usage and growing data volumes, making it a robust solution for evolving needs.
        </ContentText>
      </VRARContent>
    </>
  ),
};

export default ProductScopeData;
