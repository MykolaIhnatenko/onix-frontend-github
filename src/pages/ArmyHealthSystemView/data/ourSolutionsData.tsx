import { IOurSolutionsData } from 'components/OurSolutions/interfaces/IOurSolutions';

import OurSolutionsImg1 from '@/images/armyHealthSystems/ourSolutions/img_ourSolutions1.webp';
import OurSolutionsImg2 from '@/images/armyHealthSystems/ourSolutions/img_ourSolutions2.webp';
import OurSolutionsImg3 from '@/images/armyHealthSystems/ourSolutions/img_ourSolutions3.webp';
import OurSolutionsImg4 from '@/images/armyHealthSystems/ourSolutions/img_ourSolutions4.webp';
import OurSolutionsImg5 from '@/images/armyHealthSystems/ourSolutions/img_ourSolutions5.webp';
import OurSolutionsImgTablet1 from '@/images/armyHealthSystems/ourSolutions/img_ourSolutionsTablet1.webp';
import OurSolutionsImgTablet2 from '@/images/armyHealthSystems/ourSolutions/img_ourSolutionsTablet2.webp';
import OurSolutionsImgTablet3 from '@/images/armyHealthSystems/ourSolutions/img_ourSolutionsTablet3.webp';
import OurSolutionsImgTablet4 from '@/images/armyHealthSystems/ourSolutions/img_ourSolutionsTablet4.webp';
import OurSolutionsImgTablet5 from '@/images/armyHealthSystems/ourSolutions/img_ourSolutionsTablet5.webp';
import OurSolutionsImgMobile1 from '@/images/armyHealthSystems/ourSolutions/img_ourSolutionsMobile1.webp';
import OurSolutionsImgMobile2 from '@/images/armyHealthSystems/ourSolutions/img_ourSolutionsMobile2.webp';
import OurSolutionsImgMobile3 from '@/images/armyHealthSystems/ourSolutions/img_ourSolutionsMobile3.webp';
import OurSolutionsImgMobile4 from '@/images/armyHealthSystems/ourSolutions/img_ourSolutionsMobile4.webp';
import OurSolutionsImgMobile5 from '@/images/armyHealthSystems/ourSolutions/img_ourSolutionsMobile5.webp';

const styles = 'font-ibmPlexMono font-normal text-[18px]/[26px] screen-md:text-[16px]/[24px]';

const ourSolutionsData: IOurSolutionsData[] = [
  {
    title:
  <>
    Tablet-Optimized UI
    {' '}
    <br className="screen-lg:hidden min-xxxl:hidden" />
    {' '}
    for Military Use
  </>,
    id: 1,
    text: (
      <p className={styles}>
        The application is designed primarily for tablet users, ensuring touch-friendly navigation,
        offline mode, and quick data entry, crucial for field operations.
      </p>
    ),
    img: OurSolutionsImg1,
    imgTablet: OurSolutionsImgTablet1,
    imgMobile: OurSolutionsImgMobile1,
  },
  {
    title:
  <>
    Svelte-Based Frontend
    {' '}
    <br className="screen-lg:hidden  min-xxxl:hidden" />
    {' '}
    for Speed & Efficiency
  </>,
    id: 2,
    text: (
      <p className={styles}>
        Using Svelte, we created a lightweight, fast, and responsive interface that consumes
        minimal resources, making it ideal for low-bandwidth conditions.
      </p>
    ),
    img: OurSolutionsImg2,
    imgTablet: OurSolutionsImgTablet2,
    imgMobile: OurSolutionsImgMobile2,
  },
  {
    title: 'Real-Time Health Data Visualization',
    id: 3,
    text: (
      <p className={styles}>
        We integrated live progress-tracking dashboards for monitoring physical activity,
        dietary intake, and sleep patterns.
      </p>
    ),
    img: OurSolutionsImg3,
    imgTablet: OurSolutionsImgTablet3,
    imgMobile: OurSolutionsImgMobile3,
  },
  {
    title: 'Mind-Body Component for Stress & Fatigue Management',
    id: 4,
    text: (
      <p className={styles}>
        To support mental resilience in combat and training environments, we built a mood-tracking and
        stress assessment system, allowing soldiers to log stress levels and receive wellness recommendations.
      </p>
    ),
    img: OurSolutionsImg4,
    imgTablet: OurSolutionsImgTablet4,
    imgMobile: OurSolutionsImgMobile4,
  },
  {
    title: 'Future AI Integration for Predictive Health Analysis',
    id: 5,
    text: (
      <p className={styles}>
        The next health monitoring system development for military personnel phase
        includes integrating AI-driven analytics to:
        <span className="mt-[20px] flex flex-col screen-md:mt-[15px]">
          <span className="mb-[5px] flex">
            <span className="mr-[10px]">﹂</span>
            <span>Predict potential health issues based on collected data</span>
          </span>
          <span className="mb-[5px] flex">
            <span className="mr-[10px]">﹂</span>
            <span>Automate early alerts for fatigue, dehydration, or stress</span>
          </span>
          <span className="flex">
            <span className="mr-[10px]">﹂</span>
            <span>Optimize training regimens based on real-time performance insights</span>
          </span>
        </span>
      </p>
    ),
    img: OurSolutionsImg5,
    imgTablet: OurSolutionsImgTablet5,
    imgMobile: OurSolutionsImgMobile5,
  },
];

export default ourSolutionsData;
