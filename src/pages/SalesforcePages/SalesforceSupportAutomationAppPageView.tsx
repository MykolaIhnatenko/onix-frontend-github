import { StaticImageData } from 'next/image';

import SalesforceMainSection from './components/SalesforceMainSection';
import { useAppSelector } from '../../hook/reduxToolkit';
import {
  cards,
  challengesContent, contactUsTitle,
  mainContent, needContent, ourSolutions, result,
  secondContent,
  secondSectionContent, technologies,
} from './data/salesforceProcessAutomationData';
import SalesforceSecondSection from './components/SalesforceSecondSection';
import SalesforceChallengesSection from './components/SalesforceChallengesSection';
import SalesforceNeedSection from './components/SalesforceNeedSection';
import SalesforceOurSolutionsSection from './components/SalesforceOurSolutionsSection';
import SalesforceOfferSection from './components/SalesforceOfferSection';
import SalesforceTechnologySection from './components/SalesforceTechnologySection';
import SalesforceResultSection from './components/SalesforceResultSection';
import SalesforceContactUsSection from './components/SalesforceContactUsSection';
import SalesforceSolutionSection from './components/SalesforceSolutionSection';
import { muktaVaaniFont } from '../../fonts/MainFonts';
import MainBgDesktop from '@/images/salesforceSupportAutomationApp/img_mainBackground.webp';
import MainBgPhone from '@/images/salesforceSupportAutomationApp/img_main_bg_phone.webp';
import Picture1 from '@/images/salesforceSupportAutomationApp/img_secondSectionImg.webp';
import Picture2 from '@/images/salesforceSupportAutomationApp/img_challengesBg.webp';
import SolutionImgDesktop from '@/images/salesforcePersonnelTrackingApp/solutionSection/img_solutionImg.webp';
import SolutionImgPhone from '@/images/salesforcePersonnelTrackingApp/solutionSection/img_phone.webp';
import ResultImgDesktop from '@/images/salesforcePersonnelTrackingApp/resultSection/img_resultImg.webp';
import ResultImgTablet from '@/images/salesforcePersonnelTrackingApp/resultSection/img_resultImgTablet.webp';
import ResultImgPhone from '@/images/salesforcePersonnelTrackingApp/resultSection/img_resultImgPhone.webp';
import IPageStatus from 'interfaces/IPageStatus';

import styles from './sass/salesforcePage.module.scss';

function SalesforceSupportAutomationAppPageView({ saleUrl }: IPageStatus) {
  const { screenSizes: { isMDDevice, isSMDevice, isXSDevice } } = useAppSelector((state) => state?.app);

  const getBackground = () => {
    const bg:{ [propName:string]: StaticImageData } = {
      mainBg: MainBgDesktop,
      solutionImgPath: SolutionImgDesktop,
      resultImgPath: ResultImgDesktop,
    };
    if (isMDDevice || isSMDevice) {
      bg.mainBg = MainBgDesktop;
      bg.solutionImgPath = SolutionImgDesktop;
      bg.resultImgPath = ResultImgTablet;
    } else if (isXSDevice) {
      bg.mainBg = MainBgPhone;
      bg.solutionImgPath = SolutionImgPhone;
      bg.resultImgPath = ResultImgPhone;
    }
    return bg;
  };

  return (
    <div className={`${styles.salesforce} ${muktaVaaniFont.variable}`}>
      <SalesforceMainSection
        mainBg={getBackground().mainBg}
        title={mainContent.title}
        description={mainContent.description}
        classes="processAutomation"
      />
      <SalesforceSecondSection
        picture={Picture1}
        secondSectionContent={secondSectionContent}
        content={secondContent}
        shadowColor="shadowSalesforceSupportAutomationApp"
        color="salesforceSupportAutomationAppColor"
        classes="processAutomation"
      />
      <SalesforceChallengesSection
        picture={Picture2}
        content={challengesContent}
        boxShadowClass="processAutomationImageBig"
        shadowColor="shadowSalesforceSupportAutomationApp"
        classes="processAutomation"
      />
      <SalesforceNeedSection needContent={needContent} />
      {!saleUrl && (
        <SalesforceSolutionSection
          imgPath={getBackground().solutionImgPath}
        />
      )}
      <SalesforceOurSolutionsSection content={ourSolutions} classes="processAutomation" />
      <SalesforceOfferSection
        cards={cards}
        shadowColor="cardShadowSalesforceSupportAutomationApp"
        circleColor="circleColorSalesforceSupportAutomationApp"
        classes="processAutomation"
      />
      <SalesforceTechnologySection
        technologies={technologies}
        classes="processAutomation"
      />
      <SalesforceResultSection resultImgPath={getBackground().resultImgPath} result={result} />
      {!saleUrl && (
        <SalesforceContactUsSection
          colorBtn="colorBtnAutomation"
          title={contactUsTitle}
          classes="processAutomation"
        />
      )}
    </div>
  );
}

export default SalesforceSupportAutomationAppPageView;
