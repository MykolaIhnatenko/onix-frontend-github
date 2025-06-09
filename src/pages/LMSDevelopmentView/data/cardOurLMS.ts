import MiPaddleLearn2x from '@/images/LMS/img_MiPaddleLearn2x.webp';
import LearningPool2x from '@/images/LMS/img_LearningPool2x.webp';
import Edplus2x from '@/images/LMS/img_Edplus2x.webp';
import img_MiPaddleMobileLearn from '@/images/elernings/img_MiPaddleMobile.webp';
import img_MiPaddleTabletLearn from '@/images/elernings/img_MiPaddleTablet.webp';
import img_EdplusMobile from '@/images/elernings/img_EdplusMobile.webp';
import img_EdplusTablet from '@/images/elernings/img_EdplusTablet.webp';
import img_LearningPoolTablet from '@/images/elernings/img_LearningPoolTablet.webp';
import img_LearningPoolMobile from '@/images/elernings/img_LearningPoolMobile.webp';
import PageLinks from 'constants/PageLinks';
import { IOurCaseStudiesData } from 'components/OurCaseStudies/interfaces/IOurCaseStudies';

const cardOurLMS: IOurCaseStudiesData[] = [
  {
    id: '01',
    title: 'Learning Pool',
    descLeft: 'LMS development',
    descRight: 'Web development',
    images: {
      image: LearningPool2x,
      imageTablet: img_LearningPoolTablet,
      imageMobile: img_LearningPoolMobile,
    },
    url: PageLinks.LEARNING_POOL,
  },
  {
    id: '02',
    title: 'Edplus',
    descLeft: 'eLearning',
    descRight: 'Android iOS development',
    images: {
      image: Edplus2x,
      imageTablet: img_EdplusTablet,
      imageMobile: img_EdplusMobile,
    },
    url: PageLinks.EDPLUS_STUDY_CASE,
  },
  {
    id: '03',
    title: 'MiPaddle',
    descLeft: 'Mobile development',
    descRight: 'Web development',
    images: {
      image: MiPaddleLearn2x,
      imageTablet: img_MiPaddleTabletLearn,
      imageMobile: img_MiPaddleMobileLearn,
    },
    url: PageLinks.MIPADDLE_CASE_STUDY,
  },
];

export default cardOurLMS;
