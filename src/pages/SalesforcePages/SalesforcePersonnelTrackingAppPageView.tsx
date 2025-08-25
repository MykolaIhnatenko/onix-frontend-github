import { StaticImageData } from 'next/image';

import { useAppSelector } from '../../hook/reduxToolkit';
import SalesforceMainSection from './components/SalesforceMainSection';
import SalesforceSecondSection from './components/SalesforceSecondSection';
import SalesforceChallengesSection from './components/SalesforceChallengesSection';
import SalesforceNeedSection from './components/SalesforceNeedSection';
import SalesforceSolutionSection from './components/SalesforceSolutionSection';
import SalesforceOurSolutionsSection from './components/SalesforceOurSolutionsSection';
import SalesforceOfferSection from './components/SalesforceOfferSection';
import SalesforceTechnologySection from './components/SalesforceTechnologySection';
import SalesforceResultSection from './components/SalesforceResultSection';
import SalesforceContactUsSection from './components/SalesforceContactUsSection';
import {
  cards,
  challengesContent, contactUsTitle,
  mainContent, needContent, ourSolutions, result,
  secondContent,
  secondSectionContent, technologies,
} from './data/salesforcePersonnelTrackingAppData';
import IPageStatus from 'interfaces/IPageStatus';

import MainBg from '@/images/salesforcePersonnelTrackingApp/img_mainBackground.webp';
import Picture1 from '@/images/salesforcePersonnelTrackingApp/img_secondSectionImg.webp';
import Picture2 from '@/images/salesforcePersonnelTrackingApp/img_challengesBg.webp';
import SolutionImgDesktop from '@/images/salesforcePersonnelTrackingApp/solutionSection/img_solutionImg.webp';
import SolutionImgPhone from '@/images/salesforcePersonnelTrackingApp/solutionSection/img_phone.webp';
import ResultImgDesktop from '@/images/salesforcePersonnelTrackingApp/resultSection/img_resultImg.webp';
import ResultImgTablet from '@/images/salesforcePersonnelTrackingApp/resultSection/img_resultImgTablet.webp';
import ResultImgPhone from '@/images/salesforcePersonnelTrackingApp/resultSection/img_resultImgPhone.webp';
import styles from './sass/salesforcePage.module.scss';

function SalesforcePersonnelTrackingAppPageView({ saleUrl }: IPageStatus) {
  const { screenSizes: { isMDDevice, isSMDevice, isXSDevice } } = useAppSelector((state) => state?.app);

  const getBackground = () => {
    const bg:{ [propName:string]: StaticImageData } = {
      solutionImgPath: SolutionImgDesktop,
      resultImgPath: ResultImgDesktop,
    };
    if (isMDDevice || isSMDevice) {
      bg.solutionImgPath = SolutionImgDesktop;
      bg.resultImgPath = ResultImgTablet;
    } else if (isXSDevice) {
      bg.solutionImgPath = SolutionImgPhone;
      bg.resultImgPath = ResultImgPhone;
    }
    return bg;
  };

  return (
    <div className={styles.salesforce}>
      <SalesforceMainSection
        mainBg={MainBg}
        title={mainContent.title}
        description={mainContent.description}
      />
      <SalesforceSecondSection
        picture={Picture1}
        secondSectionContent={secondSectionContent}
        content={secondContent}
        shadowColor="shadowSalesforceTrackingApp"
        color="salesforceTrackingAppColor"
      />
      <SalesforceChallengesSection
        picture={Picture2}
        content={challengesContent}
        shadowColor="shadowSalesforceTrackingApp"
      />
      <SalesforceNeedSection needContent={needContent} />
      {!saleUrl && (
        <SalesforceSolutionSection
          imgPath={getBackground().solutionImgPath}
        />
      )}
      <SalesforceOurSolutionsSection content={ourSolutions} />
      <SalesforceOfferSection
        cards={cards}
        shadowColor="shadowSalesforceTrackingApp"
        circleColor="circleColorSalesforce"
      />
      <SalesforceTechnologySection technologies={technologies} />
      <SalesforceResultSection result={result} resultImgPath={getBackground().resultImgPath} />
      {!saleUrl && (
        <SalesforceContactUsSection
          title={contactUsTitle}
        />
      )}
    </div>
  );
}

export default SalesforcePersonnelTrackingAppPageView;
