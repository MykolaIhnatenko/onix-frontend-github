import Slide1 from '../../../assets/images/analyticsPlatform/Slide1.webp';
import Slide1Tablet from '../../../assets/images/analyticsPlatform/Slide1Tablet.webp';
import Slide1Mobile from '../../../assets/images/analyticsPlatform/Slide1Mobile.webp';
import Slide2 from '../../../assets/images/analyticsPlatform/Slide2.webp';
import Slide2Tablet from '../../../assets/images/analyticsPlatform/Slide2Tablet.webp';
import Slide2Mobile from '../../../assets/images/analyticsPlatform/Slide2Mobile.webp';
import Slide3 from '../../../assets/images/analyticsPlatform/Slide3.webp';
import Slide3Tablet from '../../../assets/images/analyticsPlatform/Slide3Tablet.webp';
import Slide3Mobile from '../../../assets/images/analyticsPlatform/Slide3Mobile.webp';
import Slide4 from '../../../assets/images/analyticsPlatform/Slide4.webp';
import Slide4Tablet from '../../../assets/images/analyticsPlatform/Slide4Tablet.webp';
import Slide4Mobile from '../../../assets/images/analyticsPlatform/Slide4Mobile.webp';
import Slide5 from '../../../assets/images/analyticsPlatform/Slide5.webp';
import Slide5Tablet from '../../../assets/images/analyticsPlatform/Slide5Tablet.webp';
import Slide5Mobile from '../../../assets/images/analyticsPlatform/Slide5Mobile.webp';
import { IOurSolutionsData } from 'components/OurSolutions/interfaces/IOurSolutions';

const KillerFeaturesData: { title: string, content: IOurSolutionsData[] } = {
  title: 'Our solutions',
  content: [
    {
      id: 1,
      text: [
        `Crafted an analytics platform from the ground up, specifically
          designed to meet the unique needs of various organizations.`,
        `Integrated advanced survey functionalities seamlessly with
        intuitive analytics tools for streamlined data analysis.`,
      ],
      img: Slide1,
      imgTablet: Slide1Tablet,
      imgMobile: Slide1Mobile,
    },
    {
      id: 2,
      text: [
        'Enhanced data processing workflows to ensure rapid generation of insightful dashboards and graphics.',
      ],
      img: Slide2,
      imgTablet: Slide2Tablet,
      imgMobile: Slide2Mobile,
    },
    {
      id: 3,
      text: [
        `Designed an intuitive user interface that simplifies survey-taking and data
        analysis processes for users of all technical levels.`,
        'Prioritized user experience to ensure ease of navigation and accessibility.',
      ],
      img: Slide3,
      imgTablet: Slide3Tablet,
      imgMobile: Slide3Mobile,
    },
    {

      id: 4,
      text: [
        `Implemented rigorous quality assurance protocols to maintain data accuracy
        and consistency throughout the platform.`,
        `Conducted thorough testing to identify and address any potential issues,
        ensuring reliable analytics insights.`,
      ],
      img: Slide4,
      imgTablet: Slide4Tablet,
      imgMobile: Slide4Mobile,
    },
    {
      id: 5,
      text: [
        `Engineered a scalable architecture capable of handling growing volumes of survey data and user traffic.
        Optimized platform performance to deliver fast and responsive analytics capabilities.`,
      ],
      img: Slide5,
      imgTablet: Slide5Tablet,
      imgMobile: Slide5Mobile,
    },
  ],
};

export default KillerFeaturesData;
