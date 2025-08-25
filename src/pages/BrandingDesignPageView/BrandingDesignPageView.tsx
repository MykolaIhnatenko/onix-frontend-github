import { useSelector } from 'react-redux';
import { StaticImageData } from 'next/image';

import AchievementsBlock from '../../components/AchievementBlock/AchievementsBlock';
import FAQBlock from '../../components/FAQBlock/FAQBlock';
import OurInsights from '../../components/OurInsightsSection/OurInsights';
import ReviewBlock from '../../components/ReviewBlock/ReviewBlock';
import CallToActionComponent from '../../components/CallToActionBlock/CallToActionComponent';
import ButtonTypes from '../../constants/ButtonTypes';
import NumbersBlock from '../../components/NumbersBlock/NumbersBlock';
import BDTrustUsBlock from './components/BDTrustUsBlock';
import BenefitsSection from './components/BenefitsSection';
import QuestionSolutionBlock from './components/QuestionSolutionBlock';
import SolutionsTable from './components/SolutionsTable';
import BrandingDesignMainSection from './components/BrandingDesignMainSection';
import StatisticsBlock from './components/StatisticsBlock';
import BDMainSectionMobile from './components/BDMainSectionMobile';
import trustUsCardsData from './data/trustUsCardsData.json';
import numbersData from './data/numbersData';
import faqData from './data/faqData';
import quotesList from './data/quotesList';
import benefitsSectionData from './data/benefitsSectionData';
import questionSolutionData from './data/questionSolutionBlockData';
import solutionTableData from './data/solutionTableData';
import {
  ButtonType,
} from '../../constants/enums';
import { IPageBlogs } from '../../interfaces/IPages';
import IStore from '../../store/interfaces/IStore';
import { IApp } from '../../store/app/interfaces/IApp';
import CooperateBlock from 'components/CooperateBlock/CooperateBlock';
import cooperateList from './data/servicesWeOfferData';
import CaseStudiesBlock from 'components/CaseStudiesBlock/CaseStudiesBlock';
import bdCaseStudiesData from './data/bdCaseStudiesData';
import IAchievements from '../../interfaces/IAchievements';

import BDBenefitsSectionMobile from '@/images/brandingDesign/img_bd_benefits_section_mobile.webp';
import BDBenefitsSectionTablet from '@/images/brandingDesign/img_bd_benefits_section_tablet.webp';
import BDBenefitsSectionBG from '@/images/brandingDesign/img_bd_benefits_sectionBG.webp';
import BDCallBottomDesktop from '@/images/brandingDesign/img_bd_call_bottom_desktop.webp';
import BDCallBottomTablet from '@/images/img_lastCtaTablet@2x.webp';
import BDCallBottomMobile from '@/images/img_lastCtaMobile@2x.webp';
import BDCallCenterDesktop from '@/images/brandingDesign/img_bd_call_center_desktop@2x.webp';
import BDCallCenterTablet from '@/images/brandingDesign/img_bd_call_center_tablet.webp';
import BDCallCenterMobile from '@/images/brandingDesign/img_bd_call_center_mobile.webp';
import BDCallTopDesktop from '@/images/brandingDesign/img_bd_call_top_desktop.webp';
import BDCallTopTablet from '@/images/brandingDesign/img_bd_call_top_tablet.webp';
import BDCallTopMobile from '@/images/brandingDesign/img_bd_call_top_mobile.webp';
import CaseStudiesBg from '@/images/caseStudiesBlock/img_bottomBg.webp';
import CaseStudiesBgTablet from '@/images/caseStudiesBlock/img_bottomBgTablet.webp';

interface IBackground {
  first: StaticImageData | undefined;
  second: StaticImageData | undefined;
  third: StaticImageData | undefined;
  fourth: StaticImageData | undefined;
  caseStudiesBg: StaticImageData | undefined;
}

