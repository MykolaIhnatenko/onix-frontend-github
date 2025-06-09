import MainTitle from '../../../components/MainTitle/MainTitle';
import ContentText from '../../../components/ContentText/ContentText';

const projectPhasesData = [
  {
    id: 1,
    content: (
      <div className={`bg-white text-black w-[590px] min-h-[416px] mr-[30px] p-[40px] flex flex-col
        screen-md:w-[300px] screen-md:h-[383px] screen-md:min-h-[383px] screen-md:p-[30px_20px_20px]
        screen-md:mr-[15px]`}
      >
        <MainTitle
          tag="h3"
          className="!text-[30px]/[40px] !mb-[30px] screen-md:!mb-[20px] screen-md:!text-[20px]/[28px]"
        >
          Engaging Animation
        </MainTitle>
        <ContentText tag="p" className="!m-0">
          The animated 3D mascot development needed to be more than just a moving image.
          It had to be lively and engaging, something that would hold the viewer’s attention and spark curiosity.
        </ContentText>
        <span className={`font-generalSans mt-auto text-[30px]/[40px] font-medium
          screen-md:text-[20px]/[28px]`}
        >
          01
        </span>
      </div>
    ),
  },
  {
    id: 2,
    content: (
      <div className={`bg-white text-black w-[590px] min-h-[416px] mr-[30px] p-[40px] flex flex-col
        screen-md:w-[300px] screen-md:h-[383px] screen-md:min-h-[383px] screen-md:p-[30px_20px_20px]
        screen-md:mr-[15px]`}
      >
        <MainTitle
          tag="h3"
          className="!text-[30px]/[40px] !mb-[30px] screen-md:!mb-[20px] screen-md:!text-[20px]/[28px]"
        >
          Technical Integration
        </MainTitle>
        <ContentText tag="p" className="!m-0">
          We had to make sure the animation could be seamlessly integrated into a webpage without
          slowing it down or causing issues.
        </ContentText>
        <span className={`font-generalSans mt-auto text-[30px]/[40px] font-medium
          screen-md:text-[20px]/[28px]`}
        >
          02
        </span>
      </div>
    ),
  },
  {
    id: 3,
    content: (
      <div className={`bg-white text-black w-[590px] min-h-[416px] mr-[30px] p-[40px] flex flex-col
        screen-md:w-[300px] screen-md:h-[383px] screen-md:min-h-[383px] screen-md:p-[30px_20px_20px]
        screen-md:mr-[15px]`}
      >
        <MainTitle
          tag="h3"
          className="!text-[30px]/[40px] !mb-[30px] screen-md:!mb-[20px] screen-md:!text-[20px]/[28px]"
        >
          Resource Accessibility
        </MainTitle>
        <ContentText tag="p" className="!m-0">
          The page needed to be user-friendly, making it easy for visitors to download
          the coloring page and find basic information about the book and contact details.
        </ContentText>
        <span className={`font-generalSans mt-auto text-[30px]/[40px] font-medium
          screen-md:text-[20px]/[28px]`}
        >
          03
        </span>
      </div>
    ),
  },
];

export default projectPhasesData;
