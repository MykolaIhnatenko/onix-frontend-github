import { useSelector } from 'react-redux';

import IStore from '../../store/interfaces/IStore';
import { IApp } from '../../store/app/interfaces/IApp';
import IPageStatus from '../../interfaces/IPageStatus';
import { UsabilityTestingMainBlockVariant } from 'constants/enums';
import UsabilityTestingMainBlock from 'pages/UsabilityTestingPageView/components/UsabilityTestingMainBlock';
import AboutProjectSection from 'components/AboutProject/AboutProject';
import VRARCallToActionComponent from 'components/VRARCallToActionBlock/VRARCallToActionComponent';
import CoreTechnology from 'components/CoreTechnology/CoreTechnology';
import ResultsBlock from 'components/ResultsBlock/ResultsBlock';
import aboutData from './data/aboutData.json';
import businessSecondContextResultData from './data/businessContextData';
import developmentServicesData from './data/developmentServicesData';
import KillerFeaturesData from './data/killerFeaturesData';
import TechData from './data/techData.json';
import ProductScopeData from './data/productScopeData';
import MainSectionBgTablet from '@/images/analyticsPlatform/img_AnalyticBGTablet.webp';
import MainSectionBgMobile from '@/images/analyticsPlatform/img_AnalyticBGMobile.webp';
import MainSectionBgXL from '@/images/analyticsPlatform/img_AnalyticBGMax.webp';
import ProductScope from '@/images/analyticsPlatform/img_ProductScope.webp';
import ProductScopeTablet from '@/images/analyticsPlatform/img_ProductScopeTablet.webp';
import ProductScopeMobile from '@/images/analyticsPlatform/img_ProductScopeMobile.webp';
import ResultBg from '@/images/ResultsBlockBg/img_resultsBlockWhiteBg@2x.webp';
import ResultTabletBg from '@/images/ResultsBlockBg/img_resultsBlockWhiteTabletBg@2x.webp';
import ResultMobileBg from '@/images/ResultsBlockBg/img_resultsBlockWhiteMobileBg@2x.webp';
import ResultXXXLBg from '@/images/ResultsBlockBg/img_resultsBlockWhiteXXXLBg@2x.webp';
import resultsBlockWhite from 'constants/tailwindStyle';
import CTAFirstBg from '@/images/ResultsBlockBg/img_ctaBlackBg@2x.webp';
import CTAFirstTabletBg from '@/images/ResultsBlockBg/img_ctaBlackTabletBg@2x.webp';
import CTAFirstMobileBg from '@/images/ResultsBlockBg/img_ctaBlackMobileBg@2x.webp';
import CTAFirstXXXLBg from '@/images/ResultsBlockBg/img_ctaBlackXXXLBg@2x.webp';
import CaseStudiesBlockForCases from 'components/CaseStudiesBlockForCases/CaseStudiesBlockForCases';
import DevelopmentServicesBlack from 'components/DevelopmentServicesBlack/DevelopmentServicesBlack';
import OurSolutions from 'components/OurSolutions/OurSolutions';
import BusinessContext from 'components/BusinessContext/BusinessContext';

