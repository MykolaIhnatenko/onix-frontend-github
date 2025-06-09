import ContentText from '../../../components/ContentText/ContentText';
import MainTitle from '../../../components/MainTitle/MainTitle';
import { IProcessAccordionItem, IProcessImage } from '../../MainPage/interfaces/IProcess';
import ImgXXXLWebp1 from '@/images/mainPage/processBlock/img_xxxl_1@2x.webp';
import ImgXXXLWebp2 from '@/images/mainPage/processBlock/img_xxxl_2@2x.webp';
import ImgXXXLWebp3 from '@/images/mainPage/processBlock/img_xxxl_3@2x.webp';
import ImgXXXLWebp4 from '@/images/mainPage/processBlock/img_xxxl_4@2x.webp';
import ImgXXXLWebp5 from '@/images/mainPage/processBlock/img_xxxl_5@2x.webp';
import ImgXXXLWebp6 from '@/images/mainPage/processBlock/img_xxxl_6@2x.webp';
import ImgWebp1 from '@/images/mainPage/processBlock/img_1@2x.webp';
import ImgWebp2 from '@/images/mainPage/processBlock/img_2@2x.webp';
import ImgWebp3 from '@/images/mainPage/processBlock/img_3@2x.webp';
import ImgWebp4 from '@/images/mainPage/processBlock/img_4@2x.webp';
import ImgWebp5 from '@/images/mainPage/processBlock/img_5@2x.webp';
import ImgWebp6 from '@/images/mainPage/processBlock/img_6@2x.webp';
import ImgMobileWebp1 from '@/images/mainPage/processBlock/img_mobile_1@2x.webp';
import ImgMobileWebp2 from '@/images/mainPage/processBlock/img_mobile_2@2x.webp';
import ImgMobileWebp3 from '@/images/mainPage/processBlock/img_mobile_3@2x.webp';
import ImgMobileWebp4 from '@/images/mainPage/processBlock/img_mobile_4@2x.webp';
import ImgMobileWebp5 from '@/images/mainPage/processBlock/img_mobile_5@2x.webp';
import ImgMobileWebp6 from '@/images/mainPage/processBlock/img_mobile_6@2x.webp';
import ImgTabletWebp1 from '@/images/mainPage/processBlock/img_tablet_1@2x.webp';
import ImgTabletWebp2 from '@/images/mainPage/processBlock/img_tablet_2@2x.webp';
import ImgTabletWebp3 from '@/images/mainPage/processBlock/img_tablet_3@2x.webp';
import ImgTabletWebp4 from '@/images/mainPage/processBlock/img_tablet_4@2x.webp';
import ImgTabletWebp5 from '@/images/mainPage/processBlock/img_tablet_5@2x.webp';
import ImgTabletWebp6 from '@/images/mainPage/processBlock/img_tablet_6@2x.webp';

export const androidProcessImages: IProcessImage[] = [
  {
    id: 1,
    src: ImgWebp1,
    srcTablet: ImgTabletWebp1,
    srcBigDesk: ImgXXXLWebp1,
  },
  {
    id: 2,
    src: ImgWebp2,
    srcTablet: ImgTabletWebp2,
    srcBigDesk: ImgXXXLWebp2,
  },
  {
    id: 3,
    src: ImgWebp3,
    srcTablet: ImgTabletWebp3,
    srcBigDesk: ImgXXXLWebp3,
  },
  {
    id: 4,
    src: ImgWebp4,
    srcTablet: ImgTabletWebp4,
    srcBigDesk: ImgXXXLWebp4,
  },
  {
    id: 5,
    src: ImgWebp5,
    srcTablet: ImgTabletWebp5,
    srcBigDesk: ImgXXXLWebp5,
  },
  {
    id: 6,
    src: ImgWebp6,
    srcTablet: ImgTabletWebp6,
    srcBigDesk: ImgXXXLWebp6,
  },
];
const classNumber = 'min-w-[35px] screen-xl:min-w-[30px] screen-md:min-w-[25px]';
const classTitle = 'flex gap-3 min-md:gap-[22px] min-xl:gap-[52px]';

export const androidProcessAccordionData: IProcessAccordionItem[] = [
  {
    id: 1,
    itemTitle: (
      <div className={classTitle}>
        <span className={classNumber}>01</span>
        <h3 className="unsetText">Planning</h3>
      </div>
    ),
    content: ['Business goals analysis', 'Creating a project\'s roadmap', 'Determining the strategy',
      'Planning and scheduling'],
    src: ImgMobileWebp1,
  },
  {
    id: 2,
    itemTitle: (
      <div className={classTitle}>
        <span className={classNumber}>02</span>
        <h3 className="unsetText">Analysis</h3>
      </div>
    ),
    content: ['Generating ideas and concepts', 'Choosing a development methodology',
      'Selecting a team', 'Developing a user journey',
      'Planning features development', 'Preparing a timeline'],
    src: ImgMobileWebp2,
  },
  {
    id: 3,
    itemTitle: (
      <div className={classTitle}>
        <span className={classNumber}>03</span>
        <h3 className="unsetText">UI/UX Design</h3>
      </div>
    ),
    content: ['Creating prototypes', 'Facilitating the workflows', 'Managing complex data',
      'Meeting end-users\' needs', 'Creating user flow'],
    src: ImgMobileWebp3,
  },
  {
    id: 4,
    itemTitle: (
      <div className={classTitle}>
        <span className={classNumber}>04</span>
        <h3 className="unsetText">Development</h3>
      </div>
    ),
    content: ['Delivering software based on iteration requirements'],
    src: ImgMobileWebp4,
  },
  {
    id: 5,
    itemTitle: (
      <div className={classTitle}>
        <span className={classNumber}>05</span>
        <h3 className="unsetText">Testing</h3>
      </div>
    ),
    content: ['Conducting QA testing', 'Preparing the final iteration for product release'],
    src: ImgMobileWebp5,
  },
  {
    id: 6,
    itemTitle: (
      <div className={classTitle}>
        <span className={classNumber}>06</span>
        <h3 className="unsetText">Product launch + Maintenance</h3>
      </div>
    ),
    content: ['Preparing the final iteration for product release', 'Release to production',
      'Product upgrade based on real users’ feedback, app performance, and changing market requirements'],
    src: ImgMobileWebp6,
  },
];

export const androidProcessBlockContent = {
  title: '[ Our software development process ]',
  subtitle: (
    <MainTitle
      className="px-[15px] mb-[40px] normal-case min-md:px-0 min-md:mb-[60px] min-lg:max-w-[1033px] min-lg:mb-[40px]"
    >
      Our Android app development process
    </MainTitle>
  ),
  firstText: (
    <ContentText
      marginAbsent
      tag="p"
      className="pb-[40px] min-lg:max-w-[630px] min-xxxl:max-w-[710px] screen-lg:pb-[20px] screen-md:p-[0_15px]"
    >
      Our software development model is fully transparent and
      efficient since we use the agile approach to manage the
      development process.
    </ContentText>
  ),
  secondText: (
    <div className="ml-auto pb-[80px] min-lg:max-w-[630px] min-xxxl:max-w-[710px] screen-md:p-[0_15px_40px]">
      <ContentText
        marginAbsent
        tag="p"
        className="min-lg:max-w-[630px] min-xxxl:max-w-[710px]"
      >
        While you are concentrating on the different aspects of
        your business, we are behind the scene professionally
        delivering our Android app development services.
      </ContentText>
    </div>
  ),
};
