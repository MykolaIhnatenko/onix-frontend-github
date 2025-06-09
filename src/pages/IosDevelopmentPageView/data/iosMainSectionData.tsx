import ContentText from '../../../components/ContentText/ContentText';
import IIosMainSection from '../../../components/IosMainSection/interfaces/IIosMainSection';
import MainTitle from '../../../components/MainTitle/MainTitle';
import tapAccordionData from './tapAccordionData';

const iosMainSectionData: IIosMainSection = {
  sectionTitle: (
    <MainTitle
      tag="h1"
      className="!text-[40px]/[50px] min-md:!text-[50px]/[64px]
    min-md:max-w-[708px] min-lg:max-w-unset"
    >
      iOS Application Development for Startups and Established Companies
    </MainTitle>
  ),
  firstText: (
    <ContentText
      tag="p"
      className="!mt-[15px] !mb-0
            min-md:!mt-[30px] min-md:!ml-auto min-md:max-w-[460px] min-md:!mb-[120px]
            min-lg:!ml-0 min-lg:!mt-[40px] min-lg:max-w-[610px] min-lg:!mb-[50px]"
    >
      Onix provides a comprehensive set of iOS app development services to assist companies and
      organizations in turning their software development goals into reality.
    </ContentText>
  ),
  secondText: (
    <ContentText
      tag="p"
      className="!mb-[30px] !mt-[30px]
            min-md:!mt-0 min-md:!mb-[30px] min-md:max-w-[460px]
            min-lg:!mt-auto min-lg:max-w-[610px] min-lg:!mb-[40px]"
    >
      We are proud that our offshore iOS developers are at the forefront of growing mobile technology,
      with expertise spanning the iOS engineering for all devices. Utilizing the iPhone, iPad, iWatch,
      and Apple TV platforms to build a multi-platform application allows users to access your app no
      matter their device.
    </ContentText>
  ),
  btnText: 'Let\'s work together',
  data: tapAccordionData,
};

export default iosMainSectionData;
