import { IOurSolutionsData } from 'components/OurSolutions/interfaces/IOurSolutions';
import ItemList from 'components/ItemList/ItemList';

import OurSolutionsImg1 from '@/images/travelTail/ourSolutions/img_ourSolutions1@2x.webp';
import OurSolutionsImg2 from '@/images/travelTail/ourSolutions/img_ourSolutions2@2x.webp';
import OurSolutionsImg3 from '@/images/travelTail/ourSolutions/img_ourSolutions3@2x.webp';
import OurSolutionsImg4 from '@/images/travelTail/ourSolutions/img_ourSolutions4@2x.webp';
import OurSolutionsImg5 from '@/images/travelTail/ourSolutions/img_ourSolutions5@2x.webp';
import OurSolutionsImgTablet1 from '@/images/travelTail/ourSolutions/img_ourSolutions1Tablet@2x.webp';
import OurSolutionsImgTablet2 from '@/images/travelTail/ourSolutions/img_ourSolutions2Tablet@2x.webp';
import OurSolutionsImgTablet3 from '@/images/travelTail/ourSolutions/img_ourSolutions3Tablet@2x.webp';
import OurSolutionsImgTablet4 from '@/images/travelTail/ourSolutions/img_ourSolutions4Tablet@2x.webp';
import OurSolutionsImgTablet5 from '@/images/travelTail/ourSolutions/img_ourSolutions5Tablet@2x.webp';
import OurSolutionsImgMobile1 from '@/images/travelTail/ourSolutions/img_ourSolutions1Mobile@2x.webp';
import OurSolutionsImgMobile2 from '@/images/travelTail/ourSolutions/img_ourSolutions2Mobile@2x.webp';
import OurSolutionsImgMobile3 from '@/images/travelTail/ourSolutions/img_ourSolutions3Mobile@2x.webp';
import OurSolutionsImgMobile4 from '@/images/travelTail/ourSolutions/img_ourSolutions4Mobile@2x.webp';
import OurSolutionsImgMobile5 from '@/images/travelTail/ourSolutions/img_ourSolutions5Mobile@2x.webp';

const ourSolutionsData: IOurSolutionsData[] = [
  {
    id: 1,
    title: 'Detailed user flows',
    text: [
      `The Onix team crafted detailed user flows that serve as a comprehensive guide, providing an exhaustive
      visualization of the user experience from start to finish.`,
      `By outlining the various steps and interactions, our team has established a clear and intuitive roadmap,
      ensuring a seamless navigation experience on the TravelTail platform.`,
    ],
    img: OurSolutionsImg1,
    imgTablet: OurSolutionsImgTablet1,
    imgMobile: OurSolutionsImgMobile1,
  },
  {
    id: 2,
    title: 'High-fidelity wireframes and prototypes',
    text: [
      'Stunning high-fidelity wireframes visually represent the platform\'s aesthetic and functional aspects.',
      `We developed interactive prototypes to simulate user interactions, providing valuable insights into
      the flow and usability of the platform.`,
    ],
    img: OurSolutionsImg2,
    imgTablet: OurSolutionsImgTablet2,
    imgMobile: OurSolutionsImgMobile2,
  },
  {
    id: 3,
    title: 'Branding',
    text: (
      <ItemList
        listTitle={`The Onix designers created robust branding assets to establish a unique brand identity
          for TravelTail. This included:`}
        list={[
          'Logos. Designed to capture the spirit of adventure and companionship.',
          'Icons. Intuitively crafted symbols to elevate user comprehension and engagement.',
          'Typography. Thoughtfully selected fonts for readability and brand consistency.',
          'Color palette. Vibrant and pet-friendly colors create a visually appealing atmosphere.',
        ]}
        withAnimate
        marginBottomAbsent
      />
    ),
    img: OurSolutionsImg3,
    imgTablet: OurSolutionsImgTablet3,
    imgMobile: OurSolutionsImgMobile3,
  },
  {
    id: 4,
    title: 'Aesthetically appealing UI design',
    text: [
      `The UI design originated from existing page wireframes and adhered to established branding
      principles. The primary focus was elevating usability by prioritizing clarity, consistency,
      and simplicity. Careful consideration went into selecting visual elements, not only for their
      aesthetic appeal but also for their intuitive capacity to convey information.`,
      `The UI design functioned as a visual roadmap for developers, seamlessly aligning the visual and
      functional dimensions of the platform to ensure a cohesive and user-friendly experience.`,
    ],
    img: OurSolutionsImg4,
    imgTablet: OurSolutionsImgTablet4,
    imgMobile: OurSolutionsImgMobile4,
  },
  {
    id: 5,
    title: 'Comprehensive design style guide',
    text: [
      `The Onix team created an exhaustive design style guide to guarantee consistent visual representation
      across all platforms. This comprehensive guide detailed the proper use of logos, icons, and typography,
      providing clear guidelines for maintaining the designated color palette.`,
      `Additionally, it offered recommendations for fostering a cohesive brand identity, ensuring a unified
      and polished presentation that seamlessly resonates across various project elements.`,
    ],
    img: OurSolutionsImg5,
    imgTablet: OurSolutionsImgTablet5,
    imgMobile: OurSolutionsImgMobile5,
  },
];

export default ourSolutionsData;
