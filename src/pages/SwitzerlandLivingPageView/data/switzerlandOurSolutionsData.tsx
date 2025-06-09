import OurSolutionsImg1 from '../../../assets/images/switzerlandLivingPageView/ourSolutions/img_ourSolutions1@2x.webp';
import OurSolutionsImg2 from '../../../assets/images/switzerlandLivingPageView/ourSolutions/img_ourSolutions2@2x.webp';
import OurSolutionsImg3 from '../../../assets/images/switzerlandLivingPageView/ourSolutions/img_ourSolutions3@2x.webp';
import OurSolutionsImg4 from '../../../assets/images/switzerlandLivingPageView/ourSolutions/img_ourSolutions4@2x.webp';
import OurSolutionsImgTablet1 from '../../../assets/images/switzerlandLivingPageView/ourSolutions/img_ourSolutionsTablet1@2x.webp';
import OurSolutionsImgTablet2 from '../../../assets/images/switzerlandLivingPageView/ourSolutions/img_ourSolutionsTablet2@2x.webp';
import OurSolutionsImgTablet3 from '../../../assets/images/switzerlandLivingPageView/ourSolutions/img_ourSolutionsTablet3@2x.webp';
import OurSolutionsImgTablet4 from '../../../assets/images/switzerlandLivingPageView/ourSolutions/img_ourSolutionsTablet4@2x.webp';
import OurSolutionsImgMobile1 from '../../../assets/images/switzerlandLivingPageView/ourSolutions/img_ourSolutionsMobile1@2x.webp';
import OurSolutionsImgMobile2 from '../../../assets/images/switzerlandLivingPageView/ourSolutions/img_ourSolutionsMobile2@2x.webp';
import OurSolutionsImgMobile3 from '../../../assets/images/switzerlandLivingPageView/ourSolutions/img_ourSolutionsMobile3@2x.webp';
import OurSolutionsImgMobile4 from '../../../assets/images/switzerlandLivingPageView/ourSolutions/img_ourSolutionsMobile4@2x.webp';
import { IOurSolutionsData } from 'components/OurSolutions/interfaces/IOurSolutions';

const switzerlandOurSolutionsData: IOurSolutionsData[] = [
  {
    id: 1,
    title: 'Data collection',
    text: [
      `We added data collection functionality which includes gathering user’s financial
      and\u00A0personal details.`,
      `The calculator involves such data as tax rates, health insurance rates, electricity
      prices, and\u00A0average rent prices in particular places of residence.`,
    ],
    img: OurSolutionsImg1,
    imgTablet: OurSolutionsImgTablet1,
    imgMobile: OurSolutionsImgMobile1,
  },
  {
    id: 2,
    title: 'Internal calculation mechanisms',
    text: [
      `We created complex algorithms to calculate the costs associated with the\u00A0different
      factors being compared.`,
      `This involved developing an\u00A0intuitive formula to adjust for factors such as inflation,
      taxes, and other expenses.`,
    ],
    img: OurSolutionsImg2,
    imgTablet: OurSolutionsImgTablet2,
    imgMobile: OurSolutionsImgMobile2,
  },
  {
    id: 3,
    title: 'User interface design',
    text: [
      'Creating a clean, user-friendly interface is key to making the\u00A0platform intuitive and easy to use.',
      `We designed user forms with easy readability and with well thought-out drop-downs to capture estimates
      of underlying input variables.`,
    ],
    img: OurSolutionsImg3,
    imgTablet: OurSolutionsImgTablet3,
    imgMobile: OurSolutionsImgMobile3,
  },
  {
    id: 4,
    title: 'Cross-referencing and validation',
    text: `We added cross-referencing with user data to ensure the\u00A0information provided is accurate
      while ensuring appropriate input consistency to validate the\u00A0accuracy of data.`,
    img: OurSolutionsImg4,
    imgTablet: OurSolutionsImgTablet4,
    imgMobile: OurSolutionsImgMobile4,
  },
];

export default switzerlandOurSolutionsData;
