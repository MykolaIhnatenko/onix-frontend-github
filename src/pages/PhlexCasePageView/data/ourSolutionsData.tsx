import { IOurSolutionsData } from 'components/OurSolutions/interfaces/IOurSolutions';

import OurSolutionsImg1 from '@/images/phlexCase/ourSolutions/img_ourSolutions1.webp';
import OurSolutionsImg2 from '@/images/phlexCase/ourSolutions/img_ourSolutions2.webp';
import OurSolutionsImg3 from '@/images/phlexCase/ourSolutions/img_ourSolutions3.webp';
import OurSolutionsImg4 from '@/images/phlexCase/ourSolutions/img_ourSolutions4.webp';
import OurSolutionsImg5 from '@/images/phlexCase/ourSolutions/img_ourSolutions5.webp';
import OurSolutionsImg6 from '@/images/phlexCase/ourSolutions/img_ourSolutions6.webp';
import OurSolutionsImgTablet1 from '@/images/phlexCase/ourSolutions/img_ourSolutionsTablet1.webp';
import OurSolutionsImgTablet2 from '@/images/phlexCase/ourSolutions/img_ourSolutionsTablet2.webp';
import OurSolutionsImgTablet3 from '@/images/phlexCase/ourSolutions/img_ourSolutionsTablet3.webp';
import OurSolutionsImgTablet4 from '@/images/phlexCase/ourSolutions/img_ourSolutionsTablet4.webp';
import OurSolutionsImgTablet5 from '@/images/phlexCase/ourSolutions/img_ourSolutionsTablet5.webp';
import OurSolutionsImgTablet6 from '@/images/phlexCase/ourSolutions/img_ourSolutionsTablet6.webp';
import OurSolutionsImgMobile1 from '@/images/phlexCase/ourSolutions/img_ourSolutionsMobile1.webp';
import OurSolutionsImgMobile2 from '@/images/phlexCase/ourSolutions/img_ourSolutionsMobile2.webp';
import OurSolutionsImgMobile3 from '@/images/phlexCase/ourSolutions/img_ourSolutionsMobile3.webp';
import OurSolutionsImgMobile4 from '@/images/phlexCase/ourSolutions/img_ourSolutionsMobile4.webp';
import OurSolutionsImgMobile5 from '@/images/phlexCase/ourSolutions/img_ourSolutionsMobile5.webp';
import OurSolutionsImgMobile6 from '@/images/phlexCase/ourSolutions/img_ourSolutionsMobile6.webp';

const OurSolutionsData: IOurSolutionsData[] = [
  {
    id: 1,
    title: 'Swimming Training Data Collection & Analysis',
    text: [
      'Our experts enabled the app to gather and process users\' data about swimming training.',
      `The app now collects vital data like speed, stroke rate, and heart rate to track results and
       adjust the training process with a more data-driven approach.`,
    ],
    img: OurSolutionsImg1,
    imgTablet: OurSolutionsImgTablet1,
    imgMobile: OurSolutionsImgMobile1,
  },
  {
    id: 2,
    title: 'Seamless Data Syncing Between Wearables & Mobile App',
    text: `We ensured proper data syncing between watches and a mobile app that allows swimmers to monitor 
    and track their swimming technique and performance in a smart and convenient way.`,
    img: OurSolutionsImg2,
    imgTablet: OurSolutionsImgTablet2,
    imgMobile: OurSolutionsImgMobile2,
  },
  {
    id: 3,
    title: 'Accurate Stroke Technique Tracking',
    text: `Our team built accurate technique tracking that allows monitoring every detail of swimmers' 
    stroke during a workout to inform them about their improvements better.`,
    img: OurSolutionsImg3,
    imgTablet: OurSolutionsImgTablet3,
    imgMobile: OurSolutionsImgMobile3,
  },
  {
    id: 4,
    title: 'Advanced Timing & Performance Metrics',
    text: [
      'We implemented efficient timing tracking to improve swimmers’ awareness and fully understand their training.',
      'With scientifically validated accuracy, users can track such metrics as pace, interval, distance, and SWOLF.',
    ],
    img: OurSolutionsImg4,
    imgTablet: OurSolutionsImgTablet4,
    imgMobile: OurSolutionsImgMobile4,
  },
  {
    id: 5,
    title: 'Modern and solid onboarding process',
    text: [
      'Our designers refreshed the onboarding process and made it more up-to-date and uplifted.',
      `The onboarding process is a user's first impression of the app, so our designers faced the challenge 
      of reinforcing the app’s value and increasing the likelihood of its successful adoption.`,
    ],
    img: OurSolutionsImg5,
    imgTablet: OurSolutionsImgTablet5,
    imgMobile: OurSolutionsImgMobile5,
  },
  {
    id: 6,
    title: 'Simple and intuitive feed',
    text: [
      'Our specialists made an easy-to-use swimmer’s log of activities that shows swims in chronological order.',
      'We also provided access to users\' training history and the ability to view related stats.\n',
      `Moreover, we combined the tab of calendar activities with the swimming history to filter swims by
       date conveniently.`,
    ],
    img: OurSolutionsImg6,
    imgTablet: OurSolutionsImgTablet6,
    imgMobile: OurSolutionsImgMobile6,
  },
];

export default OurSolutionsData;
