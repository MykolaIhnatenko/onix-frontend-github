import ContentText from '../../../components/ContentText/ContentText';
import ISoftwareProductBlock from '../../../components/SoftwareProductBlock/interfaces/ISoftwareProductBlock';
import { softwareProductContentData } from './accordionData';
import MainTitle from '../../../components/MainTitle/MainTitle';

const softwareProductData: ISoftwareProductBlock = {
  title: (
    <ContentText tag="p" className="!mt-0 !mb-5 screen-md:!text-[14px] screen-lg:!mb-4">
      [ Software product development services we provide ]
    </ContentText>
  ),
  mainText: (
    <MainTitle className="!max-w-full screen-xxl:!max-w-[1070px] screen-md:!w-full screen-md:!max-w-[610px]">
      We offer a full range of software development services to shape
      <br className="!hidden" />
      {' '}
      your idea into a viable product and help your business succeed.
    </MainTitle>
  ),
  firstNoteText: (
    <ContentText
      tag="p"
      className="!max-w-[710px] !mb-0
       screen-lg:!max-w-[630px] screen-lg:!mt-10
       screen-md:!w-full screen-md:!max-w-[720px] screen-md:!mt-[50px]"
    >
      Our development services comprise well&#8209;established
      <br className="!hidden screen-lg:!block" />
      {' '}
      methodologies and years of experience in building
      <br className="!hidden screen-lg:!block" />
      {' '}
      exceptional custom software solutions on time and
      <br className="!hidden screen-lg:!block" />
      {' '}
      within budget!
    </ContentText>
  ),
  secondNoteText: (
    <ContentText
      tag="p"
      className="!max-w-[710px] !mt-0 !mb-[148px]
        screen-lg:!max-w-[630px] screen-lg:!text-left screen-lg:!self-start screen-lg:!mb-0
        screen-lg:!pr-0 screen-lg:!pt-[30px] screen-md:!text-left"
    >
      Get innovative, secure, and solid products using
      <br className="!hidden screen-lg:!block" />
      {' '}
      our full-cycle software development services:
    </ContentText>
  ),
  data: softwareProductContentData,
};

export default softwareProductData;
