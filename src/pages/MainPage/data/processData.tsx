import { IProcessImage, IProcessAccordionItem } from '../interfaces/IProcess';
import MainTitle from '../../../components/MainTitle/MainTitle';
import ProcessImgWebp1 from '@/images/mainPage/processBlock/img_1@2x.webp';
import ProcessImgWebp2 from '@/images/mainPage/processBlock/img_2@2x.webp';
import ProcessImgWebp3 from '@/images/mainPage/processBlock/img_3@2x.webp';
import ProcessImgWebp4 from '@/images/mainPage/processBlock/img_4@2x.webp';
import ProcessImgWebp5 from '@/images/mainPage/processBlock/img_5@2x.webp';
import ProcessImgWebp6 from '@/images/mainPage/processBlock/img_6@2x.webp';
import ProcessImgTabletWebp1 from '@/images/mainPage/processBlock/img_tablet_1@2x.webp';
import ProcessImgTabletWebp2 from '@/images/mainPage/processBlock/img_tablet_2@2x.webp';
import ProcessImgTabletWebp3 from '@/images/mainPage/processBlock/img_tablet_3@2x.webp';
import ProcessImgTabletWebp4 from '@/images/mainPage/processBlock/img_tablet_4@2x.webp';
import ProcessImgTabletWebp5 from '@/images/mainPage/processBlock/img_tablet_5@2x.webp';
import ProcessImgTabletWebp6 from '@/images/mainPage/processBlock/img_tablet_6@2x.webp';
import ProcessImgMobileWebp1 from '@/images/mainPage/processBlock/img_mobile_1@2x.webp';
import ProcessImgMobileWebp2 from '@/images/mainPage/processBlock/img_mobile_2@2x.webp';
import ProcessImgMobileWebp3 from '@/images/mainPage/processBlock/img_mobile_3@2x.webp';
import ProcessImgMobileWebp4 from '@/images/mainPage/processBlock/img_mobile_4@2x.webp';
import ProcessImgMobileWebp5 from '@/images/mainPage/processBlock/img_mobile_5@2x.webp';
import ProcessImgMobileWebp6 from '@/images/mainPage/processBlock/img_mobile_6@2x.webp';
import ProcessImgXXXLWebp1 from '@/images/mainPage/processBlock/img_xxxl_1@2x.webp';
import ProcessImgXXXLWebp2 from '@/images/mainPage/processBlock/img_xxxl_2@2x.webp';
import ProcessImgXXXLWebp3 from '@/images/mainPage/processBlock/img_xxxl_3@2x.webp';
import ProcessImgXXXLWebp4 from '@/images/mainPage/processBlock/img_xxxl_4@2x.webp';
import ProcessImgXXXLWebp5 from '@/images/mainPage/processBlock/img_xxxl_5@2x.webp';
import ProcessImgXXXLWebp6 from '@/images/mainPage/processBlock/img_xxxl_6@2x.webp';

export const processImages: IProcessImage[] = [
  {
    id: 1,
    src: ProcessImgWebp1,
    srcTablet: ProcessImgTabletWebp1,
    srcBigDesk: ProcessImgXXXLWebp1,
  },
  {
    id: 2,
    src: ProcessImgWebp2,
    srcTablet: ProcessImgTabletWebp2,
    srcBigDesk: ProcessImgXXXLWebp2,
  },
  {
    id: 3,
    src: ProcessImgWebp3,
    srcTablet: ProcessImgTabletWebp3,
    srcBigDesk: ProcessImgXXXLWebp3,
  },
  {
    id: 4,
    src: ProcessImgWebp4,
    srcTablet: ProcessImgTabletWebp4,
    srcBigDesk: ProcessImgXXXLWebp4,
  },
  {
    id: 5,
    src: ProcessImgWebp5,
    srcTablet: ProcessImgTabletWebp5,
    srcBigDesk: ProcessImgXXXLWebp5,
  },
  {
    id: 6,
    src: ProcessImgWebp6,
    srcTablet: ProcessImgTabletWebp6,
    srcBigDesk: ProcessImgXXXLWebp6,
  },
];

const classNumber = 'min-w-[35px] screen-xl:min-w-[30px] screen-md:min-w-[25px]';
const classTitle = 'flex gap-3 min-md:gap-[22px] min-xl:gap-[52px]';
export const processAccordionData: IProcessAccordionItem[] = [
  {
    id: 1,
    itemTitle: (
      <div className={classTitle}>
        <span className={classNumber}>01</span>
        <h3 className="unsetText">Planning</h3>
      </div>
    ),
    content: ['Business goals analysis', 'Creating a project’s roadmap', 'Determining the strategy',
      'Planning and scheduling'],
    src: ProcessImgMobileWebp1,
  },
  {
    id: 2,
    itemTitle: (
      <div className={classTitle}>
        <span className={classNumber}>02</span>
        <h3 className="unsetText">Analysis</h3>
      </div>
    ),
    content: ['Generating ideas and concepts', 'Lean Inception', 'Choosing a development methodology',
      'Selecting a team', 'Conducting the project\'s audit', 'Developing a user journey',
      'Planning features development', 'Preparing a timeline'],
    src: ProcessImgMobileWebp2,
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
    src: ProcessImgMobileWebp3,
  },
  {
    id: 4,
    itemTitle: (
      <div className={classTitle}>
        <span className={classNumber}>04</span>
        <h3 className="unsetText">Development</h3>
      </div>
    ),
    content: ['Ensuring transparency in accordance with the Agile approach',
      'Delivering software based on iteration requirements'],
    src: ProcessImgMobileWebp4,
  },
  {
    id: 5,
    itemTitle: (
      <div className={classTitle}>
        <span className={classNumber}>05</span>
        <h3 className="unsetText">Testing</h3>
      </div>
    ),
    content: ['Defining quality goals',
      'Preparing a list of steps to take to provide your end customers with the best experience',
      'Conducting QA testing'],
    src: ProcessImgMobileWebp5,
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
    src: ProcessImgMobileWebp6,
  },
];

export const processBlockContent = {
  title: '[ Our software development process ]',
  subtitle: (
    <MainTitle
      className="px-[15px] mb-[40px] normal-case min-md:px-0 min-md:mb-[60px] min-lg:max-w-[1033px] min-lg:mb-[40px]"
    >
      Our software development model is fully transparent and efficient since we use the agile approach to
      manage the development process.
    </MainTitle>
  ),
};
