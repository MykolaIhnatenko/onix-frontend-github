import { useSelector } from 'react-redux';
import { StaticImageData } from 'next/image';

import ListWhiteSection from './components/ListWhiteSection';
import GatherGroupUniquenessSection from './components/GatherGroupUniquenessSection';
import StickySetCardsSection from '../../../components/CasesComponents/StickySetCardsSection/StickySetCardsSection';
import GatherGroupDevelopmentSection from './components/GatherGroupDevelopmentSection';
import GatherGroupTechnologiesSection from './components/GatherGroupTechnologiesSection';
import GatherGroupProvideSection from './components/GatherGroupProvideSection';
import GatherGroupDuringSection from './components/GatherGroupDuringSection';
import GatherGroupImageSection from './components/GatherGroupImageSection';
import ScrollTextAnimation from '../../../components/ScrollTextAnimation/ScrollTextAnimation';
import GatherGroupMainSection from './components/GatherGroupMainSection';
import GatherGroupDesignSection from './components/GatherGroupDesignSection';
import ResultsBlock from '../../../components/ResultsBlock/ResultsBlock';
import GatherGroupSolutionsSection from './components/GatherGroupSolutionsSection';
import VRARCallToActionComponent from '../../../components/VRARCallToActionBlock/VRARCallToActionComponent';
import { generalSans, ibmPlexMono } from '../../../fonts/MainFonts';
import {
  BorderedNumberCardBgVariant,
  ButtonType,
  ListWhiteSectionVariant,
} from '../../../constants/enums';
import IPageStatus from 'interfaces/IPageStatus';
import IStore from '../../../store/interfaces/IStore';
import { IApp } from '../../../store/app/interfaces/IApp';
import digitalHealthcareResultsBlockData from './data/digitalHealthcareResultsBlockData';
import digitalHealthcareSecondResultsBlockData from './data/digitalHealthcareSecondResultsBlockData';
import stickySetCardsData from './data/stickySetCardsData';
import stickySetCardsSecondData from './data/stickySetCardsSecondData';
import digitalHealthcareThirdResultsBlockData from './data/digitalHealthcareThirdResultsBlockData';
import solutions from './data/solutions';
import serviceWorks from './data/serviceWorks';
import buildingMVP from './data/buildingMVP';
import digitalHealthcareHowOnix from './data/digitalHealthcareHowOnix';
import digitalHealthcareBusinessData from './data/digitalHealthcareBusinessData';
import digitalHealthcareScrollTextData from './data/digitalHealthcareScrollTextData';
import CaseStudiesBlockForCases from 'components/CaseStudiesBlockForCases/CaseStudiesBlockForCases';
import TestimonialTextSection from 'components/TestimonialTextSection/TestimonialTextSection';
import testimonialData from './data/testimonialData';
import resultsBlockWhite from 'constants/tailwindStyle';
import AboutProjectSection from 'components/AboutProject/AboutProject';
import BusinessContext from 'components/BusinessContext/BusinessContext';

import CTABgSecond from '@/images/caseStudiesPage/DigitalHealthcareCaseStudy/contactUsSection/img_bg2@2x.webp';
import CTABgTabletSecond
  from '@/images/caseStudiesPage/DigitalHealthcareCaseStudy/contactUsSection/img_bg-tablet2@2x.webp';
import CTABgMobileSecond
  from '@/images/caseStudiesPage/DigitalHealthcareCaseStudy/contactUsSection/img_bg-mobile2@2x.webp';
import StickySetCardsBg from '@/images/caseStudiesPage/DigitalHealthcareCaseStudy/userGroupSection/img_bg@2x.webp';
import StickySetCardsBgTablet
  from '@/images/caseStudiesPage/DigitalHealthcareCaseStudy/userGroupSection/img_bg-tablet@2x.webp';
import StickySetCardsBgMobile
  from '@/images/caseStudiesPage/DigitalHealthcareCaseStudy/userGroupSection/img_bg-mobile@2x.webp';
import StickySetCardsSecondBg
  from '@/images/caseStudiesPage/DigitalHealthcareCaseStudy/userRolesSection/img_bg@2x.webp';
import StickySetCardsSecondBgTablet
  from '@/images/caseStudiesPage/DigitalHealthcareCaseStudy/userRolesSection/img_bg-tablet@2x.webp';
import StickySetCardsSecondBgMobile
  from '@/images/caseStudiesPage/DigitalHealthcareCaseStudy/userRolesSection/img_bg-mobile@2x.webp';
