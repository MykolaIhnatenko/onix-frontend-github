import ContentText from '../../../components/ContentText/ContentText';
import MainTitle from '../../../components/MainTitle/MainTitle';
import VRARContent from '../../../components/VRARContent/VRARContent';
import { IProcessAccordionItem, IProcessImage } from '../../MainPage/interfaces/IProcess';
import ProcessImg1 from '../../../assets/images/usabilityTestingPage/processBlock/img_processBlock1@2x.webp';
import ProcessImg2 from '../../../assets/images/usabilityTestingPage/processBlock/img_processBlock2@2x.webp';
import ProcessImg3 from '../../../assets/images/usabilityTestingPage/processBlock/img_processBlock3@2x.webp';
import ProcessImg4 from '../../../assets/images/usabilityTestingPage/processBlock/img_processBlock4@2x.webp';
import ProcessImgTablet1 from '../../../assets/images/usabilityTestingPage/processBlock/img_processBlockTablet1@2x.webp';
import ProcessImgTablet2 from '../../../assets/images/usabilityTestingPage/processBlock/img_processBlockTablet2@2x.webp';
import ProcessImgTablet3 from '../../../assets/images/usabilityTestingPage/processBlock/img_processBlockTablet3@2x.webp';
import ProcessImgTablet4 from '../../../assets/images/usabilityTestingPage/processBlock/img_processBlockTablet4@2x.webp';
import ProcessImgMobile1 from '../../../assets/images/usabilityTestingPage/processBlock/img_processBlockMobile1@2x.webp';
import ProcessImgMobile2 from '../../../assets/images/usabilityTestingPage/processBlock/img_processBlockMobile2@2x.webp';
import ProcessImgMobile3 from '../../../assets/images/usabilityTestingPage/processBlock/img_processBlockMobile3@2x.webp';
import ProcessImgMobile4 from '../../../assets/images/usabilityTestingPage/processBlock/img_processBlockMobile4@2x.webp';

export const usabilityProcessBlockContent = {
  title: 'Building branding scanner technology',
  subtitle: (
    <VRARContent>
      <MainTitle
        className="mx-[15px] !text-[20px] leading-[26px] max-w-[1080px]
        min-md:mx-0 min-md:mb-[40px] min-md:!text-[24px] min-md:!leading-[35px]
         min-xxxl:!max-w-[1480px]"
      >
        Based on the insights from usability testing, our team set out to develop a&nbsp;branding scanner technology.
      </MainTitle>
    </VRARContent>
  ),
  firstText: (
    <VRARContent>
      <ContentText
        marginAbsent
        tag="p"
        className="min-lg:max-w-[630px] min-xxxl:max-w-[710px] screen-md:p-[30px_15px_0]"
      >
        This technology analyzes a user&apos;s website and automatically generates a
        list of highly relevant templates based on specific data points.
      </ContentText>
    </VRARContent>
  ),
  secondText: (
    <div className=" ml-auto pb-[80px] min-lg:max-w-[630px] min-xxxl:max-w-[710px] screen-lg:pb-[60px]
     screen-md:p-[0_15px_40px]"
    >
      <ContentText
        marginAbsent
        tag="p"
        className="min-lg:max-w-[630px] min-xxxl:max-w-[710px]"
      >
        When a user adds their domain, the system scans the&nbsp;site and&nbsp;collects data on:
      </ContentText>
    </div>
  ),
};

const classNumber = 'min-w-[40px] screen-lg:min-w-[30px] screen-md:min-w-[25px]';
const classTitle = 'flex gap-3 min-md:gap-[22px] min-lg:gap-[30px]';
export const usabilityProcessBlockAccordionData: IProcessAccordionItem[] = [
  {
    id: 1,
    itemTitle: (
      <div className={classTitle}>
        <span className={classNumber}>01</span>
        <h3 className="unsetText">Accent color</h3>
      </div>
    ),
    contentText: (<>Identifying the dominant color on&nbsp;the user&apos;s website.</>),
    src: ProcessImgMobile1,
  },
  {
    id: 2,
    itemTitle: (
      <div className={classTitle}>
        <span className={classNumber}>02</span>
        <h3 className="unsetText">Font style</h3>
      </div>
    ),
    contentText: 'Recognizing the font used on the website.',
    src: ProcessImgMobile2,
  },
  {
    id: 3,
    itemTitle: (
      <div className={classTitle}>
        <span className={classNumber}>03</span>
        <h3 className="unsetText">Language</h3>
      </div>
    ),
    contentText: 'Determining the language of the website.',
    src: ProcessImgMobile3,
  },
  {
    id: 4,
    itemTitle: (
      <div className={classTitle}>
        <span className={classNumber}>04</span>
        <h3 className="unsetText">Industry of the site</h3>
      </div>
    ),
    contentText: 'Categorizing the website based on its industry or niche.',
    src: ProcessImgMobile4,
  },
];

export const usabilityProcessImagesData: IProcessImage[] = [
  {
    id: 1,
    src: ProcessImg1,
    srcBigDesk: ProcessImg1,
    srcTablet: ProcessImgTablet1,
  },
  {
    id: 2,
    src: ProcessImg2,
    srcBigDesk: ProcessImg2,
    srcTablet: ProcessImgTablet2,
  },
  {
    id: 3,
    src: ProcessImg3,
    srcBigDesk: ProcessImg3,
    srcTablet: ProcessImgTablet3,
  },
  {
    id: 4,
    src: ProcessImg4,
    srcBigDesk: ProcessImg4,
    srcTablet: ProcessImgTablet4,
  },
];
