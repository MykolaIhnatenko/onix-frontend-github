import { StaticImageData } from 'next/image';

import { useAppSelector } from '../../hook/reduxToolkit';
import AboutProjectSection from '../../components/AboutProject/AboutProject';
import BusinessContext from '../../components/BusinessContext/BusinessContext';
import ResultsBlock from '../../components/ResultsBlock/ResultsBlock';
import VRARCallToActionComponent from '../../components/VRARCallToActionBlock/VRARCallToActionComponent';
import CoreTechnology from '../../components/CoreTechnology/CoreTechnology';
import CaseStudiesBlockForCases from '../../components/CaseStudiesBlockForCases/CaseStudiesBlockForCases';
import BusinessContextDiagonal from '../../components/BusinessContextDiagonal/BusinessContextDiagonal';
import MainBlockVolkswagen from '../../components/MainBlockVolkswagen/MainBlockVolkswagen';
import Hotel4BoxResultsBlock from './components/Hotel4BoxResultsBlock';
import Hotel4BoxBenefitsBlock from './components/Hotel4BoxBenefitsBlock';
import OurExpertiseSection from '../../components/OurExpertiseSection/OurExpertiseSection';
import aboutBlockData from './data/aboutBlockData';
import { businessContextData, businessContextDataSecond } from './data/businessContextData';
import resultsBlockData from './data/resultsBlockData';
import ourExpertiseSectionData from './data/ourExpertiseSectionContentData';
import resultsBlockWhite from '../../constants/tailwindStyle';
import IPageStatus from '../../interfaces/IPageStatus';
import { ButtonType } from '../../constants/enums';
import ButtonTypes from '../../constants/ButtonTypes';
import technologyData from './data/technologyData.json';

import BgWhiteLarge from '@/images/developmentServicesWhite/img_devServicesWhiteLarge.webp';
import BgWhite from '@/images/developmentServicesWhite/img_devServicesWhite.webp';
import BgWhiteTablet from '@/images/developmentServicesWhite/img_devServicesWhiteTablet.webp';
import BgWhiteMobile from '@/images/developmentServicesWhite/img_devServicesWhiteMobile.webp';
import HeroBgMobile from '@/images/hotel4BoxCase/main/img_Hero_mobile.webp';
import HeroBgBigTablet from '@/images/hotel4BoxCase/main/img_Hero_big_tablet.webp';
import HeroBgTablet from '@/images/hotel4BoxCase/main/img_Hero_tablet.webp';
import HeroBgBig from '@/images/hotel4BoxCase/main/img_Hero_big.webp';
import ResultsBlockBg from '@/images/ResultsBlockBg/img_resultsBlockWhiteBg@2x.webp';
import ResultsBlockTabletBg from '@/images/ResultsBlockBg/img_resultsBlockWhiteTabletBg@2x.webp';
import ResultsBlockMobileBg from '@/images/ResultsBlockBg/img_resultsBlockWhiteMobileBg@2x.webp';
import ResultsBlockXXXLBg from '@/images/ResultsBlockBg/img_resultsBlockWhiteXXXLBg@2x.webp';
import CTAFirstBg from '@/images/ResultsBlockBg/img_ctaWhiteBg@2x.webp';
import CTAFirstTabletBg from '@/images/ResultsBlockBg/img_ctaWhiteTabletBg@2x.webp';
import CTAFirstMobileBg from '@/images/ResultsBlockBg/img_ctaWhiteMobileBg@2x.webp';
import CTAFirstXXXLBg from '@/images/ResultsBlockBg/img_ctaWhiteXXXLBg@2x.webp';
import Logo from '@/images/hotel4BoxCase/main/img_logo.webp';
import HeroBg from '@/images/hotel4BoxCase/main/img_Hero.webp';

