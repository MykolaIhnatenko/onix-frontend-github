import OurSolutionsImg1 from '@/images/lstmNewsCategorizerPage/ourSolutions/img_ourSolutions1@2x.webp';
import OurSolutionsImg2 from '@/images/lstmNewsCategorizerPage/ourSolutions/img_ourSolutions2@2x.webp';
import OurSolutionsImg3 from '@/images/lstmNewsCategorizerPage/ourSolutions/img_ourSolutions3@2x.webp';
import OurSolutionsImg4 from '@/images/lstmNewsCategorizerPage/ourSolutions/img_ourSolutions4@2x.webp';
import OurSolutionsImg5 from '@/images/lstmNewsCategorizerPage/ourSolutions/img_ourSolutions5@2x.webp';
import OurSolutionsImgTablet1 from '@/images/lstmNewsCategorizerPage/ourSolutions/img_ourSolutionsTablet1@2x.webp';
import OurSolutionsImgTablet2 from '@/images/lstmNewsCategorizerPage/ourSolutions/img_ourSolutionsTablet2@2x.webp';
import OurSolutionsImgTablet3 from '@/images/lstmNewsCategorizerPage/ourSolutions/img_ourSolutionsTablet3@2x.webp';
import OurSolutionsImgTablet4 from '@/images/lstmNewsCategorizerPage/ourSolutions/img_ourSolutionsTablet4@2x.webp';
import OurSolutionsImgTablet5 from '@/images/lstmNewsCategorizerPage/ourSolutions/img_ourSolutionsTablet5@2x.webp';
import OurSolutionsImgMobile1 from '@/images/lstmNewsCategorizerPage/ourSolutions/img_ourSolutionsMobile1@2x.webp';
import OurSolutionsImgMobile2 from '@/images/lstmNewsCategorizerPage/ourSolutions/img_ourSolutionsMobile2@2x.webp';
import OurSolutionsImgMobile3 from '@/images/lstmNewsCategorizerPage/ourSolutions/img_ourSolutionsMobile3@2x.webp';
import OurSolutionsImgMobile4 from '@/images/lstmNewsCategorizerPage/ourSolutions/img_ourSolutionsMobile4@2x.webp';
import OurSolutionsImgMobile5 from '@/images/lstmNewsCategorizerPage/ourSolutions/img_ourSolutionsMobile5@2x.webp';
import { IOurSolutionsData } from 'components/OurSolutions/interfaces/IOurSolutions';

const lstmOurSolutionsData: IOurSolutionsData[] = [
  {
    id: 1,
    title: 'Innovative news categorization with LSTM models',
    text: [
      `Our team developed LSTM models using Python to categorize news articles effectively. LSTM, a cutting-edge neural 
      network architecture, was chosen for its capacity to grasp long-term relationships in data sequences, making it 
      ideal for understanding and categorizing news content.`,
      `The models were trained to classify news into ten predefined topics, optimizing the user experience by organizing
      information based on themes such as World, Health, Business, and more. The successful integration of LSTM models 
      elevated the platform's accuracy, resulting in precise news categorization and enhanced user engagement.`,
    ],
    img: OurSolutionsImg1,
    imgTablet: OurSolutionsImgTablet1,
    imgMobile: OurSolutionsImgMobile1,
  },
  {
    id: 2,
    title: 'Language detector',
    text: [
      `This feature seamlessly recognizes the language of each news article, providing the ability to sort and organize 
      the news according to the detected language.`,
      `The language detector significantly enhances the versatility of the news aggregator, ensuring that users can 
      effortlessly access news in their preferred languages. This feature optimizes the user experience by offering 
      language-based sorting options, making news consumption even more personalized and accessible.`,
    ],
    img: OurSolutionsImg2,
    imgTablet: OurSolutionsImgTablet2,
    imgMobile: OurSolutionsImgMobile2,
  },
  {
    id: 3,
    title: 'Creating a robust database',
    text: [
      `Building a robust system to collect news articles from diverse sources, process them through the ML models for 
      categorization, and securely store the information in a database. This involved seamless integration with various 
      APIs and services to ensure an extensive news source pool.`,
    ],
    img: OurSolutionsImg3,
    imgTablet: OurSolutionsImgTablet3,
    imgMobile: OurSolutionsImgMobile3,
  },
  {
    id: 4,
    title: 'Intuitive and visually appealing user interface',
    text: `The Onix team developed a webview-based interface accessible on Android and iOS apps, ensuring a delightful
      user experience. The frontend allowed users to view the latest categorized news, customize their preferences,
      and filter news by category and source.`,
    img: OurSolutionsImg4,
    imgTablet: OurSolutionsImgTablet4,
    imgMobile: OurSolutionsImgMobile4,
  },
  {
    id: 5,
    title: 'Integration with client\'s services',
    text: `Integration with the client's existing services was a critical component. The team seamlessly integrated the
      news aggregator with the client's infrastructure, ensuring a cohesive user journey and enabling user
      identification within the app.`,
    img: OurSolutionsImg5,
    imgTablet: OurSolutionsImgTablet5,
    imgMobile: OurSolutionsImgMobile5,
  },
];

export default lstmOurSolutionsData;
