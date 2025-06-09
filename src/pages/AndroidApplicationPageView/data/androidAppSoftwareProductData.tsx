import ContentText from '../../../components/ContentText/ContentText';
import MainTitle from '../../../components/MainTitle/MainTitle';
import ISoftwareProductBlock from '../../../components/SoftwareProductBlock/interfaces/ISoftwareProductBlock';
import AndroidAppTechGeeksBackgroundLeftMobile from '@/images/androidApplication/img_androidAppTechGeeksBackgroundLeftMobile@2x.webp';
import doubleAccordionData from './androidSoftwareProductData';

const androidAppSoftwareProductData: ISoftwareProductBlock = {
  title: (
    <ContentText tag="p" className="!mt-0 !mb-5 screen-md:!text-[14px] screen-lg:!mb-4">
      [ Android app development services we provide ]
    </ContentText>
  ),
  mainText: (
    <MainTitle className="!max-w-full !pb-[60px] screen-xxl:!max-w-[1070px] screen-lg:!pb-0
      screen-md:!w-full screen-md:!max-w-[610px]"
    >
      Android app development solutions
    </MainTitle>
  ),
  data: doubleAccordionData,
  background: AndroidAppTechGeeksBackgroundLeftMobile,
};

export default androidAppSoftwareProductData;