function Hotel4BoxCaseView({ saleUrl }: IPageStatus) {
  const {
    screenSizes: {
      isMDDevice,
      isLGDevice,
      isSMDevice,
      isXSDevice,
      isXXXLDevice,
    },
  } = useAppSelector((state) => state?.app);

  const getBackground = () => {
    const bg:{ [propName:string]: StaticImageData } = {
      results: ResultsBlockBg,
      first: CTAFirstBg,
      businessContextBg: BgWhite,
      main: HeroBg,
    };
    if (isXXXLDevice) {
      bg.results = ResultsBlockXXXLBg;
      bg.first = CTAFirstXXXLBg;
      bg.businessContextBg = BgWhiteLarge;
      bg.main = HeroBgBig;
    } else if (isLGDevice) {
      bg.main = HeroBgBigTablet;
    } else if (isMDDevice) {
      bg.results = ResultsBlockTabletBg;
      bg.first = CTAFirstTabletBg;
      bg.businessContextBg = BgWhiteTablet;
      bg.main = HeroBgTablet;
    } else if (isXSDevice || isSMDevice) {
      bg.results = ResultsBlockMobileBg;
      bg.first = CTAFirstMobileBg;
      bg.businessContextBg = BgWhiteMobile;
      bg.main = HeroBgMobile;
    }

    return bg;
  };

  return (
    <>
      <MainBlockVolkswagen
        title={(
          <>
            Developing an ERP platform
            <br />
            {' '}
            for international delivery
          </>
        )}
        logo={Logo}
        backgroundImg={getBackground().main}
        classes={{
          container: 'screen-md:!max-h-[990px] screen-md:!min-h-[850px] screen-md:!h-[100%]'
            + ' screen-sm:!max-h-[740px]  screen-sm:!h-full screen-sm:!min-h-[740px] ',
          titleContainer: 'max-w-[750px] screen-lg:min-h-[100vh] screen-lg:max-w-full '
            + 'screen-lg:!pt-[154px] '
            + 'screen-md:!pt-[139px]',
          subtitle: '!text-[30px]/[40px] !font-[500] max-w-[456px] '
            + 'screen-xl:!mt-[30px] screen-xl:mt-[30px]'
            + 'min-xl:!text-[30px]/[40px] min-md:!text-[24px]/[34px] '
            + 'screen-lg:max-w-[670px] screen-md:!text-[16px]/[24px] screen-md:mt-[15px] min-360:!text-[20px]/[28px]',
          title: ' screen-xl:!text-[40px]/[56px] screen-md:!text-[25px]/[35px]',
          logo: '!max-w-[313px] !max-h-[70px] screen-xl:!max-w-[199px] screen-xl:!max-h-[44px] screen-xl:!mb-[30px] '
            + ' screen-md:!max-w-[145px] screen-md:!max-h-[35px] screen-md:!mb-[15px]',
        }}
      />
      <AboutProjectSection
        title={aboutBlockData.title}
        subtitle={aboutBlockData.subtitle}
        content={aboutBlockData.content}
      />
      <Hotel4BoxBenefitsBlock background={getBackground().results} />
      {!saleUrl && (
        <VRARCallToActionComponent
          id={ButtonType.CASE}
          title={<>Have a project in mind? Let&apos;s talk!</>}
          btnText="Talk to our expert"
          background={getBackground().first}
          buttonType={ButtonTypes.PRIMARY}
          withButton
          classes={{
            background: `after:content-[''] after:absolute after:top-0 after:left-0 after:w-full
            after:h-[80px] after:bg-gradient-to-t from-[rgba(255,255,255,0)] to-white`,
            cta: '!p-[120px_70px] screen-lg:!p-[80px_30px] screen-md:!p-[80px_15px]',
            title: `!text-black !pb-[40px] !max-w-[600px] screen-lg:!max-w-[427px]
            screen-md:!max-w-[320px] screen-md:!pb-[30px]`,
            image: '!object-bottom',
          }}
        />
      )}
      <BusinessContext
        upTitle={businessContextData.name}
        title={businessContextData.title}
        subTitle={businessContextData.subTitle}
        leftContent={businessContextData.firstText}
        rightContent={businessContextData.secondText}
        subText={businessContextData.subText}
        blackTheme
      />
      <ResultsBlock
        name={resultsBlockData.name}
        title={resultsBlockData.title}
        content={resultsBlockData.content}
        background={getBackground().results}
        productScope
        classes={resultsBlockWhite}
      />
      {!saleUrl && (
        <VRARCallToActionComponent
          id={ButtonType.CASE2}
          title={<>Have a project in mind? Let&apos;s talk!</>}
          btnText="Get in touch with us"
          background={getBackground().first}
          buttonType={ButtonTypes.PRIMARY}
          withButton
          classes={{
            background: `after:content-[''] after:absolute after:top-0 after:left-0 after:w-full
            after:h-[80px] after:bg-gradient-to-t from-[rgba(255,255,255,0)] to-white`,
            cta: '!p-[120px_70px] screen-lg:!p-[80px_30px] screen-md:!p-[80px_15px]',
            title: `!text-black !pb-[40px] !max-w-[600px] screen-lg:!max-w-[427px]
            screen-md:!max-w-[320px] screen-md:!pb-[30px]`,
            image: '!object-bottom',
          }}
        />
      )}
      <BusinessContextDiagonal
        upTitle={businessContextDataSecond.upTitle}
        title={businessContextDataSecond.title}
        leftContent={businessContextDataSecond.firstText}
        rightContent={businessContextDataSecond.secondText}
      />
      <OurExpertiseSection
        title="We provided the following solutions:"
        data={ourExpertiseSectionData}
        borderTopFirst={false}
        classes={{
          section: '!pt-0 min-md:!pt-0 pb-[120px] screen-lg:!pb-[80px] screen-md:!pb-[80px]',
          container: '!pt-0 !mb-[80px] screen-lg:!mb-[60px] screen-md:!mb-[40px]',
          textContainer: 'pb-[80px] screen-lg:pb-0',
          title: '!text-[40px]/[56px] screen-lg:!text-[36px]/[46px] screen-md:!text-[20px]/[28px]',
          accordionContainer: '!pb-0 screen-lg:!pb-0',
        }}
      />
      <CoreTechnology
        data={technologyData}
        blackTheme
      />
      <Hotel4BoxResultsBlock background={getBackground().businessContextBg} />
      <CaseStudiesBlockForCases
        sliderIds={[59, 55, 51, 1000]}
        saleUrl={saleUrl}
      />
      {!saleUrl && (
        <VRARCallToActionComponent
          title={<>Have a project in mind? Let’s&nbsp;build the future of logistics&nbsp;together!</>}
          btnText="Contact us"
          withButton
          classes={{
            cta: '!pt-0',
            title: '!text-white !max-w-[1078px]',
          }}
        />
      )}
    </>
  );
}

export default Hotel4BoxCaseView;
