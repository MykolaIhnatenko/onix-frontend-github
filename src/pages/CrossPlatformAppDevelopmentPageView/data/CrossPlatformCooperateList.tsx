import { IAccordionHorizontalData } from 'components/AccordionHorizontal/interfaces/IAccordionHorizontal';

import CrossPlatformCommunicationsImage from '@/images/crossplatformDesign/img_communication.webp';
import CrossPlatformTimeEfficiencyImage from '@/images/crossplatformDesign/img_time_and_cost_efficiency.webp';
import CrossPlatformCustomSolutionsImage from '@/images/crossplatformDesign/img_custom_solutions.webp';
import CrossPlatformExpertiseImage from '@/images/crossplatformDesign/img_expertise.webp';

const cooperateList: IAccordionHorizontalData[] = [
  {
    id: 1,
    number: '01',
    title: 'Expertise',
    content: 'We have deep knowledge and experience delivering numerous projects across different industries, '
    + 'showcasing our expertise in creating robust and scalable cross-platform applications.',
    image: CrossPlatformExpertiseImage,
  },
  {
    id: 2,
    number: '02',
    title: 'Custom solutions',
    content: 'We understand that every business has unique goals. That\'s why we offer tailored cross-platform '
    + 'development services to meet your specific needs. Our solutions are designed to align with your business '
    + 'goals and deliver the desired outcomes.',
    image: CrossPlatformCustomSolutionsImage,
  },
  {
    id: 3,
    number: '03',
    title: 'Time and cost efficiency',
    content: 'With a single codebase that can be shared across multiple platforms, we can streamline the '
    + 'development process and ensure faster time-to-market for your application.',
    image: CrossPlatformTimeEfficiencyImage,
  },
  {
    id: 4,
    number: '04',
    title: 'Transparent communication',
    content: 'Our team keeps you informed about the progress of your project, actively seeks your feedback, '
    + 'and addresses any concerns or questions you may have.',
    image: CrossPlatformCommunicationsImage,
  },
];

export default cooperateList;
