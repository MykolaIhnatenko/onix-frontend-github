import OurSolutionsImg1 from '../../../assets/images/misterBnB/ourSolutions/img_ourSolutions1.webp';
import OurSolutionsImg2 from '../../../assets/images/misterBnB/ourSolutions/img_ourSolutions2.webp';
import OurSolutionsImg3 from '../../../assets/images/misterBnB/ourSolutions/img_ourSolutions3.webp';
import OurSolutionsImg4 from '../../../assets/images/misterBnB/ourSolutions/img_ourSolutions4.webp';
import OurSolutionsImg5 from '../../../assets/images/misterBnB/ourSolutions/img_ourSolutions5.webp';
import OurSolutionsImgTablet1 from '../../../assets/images/misterBnB/ourSolutions/img_ourSolutionsTablet1.webp';
import OurSolutionsImgTablet2 from '../../../assets/images/misterBnB/ourSolutions/img_ourSolutionsTablet2.webp';
import OurSolutionsImgTablet3 from '../../../assets/images/misterBnB/ourSolutions/img_ourSolutionsTablet3.webp';
import OurSolutionsImgTablet4 from '../../../assets/images/misterBnB/ourSolutions/img_ourSolutionsTablet4.webp';
import OurSolutionsImgTablet5 from '../../../assets/images/misterBnB/ourSolutions/img_ourSolutionsTablet5.webp';
import OurSolutionsImgMobile1 from '../../../assets/images/misterBnB/ourSolutions/img_ourSolutionsMobile1.webp';
import OurSolutionsImgMobile2 from '../../../assets/images/misterBnB/ourSolutions/img_ourSolutionsMobile2.webp';
import OurSolutionsImgMobile3 from '../../../assets/images/misterBnB/ourSolutions/img_ourSolutionsMobile3.webp';
import OurSolutionsImgMobile4 from '../../../assets/images/misterBnB/ourSolutions/img_ourSolutionsMobile4.webp';
import OurSolutionsImgMobile5 from '../../../assets/images/misterBnB/ourSolutions/img_ourSolutionsMobile5.webp';
import { IOurSolutionsData } from 'components/OurSolutions/interfaces/IOurSolutions';

const contentData: IOurSolutionsData[] = [
  {
    id: 1,
    title: 'Enhanced search functionality',
    text: `Our specialists provided an improved search engine that allows quick search 
    within a 2M+ listings database using various filters.`,
    img: OurSolutionsImg1,
    imgTablet: OurSolutionsImgTablet1,
    imgMobile: OurSolutionsImgMobile1,
  },
  {
    id: 2,
    title: 'Technology stack upgrade',
    text: `We migrated from outdated technologies to more reliable ones. For the backend and front end, we used
     RoR and React. Using reliable technologies allowed us to guarantee high-quality app operation,
      enhance product capacity, and broaden functionality.`,
    img: OurSolutionsImg2,
    imgTablet: OurSolutionsImgTablet2,
    imgMobile: OurSolutionsImgMobile2,
  },
  {
    id: 3,
    title: 'Seamless integration with aggregators',
    text: 'Our team ensured proper integration with property listing aggregators and providers like Booking.com,'
      + ' Rentals United, Guesty, Ospita, and BookingSync. This allows our client to increase the listing\'s base'
      + ' and expand business opportunities significantly.',
    img: OurSolutionsImg3,
    imgTablet: OurSolutionsImgTablet3,
    imgMobile: OurSolutionsImgMobile3,
  },
  {
    id: 4,
    title: 'Fraud detection system',
    text: `We built a fraud detection system to detect illegitimate and high-risk financial activities such 
    as credit card transactions, theft, cyber hacking, and suspicious messages. This feature enabled us to 
    reveal scams in time, keep business and users' finances safe, and achieve high security.`,
    img: OurSolutionsImg4,
    imgTablet: OurSolutionsImgTablet4,
    imgMobile: OurSolutionsImgMobile4,
  },
  {
    id: 5,
    title: 'Secure payment integration',
    text: `The Onix team integrated the Stripe, Paypal, Payoneer, and Adyen payment systems, which allow
      users to accept payments and send payouts online securely. This feature automates the finance process
      and tracks payments within the platform.`,
    img: OurSolutionsImg5,
    imgTablet: OurSolutionsImgTablet5,
    imgMobile: OurSolutionsImgMobile5,
  },
];

export default contentData;
