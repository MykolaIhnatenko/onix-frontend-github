import { IAccordionHorizontalData } from 'components/AccordionHorizontal/interfaces/IAccordionHorizontal';

import WebflowCooperateImg1 from '@/images/webflowPage/cooperateBlock/img_cooperate_img_1.webp';
import WebflowCooperateImg2 from '@/images/webflowPage/cooperateBlock/img_cooperate_img_2.webp';
import WebflowCooperateImg3 from '@/images/webflowPage/cooperateBlock/img_cooperate_img_3.webp';
import WebflowCooperateImg4 from '@/images/webflowPage/cooperateBlock/img_cooperate_img_4.webp';

const webflowCooperateList: IAccordionHorizontalData[] = [
  {
    id: 1,
    number: '01',
    title: 'Expertise and experience',
    content: 'We have a highly skilled Webflow designer team with extensive experience in creating '
      + 'unique websites. We understand the ins and outs of the Webflow platform and utilize it to '
      + 'its fullest potential.',
    image: WebflowCooperateImg1,
  },
  {
    id: 2,
    number: '02',
    title: 'Customized solutions',
    content: 'We believe in crafting unique and tailored solutions for our clients. Our approach '
      + 'involves understanding your specific requirements, brand identity, and target audience '
      + 'to deliver a website that reflects your vision and achieves your business goals.',
    image: WebflowCooperateImg2,
  },
  {
    id: 3,
    number: '03',
    title: 'Efficient project management',
    content: 'We follow a well-structured project management process to ensure the timely delivery'
      + ' of your website. We maintain transparent communication, provide regular updates, '
      + 'and collaborate closely with you throughout the project to meet your expectations.',
    image: WebflowCooperateImg3,
  },
  {
    id: 4,
    number: '04',
    title: 'Customer satisfaction',
    content: 'At Onix, customer satisfaction is our top priority. We go the extra mile to ensure '
      + 'that you are delighted with the outcome of your website. Our dedicated team is committed '
      + 'to providing exceptional customer service and support throughout the process.',
    image: WebflowCooperateImg4,
  },
];

export default webflowCooperateList;