import ResultsBlockBg from '@/images/ResultsBlockBg/img_resultsBlockBlackBg@2x.webp';
import ResultsBlockTabletBg from '@/images/ResultsBlockBg/img_resultsBlockBlackTabletBg@2x.webp';
import ResultsBlockMobileBg from '@/images/ResultsBlockBg/img_resultsBlockBlackMobileBg@2x.webp';
import ResultsBlockXXXLBg from '@/images/ResultsBlockBg/img_resultsBlockBlackXXXLBg@2x.webp';
import CTAFirstBg from '@/images/ResultsBlockBg/img_ctaBlackBg@2x.webp';
import CTAFirstTabletBg from '@/images/ResultsBlockBg/img_ctaBlackTabletBg@2x.webp';
import CTAFirstMobileBg from '@/images/ResultsBlockBg/img_ctaBlackMobileBg@2x.webp';
import CTAFirstXXXLBg from '@/images/ResultsBlockBg/img_ctaBlackXXXLBg@2x.webp';
import styles from './sass/gatherGropPageView.module.scss';

function DigitalHealthcarePageView({ saleUrl }: IPageStatus) {
  const {
    screenSizes: {
      isSMDevice,
      isXSDevice,
      isMDDevice,
      isXXXLDevice,
    },
  } = useSelector<IStore, IApp>((state) => state?.app);

  const getBackground = () => {
    const bg: { [propName: string]: StaticImageData } = {
      resultsBlock: ResultsBlockBg,
      ctaFirst: CTAFirstBg,
      stickyCardsBg: StickySetCardsBg,
      stickyCardsBgSecond: StickySetCardsSecondBg,
      ctaSecond: CTABgSecond,
    };
    if (isXXXLDevice) {
      bg.resultsBlock = ResultsBlockXXXLBg;
      bg.ctaFirst = CTAFirstXXXLBg;
    } else if (isMDDevice) {
      bg.resultsBlock = ResultsBlockTabletBg;
      bg.ctaFirst = CTAFirstTabletBg;
      bg.stickyCardsBg = StickySetCardsBgTablet;
      bg.stickyCardsBgSecond = StickySetCardsSecondBgTablet;
      bg.ctaSecond = CTABgTabletSecond;
    } else if (isXSDevice || isSMDevice) {
      bg.resultsBlock = ResultsBlockMobileBg;
      bg.ctaFirst = CTAFirstMobileBg;
      bg.stickyCardsBg = StickySetCardsBgMobile;
      bg.stickyCardsBgSecond = StickySetCardsSecondBgMobile;
      bg.ctaSecond = CTABgMobileSecond;
    }
    return bg;
  };

  return (
    <div className={`${styles.gatherGroup} ${generalSans.variable} ${ibmPlexMono.variable}`}>
      <GatherGroupMainSection />
      <AboutProjectSection
        title={digitalHealthcareHowOnix.blockTitle}
        content={digitalHealthcareHowOnix.data}
      />
      <ResultsBlock
        name={digitalHealthcareResultsBlockData.name}
        title={digitalHealthcareResultsBlockData.title}
        content={digitalHealthcareResultsBlockData.content}
        classes={resultsBlockWhite}
      />
      <ResultsBlock
        name={digitalHealthcareSecondResultsBlockData.name}
        title={digitalHealthcareSecondResultsBlockData.title}
        text={digitalHealthcareSecondResultsBlockData.text}
        content={digitalHealthcareSecondResultsBlockData.content}
        background={getBackground().resultsBlock}
        productScope
      />
      {!saleUrl && (
        <VRARCallToActionComponent
          id={ButtonType.CASE}
          title="Have a project in mind? Let's talk!"
          btnText="Get in touch with us"
          withButton
          background={getBackground().ctaFirst}
          classes={{
            title: 'screen-lg:!max-w-[500px] screen-md:!max-w-[270px] screen-md:!pb-[30px]',
          }}
        />
      )}
      <ListWhiteSection
        subtitle="The product consists of two main solutions:"
        content={solutions}
      />
      <GatherGroupUniquenessSection />
      <StickySetCardsSection
        background={getBackground().stickyCardsBg}
        title="The Onix team crafted a reliable solution that benefits four user groups:"
        content={stickySetCardsData}
        variant={BorderedNumberCardBgVariant.TOP_BG}
        classesComponent={{
          container: 'border-2 border-color-white bg-color-black py-[30px] px-[40px] min-h-[344px] '
          + 'screen-md:py-[20px] screen-md:pr-[35px] screen-md:pl-[17px] screen-md:min-h-[354px]',
          content: '',
          title: '!my-0 !mx-0 !text-color-white !pb-[24px] !text-[28px] !leading-[1.43] '
          + 'screen-md:!text-[18px] screen-md:!leading-[1.43] screen-md:!pb-[16px]',
          text: 'my-0 mx-0 text-color-white text-[18px] leading-[1.44] '
          + 'screen-lg:!text-[18px] screen-lg:!leading-[1.44] screen-md:!text-[16px] screen-md:!leading-[1.5]',
          number: '!text-color-white',
        }}
      />
      <GatherGroupImageSection />
      <StickySetCardsSection
        title="While running the discovery phase, we singled out five key roles on the platform:"
        content={stickySetCardsSecondData}
        background={getBackground().stickyCardsBgSecond}
        variant={BorderedNumberCardBgVariant.BOTTOM_BG}
        classesComponent={{
          container: 'border-2 border-color-white bg-color-black py-[30px] px-[40px] min-h-[344px] '
          + 'screen-md:py-[20px] screen-md:pr-[35px] screen-md:pl-[17px] screen-md:min-h-[354px]',
          content: '',
          title: '!my-0 !mx-0 !text-color-white !pb-[24px] !text-[28px] !leading-[1.43] '
          + 'screen-md:!text-[18px] screen-md:!leading-[1.43] screen-md:!pb-[16px]',
          text: 'my-0 mx-0 text-color-white text-[18px] leading-[1.44] '
          + 'screen-lg:!text-[18px] screen-lg:!leading-[1.44] screen-md:!text-[16px] screen-md:!leading-[1.5]',
          number: '!text-color-white',
        }}
      />
      <ListWhiteSection
        subtitle="How digital health company service works"
        content={serviceWorks}
        variant={ListWhiteSectionVariant.SECOND}
      />
      <GatherGroupSolutionsSection />
      <ResultsBlock
        name={digitalHealthcareThirdResultsBlockData.name}
        title={digitalHealthcareThirdResultsBlockData.title}
        content={digitalHealthcareThirdResultsBlockData.content}
        background={getBackground().resultsBlock}
      />
      <GatherGroupDuringSection />
      {!saleUrl && (
        <VRARCallToActionComponent
          id={ButtonType.CASE2}
          title="Using our Product Discovery phase services, you can validate
          your product concept and test its market feasibility and viability!"
          btnText="Get in touch with us"
          withButton
          background={getBackground().ctaSecond}
          classes={{
            background: `after:content-[""] after:absolute after:top-0 after:left-0 after:w-full
            after:h-[70px] after:bg-gradient-to-t
            from-[rgba(253,253,253,0)_15%] to-black min-lg:after:h-[110px]`,
            title: '!max-w-[1078px] screen-lg:!max-w-[628px]',
          }}
        />
      )}
      <ListWhiteSection
        title="[ Building MVP ]"
        subtitle="Onix started this project from scratch, using all the previous materials as references."
        text="Сreating a minimum viable product (MVP) allowed us to understand the target audience's needs
        and reduce time to market."
        content={buildingMVP}
        variant={ListWhiteSectionVariant.THIRD}
      />
      <BusinessContext
        upTitle={digitalHealthcareBusinessData.upTitle}
        title={digitalHealthcareBusinessData.title}
        leftContent={digitalHealthcareBusinessData.firstText}
        rightContent={digitalHealthcareBusinessData.secondText}
      />
      <GatherGroupDesignSection />
      <GatherGroupDevelopmentSection />
      <GatherGroupTechnologiesSection />
      <ScrollTextAnimation
        textList={digitalHealthcareScrollTextData.textList}
        scaleIndex={1.5}
        scaleIndexMobile={1.5}
        classes={{ container: 'pt-0' }}
      />
      <TestimonialTextSection
        testimonialText={testimonialData.testimonialText}
        authorPosition={testimonialData.authorPosition}
      />
      <GatherGroupProvideSection saleUrl={saleUrl} />
      <CaseStudiesBlockForCases
        sliderIds={[28, 25, 58, 1000]}
        saleUrl={saleUrl}
      />
      {!saleUrl && (
        <VRARCallToActionComponent
          id={ButtonType.CASE3}
          title="What is your app idea?"
          btnText="Tell us about your project"
          btnFontSizeSmallOnMobile
          withButton
          classes={{
            cta: '!pt-0',
            btn: '!text-[16px]',
          }}
        />
      )}
    </div>
  );
}

export default DigitalHealthcarePageView;
