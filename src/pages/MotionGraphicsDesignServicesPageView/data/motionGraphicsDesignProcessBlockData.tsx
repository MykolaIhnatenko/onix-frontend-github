import MainTitle from '../../../components/MainTitle/MainTitle';
import { IProcessAccordionItem, IProcessImage } from '../../MainPage/interfaces/IProcess';
import MotionGraphicsProcessBlockItemXl1 from '@/images/motionGraphics/processBlock/img_xl_1@2x.webp';
import MotionGraphicsProcessBlockItemXl2 from '@/images/motionGraphics/processBlock/img_xl_2@2x.webp';
import MotionGraphicsProcessBlockItemXl3 from '@/images/motionGraphics/processBlock/img_xl_3@2x.webp';
import MotionGraphicsProcessBlockItemXl4 from '@/images/motionGraphics/processBlock/img_xl_4@2x.webp';
import MotionGraphicsProcessBlockItemXl5 from '@/images/motionGraphics/processBlock/img_xl_5@2x.webp';
import MotionGraphicsProcessBlockItemXl6 from '@/images/motionGraphics/processBlock/img_xl_6@2x.webp';
import MotionGraphicsProcessBlockItem1 from '@/images/motionGraphics/processBlock/img_1@2x.webp';
import MotionGraphicsProcessBlockItem2 from '@/images/motionGraphics/processBlock/img_2@2x.webp';
import MotionGraphicsProcessBlockItem3 from '@/images/motionGraphics/processBlock/img_3@2x.webp';
import MotionGraphicsProcessBlockItem4 from '@/images/motionGraphics/processBlock/img_4@2x.webp';
import MotionGraphicsProcessBlockItem5 from '@/images/motionGraphics/processBlock/img_5@2x.webp';
import MotionGraphicsProcessBlockItem6 from '@/images/motionGraphics/processBlock/img_6@2x.webp';
import MotionGraphicsProcessBlockItemTablets1 from '@/images/motionGraphics/processBlock/img_tablets_1@2x.webp';
import MotionGraphicsProcessBlockItemTablets2 from '@/images/motionGraphics/processBlock/img_tablets_2@2x.webp';
import MotionGraphicsProcessBlockItemTablets3 from '@/images/motionGraphics/processBlock/img_tablets_3@2x.webp';
import MotionGraphicsProcessBlockItemTablets4 from '@/images/motionGraphics/processBlock/img_tablets_4@2x.webp';
import MotionGraphicsProcessBlockItemTablets5 from '@/images/motionGraphics/processBlock/img_tablets_5@2x.webp';
import MotionGraphicsProcessBlockItemTablets6 from '@/images/motionGraphics/processBlock/img_tablets_6@2x.webp';

const classNumber = 'min-w-[35px] screen-xl:min-w-[30px] screen-md:min-w-[25px]';
const classTitle = 'flex gap-[10px] min-md:gap-[20px] min-xl:gap-[45px]';

