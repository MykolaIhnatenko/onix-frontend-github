import ContentText from 'components/ContentText/ContentText';
import VRARContent from '../../../components/VRARContent/VRARContent';

const productScopeContent = {
  name: '[ Product scope ]',
  title: 'The responsibilities of the Onix team included:',
  content: (
    <>
      <VRARContent>
        <ContentText marginAbsent className="!mb-[30px] screen-md:!mb-[20px]">
          Collecting requirements to establish project objectives and define the project scope.
        </ContentText>
      </VRARContent>
      <VRARContent>
        <ContentText marginAbsent className="!mb-[30px] screen-md:!mb-[20px]">
          Ensuring a development process that is efficient and transparent.
        </ContentText>
      </VRARContent>
      <VRARContent>
        <ContentText marginAbsent className="!mb-[30px] screen-md:!mb-[20px]">
          Developing software that offers real-time image classification and analysis, eliminating delays
          experienced with cloud-based solutions.
        </ContentText>
      </VRARContent>
      <VRARContent>
        <ContentText marginAbsent className="!mb-[30px] screen-md:!mb-[20px]">
          Integrating Intel Neural Compute Stick into an image classification pipeline, ensuring an app runs
          sophisticated AI models directly on user devices without cloud processing.
        </ContentText>
      </VRARContent>
      <VRARContent>
        <ContentText marginAbsent>
          Incorporating dependable and cutting-edge technologies to guarantee the software&apos;s
          high performance and seamless functionality.
        </ContentText>
      </VRARContent>
    </>
  ),
};

export default productScopeContent;
