import { IAccordionHorizontalData } from 'components/AccordionHorizontal/interfaces/IAccordionHorizontal';

import SupportIndustries from '@/images/industriesPage/img_support_industries@2x.webp';
import DedicatedTeamIndustries from '@/images/industriesPage/img_dedicated_team_industries@2x.webp';
import ConsultingIndustries from '@/images/industriesPage/img_consulting_industries@2x.webp';
import CustomSoftvareDevIndustries from '@/images/industriesPage/img_custom_software_dev_industries@2x.webp';

const cooperateList: IAccordionHorizontalData[] = [
  {
    id: 1,
    number: '01',
    title: 'Custom software development',
    content: 'We offer custom software development services to build solid and high-performing solutions for '
        + 'your specific industry, regardless of the project\'s complexity and scale. We meet your unique goals, '
        + 'boost your business efficiency, and satisfy the needs of modern users.',
    image: CustomSoftvareDevIndustries,
  },
  {
    id: 2,
    number: '02',
    title: 'Dedicated team',
    content: 'We form a dedicated software development team that helps you deliver a high-quality software product '
        + 'and produce excellent results. You focus on your business growth while our specialists take care of all '
        + 'the project management hassle guaranteeing a smooth and transparent development process.',
    image: DedicatedTeamIndustries,
  },
  {
    id: 3,
    number: '03',
    title: 'Consulting and digital advisory',
    content: 'Not sure how to apply modern technologies to your business to start leveraging them? Our experts '
        + 'will gladly provide you with superb consulting and support services to demonstrate how this technology '
        + 'can be used in your specific type of industry.',
    image: ConsultingIndustries,
  },
  {
    id: 4,
    number: '04',
    title: 'Support and maintenance',
    content: 'After the development process is over, our team can help you with the product upgrading based on '
        + 'real users\' feedback, software performance, and changing needs or requirements. Or you can scale up the '
        + 'project if you are ready to go forward.',
    image: SupportIndustries,
  },
];

export default cooperateList;
