import { useSelector } from 'react-redux';
import { StaticImageData } from 'next/image';

import getTechnologies from '../../utils/getTechnologies';
import CallToActionComponent from '../../components/CallToActionBlock/CallToActionComponent';
import FAQBlock from '../../components/FAQBlock/FAQBlock';
import ProcessBlock from '../../components/ProcessBlock/ProcessBlock';
import TechnologiesBlock from '../../components/TechnologiesBlock/TechnologiesBlock';
import TrustUsBlock from '../MainPage/components/TrustUsBlock';
import OurInsights from '../../components/OurInsightsSection/OurInsights';
import PartnerSection from '../../components/PartnerSection/PartnerSection';
import MachineLCalculate from './components/MachineLCalculate';
import MachineLStartBlock from './components/MachineLStartBlock';
import machineLDevelopmentServicesData from './data/machineLDevelopmentServicesData';
import IndustriesWeServeBlock from '../../components/IndustriesWeServeBlock/IndustriesWeServe';
import { machineLTechnologiesBlocksData, machineLTechnologiesBlocksNames } from './data/machineLTechnologiesData';
import { carouselBottom, carouselTop, machineLIndustriesWeServeBlockData } from './data/machineLIndustriesWeServeBlockData';
import { machineLProcessAccordionData, machineLProcessBlockContent, machineLProcessImages } from './data/machineLProcessData';
import machineLStartBlockData from './data/machineLStartBlockData';
import machineLCalculateData from './data/machineLCalculateData';
import machineLTrustUsCardsData from './data/machineLTrustUsCardsData.json';
import machineLTrustUsBlockData from './data/machineLTrustUsBlockData';
import machineLPartnerSliderData from './data/machineLPartnerSliderData';
import MachineLFaqMachineData from './data/machineLFaqMachineData';
import IStore from '../../store/interfaces/IStore';
import { IApp } from '../../store/app/interfaces/IApp';
import { IPageBlogs } from '../../interfaces/IPages';
import CTAImageBg from '../../assets/images/machineLearning/CTAImages/img_CTABg@2x.webp';
import CTAImageTabletBg from '../../assets/images/machineLearning/CTAImages/img_CTATabletBg@2x.webp';
import CTAImageMobileBg from '../../assets/images/machineLearning/CTAImages/img_CTAMobileBg@2x.webp';
import { ButtonType } from '../../constants/enums';
import MLTableBlock from './components/MLTableBlock';
import ConsultingServices from './components/ConsultingServices';
import ButtonTypes from 'constants/ButtonTypes';
import machineLCardData from './data/machineLCardData';
import AboutCardBlock from 'components/AboutCardBlock/AboutCardBlock';
import MachineLServicesHelpText from './components/MachineLServicesHelpText';
import ServicePackage from './components/ServicePackage';
import DevelopmentServicesWhite from 'components/DevelopmentServicesWhite/DevelopmentServicesWhite';
import CaseStudiesBlock from 'components/CaseStudiesBlock/CaseStudiesBlock';

import TellUsAboutMachineSM from '@/images/machineLearning/img_tell_us_about_machineSM.webp';
import MachineSliderBlockBg from '@/images/machineLearning/partnerSlider/img@2x.webp';
import MachineSliderBlockBgTablet from '@/images/machineLearning/partnerSlider/img_bgTablet@2x.webp';
import MachineSliderBlockBgMobile from '@/images/machineLearning/partnerSlider/img_bgMobile@2x.webp';
import TellUsAboutMD from '@/images/img_tell_us_about_md@2x.webp';
import TellUsAboutLG from '@/images/img_tell_us_about_lg.webp';
import CalculateBackgroundSM from '@/images/img_calculate_background_sm.webp';
import CalculateBackgroundMD from '@/images/img_calculate_background_md.webp';
import CalculateBackgroundLG from '@/images/img_calculate_background_lg.webp';
import MachineLMainBlockBg from '@/images/machineLearning/startBlock/img_machine_l_main_block_bg@2x.webp';
import MachineLMainBlockBgTablet from '@/images/machineLearning/startBlock/img_machine_l_main_block_bg_tablet@2x.webp';
import MachineLMainBlockBgMobile from '@/images/machineLearning/startBlock/img_machine_l_main_block_bg_mobile@2x.webp';
import CaseStudiesBg from '@/images/machineLearning/caseStudies/img_caseStudiesBg@2x.webp';
import CaseStudiesBgTablet from '@/images/machineLearning/caseStudies/img_caseStudiesTabletBg@2x.webp';
import CaseStudiesBgMobile from '@/images/machineLearning/caseStudies/img_caseStudiesMobileBg@2x.webp';
import styles from './sass/pageView.module.scss';

