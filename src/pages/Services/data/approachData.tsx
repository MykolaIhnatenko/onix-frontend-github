import { IApproachData } from '../interfaces/IApproachImgBlock';

import ServicesApproach1Tablet from '@/images/services/img_approach1_tablet@2x.webp';
import ServicesApproach2Tablet from '@/images/services/img_approach2_tablet@2x.webp';
import ServicesApproach1 from '@/images/services/img_approach1@2x.webp';
import ServicesApproach2 from '@/images/services/img_approach2@2x.webp';
import ServicesApproach2Mobile from '@/images/services/img_approach2_mobile@2x.webp';
import ServicesApproach1Mobile from '@/images/services/img_approach1_mobile@2x.webp';

const approachData: IApproachData[] = [
  {
    id: 1,
    imgMobile: ServicesApproach1Mobile,
    imgTablet: ServicesApproach1Tablet,
    img: ServicesApproach1,
    variant: 'first',
    imgText: 'The agile process',
    textTop: 'Our development service model is fully transparent and efficient. '
        + 'To keep the development processes in teams under control and ensure customer satisfaction, '
        + 'we use both an agile and waterfall approach.',
    textBottom: 'The agile approach is more flexible and allows you as a customer to be directly and '
        + 'constantly involved in the development cycle, receive feedback from your team after each sprint, '
        + 'make changes to the requirements or add new features during any stage of the development process, '
        + 'and effectively and quickly handle such changes. As a result, you create a strong collaboration with '
        + 'your team and a better understanding of each development stage.',
  },
  {
    id: 2,
    imgMobile: ServicesApproach2Mobile,
    imgTablet: ServicesApproach2Tablet,
    img: ServicesApproach2,
    imgText: 'The waterfall process',
    variant: 'last',
    textTop: 'In the case of a waterfall methodology, customers '
        + 'define their project requirements at the beginning of a development process. As a result, the deadline and '
        + 'budget for the project are also determined at the start. The customer receives software produced according '
        + 'to previously discussed requirements and customer development vision.',
    textBottom: 'Our custom software development company competently builds solutions for all types of web '
        + 'and mobile projects, including e-commerce, social media, business automation platforms, education, '
        + 'finances, media and entertainment, traveling, and mobile app games. After the launch, we provide '
        + 'maintenance assistance and readily address any changes and updates to improve the performance of '
        + 'a website or mobile application.',
  },
];

export default approachData;
