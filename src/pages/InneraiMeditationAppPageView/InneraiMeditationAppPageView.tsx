import { StaticImageData } from 'next/image';

import { useAppSelector } from '../../hook/reduxToolkit';
import ResultsBlock from '../../components/ResultsBlock/ResultsBlock';
import InnerAiSolutionsSection from './components/InnerAiSolutionsSection';
import UsabilityTestingMainBlock from '../UsabilityTestingPageView/components/UsabilityTestingMainBlock';
import VRARCallToActionComponent from '../../components/VRARCallToActionBlock/VRARCallToActionComponent';
import CoreTechnology from '../../components/CoreTechnology/CoreTechnology';
import CaseStudiesBlockForCases from 'components/CaseStudiesBlockForCases/CaseStudiesBlockForCases';
import ImageComponent from '../../components/Image/Image';
import inneraiHowOnixDeveloped from './data/inneraiHowOnixDeveloped';
import inneraiBusinessContextData from './data/inneraiBusinessContextData';
import inneraiResultsBlockData from './data/inneraiResultsBlockData';
import inneraiOurSolutionsData from './data/inneraiOurSolutionsData';
import inneraiCoreTechnologyData from './data/inneraiCoreTechnologyData';
import inneraiSecondBusinessContextData from './data/inneraiSecondBusinessContextData';
import inneraiMainBlockData from './data/inneraiMainBlockData';
import inneraiDevelopmentServices from './data/inneraiDevelopmentServices';
import { ButtonType } from '../../constants/enums';
import IPageStatus from '../../interfaces/IPageStatus';
import TestimonialTextSection from 'components/TestimonialTextSection/TestimonialTextSection';
import testimonialData from './data/testimonialData';
import DevelopmentServicesWhite from 'components/DevelopmentServicesWhite/DevelopmentServicesWhite';
import AboutProjectSection from 'components/AboutProject/AboutProject';
import OurSolutions from 'components/OurSolutions/OurSolutions';
import BusinessContext from 'components/BusinessContext/BusinessContext';

import MainBgXXXL from '@/images/inneraiMeditationAppPage/mainBlock/img_mainBgxxxl@2x.webp';
import MainBg from '@/images/inneraiMeditationAppPage/mainBlock/img_mainBg@2x.webp';
import MainBgTablet from '@/images/inneraiMeditationAppPage/mainBlock/img_mainTabletBg@2x.webp';
import MainBgMobile from '@/images/inneraiMeditationAppPage/mainBlock/img_mainMobileBg@2x.webp';
import MainPhones from '@/images/inneraiMeditationAppPage/mainBlock/img_phonesMain@2x.webp';
import MainPhonesXXXL from '@/images/inneraiMeditationAppPage/mainBlock/img_phonesMainxxxl@2x.webp';
import MainPhonesTablet from '@/images/inneraiMeditationAppPage/mainBlock/img_phonesMainTablet@2x.webp';
import MainPhonesMobile from '@/images/inneraiMeditationAppPage/mainBlock/img_phonesMainMobile@2x.webp';
import ResultsBlockBg from '@/images/ResultsBlockBg/img_resultsBlockBlackBg@2x.webp';
import ResultsBlockTabletBg from '@/images/ResultsBlockBg/img_resultsBlockBlackTabletBg@2x.webp';
import ResultsBlockMobileBg from '@/images/ResultsBlockBg/img_resultsBlockBlackMobileBg@2x.webp';
import ResultsBlockXXXLBg from '@/images/ResultsBlockBg/img_resultsBlockBlackXXXLBg@2x.webp';
import CTAFirstBg from '@/images/ResultsBlockBg/img_ctaBlackBg@2x.webp';
import CTAFirstTabletBg from '@/images/ResultsBlockBg/img_ctaBlackTabletBg@2x.webp';
import CTAFirstMobileBg from '@/images/ResultsBlockBg/img_ctaBlackMobileBg@2x.webp';
import CTAFirstXXXLBg from '@/images/ResultsBlockBg/img_ctaBlackXXXLBg@2x.webp';
import DevelopmentBgSecond from '@/images/inneraiMeditationAppPage/developmentServices/img_developmentSecond@2x.webp';
import DevelopmentBgSecondTablet from '@/images/inneraiMeditationAppPage/developmentServices/img_developmentSecondTablet@2x.webp';
import DevelopmentBgSecondMobile from '@/images/inneraiMeditationAppPage/developmentServices/img_developmentSecondMobile@2x.webp';
import DevelopmentBgFirst from '@/images/inneraiMeditationAppPage/developmentServices/img_developmentFirst@2x.webp';
import DevelopmentBgFirstTablet from '@/images/inneraiMeditationAppPage/developmentServices/img_developmentFirstTablet@2x.webp';
import DevelopmentBgFirstMobile from '@/images/inneraiMeditationAppPage/developmentServices/img_developmentFirstMobile@2x.webp';
import styles from './sass/inneraiMeditationAppPageView.module.scss';

