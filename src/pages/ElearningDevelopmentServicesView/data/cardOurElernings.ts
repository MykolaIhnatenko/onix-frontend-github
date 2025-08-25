import { IOurCaseStudiesData } from '../../../components/OurCaseStudies/interfaces/IOurCaseStudies';
import PageLinks from '../../../constants/PageLinks';

import img_LearningPool from '@/images/elernings/img_LearningPool.webp';
import img_LearningPoolTablet from '@/images/elernings/img_LearningPoolTablet.webp';
import img_LearningPoolMobile from '@/images/elernings/img_LearningPoolMobile.webp';
import img_Edplus from '@/images/elernings/img_Edplus.webp';
import img_EdplusTablet from '@/images/elernings/img_EdplusTablet.webp';
import img_EdplusMobile from '@/images/elernings/img_EdplusMobile.webp';
import img_MiPaddleLearn from '@/images/elernings/img_MiPaddle.webp';
import img_MiPaddleTabletLearn from '@/images/elernings/img_MiPaddleTablet.webp';
import img_MiPaddleMobileLearn from '@/images/elernings/img_MiPaddleMobile.webp';

const cardOurElernings: IOurCaseStudiesData[] = [
  {
    id: '01',
    title: 'Learning Pool',
    descLeft: 'LMS development',
    descRight: 'Web development',
    images: {
      image: img_LearningPool,
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
      image: img_Edplus,
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
      image: img_MiPaddleLearn,
      imageTablet: img_MiPaddleTabletLearn,
      imageMobile: img_MiPaddleMobileLearn,
    },
    url: PageLinks.MIPADDLE_CASE_STUDY,
  },
];

export default cardOurElernings;