function MachineLearningPageView({ pageBlogs }: IPageBlogs) {
  const {
    screenSizes: {
      isMDDevice,
      isSMDevice,
      isXSDevice,
    },
  } = useSelector<IStore, IApp>((state) => state?.app);

  const getBackground = () => {
    const bg:{ [propName:string]: StaticImageData } = {
      main: MachineLMainBlockBg,
      calculate: CalculateBackgroundLG,
      tellUs: TellUsAboutLG,
      ctaBg: CTAImageBg,
      caseStudiesBg: CaseStudiesBg,
    };
    if (isMDDevice || isSMDevice) {
      bg.main = MachineLMainBlockBgTablet;
      bg.calculate = CalculateBackgroundMD;
      bg.tellUs = TellUsAboutMD;
      bg.ctaBg = CTAImageTabletBg;
      bg.caseStudiesBg = CaseStudiesBgTablet;
    } else if (isXSDevice) {
      bg.main = MachineLMainBlockBgMobile;
      bg.calculate = CalculateBackgroundSM;
      bg.tellUs = TellUsAboutMachineSM;
      bg.ctaBg = CTAImageMobileBg;
      bg.caseStudiesBg = CaseStudiesBgMobile;
    }
    return bg;
  };

  return (
    <>
      <MachineLStartBlock
        background={getBackground().main}
        content={machineLStartBlockData.content}
        pageTitle={machineLStartBlockData.pageTitle}
        subTitle={machineLStartBlockData.subTitle}
      />
      <MachineLCalculate
        pageTitle={machineLCalculateData.pageTitle}
        pageText={machineLCalculateData.pageText}
        background={machineLCalculateData.background}
        data={machineLCalculateData.data}
      />
      <TrustUsBlock
        idBtn={ButtonType.LAND2}
        data={machineLTrustUsCardsData}
        title={machineLTrustUsBlockData.title}
        subtitle={machineLTrustUsBlockData.subtitle}
        dropBlockTitle={machineLTrustUsBlockData.lastCardTitle}
        dropBlockBtnTitle={machineLTrustUsBlockData.btnTitle}
        withoutDropBlockBg
        classes={{
          sectionTitle: '!mb-[30px] min-lg:!mb-[40px]',
          CardsBlockClasses: {
            dropBlock: `!relative !p-[20px] !h-auto min-md:!h-auto min-md:!p-[80px_30px] min-xl:!p-[30px]
            min-xl:!h-auto
            after:!content-[""] after:!w-full after:!h-[170px] after:!absolute after:!bottom-0
            after:!left-0 after:!bg-gradient-to-b after:!from-transparent after:!to-black after:!z-[-1]`,
            dropBlockTitle: `!text-[25px] !leading-[35px] !font-medium min-md:!text-[30px] !p-[0_0_40px_0]
            min-md:!leading-[40px] min-md:!text-center
            min-xl:!max-w-full min-xl:!text-left min-xl:!m-0 min-xl:!pb-0`,
            buttonWrapper: '!w-full screen-xl:!max-w-[420px]',
            cardClasses: {
              card: '!h-[470px] min-md:!h-[500px] min-xl:!h-[535px] min-xxxl:!h-[540px]',
            },
          },
        }}
      />
      <MLTableBlock />
      <IndustriesWeServeBlock
        title={machineLIndustriesWeServeBlockData.pageTitle}
        carouselTop={carouselTop}
        carouselBottom={carouselBottom}
        carouselTopClasses={{
          animation: 'animate-machine-projects '
          + 'screen-lg:animate-machine-projects-tablet '
          + 'screen-md:animate-machine-projects-mobile',
        }}
        carouselBottomClasses={{
          animation: 'animate-machine-projects-revert '
            + 'screen-lg:animate-machine-projects-tablet-revert '
            + 'screen-md:animate-machine-projects-mobile-revert',
        }}
        classes={{
          container: '!pt-[120px] screen-md:!pt-[80px]',
        }}
      />
      <ConsultingServices />
      <DevelopmentServicesWhite
        title={machineLDevelopmentServicesData.title}
        data={machineLDevelopmentServicesData.data}
        accordionOnMobile
        withoutBackground
        classes={{
          devServices: '!pt-[80px] !pb-0 screen-md:!pt-[60px]',
          titleBlock: {
            title: `!text-[40px] !leading-[56px] screen-lg:!text-[36px]
            screen-lg:!leading-[46px] screen-md:!text-[20px] screen-md:!leading-[28px]`,
          },
        }}
      />
      <CallToActionComponent
        id={ButtonType.LAND3}
        background={getBackground().ctaBg}
        withButton
        title={(
          <>
            Book your free consultation today and get a working demo
            <br className="hidden screen-lg:block screen-md:hidden" />
            {' '}
            in just one&nbsp;week!
          </>
        )}
        btnText="Get a consultation"
        buttonType={ButtonTypes.PRIMARY}
        classes={{
          cta: '!p-[160px_70px] screen-lg:!p-[120px_30px_80px] screen-md:!p-[80px_30px] screen-sm:!px-[15px]',
          background: `after:!h-[70px] after:!bg-gradient-to-b after:!from-white after:!to-transparent
          after:!from-[15%] after:!to-[100%] after:!top-0 min-lg:after:!h-[110px]`,
          title: '!text-black !max-w-[980px] screen-lg:!max-w-[620px] screen-md:!max-w-none',
        }}
      />
      <CaseStudiesBlock
        sliderIds={[4, 3, 17, 1000]}
        desc={`Dive into real-world examples of how we helped clients transform their
          businesses, improve decision-making, and drive breakthrough results.`}
        background={getBackground().caseStudiesBg}
        classes={{
          container: '!pt-[80px] !pb-[88px] screen-lg:!pb-[80px]',
          bgContainer: `top-auto bottom-0 after:!top-0 after:!bottom-auto after:!bg-gradient-to-b
            !h-[520px] screen-md:!h-[332px]`,
          bgImg: '!object-center',
          title: 'screen-md:!mb-[30px]',
          desc: `!max-w-[910px] screen-lg:!max-w-full mb-[40px] screen-lg:!mb-[60px]
            screen-md:!mb-[40px] screen-md:!text-[16px]/[24px]`,
        }}
      />
      <MachineLServicesHelpText />
      <AboutCardBlock
        data={machineLCardData}
        whiteBlock
        classes={styles}
      />
      <ProcessBlock
        data={machineLProcessAccordionData}
        imagesData={machineLProcessImages}
        subtitle={machineLProcessBlockContent.subtitle}
        firstText={machineLProcessBlockContent.firstText}
        secondText={machineLProcessBlockContent.secondText}
        classes={{
          container: 'min-md:!p-[30px_30px_80px] min-lg:!p-[120px_70px]',
          list: 'pl-[57px] pb-[20px] min-md:pb-[30px] min-md:pl-[52px] min-xl:pb-[30px] min-xl:!pl-[58px] ',
          accordionBlock: 'min-h-auto',
        }}
      />
      <PartnerSection
        pageTitle="Why do clients choose us as an ML software development company?"
        data={machineLPartnerSliderData}
        background={MachineSliderBlockBg}
        backgroundTablet={MachineSliderBlockBgTablet}
        backgroundMobile={MachineSliderBlockBgMobile}
        classes={{
          container: '!py-0 min-lg:!pb-[66px]',
          bgContainer: 'z-[0]',
          bgImage: '!h-auto',
          innerContainer: 'top-0',
          title: 'pt-[160px] pb-[40px] text-[50px] leading-[64px] '
            + 'screen-lg:!pt-[80px] screen-lg:!text-[40px] screen-lg:!leading-[56px] '
            + 'screen-md:!pb-0 screen-md:!text-[25px] screen-md:!leading-[35px] ',
        }}
      />
      <TechnologiesBlock
        pageTitle={machineLTechnologiesBlocksData.pageTitle}
        subTitle={machineLTechnologiesBlocksData.subTitle}
        technologies={getTechnologies(machineLTechnologiesBlocksNames)}
        classes={{
          sectionTitle: '!mb-[30px] min-md:!mb-[40px]',
          sectionSubTitle: `!mt-0 !mb-[20px] !text-[14px] !leading-[20px] min-md:!mb-[40px]
          min-md:!text-[18px] min-md:!leading-[26px] min-lg:!mb-[40px]`,
          technologies: {
            technology: '[&:not(:last-child)]:!border-b-2 !border-black',
            keyTitle: `!w-[32%] !min-w-[280px] min-md:!pt-[40px] min-lg:!pt-[40px]
            min-lg:!float-none min-xl:!float-left`,
            technologiesList: `min-md:!p-[13px_0_28px] min-lg:!left-0 min-lg:!overflow-auto
            min-xl:!p-[20px_0_20px_20px] min-xl:!overflow-auto`,
            item: '!p-[5px_0] min-md:!p-[12px_0] min-lg:!p-[20px_0] [&:last-of-type]:!mr-0',
          },
        }}
      />
      <ServicePackage />
      <CallToActionComponent
        tag="p"
        title={(
          <>
            *free if you do machine learning solutions development
            {' '}
            <span className="inline-block">with Onix</span>
            {' '}
            that is no less than&nbsp;$10,000
          </>
        )}
        classes={{
          cta: `!p-[80px_70px_120px] screen-lg:!p-[60px_30px_80px] screen-md:!p-[60px_30px_80px]
          screen-sm:!p-[60px_15px_80px]`,
          background: 'after:!hidden',
          title: `!max-w-[1078px] !text-[30px] !leading-[40px] !pb-0 screen-lg:!max-w-[620px]
          screen-lg:!text-[24px] screen-lg:!leading-[34px] screen-md:!text-[20px]
          screen-md:!leading-[28px] screen-md:!max-w-none`,
        }}
      />
      {!!pageBlogs?.length && (
        <OurInsights
          title="Related in Blog"
          pageBlogs={pageBlogs}
          classes={{ blogTitle: 'min-md:!text-[24px]/[34px]' }}
        />
      )}
      <CallToActionComponent
        id={ButtonType.LAND4}
        background={getBackground().tellUs}
        withButton
        title={(
          <>
            Tell us about your product idea
            and let the&nbsp;magic&nbsp;unfold.
          </>
        )}
        btnText="Speak to Our Expert"
      />
      <FAQBlock faqData={MachineLFaqMachineData()} />
    </>
  );
}

export default MachineLearningPageView;
