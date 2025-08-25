import { IHoverAccordionItemData } from '../../../components/HoverAccordion/interfaces/IHoverAccordion';

import DevopsHoverAccordionImg1 from '@/images/devopsSolutionsPageView/hoverAccordion/img_hoverAccordion1.webp';
import DevopsHoverAccordionImg2 from '@/images/devopsSolutionsPageView/hoverAccordion/img_hoverAccordion2.webp';
import DevopsHoverAccordionImg3 from '@/images/devopsSolutionsPageView/hoverAccordion/img_hoverAccordion3.webp';
import DevopsHoverAccordionImg4 from '@/images/devopsSolutionsPageView/hoverAccordion/img_hoverAccordion4.webp';
import DevopsHoverAccordionImg5 from '@/images/devopsSolutionsPageView/hoverAccordion/img_hoverAccordion5.webp';

const devopsSolutionsHoverAccordionData: IHoverAccordionItemData[] = [
  {
    id: 1,
    image: DevopsHoverAccordionImg1,
    number: '01',
    title: 'DevOps as a Service',
  },
  {
    id: 2,
    image: DevopsHoverAccordionImg2,
    number: '02',
    title: 'Infrastructure as a Code',
  },
  {
    id: 3,
    image: DevopsHoverAccordionImg3,
    number: '03',
    title: 'DevOps Automation',
  },
  {
    id: 4,
    image: DevopsHoverAccordionImg4,
    number: '04',
    title: 'Release Management',
  },
  {
    id: 5,
    image: DevopsHoverAccordionImg5,
    number: '05',
    title: 'Infrastructure Monitoring',
  },
];

export default devopsSolutionsHoverAccordionData;
