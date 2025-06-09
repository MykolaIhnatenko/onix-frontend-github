import { useSelector } from 'react-redux';
import { StaticImageData } from 'next/image';

import CallToActionComponent from '../../components/CallToActionBlock/CallToActionComponent';
import FAQBlock from '../../components/FAQBlock/FAQBlock';
import ReviewBlock from '../../components/ReviewBlock/ReviewBlock';
import TrustUsBlock from '../MainPage/components/TrustUsBlock';
import OurInsights from '../../components/OurInsightsSection/OurInsights';
import DevopsSolutionsMainBlock from './components/DevopsSolutionsMainBlock';
import DevopsSolutionsTechnologies from './components/DevopsSolutionsTechnologies';
import ClickSlider from '../../components/ClickSlider/ClickSlider';
import AchievementsBlock from '../../components/AchievementBlock/AchievementsBlock';
import NumbersBlock from '../../components/NumbersBlock/NumbersBlock';
import SoftwareProductBlock from '../../components/SoftwareProductBlock/SoftwareProductBlock';
import CertificationBlock from './components/CertificationBlock';
import BenefitsSection from '../BrandingDesignPageView/components/BenefitsSection';
import IStore from '../../store/interfaces/IStore';
import { IApp } from '../../store/app/interfaces/IApp';
import { IPageBlogs } from '../../interfaces/IPages';
import ButtonTypes from '../../constants/ButtonTypes';
import devopsSolutionsTrustUsCardsDataFirst from './data/devopsSolutionsTrustUsCardsDataFirst.json';
import devopsSolutionsTrustUsCardsDataSecond from './data/devopsSolutionsTrustUsCardsDataSecond.json';
import devopsSolutionsNumbersData from './data/devopsSolutionsNumbersData';
import devopsSolutionsQuotesList from './data/devopsSolutionsQuotesList';
import devopsSolutionsTrustUsBlockDataFirst from './data/devopsSolutionsTrustUsBlockDataFirst';
import devopsSolutionsDevelopmentServicesData from './data/devopsSolutionsDevelopmentServicesData';
import devopsSolutionsSoftwareProductData from './data/devopsSolutionsSoftwareProductData';
import devopsSolutionsFaqData from './data/devopsSolutionsFaqData';
import devopsSolutionsBenefitsSectionData from './data/devopsSolutionsBenefitsSectionData';
import devopsSolutionsClickSliderData from './data/devopsSolutionsClickSliderData';
import {
  CardBlockVariant,
  BenefitsSectionVariant,
  ButtonType,
} from '../../constants/enums';
import TellUsAboutLG from '@/images/img_tell_us_about_lg.webp';
import TellUsAboutSM from '@/images/img_lastCtaMobile@2x.webp';
import DevopsSolutionsTechnologiesBg from '@/images/devopsSolutionsPageView/Technologies/img_devopsSolutionsTechnologiesBg@2x.webp';
import DevopsSolutionsTechnologiesBgTablet from '@/images/devopsSolutionsPageView/Technologies/img_devopsSolutionsTechnologiesBgTablet@2x.webp';
import DevopsSolutionsTechnologiesBgMobile from '@/images/devopsSolutionsPageView/Technologies/img_devopsSolutionsTechnologiesBgMobile@2x.webp';
import DevopsHoverBenefitsBg from '@/images/devopsSolutionsPageView/benefitsSection/img_benefitsSectionBg@2x.webp';
import DevopsHoverBenefitsTabletBg from '@/images/devopsSolutionsPageView/benefitsSection/img_benefitsSectionTabletBg@2x.webp';
import DevopsDropBlock2 from '@/images/devopsSolutionsPageView/img_devopsDropBlock2@2x.webp';
import DevopsTellUsTablet from '@/images/img_lastCtaTablet@2x.webp';
import DevelopmentServicesWhite from 'components/DevelopmentServicesWhite/DevelopmentServicesWhite';
import CaseStudiesBlock from 'components/CaseStudiesBlock/CaseStudiesBlock';
import SalesforceCaseStudiesBg from '@/images/salesforcePage/caseStudies/img_caseStudiesSalesforceBg.webp';
import SalesforceCaseStudiesTabletBg from '@/images/salesforcePage/caseStudies/img_caseStudiesSalesforceTabletBg.webp';
import SalesforceCaseStudiesMobileBg from '@/images/caseStudiesBlock/img_bgMobile.webp';