const motionGraphicsDesignProcessBlockData: IProcessAccordionItem[] = [
  {
    id: 1,
    itemTitle: (
      <div className={classTitle}>
        <span className={classNumber}>01</span>
        <h3 className="unsetText">Project discovery</h3>
      </div>
    ),
    contentText: 'The first step in the process is to gather information about your business, target audience,'
      + ' and goals for the project. This includes discussing your brand\'s messaging, values, and aesthetics.',
    src: MotionGraphicsProcessBlockItem1,
  },
  {
    id: 2,
    itemTitle: (
      <div className={classTitle}>
        <span className={classNumber}>02</span>
        <h3 className="unsetText">Script development</h3>
      </div>
    ),
    contentText: 'Once the concept is finalized, we collaborate with the client on script writing to ensure'
      + ' that the messaging is aligned with the brand\'s values and goals. This includes style selection, '
      + 'reference gathering, mood board creation and approval.',
    src: MotionGraphicsProcessBlockItem2,
  },
  {
    id: 3,
    itemTitle: (
      <div className={classTitle}>
        <span className={classNumber}>03</span>
        <h3 className="unsetText">Design and animation</h3>
      </div>
    ),
    contentText: 'With the mood board approved, we begin creating the visual elements, including graphics, '
      + 'illustrations, typography, and other assets. Our skilled animators then bring these elements to '
      + 'life through motion, carefully crafting smooth transitions, engaging animations, and stunning effects.',
    src: MotionGraphicsProcessBlockItem3,
  },
  {
    id: 4,
    itemTitle: (
      <div className={classTitle}>
        <span className={classNumber}>04</span>
        <h3 className="unsetText">Review and feedback</h3>
      </div>
    ),
    contentText: 'We value your input throughout the design motion process. At various stages, you review the'
      + ' progress and provide feedback. This ensures we stay aligned with your expectations and make any'
      + ' necessary revisions to achieve the desired outcome.',
    src: MotionGraphicsProcessBlockItem4,
  },
  {
    id: 5,
    itemTitle: (
      <div className={classTitle}>
        <span className={classNumber}>05</span>
        <h3 className="unsetText">Polishing</h3>
      </div>
    ),
    contentText: 'Based on your feedback, we refine the design motion, paying attention to details, timing, and'
      + ' overall coherence. We aim to deliver a final product that exceeds your expectations and aligns'
      + ' perfectly with your brand\'s aesthetics and messaging.',
    src: MotionGraphicsProcessBlockItem5,
  },
  {
    id: 6,
    itemTitle: (
      <div className={classTitle}>
        <span className={classNumber}>06</span>
        <h3 className="unsetText">Final delivery</h3>
      </div>
    ),
    contentText: 'Once the motion design is complete and all revisions have been made, we deliver the files in the'
      + ' desired formats, optimized for various platforms and channels. We provide you with the necessary '
      + 'assets and guidelines to integrate motion graphics into the desired medium seamlessly.',
    src: MotionGraphicsProcessBlockItem6,
  },
];

export const motionGraphicsProcessBlockData: IProcessImage[] = [
  {
    id: 1,
    src: MotionGraphicsProcessBlockItem1,
    srcTablet: MotionGraphicsProcessBlockItemTablets1,
    srcBigDesk: MotionGraphicsProcessBlockItemXl1,
  },
  {
    id: 2,
    src: MotionGraphicsProcessBlockItem2,
    srcTablet: MotionGraphicsProcessBlockItemTablets2,
    srcBigDesk: MotionGraphicsProcessBlockItemXl2,
  },
  {
    id: 3,
    src: MotionGraphicsProcessBlockItem3,
    srcTablet: MotionGraphicsProcessBlockItemTablets3,
    srcBigDesk: MotionGraphicsProcessBlockItemXl3,
  },
  {
    id: 4,
    src: MotionGraphicsProcessBlockItem4,
    srcTablet: MotionGraphicsProcessBlockItemTablets4,
    srcBigDesk: MotionGraphicsProcessBlockItemXl4,
  },
  {
    id: 5,
    src: MotionGraphicsProcessBlockItem5,
    srcTablet: MotionGraphicsProcessBlockItemTablets5,
    srcBigDesk: MotionGraphicsProcessBlockItemXl5,
  },
  {
    id: 6,
    src: MotionGraphicsProcessBlockItem6,
    srcTablet: MotionGraphicsProcessBlockItemTablets6,
    srcBigDesk: MotionGraphicsProcessBlockItemXl6,
  },
];

export const motionGraphicsDesignProcessBlockTitle = '[ What our process looks like ]';
export const motionGraphicsDesignProcessBlockSubtitle = (
  <MainTitle
    className="px-[15px] mb-[40px] normal-case min-md:px-0 min-md:mb-[60px] min-lg:max-w-[1286px] min-lg:mb-[40px]"
  >
    Our design motion process is carefully crafted to ensure the delivery of high-quality
    and visually captivating motion graphics and animations.
  </MainTitle>
);

export default motionGraphicsDesignProcessBlockData;
