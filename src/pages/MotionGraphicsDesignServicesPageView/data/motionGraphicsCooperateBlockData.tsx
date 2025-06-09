import MotionGraphicsCooperateBlockItem1 from '@/images/motionGraphics/cooperateBlock/img_1@2x.webp';
import MotionGraphicsCooperateBlockItem2 from '@/images/motionGraphics/cooperateBlock/img_2@2x.webp';
import MotionGraphicsCooperateBlockItem3 from '@/images/motionGraphics/cooperateBlock/img_3@2x.webp';
import MotionGraphicsCooperateBlockItem4 from '@/images/motionGraphics/cooperateBlock/img_4@2x.webp';
import { IAccordionHorizontalData } from 'components/AccordionHorizontal/interfaces/IAccordionHorizontal';

const motionGraphicsCooperateBlockData: IAccordionHorizontalData[] = [
  {
    id: 1,
    number: '01',
    title: 'Tailored solutions',
    content: 'We provide customized motion design services tailored to your specific business needs and '
      + 'goals. We work closely with you to ensure your motion graphics align with the company\'s '
      + 'branding and messaging.',
    image: MotionGraphicsCooperateBlockItem1,
  },
  {
    id: 2,
    number: '02',
    title: 'Creativity',
    content: 'We pride ourselves on our ability to deliver unique and captivating motion designs that effectively'
      + ' communicate your brand\'s message. We push the boundaries of creativity to ensure your visuals'
      + ' leave a lasting impression.',
    image: MotionGraphicsCooperateBlockItem2,
  },
  {
    id: 3,
    number: '03',
    title: 'Attention to detail',
    content: 'Onix is a motion graphics company that places a strong emphasis on attention to detail, ensuring'
      + ' that every aspect of our motion graphics is carefully crafted and polished.',
    image: MotionGraphicsCooperateBlockItem3,
  },
  {
    id: 4,
    number: '04',
    title: 'Openness and transparency',
    content: 'We work closely with you throughout the process, incorporating your feedback and ideas to create'
      + ' designs that truly represent your brand identity.',
    image: MotionGraphicsCooperateBlockItem4,
  },
];

export default motionGraphicsCooperateBlockData;
