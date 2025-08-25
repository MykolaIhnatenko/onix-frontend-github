import { StaticImageData } from 'next/image';

import IPageStatus from '../../interfaces/IPageStatus';
import { useAppSelector } from '../../hook/reduxToolkit';
import AboutProjectSection from '../../components/AboutProject/AboutProject';
import BusinessContext from '../../components/BusinessContext/BusinessContext';
import ourExpertiseSectionData from './data/ourExpertiseSectionContentData';
import { aboutProjectSectionWhite } from '../../constants/tailwindStyle';
import aboutBlockData from './data/aboutBlockData';
import { businessContextData, businessContextDataSecond, businessContextDataThird } from './data/businessContextData';
import technologyData from './data/technologyData.json';
import OurExpertiseSection from '../../components/OurExpertiseSection/OurExpertiseSection';
import VRARCallToActionComponent from '../../components/VRARCallToActionBlock/VRARCallToActionComponent';
import CoreTechnology from '../../components/CoreTechnology/CoreTechnology';
import CaseStudiesBlockForCases from '../../components/CaseStudiesBlockForCases/CaseStudiesBlockForCases';
import BusinessContextDiagonal from '../../components/BusinessContextDiagonal/BusinessContextDiagonal';
import CryptocurrencyProductScopeBlock from './components/CryptocurrencyProductScopeBlock';
import MainBlockVolkswagen from '../../components/MainBlockVolkswagen/MainBlockVolkswagen';

import HeroBgMobile from '@/images/cryptocurrencyBlog/main/img_Hero_mobile.webp';
import HeroBgBigTablet from '@/images/cryptocurrencyBlog/main/img_Hero_big_tablet.webp';
import HeroBgTablet from '@/images/cryptocurrencyBlog/main/img_Hero_tablet.webp';
import HeroBg from '@/images/cryptocurrencyBlog/main/img_Hero.webp';
import HeroBgBig from '@/images/cryptocurrencyBlog/main/img_Hero_big.webp';
import CTAFirstBg from '@/images/ResultsBlockBg/img_ctaBlackBg@2x.webp';
import CTAFirstTabletBg from '@/images/ResultsBlockBg/img_ctaBlackTabletBg@2x.webp';
import CTAFirstMobileBg from '@/images/ResultsBlockBg/img_ctaBlackMobileBg@2x.webp';
import CTAFirstXXXLBg from '@/images/ResultsBlockBg/img_ctaBlackXXXLBg@2x.webp';
import ResultsBlockBg from '@/images/ResultsBlockBg/img_resultsBlockBlackBg@2x.webp';
import ResultsBlockXXXLBg from '@/images/ResultsBlockBg/img_resultsBlockBlackXXXLBg@2x.webp';
import ResultsBlockTabletBg from '@/images/ResultsBlockBg/img_resultsBlockBlackTabletBg@2x.webp';
import ResultsBlockMobileBg from '@/images/ResultsBlockBg/img_resultsBlockBlackMobileBg@2x.webp';

