import MainTitle from '../../../components/MainTitle/MainTitle';
import { IProcessAccordionItem, IProcessImage } from '../../MainPage/interfaces/IProcess';
import ProcessHealthcareImgTablet1 from '@/images/healthcare/processBlock/img_processHealthcareImgTablet1@2x.webp';
import ProcessHealthcareImgTablet2 from '@/images/healthcare/processBlock/img_processHealthcareImgTablet2@2x.webp';
import ProcessHealthcareImgTablet3 from '@/images/healthcare/processBlock/img_processHealthcareImgTablet3@2x.webp';
import ProcessHealthcareImgTablet4 from '@/images/healthcare/processBlock/img_processHealthcareImgTablet4@2x.webp';
import ProcessHealthcareImgTablet5 from '@/images/healthcare/processBlock/img_processHealthcareImgTablet5@2x.webp';
import ProcessHealthcareImg1 from '@/images/healthcare/processBlock/img_processHealthcareImg1@2x.webp';
import ProcessHealthcareImg2 from '@/images/healthcare/processBlock/img_processHealthcareImg2@2x.webp';
import ProcessHealthcareImg3 from '@/images/healthcare/processBlock/img_processHealthcareImg3@2x.webp';
import ProcessHealthcareImg4 from '@/images/healthcare/processBlock/img_processHealthcareImg4@2x.webp';
import ProcessHealthcareImg5 from '@/images/healthcare/processBlock/img_processHealthcareImg5@2x.webp';

export const healthcareProcessImages: IProcessImage[] = [
  {
    id: 1,
    src: ProcessHealthcareImg1,
    srcTablet: ProcessHealthcareImgTablet1,
    srcBigDesk: ProcessHealthcareImg1,
  },
  {
    id: 2,
    src: ProcessHealthcareImg2,
    srcTablet: ProcessHealthcareImgTablet2,
    srcBigDesk: ProcessHealthcareImg2,
  },
  {
    id: 3,
    src: ProcessHealthcareImg3,
    srcTablet: ProcessHealthcareImgTablet3,
    srcBigDesk: ProcessHealthcareImg3,
  },
  {
    id: 4,
    src: ProcessHealthcareImg4,
    srcTablet: ProcessHealthcareImgTablet4,
    srcBigDesk: ProcessHealthcareImg4,
  },
  {
    id: 5,
    src: ProcessHealthcareImg5,
    srcTablet: ProcessHealthcareImgTablet5,
    srcBigDesk: ProcessHealthcareImg5,
  },
];
const classNumber = 'min-w-[35px] screen-xl:min-w-[30px] screen-md:min-w-[25px]';
const classTitle = 'flex gap-3 min-md:gap-[22px] min-xl:gap-[52px]';
export const healthcareProcessAccordionData: IProcessAccordionItem[] = [
  {
    id: 1,
    itemTitle: (
      <div className={classTitle}>
        <span className={classNumber}>01</span>
        <h3 className="unsetText">Planning & Analysis</h3>
      </div>
    ),
    contentText: '[ 2-4 weeks ]',
    content: ['Business goals analysis', 'Creating a project\'s roadmap', 'Determining the strategy',
      'Planning and scheduling', 'Generating ideas and concepts', 'Lean Inception',
      'Choosing a development methodology', 'Selecting a team', 'Conducting the project\'s audit',
      'Developing a user journey', 'Planning features development', 'Preparing a timeline'],
    src: ProcessHealthcareImg1,
  },
  {
    id: 2,
    itemTitle: (
      <div className={classTitle}>
        <span className={classNumber}>02</span>
        <h3 className="unsetText">UI/UX Design</h3>
      </div>
    ),
    contentText: '[ From 2 weeks ]',
    content: ['Creating prototypes', 'Facilitating the workflows', 'Managing complex data',
      'Meeting end-user\'s needs', 'Creating user flow'],
    src: ProcessHealthcareImg2,
  },
  {
    id: 3,
    itemTitle: (
      <div className={classTitle}>
        <span className={classNumber}>03</span>
        <h3 className="unsetText">Development</h3>
      </div>
    ),
    contentText: '[ From 1 month ]',
    content: ['Ensuring transparency following the Agile approach',
      'Delivering software based on iteration requirements'],
    src: ProcessHealthcareImg3,
  },
  {
    id: 4,
    itemTitle: (
      <div className={classTitle}>
        <span className={classNumber}>04</span>
        <h3 className="unsetText">Testing</h3>
      </div>
    ),
    contentText: '[ 30% of development time ]',
    content: ['Defining quality goals',
      'Preparing a list of steps to take to provide your end customers with the best experience',
      'Conducting QA testing'],
    src: ProcessHealthcareImg4,
  },
  {
    id: 5,
    itemTitle: (
      <div className={classTitle}>
        <span className={classNumber}>05</span>
        <h3 className="unsetText">Product Launch + Maintenance</h3>
      </div>
    ),
    contentText: '[ from 1 week ]',
    content: ['Preparing the final iteration for product public release', 'Release to production',
      'Product upgrade based on real users\' feedback, app performance, and changing market requirements'],
    src: ProcessHealthcareImg5,
  },
];

export const healthcareProcessBlockContent = {
  title: '[ Our Approach to Custom Healthcare Software Development ]',
  subtitle: (
    <MainTitle
      className="px-[15px] mb-[40px] normal-case min-md:px-0 min-md:mb-[60px] min-lg:max-w-[1033px] min-lg:mb-[40px]"
    >
      Here is what our healthcare software development process looks like:
    </MainTitle>
  ),
};
