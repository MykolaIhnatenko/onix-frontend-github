import PageLinks from 'constants/PageLinks';
import { IOurCaseStudiesData } from 'components/OurCaseStudies/interfaces/IOurCaseStudies';

import img_PhlexNew from '@/images/fitness/img_PhlexNew.webp';
import img_ProjectNew from '@/images/fitness/img_ProjectNew.webp';
import img_MiPaddleNew from '@/images/fitness/img_MiPaddleNew.webp';
import img_projectTablet from '@/images/fitness/img_projectTablet.webp';
import img_projectMobile from '@/images/fitness/img_projectMobile.webp';
import img_PhlexTablet from '@/images/fitness/img_PhlexTablet.webp';
import img_PhlexMobile from '@/images/fitness/img_PhlexMobile.webp';
import img_MiPaddleTablet from '@/images/fitness/img_MiPaddleTablet.webp';
import img_MiPaddleMobile from '@/images/fitness/img_MiPaddleMobile.webp';

const cardOurFitness: IOurCaseStudiesData[] = [
  {
    id: '01',
    title: 'Phlex',
    descLeft: 'UI/UX Design',
    descRight: 'Mobile development',
    images: {
      image: img_PhlexNew,
      imageTablet: img_PhlexTablet,
      imageMobile: img_PhlexMobile,
    },
    url: PageLinks.PHLEX_CASE_STUDY,
  },
  {
    id: '02',
    title: 'Progress 247',
    descLeft: 'UI/UX Design',
    descRight: 'Mobile development',
    images: {
      image: img_ProjectNew,
      imageTablet: img_projectTablet,
      imageMobile: img_projectMobile,
    },
    url: PageLinks.PROJECT_X_CASE_STUDY,
  },
  {
    id: '03',
    title: 'MiPaddle',
    descLeft: 'Mobile development',
    descRight: 'Web development',
    images: {
      image: img_MiPaddleNew,
      imageTablet: img_MiPaddleTablet,
      imageMobile: img_MiPaddleMobile,
    },
    url: PageLinks.MIPADDLE_CASE_STUDY,
  },
];

export default cardOurFitness;
