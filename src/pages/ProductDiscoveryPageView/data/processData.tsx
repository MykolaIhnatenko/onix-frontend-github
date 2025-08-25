import { IProcessImage, IProcessAccordionItem } from '../../MainPage/interfaces/IProcess';
import MainTitle from '../../../components/MainTitle/MainTitle';
import ContentText from '../../../components/ContentText/ContentText';

import PDPlanningImage from '@/images/productDiscovery/img_planning.webp';
import PDPlanningImageTablet from '@/images/productDiscovery/img_planning_tablet.webp';
import PDAnalysisImage from '@/images/productDiscovery/img_analysis.webp';
import PDAnalysisImageTablet from '@/images/productDiscovery/img_analysis_tablet.webp';
import PDFinalVisionImage from '@/images/productDiscovery/img_finalizing_product_vision.webp';
import PDFinalVisionImageTablet from '@/images/productDiscovery/img_finalizing_product_vision_tablet.webp';

export const processImages: IProcessImage[] = [
  {
    id: 1,
    src: PDPlanningImageTablet,
    srcTablet: PDPlanningImageTablet,
    srcBigDesk: PDPlanningImage,
  },
  {
    id: 2,
    src: PDAnalysisImageTablet,
    srcTablet: PDAnalysisImageTablet,
    srcBigDesk: PDAnalysisImage,
  },
  {
    id: 3,
    src: PDFinalVisionImageTablet,
    srcTablet: PDFinalVisionImageTablet,
    srcBigDesk: PDFinalVisionImage,
  },
];

const classNumber = 'min-w-[35px] screen-xl:min-w-[30px] screen-md:min-w-[25px]';
const classTitle = 'flex gap-3 min-md:gap-[22px] min-xl:gap-[52px]';
export const processAccordionData: IProcessAccordionItem[] = [
  {
    id: 1,
    itemTitle: (
      <div className={classTitle}>
        <span className={classNumber}>01</span>
        <h3>Planning (2-3 days)</h3>
      </div>
    ),
    contentText: 'We start by analyzing requirements and creating a further discovery plan.',
    content: [
      'Elicit high-level requirements',
      'If the product is not built from scratch, we clarify the reasons for changing the existing '
       + 'solution and analyze customer feedback, content, technology stack, and feature set',
      'Review the customers’ internal documents, existing market surveys, user interviews, etc.',
      'Conduct competitors’ research',
      'Prepare a detailed plan for the discovery implementation',
    ],
    src: PDPlanningImage,
  },
  {
    id: 2,
    itemTitle: (
      <div className={classTitle}>
        <span className={classNumber}>02</span>
        <h3>Analysis (7-10 days)</h3>
      </div>
    ),
    contentText: 'We dive deeply into the client\'s business to define a clear product vision, '
    + 'set priorities, and determine success criteria.',
    content: [
      'Define functional decomposition',
      'Elaborate and set priorities',
      'Study the target market and define a user persona.',
      'Create user journeys',
      'Analyze functional requirements of architecture',
      'Design initial architecture vision',
      'Create user screen flows',
    ],
    src: PDAnalysisImage,
  },
  {
    id: 3,
    itemTitle: (
      <div className={classTitle}>
        <span className={classNumber}>03</span>
        <h3>
          Finalizing product vision
          {' '}
          <span className="inline_block">(10-15 days)</span>
        </h3>
      </div>
    ),
    contentText: 'Our experts finalize product vision, prepare a possible project implementation '
    + 'roadmap, and calculate recommended development costs.',
    content: [
      'Define the most suitable architecture for the product',
      'Choose the optimal technology stack and define the level of automation and CI/CD pipeline',
      'Build a prototype of MVP with the essential modules and features (if needed)',
      'Validate all assumptions and hypotheses from the business analysis, user experience, and IT '
      + 'architecture perspectives',
      'Shape the solution’s final scope',
      'Develop a project roadmap',
      'Estimate the project timeline and budget needed to implement the idea into an MVP or a full-fledged product',
    ],
    src: PDFinalVisionImage,
  },
];

export const processBlockContent = {
  subtitle: (
    <MainTitle
      className="px-[15px] mb-[40px] max-w-[499px] normal-case min-md:px-0"
    >
      How Onix conducts Project&nbsp;Discovery
    </MainTitle>
  ),
  text: (
    <>
      <ContentText
        marginAbsent
        tag="p"
        className="px-[15px] pb-[20px] min-md:px-0 max-w-[555px] min-xl:pb-0 min-xxxl:max-w-[710px]"
      >
        Depending on your specific project’s requirements, complexity, and scope, the product discovery services
        can run from one to several weeks.
      </ContentText>
      <ContentText
        marginAbsent
        tag="p"
        className="min-lg:!ml-auto pb-[40px] max-w-[555px]
         min-xxxl:max-w-[710px] screen-md:p-[0_15px_40px] min-lg:pb-[100px]"
      >
        During this period, our specialists collect the necessary information to produce the deliverables essential
        to subsequent software development stages. The software product discovery services are billed according to
        the time & material pricing model.
      </ContentText>
    </>
  ),
};