function InneraiMeditationAppPageView({ saleUrl }: IPageStatus) {
  const {
    screenSizes: {
      isSMDevice,
      isXSDevice,
      isMDDevice,
      isXXXLDevice,
    },
  } = useAppSelector((state) => state?.app);

  const getBackground = () => {
    const bg:{ [propName:string]: StaticImageData } = {
      resultsBlock: ResultsBlockBg,
      ctaFirst: CTAFirstBg,
      mainBg: MainBg,
      developmentFirst: DevelopmentBgFirst,
      developmentSecond: DevelopmentBgSecond,
      mainPhones: MainPhones,
    };
    if (isXXXLDevice) {
      bg.mainBg = MainBgXXXL;
      bg.mainPhones = MainPhonesXXXL;
      bg.resultsBlock = ResultsBlockXXXLBg;
      bg.ctaFirst = CTAFirstXXXLBg;
    } else if (isMDDevice) {
      bg.resultsBlock = ResultsBlockTabletBg;
      bg.ctaFirst = CTAFirstTabletBg;
      bg.mainBg = MainBgTablet;
      bg.developmentFirst = DevelopmentBgFirstTablet;
      bg.developmentSecond = DevelopmentBgSecondTablet;
      bg.mainPhones = MainPhonesTablet;
    } else if (isXSDevice || isSMDevice) {
      bg.resultsBlock = ResultsBlockMobileBg;
      bg.ctaFirst = CTAFirstMobileBg;
      bg.mainBg = MainBgMobile;
      bg.developmentFirst = DevelopmentBgFirstMobile;
      bg.developmentSecond = DevelopmentBgSecondMobile;
      bg.mainPhones = MainPhonesMobile;
    }
    return bg;
  };

  return (
    <>
      <UsabilityTestingMainBlock
        icon={inneraiMainBlockData.icon}
        title={inneraiMainBlockData.title}
        text={inneraiMainBlockData.text}
        background={getBackground().mainBg}
        image={getBackground().mainPhones}
        classes={{
          container: `max-1390:!h-screen screen-lg:!h-[1126px] screen-md:!min-h-[700px]
            screen-md:!h-screen screen-md:!relative screen-sm:!min-h-[625px]`,
          background: '!absolute !bottom-0 !right-0 !h-full !w-full',
          backgroundImage: `!w-full !h-full !object-cover
            !object-center screen-lg:!object-center
            screen-md:!object-bottom`,
          content: `!flex !items-center !justify-between !pr-[60px] min-xxxl:!pr-[170px]
            screen-lg:!flex-col screen-lg:!items-start`,
          logo: '!pb-[40px] screen-lg:!pb-[30px] screen-md:!pb-[15px]',
          title: `!max-w-[649px] !pb-[40px] !text-[50px] max-1390:!max-w-[620px] max-1390:!leading-[1.4]
            screen-xl:!max-w-[500px]
            screen-xl:!text-[40px] screen-xl:!leading-[56px] screen-lg:!max-w-[606px] screen-lg:!pb-[30px]
            screen-md:!pb-[15px] screen-md:!text-[25px] screen-md:!leading-[35px]`,
          text: `!text-[30px] !leading-[40px] !max-w-[563px] screen-xl:!text-[24px] screen-xl:!leading-[34px]
            screen-xl:!max-w-[510px] screen-lg:!max-w-[574px] screen-md:!max-w-[420px] screen-md:!text-[20px]
            screen-md:!leading-[28px]`,
          image: `!relative !top-[40px] !w-[560px] !h-[610px]
            min-xxxl:!w-[730px] min-xxxl:!h-[815px]
            min-xxl:!w-[630px] min-xxl:!h-[690px]
            screen-xl:!w-[510px] screen-xl:!h-[560px]
            screen-lg:!top-[50px] screen-lg:!w-[520px] screen-lg:!h-[560px] screen-lg:!left-[calc(50%+30px)]
            screen-lg:!translate-x-[-50%] screen-lg:!m-0
            screen-md:!absolute screen-md:!bottom-0 screen-md:!left-[calc(50%+10px)] screen-md:!translate-x-[-50%]
            screen-md:!top-[unset] screen-md:!w-[430px] screen-md:!h-[357px]
            screen-sm:!w-[330px] screen-sm:!h-[277px] screen-sm:!left-[calc(50%+8px)]`,
          imageContent: '!w-full !h-full !object-cover screen-xl:!object-left max-1100:!object-contain '
            + ' screen-lg:!object-cover screen-lg:!object-center',
        }}
      />
      <AboutProjectSection
        title={inneraiHowOnixDeveloped.blockTitle}
        subtitle={inneraiHowOnixDeveloped.blockText}
        content={inneraiHowOnixDeveloped.data}
      />
      <BusinessContext
        upTitle={inneraiBusinessContextData.upTitle}
        title={inneraiBusinessContextData.title}
        leftContent={inneraiBusinessContextData.firstText}
        rightContent={inneraiBusinessContextData.secondText}
      />
      <ResultsBlock
        name={inneraiResultsBlockData.name}
        title={inneraiResultsBlockData.title}
        content={inneraiResultsBlockData.content}
        background={getBackground().resultsBlock}
        productScope
        classes={{
          background: `after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[80px]
            after:bg-gradient-to-b from-[rgba(0,0,0,0)_5%] to-black`,
        }}
      />
      {!saleUrl && (
        <VRARCallToActionComponent
          id={ButtonType.CASE}
          title={(
            <>
              Do you need help with creating a mobile meditation app
              {' '}
              <span className="inline_block">or AI-powered</span>
              {' '}
              solution?
              {' '}
              <span className="inline_block">Our experts</span>
              {' '}
              are at your&nbsp;service!
            </>
          )}
          btnText="Contact us"
          withButton
          background={getBackground().ctaFirst}
          classes={{
            cta: '!p-[120px_70px] screen-lg:!p-[80px_30px] screen-md:!p-[80px_30px] screen-sm:!p-[80px_15px]',
            background: `after:content-[""] after:absolute after:top-0 after:left-0 after:w-full after:h-[120px]
            after:bg-gradient-to-t from-[rgba(0,0,0,0)_5%] to-black`,
            image: '!object-bottom',
            title: '!max-w-[1080px] !pb-[40px] screen-md:!pb-[30px]',
          }}
        />
      )}
      <div className={styles.container}>
        <div className={styles.background}>
          <ImageComponent
            src={getBackground().developmentSecond}
            alt="background"
            sizes="100vw"
          />
        </div>
        <DevelopmentServicesWhite
          title={inneraiDevelopmentServices.title}
          data={inneraiDevelopmentServices.data}
          customBackground={getBackground().developmentFirst}
          classes={{
            devServices: 'screen-md:!p-[80px_0]',
            bgImg: '!h-[442px] !object-top screen-lg:!h-[292px] screen-md:!h-[264px]',
            item: {
              containerItemLeft: '!flex-col !justify-end',
              containerItemRight: '!flex !flex-col !justify-end',
              title: `!text-[96px] !leading-[132px] !font-normal !w-full 
              screen-lg:!text-[50px] screen-lg:!leading-[64px] screen-lg:!font-medium 
              screen-md:!text-[40px] screen-md:!leading-[50px]`,
            },
          }}
        />
      </div>
      <OurSolutions
        title="The app’s features"
        data={inneraiOurSolutionsData}
      />
      <TestimonialTextSection
        testimonialText={testimonialData.testimonialText}
        authorName={testimonialData.authorName}
      />
      <InnerAiSolutionsSection />
      <CoreTechnology
        data={inneraiCoreTechnologyData}
        classes={{
          contentContainer: '!py-0',
        }}
      />
      <BusinessContext
        title={inneraiSecondBusinessContextData.title}
        leftContent={inneraiSecondBusinessContextData.firstText}
        rightContent={inneraiSecondBusinessContextData.secondText}
      />
      <CaseStudiesBlockForCases
        sliderIds={[17, 35, 31, 1000]}
        saleUrl={saleUrl}
      />
      {!saleUrl && (
      <VRARCallToActionComponent
        id={ButtonType.CASE2}
        title={(
          <>
            Do you need help with creating a mobile meditation app
            {' '}
            <span className="inline_block">or AI-powered</span>
            {' '}
            solution?
            {' '}
            <span className="inline_block">Our experts</span>
            {' '}
            are at your&nbsp;service!
          </>
          )}
        btnText="Contact us"
        withButton
        classes={{
          cta: '!pt-0 screen-md:!p-[0_30px_80px] screen-sm:!p-[0_15px_80px]',
          background: 'screen-md:!object-bottom',
          title: '!max-w-[1080px] screen-md:!max-w-full',
        }}
      />
      )}
    </>
  );
}

export default InneraiMeditationAppPageView;