function CryptocurrencyBlogCaseView({ saleUrl }: IPageStatus) {
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
      main: HeroBg,
    };
    if (isXXXLDevice) {
      bg.results = ResultsBlockXXXLBg;
      bg.first = CTAFirstXXXLBg;
      bg.main = HeroBgBig;
    } else if (isLGDevice) {
      bg.main = HeroBgBigTablet;
    } else if (isMDDevice) {
      bg.results = ResultsBlockTabletBg;
      bg.first = CTAFirstTabletBg;
      bg.main = HeroBgTablet;
    } else if (isXSDevice || isSMDevice) {
      bg.results = ResultsBlockMobileBg;
      bg.first = CTAFirstMobileBg;
      bg.main = HeroBgMobile;
    }

    return bg;
  };

  return (
    <>
      <MainBlockVolkswagen
        title={(
          <>
            Cryptocurrency blog
          </>
        )}
        subtitleText={<>Web3 cryptocurrency blog with&nbsp;Polygon integration and&nbsp;MetaMask&nbsp;support</>}
        backgroundImg={getBackground().main}
        classes={{
          titleContainer: 'max-w-[700px] screen-lg:min-h-[100vh] screen-lg:max-w-full '
            + 'screen-lg:!pt-[154px] '
            + 'screen-md:!pt-[139px]',
          subtitle: '!font-[500] max-w-[630px] '
            + 'screen-xl:!mt-[30px] screen-xl:mt-[30px] screen-xl:!text-[24px]/[34px] '
            + 'screen-lg:max-w-[670px] screen-md:!text-[20px]/[28px] screen-md:!mt-[15px] min-xl:!text-[30px]/[40px] ',
          title: ' screen-xl:!text-[40px]/[56px] screen-md:!text-[25px]/[35px]',
        }}
      />
      <AboutProjectSection
        title={aboutBlockData.title}
        content={aboutBlockData.content}
        variant={aboutProjectSectionWhite}
      />
      <BusinessContext
        blackTheme
        upTitle={businessContextData.name}
        title={businessContextData.title}
        subTitle={businessContextData.subTitle}
        leftContent={businessContextData.firstText}
        rightContent={businessContextData.secondText}
      />
      <CryptocurrencyProductScopeBlock
        background={getBackground().results}
      />
      {!saleUrl && (
        <VRARCallToActionComponent
          title={(
            <>
              Have a project in mind?
              {' '}
              <br className="screen-md:hidden" />
              {' '}
              Let&apos;s&nbsp;talk!
            </>
)}
          btnText="Get in touch with us"
          withButton
          background={getBackground().first}
          classes={{
            cta: '!p-[120px_70px] screen-lg:!p-[80px_30px] screen-md:!p-[80px_15px]',
            background: `after:content-[""] after:absolute after:top-0 after:left-0 after:w-full after:h-[70px]
            after:bg-gradient-to-t from-[rgba(0,0,0,0)] to-black`,
            image: '!object-bottom',
            title: '!pb-[40px] !max-w-[780px] screen-lg:!max-w-[620px] screen-md:!pb-[30px] screen-md:max-w-[380px]',
          }}
        />
      )}
      <BusinessContextDiagonal
        upTitle={businessContextDataSecond.upTitle}
        title={businessContextDataSecond.title}
        leftContent={businessContextDataSecond.firstText}
        rightContent={businessContextDataSecond.secondText}
        classes={{
          section: 'min-lg:!pb-[80px] min-md:!pb-[60px] screen-md:!pb-[40px]',
        }}
      />
      <OurExpertiseSection
        data={ourExpertiseSectionData}
        borderTopFirst={false}
        classes={{
          section: '!pt-0 min-md:!pt-0 pb-[120px] screen-lg:!pb-[80px] screen-md:!pb-[80px]',
          container: '!pt-0',
          textContainer: 'pb-[80px] screen-lg:pb-0',
          accordionContainer: '!pb-0 screen-lg:!pb-0',
        }}
      />
      <CoreTechnology
        data={technologyData}
        blackTheme
      />
      <BusinessContext
        upTitle={businessContextDataThird.name}
        title={businessContextDataThird.title}
        subTitle={businessContextDataThird.subTitle}
        leftContent={businessContextDataThird.firstText}
        rightContent={businessContextDataThird.secondText}
        subText={businessContextDataThird.subText}
      />
      <CaseStudiesBlockForCases
        sliderIds={[68, 20, 56, 1000]}
        saleUrl={saleUrl}
      />
      {!saleUrl && (
        <VRARCallToActionComponent
          title={<>Have specific questions or&nbsp;need&nbsp;assistance?</>}
          btnText="Get in touch"
          withButton
          classes={{
            cta: '!pt-0',
            title: '!text-white !max-w-[1078px] screen-lg:!max-w-[613px] screen-md:!pb-[30px]',
          }}
        />
      )}
    </>
  );
}

export default CryptocurrencyBlogCaseView;
