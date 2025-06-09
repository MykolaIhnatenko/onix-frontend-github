import ContentText from '../../../../components/ContentText/ContentText';
import VRARContent from '../../../../components/VRARContent/VRARContent';

const digitalHealthcareSecondResultsBlockData = {
  name: '[ Product scope ]',
  title: 'A few years ago, Onix created a similar web project for the same client.',
  text: (
    <>
      <VRARContent
        className="max-w-[1300px] min-xxxl:max-w-[1480px]"
      >
        <ContentText
          marginAbsent
          className="
            min-xxxl:max-w-[710px]
            !pb-[40px] max-w-[630px]
            screen-lg:max-w-[542px] screen-md:!pb-[20px]
          "
          tag="p"
        >
          But the previous codebase and design were outdated, so we had to develop an infrastructure
          for multiple branded apps, build the apps from scratch, and reinvent UX.
        </ContentText>
      </VRARContent>
      <VRARContent className="max-w-[1300px] min-xxxl:max-w-[1480px]">
        <ContentText
          marginAbsent
          className="
            min-xxxl:max-w-[710px]
            !pb-[80px] !ml-[auto] max-w-[630px]
            screen-lg:max-w-[542px] screen-lg:!ml-0 screen-lg:!pb-[40px]
            screen-md:!pb-[20px]
          "
          tag="p"
        >
          A professional team of Onix specialists followed the fine-tuned development process to create
          a first-class platform for patient self-care:
        </ContentText>
      </VRARContent>
    </>
  ),
  content: (
    <>
      <VRARContent>
        <ContentText marginAbsent className="!mb-[30px] screen-md:!mb-[20px]" tag="p">
          Collect requirements to define the main product features and meet business goals.
        </ContentText>
      </VRARContent>
      <VRARContent>
        <ContentText marginAbsent className="!mb-[30px] screen-md:!mb-[20px]" tag="p">
          Set up a transparent and fine-tuned development process.
        </ContentText>
      </VRARContent>
      <VRARContent>
        <ContentText marginAbsent className="!mb-[30px] screen-md:!mb-[20px]" tag="p">
          Conduct the discovery phase to reinvent the UX and develop the specification so that the developers
          can start the work as soon as possible.
        </ContentText>
      </VRARContent>
      <VRARContent>
        <ContentText marginAbsent className="!mb-[30px] screen-md:!mb-[20px]" tag="p">
          Ensure a holistic solution consisting of mobile apps (iOS and Android) and a web app of different
          functionality and role within the product.
        </ContentText>
      </VRARContent>
      <VRARContent>
        <ContentText marginAbsent tag="p">
          Implement reliable and advanced technologies to ensure high software operation and proper functioning.
        </ContentText>
      </VRARContent>
    </>
  ),
};

export default digitalHealthcareSecondResultsBlockData;