function DevopsSolutionsPageView({ pageBlogs }: IPageBlogs) {
  const {
    screenSizes: {
      isMDDevice,
      isSMDevice,
      isXSDevice,
    },
  } = useSelector<IStore, IApp>((state) => state?.app);

  const getBackground = () => {
    const bg:{ [propName:string]: StaticImageData } = {
      tellUs: TellUsAboutLG,
      devopsSolutionsTechnologiesBg: DevopsSolutionsTechnologiesBg,
      benefits: DevopsHoverBenefitsBg,
      caseStudiesBg: SalesforceCaseStudiesBg,
    };
    if (isMDDevice || isSMDevice) {
      bg.tellUs = DevopsTellUsTablet;
      bg.devopsSolutionsTechnologiesBg = DevopsSolutionsTechnologiesBgTablet;
      bg.benefits = DevopsHoverBenefitsTabletBg;
      bg.caseStudiesBg = SalesforceCaseStudiesTabletBg;
    } else if (isXSDevice) {
      bg.tellUs = TellUsAboutSM;
      bg.devopsSolutionsTechnologiesBg = DevopsSolutionsTechnologiesBgMobile;
      bg.caseStudiesBg = SalesforceCaseStudiesMobileBg;
    }
    return bg;
  };

  return (
    <>
      <DevopsSolutionsMainBlock />
      <CallToActionComponent
        id={ButtonType.LAND}
        withButton
        title={(
          <>
            Let&apos;s tie up your software development and IT operations to ensure continuous
            delivery, perfect in-house workflows, and consistently high software&nbsp;quality!
          </>
        )}
        btnText="Talk to our expert"
        buttonType={ButtonTypes.PRIMARY}
        classes={{
          cta: `!bg-white !p-[120px_70px] screen-xxxl:!p-[120px_80px]
            screen-lg:!p-[80px_30px] screen-md:!p-[80px_30px]
            screen-sm:!p-[80px_15px]`,
          background: 'after:!hidden',
          title: `!text-black !max-w-[1080px] !text-[40px] !leading-[56px]
            screen-lg:!max-w-[708px] screen-lg:!text-[30px] screen-lg:!leading-[40px]
            screen-md:!pb-[30px] screen-md:!text-[25px] screen-md:!leading-[35px]`,
          btn: '!max-w-[460px] screen-md:!max-w-[330px]',
        }}
      />
      <NumbersBlock
        data={devopsSolutionsNumbersData}
        classes={{
          table: `!bg-black !m-0 !text-white !p-[96px_70px_0]
            min-xxxl:!p-[96px_80px_0]
            screen-lg:!p-[40px_30px_0]
            screen-md:!p-[60px_15px_20px]`,
          rowClasses: {
            tableRow: `!border-b-[2px] !border-solid !border-white
              screen-md:!p-[20px_0] last:!border-b-0`,
          },
        }}
      />
      <AchievementsBlock />
      <ReviewBlock
        quotesList={devopsSolutionsQuotesList}
      />
      <ClickSlider
        data={devopsSolutionsClickSliderData}
      />
      <TrustUsBlock
        data={devopsSolutionsTrustUsCardsDataFirst}
        title={devopsSolutionsTrustUsBlockDataFirst.title}
        subtitle={devopsSolutionsTrustUsBlockDataFirst.subtitle}
        dropBlockTitle={devopsSolutionsTrustUsBlockDataFirst.lastCardTitle}
        dropBlockBtnTitle={devopsSolutionsTrustUsBlockDataFirst.btnTitle}
        variant={CardBlockVariant.DEVOPS_SOLUTIONS}
        classes={{
          dropBlock: `screen-lg:!h-auto screen-lg:!py-[80px] screen-lg:!px-[30px]
          screen-md:!h-[360px] screen-md:!p-[20px]`,
          buttonWrapper: '!max-w-[420px] screen-md:!max-w-none',
          button: `!max-w-[538px] screen-lg:!max-w-[538px] screen-md:text-center
          screen-md:py-[15px] screen-md:px-[6px]`,
        }}
        disableBg
        mobileBgVariant
        withoutDropBlockBg
      />
      <CertificationBlock />
      <SoftwareProductBlock
        mainText={devopsSolutionsSoftwareProductData.mainText}
        data={devopsSolutionsSoftwareProductData.data}
        withoutAccordion
      />
      <BenefitsSection
        background={getBackground().benefits}
        title="With our DevOps services, you'll get"
        data={devopsSolutionsBenefitsSectionData}
        variant={BenefitsSectionVariant.DEVOPS_SOLUTIONS}
      />
      <DevelopmentServicesWhite
        title={devopsSolutionsDevelopmentServicesData.title}
        description={devopsSolutionsDevelopmentServicesData.desc}
        data={devopsSolutionsDevelopmentServicesData.data}
        classes={{
          devServices: 'screen-md:!p-[80px_0]',
          titleBlock: {
            desc: '!max-w-[1080px] min-xxxl:!max-w-[1480px]',
          },
          item: {
            containerItemLeft: '!flex-col !justify-end',
            containerItemRight: '!flex !flex-col !justify-end',
            number: `!text-[96px] !leading-[132px] !font-normal !mr-0 !w-full 
            screen-lg:!text-[50px] screen-lg:!leading-[64px] screen-lg:!font-medium screen-lg:!mb-[10px] 
            screen-md:!text-[40px] screen-md:!leading-[50px] screen-md:!mb-[5px]`,
            title: '!text-[30px] !leading-[40px] screen-md:!text-[20px] screen-md:!leading-[28px]',
          },
        }}
      />
      <CaseStudiesBlock
        sliderIds={[8, 9, 10, 1000]}
        desc={`Discover how we helped our clients to improve their business's
          operational efficiencies and ensure a faster development cycle.`}
        background={getBackground().caseStudiesBg}
        classes={{
          container: '!pt-[80px] !pb-[88px] screen-lg:!pb-[80px]',
          bgContainer: '!h-[560px] screen-lg:!h-[450px] screen-md:!h-[250px]',
          bgImg: '',
          title: 'screen-lg:!mb-[30px]',
          desc: '!max-w-[847px] screen-md:!max-w-full !mb-[40px] screen-md:!text-[16px]/[24px]',
        }}
      />
      <DevopsSolutionsTechnologies
        background={getBackground().devopsSolutionsTechnologiesBg}
        text="To deliver products of the highest quality, we use a reliable and top-notch set of technologies."
        title="Technologies we work with but not limited to"
      />
      <TrustUsBlock
        idBtn={ButtonType.LAND2}
        data={devopsSolutionsTrustUsCardsDataSecond}
        title="Why choose Onix for DevOps services"
        dropBlockTitle="Let's optimize your software development and delivery with our DevOps services!"
        dropBlockBtnTitle="Talk to our experts"
        variant={CardBlockVariant.DEVOPS_SOLUTIONS_SECOND}
        classes={{
          dropBlock: `screen-lg:!h-auto screen-lg:!py-[80px] screen-lg:!px-[30px]
          screen-md:!h-[360px] screen-md:!p-[20px]`,
          buttonWrapper: '!max-w-[420px] screen-md:!max-w-none',
          button: 'screen-md:!text-center screen-md:!py-[16px] screen-md:!px-[6px]',
        }}
        dropBlockBgVariant={DevopsDropBlock2}
      />
      {!!pageBlogs?.length && (
        <OurInsights pageBlogs={pageBlogs} />
      )}
      <CallToActionComponent
        id={ButtonType.LAND3}
        background={getBackground().tellUs}
        withButton
        title={(
          <>
            Tell us about your product idea and let the&nbsp;magic&nbsp;unfold.
          </>
        )}
        btnText="Speak to Our Expert"
      />
      <FAQBlock faqData={devopsSolutionsFaqData} />
    </>
  );
}

export default DevopsSolutionsPageView;
