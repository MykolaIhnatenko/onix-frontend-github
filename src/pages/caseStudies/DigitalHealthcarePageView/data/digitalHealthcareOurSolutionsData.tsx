import OurSolutionsImg1 from '../../../../assets/images/caseStudiesPage/DigitalHealthcareCaseStudy/ourSolutions/img_ourSolutions1@2x.webp';
import OurSolutionsImg2 from '../../../../assets/images/caseStudiesPage/DigitalHealthcareCaseStudy/ourSolutions/img_ourSolutions2@2x.webp';
import OurSolutionsImgTablet1 from '../../../../assets/images/caseStudiesPage/DigitalHealthcareCaseStudy/ourSolutions/img_ourSolutionsTablet1@2x.webp';
import OurSolutionsImgTablet2 from '../../../../assets/images/caseStudiesPage/DigitalHealthcareCaseStudy/ourSolutions/img_ourSolutionsTablet2@2x.webp';
import OurSolutionsImgMobile1 from '../../../../assets/images/caseStudiesPage/DigitalHealthcareCaseStudy/ourSolutions/img_ourSolutionsMobile1@2x.webp';
import OurSolutionsImgMobile2 from '../../../../assets/images/caseStudiesPage/DigitalHealthcareCaseStudy/ourSolutions/img_ourSolutionsMobile2@2x.webp';
import { IOurSolutionsData } from 'components/OurSolutions/interfaces/IOurSolutions';

const digitalHealthcareOurSolutionsData: IOurSolutionsData[] = [
  {
    id: 1,
    title: '10 different versions',
    text: `The team worked through 10 different versions of the Home page and performed user and UX testing,
      trying out every possibility and combination to make UX simple, understandable, and functional.`,
    img: OurSolutionsImg1,
    imgTablet: OurSolutionsImgTablet1,
    imgMobile: OurSolutionsImgMobile1,
  },
  {
    id: 2,
    title: 'Task creation process',
    text: `Flow of creating/managing a task or a series of tasks is highly flexible, so users can create
      tasks quickly and pick almost any possible options for dates and timing.`,
    img: OurSolutionsImg2,
    imgTablet: OurSolutionsImgTablet2,
    imgMobile: OurSolutionsImgMobile2,
  },
];

export default digitalHealthcareOurSolutionsData;
