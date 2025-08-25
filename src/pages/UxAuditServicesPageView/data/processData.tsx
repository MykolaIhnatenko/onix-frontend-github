import { IProcessImage, IProcessAccordionItem } from '../../MainPage/interfaces/IProcess';
import MainTitle from '../../../components/MainTitle/MainTitle';

import ImplementationSupportImage from '@/images/uxAudit/img_implementation_support.webp';
import ImplementationSupportTabletImage from '@/images/uxAudit/img_implementation_support_tablet.webp';
import ImplementationSupportMobileImage from '@/images/uxAudit/img_implementation_support_mobile.webp';
import RecommendationImage from '@/images/uxAudit/img_recomendations.webp';
import RecommendationTabletImage from '@/images/uxAudit/img_recomendations_tablet.webp';
import RecommendationMobileImage from '@/images/uxAudit/img_recomendations_mobile.webp';
import AnalysisImage from '@/images/uxAudit/img_analysis.webp';
import AnalysisTabletImage from '@/images/uxAudit/img_analysis_tablet.webp';
import AnalysisMobileImage from '@/images/uxAudit/img_analysis_mobile.webp';
import DiscoveryImage from '@/images/uxAudit/img_discovery.webp';
import DiscoveryTabletImage from '@/images/uxAudit/img_discovery_tablet.webp';
import DiscoveryMobileImage from '@/images/uxAudit/img_discovery_mobile.webp';
import EvaluationImage from '@/images/uxAudit/img_evaluation.webp';
import EvaluationTabletImage from '@/images/uxAudit/img_evaluation_tablet.webp';
import EvaluationMobileImage from '@/images/uxAudit/img_evaluation_mobile.webp';

export const processImages: IProcessImage[] = [
  {
    id: 1,
    src: DiscoveryImage,
    srcTablet: DiscoveryTabletImage,
    srcBigDesk: DiscoveryImage,
  },
  {
    id: 2,
    src: EvaluationImage,
    srcTablet: EvaluationTabletImage,
    srcBigDesk: EvaluationImage,
  },
  {
    id: 3,
    src: AnalysisImage,
    srcTablet: AnalysisTabletImage,
    srcBigDesk: AnalysisImage,
  },
  {
    id: 4,
    src: RecommendationImage,
    srcTablet: RecommendationTabletImage,
    srcBigDesk: RecommendationImage,
  },
  {
    id: 5,
    src: ImplementationSupportImage,
    srcTablet: ImplementationSupportTabletImage,
    srcBigDesk: ImplementationSupportImage,
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
        <h3 className="unsetText">Discovery</h3>
      </div>
    ),
    contentText: 'Our team researches the site\'s target audience, goals, and objectives to understand '
      + 'the companies needs better.',
    content: ['Kickoff meeting notes', 'Stakeholder interview transcripts', 'User personas',
      'User journey map'],
    src: DiscoveryMobileImage,
  },
  {
    id: 2,
    itemTitle: (
      <div className={classTitle}>
        <span className={classNumber}>02</span>
        <h3 className="unsetText">Evaluation</h3>
      </div>
    ),
    contentText: 'We perform a thorough evaluation of the site\'s usability, accessibility, and overall '
      + 'user engagement using a variety of evaluation methods, such as usability testing and content analysis.',
    content: ['Usability testing report', 'Accessibility audit report', 'Heuristic evaluation report'],
    src: EvaluationMobileImage,
  },
  {
    id: 3,
    itemTitle: (
      <div className={classTitle}>
        <span className={classNumber}>03</span>
        <h3 className="unsetText">Analysis</h3>
      </div>
    ),
    contentText: 'Our team analyzes the data collected in the evaluation phase and identifies areas of '
      + 'improvement in the site\'s user experience.',
    content: ['Design audit summary report', 'Wireframes or mockups', 'User feedback analysis report'],
    src: AnalysisMobileImage,
  },
  {
    id: 4,
    itemTitle: (
      <div className={classTitle}>
        <span className={classNumber}>04</span>
        <h3 className="unsetText">Recommendations</h3>
      </div>
    ),
    contentText: 'Based on our analysis, we provide detailed recommendations for improving the site\'s user '
      + 'experience, including actionable steps that can be taken to implement these changes.',
    content: ['Actionable list of recommendations',
      'Design roadmap', 'Design strategy document'],
    src: RecommendationMobileImage,
  },
  {
    id: 5,
    itemTitle: (
      <div className={classTitle}>
        <span className={classNumber}>05</span>
        <h3 className="unsetText">Implementation support</h3>
      </div>
    ),
    contentText: 'We offer ongoing support to ensure the successful implementation of our recommendations '
      + 'and can even assist with design and development if needed.',
    content: ['Presentation deck',
      'Executive summary report', 'Detailed design audit', 'Roadmap report'],
    src: ImplementationSupportMobileImage,
  },
];

export const processBlockContent = {
  title: '[ Our UX Audit Process ]',
  subtitle: (
    <MainTitle
      className="px-[15px] mb-[40px] normal-case min-md:px-0 min-md:mb-[60px] min-lg:max-w-[1033px] min-lg:mb-[40px]"
    >
      Onix Design Audit & UX Audit Services Team follows a 5-step process to conduct a
      UX audit and provide actionable recommendations for improvement:
    </MainTitle>
  ),
};
