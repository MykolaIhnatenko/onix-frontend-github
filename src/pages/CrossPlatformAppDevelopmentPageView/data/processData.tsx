import { IProcessImage, IProcessAccordionItem } from '../../MainPage/interfaces/IProcess';
import MainTitle from '../../../components/MainTitle/MainTitle';
import ContentText from '../../../components/ContentText/ContentText';

import CrossPlatformSupportMobileImage from '@/images/crossplatformDesign/img_support_mobile.webp';
import CrossPlatformSupportTabletImage from '@/images/crossplatformDesign/img_support_tablet.webp';
import CrossPlatformSupportImage from '@/images/crossplatformDesign/img_support.webp';
import CrossPlatformAnalysisImage from '@/images/crossplatformDesign/img_analysis.webp';
import CrossPlatformAnalysisTabletsImage from '@/images/crossplatformDesign/img_analysis_tablet.webp';
import CrossPlatformAnalysisMobileImage from '@/images/crossplatformDesign/img_analysis_mobile.webp';
import CrossPlatformTechnologySelectionImage from '@/images/crossplatformDesign/img_selection.webp';
import CrossPlatformTechnologySelectionTabletImage from '@/images/crossplatformDesign/img_selection_tablet.webp';
import CrossPlatformTechnologySelectionMobileImage from '@/images/crossplatformDesign/img_selection_mobile.webp';
import CrossPlatformDesignImage from '@/images/crossplatformDesign/img_design.webp';
import CrossPlatformDesignTabletImage from '@/images/crossplatformDesign/img_design_tablet.webp';
import CrossPlatformDesignMobileImage from '@/images/crossplatformDesign/img_design_mobile.webp';
import CrossPlatformDevelopmentImage from '@/images/crossplatformDesign/img_development.webp';
import CrossPlatformDevelopmentTabletImage from '@/images/crossplatformDesign/img_development_tablet.webp';
import CrossPlatformDevelopmentMobileImage from '@/images/crossplatformDesign/img_development_mobile.webp';
import CrossPlatformDeploymentImage from '@/images/crossplatformDesign/img_deployment.webp';
import CrossPlatformDeploymentTabletImage from '@/images/crossplatformDesign/img_deployment_tablet.webp';
import CrossPlatformDeploymentMobileImage from '@/images/crossplatformDesign/img_deployment_mobile.webp';

export const processImages: IProcessImage[] = [
  {
    id: 1,
    src: CrossPlatformAnalysisImage,
    srcTablet: CrossPlatformAnalysisTabletsImage,
    srcBigDesk: CrossPlatformAnalysisImage,
  },
  {
    id: 2,
    src: CrossPlatformTechnologySelectionImage,
    srcTablet: CrossPlatformTechnologySelectionTabletImage,
    srcBigDesk: CrossPlatformTechnologySelectionImage,
  },
  {
    id: 3,
    src: CrossPlatformDesignImage,
    srcTablet: CrossPlatformDesignTabletImage,
    srcBigDesk: CrossPlatformDesignImage,
  },
  {
    id: 4,
    src: CrossPlatformDevelopmentImage,
    srcTablet: CrossPlatformDevelopmentTabletImage,
    srcBigDesk: CrossPlatformDevelopmentImage,
  },
  {
    id: 5,
    src: CrossPlatformDeploymentImage,
    srcTablet: CrossPlatformDeploymentTabletImage,
    srcBigDesk: CrossPlatformDeploymentImage,
  },
  {
    id: 6,
    src: CrossPlatformSupportImage,
    srcTablet: CrossPlatformSupportTabletImage,
    srcBigDesk: CrossPlatformSupportImage,
  },
];

const classNumber = 'min-w-[35px] screen-xl:min-w-[30px] screen-md:min-w-[25px]';
const classTitle = 'flex gap-3 min-md:gap-[22px] min-xl:gap-[52px] ';
export const processAccordionData: IProcessAccordionItem[] = [
  {
    id: 1,
    itemTitle: (
      <div className={classTitle}>
        <span className={classNumber}>01</span>
        <h3 className="unsetText">Requirement analysis</h3>
      </div>
    ),
    contentText: 'We start by understanding your business goals, target audience, '
      + 'and project requirements. Our team collaborates closely with you to gather all the necessary '
      + 'information and define the scope of the project.',
    src: CrossPlatformAnalysisMobileImage,
  },
  {
    id: 2,
    itemTitle: (
      <div className={classTitle}>
        <span className={classNumber}>02</span>
        <h3 className="unsetText">Technology selection</h3>
      </div>
    ),
    contentText: 'We rely on the availability of the necessary SDK for the platform and requirements for using '
    + 'native modules primarily. Based on the project requirements, we select the most suitable cross-platform '
    + 'framework, such as React Native or Flutter. We consider factors like performance, scalability, and the '
    + 'specific needs of your application.',
    src: CrossPlatformTechnologySelectionMobileImage,
  },
  {
    id: 3,
    itemTitle: (
      <div className={classTitle}>
        <span className={classNumber}>03</span>
        <h3 className="unsetText">UI/UX design</h3>
      </div>
    ),
    contentText: 'Our talented designers create intuitive and visually appealing user interfaces that align with '
    + 'your brand identity and provide an exceptional user experience. We focus on creating designs that are consistent'
    + ' across platforms and devices.',
    src: CrossPlatformDesignMobileImage,
  },
  {
    id: 4,
    itemTitle: (
      <div className={classTitle}>
        <span className={classNumber}>04</span>
        <h3 className="unsetText">Development and testing</h3>
      </div>
    ),
    contentText: 'Our experienced developers leverage the chosen cross-platform framework to write clean and reusable '
    + 'code. We follow industry best practices and perform rigorous testing at each stage to ensure the application '
    + 'functions flawlessly on various platforms.',
    src: CrossPlatformDevelopmentMobileImage,
  },
  {
    id: 5,
    itemTitle: (
      <div className={classTitle}>
        <span className={classNumber}>05</span>
        <h3 className="unsetText">Deployment and launch</h3>
      </div>
    ),
    contentText: 'We strive to ensure simultaneous release everywhere. Once the development and testing phases are '
    + 'complete, we assist with deploying your cross-platform application to the respective app stores. We ensure a '
    + 'smooth and successful launch, handling all the necessary configurations and preparations.',
    src: CrossPlatformDeploymentMobileImage,
  },
  {
    id: 6,
    itemTitle: (
      <div className={classTitle}>
        <span className={classNumber}>06</span>
        <h3 className="unsetText">Maintenance and support</h3>
      </div>
    ),
    contentText: 'We provide ongoing maintenance and support services to keep your cross-platform application '
    + 'up-to-date, secure, and performing optimally. Our team is readily available to address any issues, implement '
    + 'updates, and provide technical assistance as needed.',
    src: CrossPlatformSupportMobileImage,
  },
];

export const processBlockContent = {
  subtitle: (
    <MainTitle
      className="px-[15px] mb-[50px] normal-case min-md:px-0 screen-md:mb-[15px]
      min-lg:max-w-[1033px] screen-lg:mb-[40px]"
    >
      How we build a cross-platform development process
    </MainTitle>
  ),
  text: (
    <ContentText
      tag="p"
      className="px-4 text-lg leading-[26px] my-4 max-w-[670px] min-md:px-0
      min-md:mt-10 min-md:!mb-[60px] min-lg:mt-[50px] min-lg:!mb-10"
    >
      From conceptualization to deployment, our team will guide you through the entire development process,
      ensuring seamless integration, optimal performance, and a consistent user experience across iOS, Android,
      and web platforms.
    </ContentText>
  ),
};
