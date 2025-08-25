import { IAccordionHorizontalData } from 'components/AccordionHorizontal/interfaces/IAccordionHorizontal';

import ServicesCooperateBlockImg1 from '@/images/services/img_cooperate_block1.webp';
import ServicesCooperateBlockImg2 from '@/images/services/img_cooperate_block2.webp';
import ServicesCooperateBlockImg3 from '@/images/services/img_cooperate_block3.webp';

const cooperateList: IAccordionHorizontalData[] = [
  {
    id: 1,
    number: '01',
    title: 'Developing effective teams',
    content: 'We take technology expertise as our top priority because only experts can complete complicated tasks '
        + 'and bring a final result promptly. This is why the Onix development cycle embraces the latest technologies '
        + 'and effective implementation methods. Also, our projects are always overseen by trained managers who stay '
        + 'in touch with customers and ensure our vision and development match your idea.',
    image: ServicesCooperateBlockImg1,
  },
  {
    id: 2,
    number: '02',
    title: 'Blending flexibility and experience',
    content: 'Our team professionally transforms unstructured ideas into easy-to-understand technical '
        + 'description documents, develops working prototypes to visualize the concept in detail, and searches '
        + 'for the best technology strategies and solutions. \n'
        + 'We aim to make the development process smooth and comprehensive for all parties involved.',
    image: ServicesCooperateBlockImg2,
  },
  {
    id: 3,
    number: '03',
    title: 'Ensuring smart collaboration',
    content: 'As a service provider, we guarantee high performance for our teams, custom software solutions, '
        + 'and attention to detail. All projects undergo a thorough assessment, specification development, '
        + 'implementation aligned with your business needs, and code maintenance and updates.',
    image: ServicesCooperateBlockImg3,
  },
];

export default cooperateList;
