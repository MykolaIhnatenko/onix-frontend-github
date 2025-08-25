import { IAccordionHorizontalData } from 'components/AccordionHorizontal/interfaces/IAccordionHorizontal';

import StaffAugmentation from '@/images/mainPage/img_staffAugmentation@2x.webp';
import DedicatedTeam from '@/images/mainPage/img_dedicatedTeam@2x.webp';
import TmOurly from '@/images/mainPage/img_tmOurly@2x.webp';
import FixPrice from '@/images/mainPage/img_fixedPrice@2x.webp';
import FullProcessDevelopment from '@/images/mainPage/img_fullProcessDevelopment@2x.webp';

const cooperateList: IAccordionHorizontalData[] = [
  {
    id: 1,
    number: '01',
    title: 'Staff Augmentation',
    content: 'If you need the expertise of one or several professionals, \n'
        + 'Onix will assign an overseas team with the required set of skills.'
        + ' Our experts proficiently support your projects on an ongoing basis '
        + 'together with your already existing team.',
    image: StaffAugmentation,
  },
  {
    id: 2,
    number: '02',
    title: 'Dedicated Team',
    content: 'Hire an allocated group of remote employees who work exclusively on your project.'
        + ' You can fully rely on experts'
        + ' to fully manage your project. We form a dedicated team of experts '
        + 'hand‑picked specifically for your business goals and requirements.',
    image: DedicatedTeam,
  },
  {
    id: 3,
    number: '03',
    title: 'T&M (Hourly)',
    content: 'You can turn to us with a new idea and immediately start joint development.'
        + ' When working within this model, you pay for the hours worked by the development'
        + ' team and the materials spent on a project.',
    image: TmOurly,
  },
  {
    id: 4,
    number: '04',
    title: 'Fixed Price',
    content: 'Our specialists will provide accurate time and budget estimates based on your detailed'
        + ' requirements and project scope. As long as the project scope remains the same,'
        + ' the price will stay the same. We guarantee our end-to-end workflow is complete within'
        + ' the determined deadlines.',
    image: FixPrice,
  },
  {
    id: 5,
    number: '05',
    title: 'Full-process software development',
    content: 'The Onix team executes your project from A to Z according to your'
        + ' requirements and within the approved budget. We provide developers,'
        + ' designers, QA specialists, and other tech experts who professionally '
        + 'transform your ideas into \n'
        + 'a viable product.',
    image: FullProcessDevelopment,
  },
];

export default cooperateList;
