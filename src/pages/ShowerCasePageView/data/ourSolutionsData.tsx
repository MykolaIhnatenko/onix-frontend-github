import ShowerOurSolutionsImg1 from '@/images/shower/ourSolutions/img_ourSolutions1.webp';
import ShowerOurSolutionsImg2 from '@/images/shower/ourSolutions/img_ourSolutions2.webp';
import ShowerOurSolutionsImg3 from '@/images/shower/ourSolutions/img_ourSolutions3.webp';
import ShowerOurSolutionsImg4 from '@/images/shower/ourSolutions/img_ourSolutions4.webp';
import ShowerOurSolutionsImg5 from '@/images/shower/ourSolutions/img_ourSolutions5.webp';
import ShowerOurSolutionsImgTablet1 from '@/images/shower/ourSolutions/img_ourSolutionsTablet1.webp';
import ShowerOurSolutionsImgTablet2 from '@/images/shower/ourSolutions/img_ourSolutionsTablet2.webp';
import ShowerOurSolutionsImgTablet3 from '@/images/shower/ourSolutions/img_ourSolutionsTablet3.webp';
import ShowerOurSolutionsImgTablet4 from '@/images/shower/ourSolutions/img_ourSolutionsTablet4.webp';
import ShowerOurSolutionsImgTablet5 from '@/images/shower/ourSolutions/img_ourSolutionsTablet5.webp';
import ShowerOurSolutionsImgMobile1 from '@/images/shower/ourSolutions/img_ourSolutionsMobile1.webp';
import ShowerOurSolutionsImgMobile2 from '@/images/shower/ourSolutions/img_ourSolutionsMobile2.webp';
import ShowerOurSolutionsImgMobile3 from '@/images/shower/ourSolutions/img_ourSolutionsMobile3.webp';
import ShowerOurSolutionsImgMobile4 from '@/images/shower/ourSolutions/img_ourSolutionsMobile4.webp';
import ShowerOurSolutionsImgMobile5 from '@/images/shower/ourSolutions/img_ourSolutionsMobile5.webp';
import { IOurSolutionsData } from 'components/OurSolutions/interfaces/IOurSolutions';

const ourSolutionsData: IOurSolutionsData[] = [
  {
    title: 'Effective project management',
    id: 1,
    text: [
      'Managing customer projects is now easier since all data is available across all devices.',

      `Whether sales reps, back-office employees, or installation professionals engage in a customer
      project, all information is consistently available from consultation to installation.`,
    ],
    img: ShowerOurSolutionsImg1,
    imgTablet: ShowerOurSolutionsImgTablet1,
    imgMobile: ShowerOurSolutionsImgMobile1,
  },
  {
    title: 'Creating offers in real\u2011time',
    id: 2,
    text: [
      `Installers can configure a solution together with the customer on the Tablet App,
      demonstrating a variety of options. Price calculation is easy due to predefined packages
      and can be adjusted according to the situation.`,

      `Finally, the offer is created in real-time, compiling all data collected throughout the configuration process.
      The customer can directly confirm the offer on the tablet or receive it by email for review.`,
    ],
    img: ShowerOurSolutionsImg2,
    imgTablet: ShowerOurSolutionsImgTablet2,
    imgMobile: ShowerOurSolutionsImgMobile2,
  },
  {
    title: 'Ordering with a click',
    id: 3,
    text: [
      `Since all data of a specific customer project is already available digitally,
      Installers can order all DUSCHOLUX components for a customer project with a click.`,

      `The app automatically identifies the products that come from the installer’s stock.
      The delivery date is scheduled based on the installation date at the customer’s home.`,
    ],
    img: ShowerOurSolutionsImg3,
    imgTablet: ShowerOurSolutionsImgTablet3,
    imgMobile: ShowerOurSolutionsImgMobile3,
  },
  {
    title: 'Field service management',
    id: 4,
    text: [
      `360° Shower also supports installers managing the field service. A customer project
      can be assigned to an installation professional right in the app.`,

      `The professional receives a notification in the Smartphone App then and can
      prepare the service accordingly. In the case that installation support is required,
      installers can book a DUSCHOLUX service technician with the app.`,
    ],
    img: ShowerOurSolutionsImg4,
    imgTablet: ShowerOurSolutionsImgTablet4,
    imgMobile: ShowerOurSolutionsImgMobile4,
  },
  {
    title: 'Multimedia reporting feature for the installer',
    id: 5,
    text: [
      `To confirm the work is properly done, an installation professional
      must generate a report with photos and videos.`,

      `Moreover, installers can leave comments on the job. This feature allows all
      stakeholders to be aware of the work done and ensure its quality.`,
    ],
    img: ShowerOurSolutionsImg5,
    imgTablet: ShowerOurSolutionsImgTablet5,
    imgMobile: ShowerOurSolutionsImgMobile5,
  },
];

export default ourSolutionsData;
