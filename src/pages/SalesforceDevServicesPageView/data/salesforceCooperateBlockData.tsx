import CooperateBlock1 from '@/images/salesforcePage/cooperateBlock/img_cooperateBlock1@2x.webp';
import CooperateBlock2 from '@/images/salesforcePage/cooperateBlock/img_cooperateBlock2@2x.webp';
import CooperateBlock3 from '@/images/salesforcePage/cooperateBlock/img_cooperateBlock3@2x.webp';
import CooperateBlock4 from '@/images/salesforcePage/cooperateBlock/img_cooperateBlock4@2x.webp';
import CooperateBlock5 from '@/images/salesforcePage/cooperateBlock/img_cooperateBlock5@2x.webp';
import CooperateBlock6 from '@/images/salesforcePage/cooperateBlock/img_cooperateBlock6@2x.webp';
import { IAccordionHorizontalData } from 'components/AccordionHorizontal/interfaces/IAccordionHorizontal';

const salesforceCooperateBlockData: IAccordionHorizontalData[] = [
  {
    id: 1,
    number: '01',
    title: 'Application solution architecture',
    content: 'At Onix, we provide two options for our clients: creating a custom app architecture '
        + 'or integrating a Salesforce package for your existing app.',
    image: CooperateBlock1,
  },
  {
    id: 2,
    number: '02',
    title: 'Full-cycle Salesforce app development',
    content: 'Full-cycle Salesforce app development includes creating native ISV applications '
        + 'employing Lightning, Javascript, Visualforce, and APEX frameworks.',
    image: CooperateBlock2,
  },
  {
    id: 3,
    number: '03',
    title: 'Salesforce migration',
    content: 'Our experts help businesses migrate their data quickly and efficiently. These services '
        + 'include everything from migrating data into Salesforce using a custom integration to '
        + 'guiding businesses through the process of making changes to Salesforce itself to accommodate existing data.',
    image: CooperateBlock3,
  },
  {
    id: 4,
    number: '04',
    title: 'Post-Release Maintenance',
    content: 'We sign a maintenance agreement and keep supporting your application code after the release.',
    image: CooperateBlock4,
  },
  {
    id: 5,
    number: '05',
    title: 'Improving Existing SF Applications',
    content: 'Onix can audit your existing application and add the functionality that is required.',
    image: CooperateBlock5,
  },
  {
    id: 6,
    number: '06',
    title: 'Salesforce consulting',
    content: 'We offer a full range of Salesforce consulting services, from strategy and planning to '
        + 'implementation and customization.',
    image: CooperateBlock6,
  },
];

export default salesforceCooperateBlockData;