function BrandingDesignPageView({ pageBlogs, achievements }: IPageBlogs & IAchievements) {
  const { screenSizes: { isMDDevice, isSMDevice, isXSDevice } } = useSelector<IStore, IApp>((state) => state?.app);

  const getBackground = () => {
    const bg: IBackground = {
      first: BDCallTopDesktop,
      second: BDCallCenterDesktop,
      third: BDCallBottomDesktop,
      fourth: BDBenefitsSectionBG,
      caseStudiesBg: CaseStudiesBg,
    };

    if (isMDDevice) {
      bg.first = BDCallTopTablet;
      bg.second = BDCallCenterTablet;
      bg.third = BDCallBottomTablet;
      bg.fourth = BDBenefitsSectionTablet;
      bg.caseStudiesBg = CaseStudiesBgTablet;
    } else if (isXSDevice || isSMDevice) {
      bg.first = BDCallTopMobile;
      bg.second = BDCallCenterMobile;
      bg.third = BDCallBottomMobile;
      bg.fourth = BDBenefitsSectionMobile;
      bg.caseStudiesBg = CaseStudiesBgTablet;
    }
    return bg;
  };

  return (
    <>
      {!isSMDevice && !isXSDevice ? <BrandingDesignMainSection /> : <BDMainSectionMobile />}
      <CallToActionComponent
        id={ButtonType.LAND}
        background={getBackground().first}
        withButton
        title={(
          <>
            Whether you&apos;re just starting your business or looking to revamp your
            existing branding strategy, we can help you create a powerful and impactful brand&nbsp;identity!
          </>
        )}
        btnText="Contact our specialists"
        buttonType={ButtonTypes.PRIMARY}
        classes={{
          cta: 'px-[70px]',
          background: 'after:!content-none',
          title: `!text-black !max-w-[1200px] !text-[40px] !leading-[56px]
          screen-md:!text-[20px] screen-md:!leading-[28px]`,
        }}
      />
      <NumbersBlock
        data={numbersData}
        classes={{
          table: `!bg-black !m-0 !text-white !p-[55px_70px_45px]
            min-xxxl:!pl-[80px] min-xxxl:!pr-[80px]
            screen-lg:!p-[50px_30px_80px]
            screen-md:!p-[60px_15px_40px]`,
          rowClasses: {
            tableRow: `!p-[25px_0_0] last:!border-t-[2px] last:!border-solid last:!border-white first:!pt-0
              screen-lg:!pt-[30px] screen-md:!pt-[20px]`,
          },
        }}
      />
      <AchievementsBlock achievements={achievements} />
      <ReviewBlock
        quotesList={quotesList}
        classes={{
          container: 'screen-lg:!mx-[30px] screen-md:!mx-[15px]',
        }}
      />
      <QuestionSolutionBlock data={questionSolutionData} />
      <CooperateBlock
        title="Branding design services we&nbsp;offer"
        subtitle={`From developing a compelling brand strategy to designing logos, packaging,
          and other visual elements, we work with you to create a cohesive and consistent brand
          image that resonates with your customers.`}
        data={cooperateList}
        whiteTheme
        classes={{
          title: 'max-w-[630px]',
          subTitle: '!mb-[80px] screen-lg:!mb-[60px] screen-md:!mb-[40px]',
          itemTextContainer: 'max-w-[908px]',
          accordion: 'min-xl:h-[742px]',
          itemImage: 'min-xl:max-h-[426px] min-xl:max-w-[908px]',
          itemText: 'mb-[40px] screen-md:mb-[20px]',
        }}
      />
      <CaseStudiesBlock
        sliderIds={[51, 37, 34, 1000]}
        desc={bdCaseStudiesData.desc}
        desc2={bdCaseStudiesData.desc2}
        background={getBackground().caseStudiesBg}
        classes={{
          container: '!pt-[90px] screen-md:!pt-[80px] !pb-[88px] screen-lg:!pb-[80px]',
          bgContainer: 'top-auto bottom-0 after:!top-0 after:!bottom-auto after:!bg-gradient-to-b',
          bgImg: '!object-center',
          title: 'screen-md:!mb-[30px]',
          desc: `max-w-[725px] min-xxxl:max-w-[705px] screen-lg:max-w-[805px]
            screen-md:max-w-full mb-[40px] screen-lg:!mb-[30px]`,
          desc2: `max-w-[725px] min-xxxl:max-w-[705px] screen-lg:max-w-[805px]
            screen-md:max-w-full !mb-[40px] screen-lg:!ml-0`,
        }}
      />
      <StatisticsBlock />
      <BenefitsSection
        background={getBackground().fourth}
        title="With our branding design services you'll get:"
        data={benefitsSectionData}
      />
      <SolutionsTable data={solutionTableData} />
      <CallToActionComponent
        id={ButtonType.LAND3}
        background={getBackground().second}
        withButton
        title={(
          <>
            Ready to make your mark in the market? Let&apos;s create a branding
            design that speaks to your audience and&nbsp;drives&nbsp;results!
          </>
        )}
        content={(
          <>
            Throughout our branding design services, we collaborate closely with you to create a
            brand identity that reflects your vision and sets you apart from the&nbsp;competition!
          </>
        )}
        btnText="Contact our specialists"
        buttonType={ButtonTypes.LIGHT}
        classes={{
          background: '!max-h-[780px] !bottom-0 after:!content-none img:screen-md:!object-bottom',
          title: '!max-w-[1038px] screen-lg:!pb-[40px]',
          content: `!max-w-[667px] !text-[20px] !leading-[28px] !pb-[60px] screen-lg:!max-w-[632px]
          screen-lg:!pb-[40px] screen-md:!text-[16px] screen-md:!leading-[24px] screen-md:!max-w-auto`,
        }}
      />
      <BDTrustUsBlock
        data={trustUsCardsData}
        title="Why choose Onix as your brand identity design company"
      />
      {pageBlogs?.length !== 0 && (<OurInsights pageBlogs={pageBlogs} />)}
      <CallToActionComponent
        id={ButtonType.LAND4}
        background={getBackground().third}
        withButton
        title={(
          <>
            Tell us about your product idea
            and let the&nbsp;magic&nbsp;unfold.
          </>
        )}
        btnText="Speak to Our Expert"
        buttonType={ButtonTypes.LIGHT}
      />
      <FAQBlock faqData={faqData} />
    </>
  );
}

export default BrandingDesignPageView;