function AnalyticView({ saleUrl }: IPageStatus) {
  const {
    screenSizes: {
      isSMDevice,
      isXSDevice,
      isMDDevice,
      isXXXLDevice,
    },
  } = useSelector<IStore, IApp>((state) => state?.app);

  const getBackground = () => {
    const bg = {
      Main: MainSectionBgXL,
      developmentServicesFirst: ProductScope,
      cta: CTAFirstBg,
      resultsBlock: ResultBg,
    };
    if (isXXXLDevice) {
      bg.resultsBlock = ResultXXXLBg;
      bg.cta = CTAFirstXXXLBg;
    } else if (isMDDevice || isSMDevice) {
      bg.Main = MainSectionBgTablet;
      bg.developmentServicesFirst = ProductScopeTablet;
      bg.cta = CTAFirstTabletBg;
      bg.resultsBlock = ResultTabletBg;
    } else if (isXSDevice) {
      bg.Main = MainSectionBgMobile;
      bg.developmentServicesFirst = ProductScopeMobile;
      bg.cta = CTAFirstMobileBg;
      bg.resultsBlock = ResultMobileBg;
    }
    return bg;
  };

  return (
    <>
      <UsabilityTestingMainBlock
        title={(
          <>
            Web Application
            {' '}
            <br className="hidden max-[560]:inline" />
            Development for
            {' '}
            <br className="hidden max-[560]:inline" />
            Analytics Company
          </>
        )}
        background={getBackground().Main}
        variant={UsabilityTestingMainBlockVariant.ANALYTICS_PLATFORM}
      />
      <AboutProjectSection
        content={aboutData.content}
        title={aboutData.title}
        subtitle={aboutData.desc}
      />
      <BusinessContext
        title={businessSecondContextResultData.title}
        subTitle={businessSecondContextResultData.subTitle}
        leftContent={businessSecondContextResultData.firstText}
        rightContent={businessSecondContextResultData.secondText}
        subText={businessSecondContextResultData.bottomText}
        classes={{
          subTitle: '!text-[24px]/[36px] screen-md:!text-[20px]/[32px]',
          subText: '!text-[24px]/[36px] screen-lg:!text-[24px]/[34px] screen-md:!text-[20px]/[28px]',
        }}
      />
      <DevelopmentServicesBlack
        title={developmentServicesData.title}
        data={developmentServicesData.data}
      />
      {!saleUrl && (
        <VRARCallToActionComponent
          title={(
            <>
              Ready to revolutionize your analytics?
              {' '}
              <br className="inline screen-lg:hidden" />
              Join the 80% of organizations experiencing
              {' '}
              <br className="inline screen-lg:hidden" />
              improved decision&#8209;making.
            </>
          )}
          btnText="Contact Us"
          withButton
          background={getBackground().cta}
          classes={{
            cta: '!p-[120px_70px] screen-lg:!p-[80px_30px] screen-md:!p-[80px_30px] screen-sm:!p-[80px_15px]',
            background: `!bottom-0 !top-auto min-xxxl:!h-[464px] after:content-[""] after:absolute after:top-0
            after:left-0 after:w-full after:h-[100px] after:bg-gradient-to-t from-transparent to-black`,
            image: '!object-right-bottom !object-cover',
            title: `!max-w-[1080px] screen-lg:!pb-[40px] screen-lg:!max-w-[708px] screen-md:max-w-full
            screen-md:!pb-[30px]`,
          }}
        />
      )}
      <OurSolutions
        title={KillerFeaturesData.title}
        data={KillerFeaturesData.content}
        desktopViewOnXL
        classes={{ section: '!pb-0' }}
      />
      <CoreTechnology data={TechData} />
      <ResultsBlock
        title={ProductScopeData.title}
        name={ProductScopeData.titleBlock}
        content={ProductScopeData.content}
        background={getBackground().resultsBlock}
        classes={resultsBlockWhite}
      />
      <CaseStudiesBlockForCases
        sliderIds={[56, 51, 62, 1000]}
        saleUrl={saleUrl}
      />
      {!saleUrl && (
        <VRARCallToActionComponent
          title={(
            <>
              Reach out now to schedule
              {' '}
              <br className="hidden screen-sm:inline" />
              a call with our expert
              {' '}
              <br className="hidden screen-sm:inline" />
              and know how to
              {' '}
              <br className="hidden screen-sm:inline" />
              revolutionize your
              {' '}
              <br className="hidden screen-sm:inline" />
              organization&apos;s&nbsp;analytics.
            </>
          )}
          btnText="Contact us"
          withButton
          classes={{
            cta: '!pt-0 screen-md:!p-[0_30px_80px] screen-sm:!p-[0_15px_80px]',
            background: 'screen-md:!object-bottom',
            title: '!max-w-[1080px] screen-lg:!max-w-[708px] screen-md:max-w-[none]',
          }}
        />
      )}
    </>
  );
}

export default AnalyticView;
