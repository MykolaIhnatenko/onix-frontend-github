import SolutionImage1 from '../../../../assets/images/caseStudiesPage/DigitalHealthcareCaseStudy/solutionsSection/img_solution1@2x.webp';
import SolutionImageTablet1 from '../../../../assets/images/caseStudiesPage/DigitalHealthcareCaseStudy/solutionsSection/img_solution-tablet1@2x.webp';
import SolutionImageMobile1 from '../../../../assets/images/caseStudiesPage/DigitalHealthcareCaseStudy/solutionsSection/img_solution-mobile1@2x.webp';
import SolutionImageMobile2 from '../../../../assets/images/caseStudiesPage/DigitalHealthcareCaseStudy/solutionsSection/img_solution-mobile2@2x.webp';
import SolutionImage3 from '../../../../assets/images/caseStudiesPage/DigitalHealthcareCaseStudy/solutionsSection/img_solution3@2x.webp';
import SolutionImageTablet3 from '../../../../assets/images/caseStudiesPage/DigitalHealthcareCaseStudy/solutionsSection/img_solution-tablet3@2x.webp';
import SolutionImageMobile3 from '../../../../assets/images/caseStudiesPage/DigitalHealthcareCaseStudy/solutionsSection/img_solution-mobile3@2x.webp';
import SolutionImage4 from '../../../../assets/images/caseStudiesPage/DigitalHealthcareCaseStudy/solutionsSection/img_solution4@2x.webp';
import SolutionImageTablet4 from '../../../../assets/images/caseStudiesPage/DigitalHealthcareCaseStudy/solutionsSection/img_solution-tablet4@2x.webp';
import SolutionImageMobile4 from '../../../../assets/images/caseStudiesPage/DigitalHealthcareCaseStudy/solutionsSection/img_solution-mobile4@2x.webp';
import SolutionImage5 from '../../../../assets/images/caseStudiesPage/DigitalHealthcareCaseStudy/solutionsSection/img_solution5@2x.webp';
import SolutionImageTablet5 from '../../../../assets/images/caseStudiesPage/DigitalHealthcareCaseStudy/solutionsSection/img_solution-tablet5@2x.webp';
import SolutionImageMobile5 from '../../../../assets/images/caseStudiesPage/DigitalHealthcareCaseStudy/solutionsSection/img_solution-mobile5@2x.webp';
import { ITabData } from 'components/TabsBlock/interfaces/ITab';

const solutionsContent: ITabData[] = [
  {
    id: 1,
    title: 'Platform',
    text: `From the first days of working on the digital health solution, it became clear that to make
      it successful in the market, we needed to develop effective platform architecture that would guarantee
      an ability to scale the product on demand, a smooth platform operation, and a pleasant user experience.`,
    imgMobile: SolutionImageMobile1,
    imgTablet: SolutionImageTablet1,
    img: SolutionImage1,
  },
  {
    id: 2,
    title: 'White-label solution',
    text: `The primary killer solution was the project's business architecture which allowed us to adjust the
      white-label self-management healthcare app to the company's branding (logos, colors, etc.)
      and customize it for their needs.`,
    imgMobile: SolutionImageMobile2,
    imgTablet: SolutionImageMobile2,
    img: SolutionImageMobile2,
    video: '/static/video/gather-group-video.mp4',
  },
  {
    id: 3,
    title: 'Super admin dashboard',
    text: `Thanks to a specially designed algorithm, members contact others who’ve experienced similar treatment
      paths, suffer similar side effects, or have similar worries and concerns.`,
    imgMobile: SolutionImageMobile3,
    imgTablet: SolutionImageTablet3,
    img: SolutionImage3,
  },
  {
    id: 4,
    title: 'Questionnaires',
    text: `Questionnaires allow users to define which help they need to provide. According to it, the pool of
      tasks is created and distributed via the Task Manager, which is the app's core.`,
    imgMobile: SolutionImageMobile4,
    imgTablet: SolutionImageTablet4,
    img: SolutionImage4,
  },
  {
    id: 5,
    title: 'Task management system',
    text: 'Flexible task management system allows creating/editing a task and taking one or a series of tasks.',
    imgMobile: SolutionImageMobile5,
    imgTablet: SolutionImageTablet5,
    img: SolutionImage5,
  },
];

export default solutionsContent;
