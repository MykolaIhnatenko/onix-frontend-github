import { useAppSelector } from 'hook/reduxToolkit';
import ReviewBlock from '../../components/ReviewBlock/ReviewBlock';
import CallToActionComponent from '../../components/CallToActionBlock/CallToActionComponent';
import quotesList from './data/testimonialsData';
import ProductDiscoveryCooperateBlock from '@/images/productDiscovery/img_CooperateBlockBg@2x.webp';
import ProductDiscoveryCooperateBlockTablet from '@/images/productDiscovery/img_CooperateBlockTabletBg@2x.webp';
import ProductDiscoveryCooperateBlockMobile from '@/images/productDiscovery/img_CooperateBlockMobileBg@2x.webp';
import PDCTAFirstImage from '@/images/productDiscovery/img_productDiscoery_cta_bg_1.webp';
import PDCTAFirstTabletImage from '@/images/productDiscovery/img_productDiscoery_cta_bg_1_tablet.webp';
import PDCTAFirstMobileImage from '@/images/productDiscovery/img_productDiscoery_cta_bg_1_mobile.webp';
import PDCTASecondImage from '@/images/productDiscovery/img_productDiscoery_cta_bg_2@2x.webp';
import PDCTASecondTabletImage from '@/images/productDiscovery/img_productDiscoery_cta_bg_2_tablet@2x.webp';
import PDCTASecondMobileImage from '@/images/productDiscovery/img_productDiscoery_cta_bg_2_mobile@2x.webp';
import PDCTAThirdImage from '@/images/productDiscovery/img_productDiscoery_cta_bg_3@2x.webp';
import PDCTAThirdTabletImage from '@/images/productDiscovery/img_productDiscoery_cta_bg_3_tablet@2x.webp';
import PDCTAThirdMobileImage from '@/images/productDiscovery/img_productDiscoery_cta_bg_3_mobile@2x.webp';
import PDCTAFourthImage from '@/images/productDiscovery/img_productDiscoery_cta_bg_4.webp';
import PDCTAFourthTabletImage from '@/images/productDiscovery/img_productDiscoery_cta_bg_4_tablet.webp';
import PDCTAFourthMobileImage from '@/images/productDiscovery/img_productDiscoery_cta_bg_4_mobile.webp';
import PDCTAFifthImage from '@/images/productDiscovery/img_productDiscoery_cta_bg_5.webp';
import PDCTAFifthTabletImage from '@/images/productDiscovery/img_productDiscoery_cta_bg_5_tablet.webp';
import PDCTAFifthMobileImage from '@/images/productDiscovery/img_productDiscoery_cta_bg_5_mobile.webp';
import CaseStudiesBg from '../../assets/images/productDiscovery/caseStudies/img_caseStudyBg.webp';
import CaseStudiesBgTablet from '../../assets/images/productDiscovery/caseStudies/img_caseStudyBgTablet.webp';
import CaseStudiesBgMobile from '../../assets/images/productDiscovery/caseStudies/img_caseStudyBgMobile.webp';
import ModelsSectionBg from '../../assets/images/productDiscovery/afterPD/img_after_PD.webp';
import ModelsSectionBgTablet from '../../assets/images/productDiscovery/afterPD/img_after_PD_tablet.webp';
import ModelsSectionBgMobile from '../../assets/images/productDiscovery/afterPD/img_after_PD_mobile.webp';
import { IPageBlogs } from '../../interfaces/IPages';
import FAQBlock from '../../components/FAQBlock/FAQBlock';
import faqData from './data/faqData';
import {
  ButtonType,
} from '../../constants/enums';
import OurInsights from '../../components/OurInsightsSection/OurInsights';
import ProductDiscoveryMainSection from './components/ProductDiscoveryMainSection';
import ButtonTypes from '../../constants/ButtonTypes';
import ProductDiscoveryHelpsYouSection from './components/ProductDiscoveryHelpsYouSection';
import WhenToUsePDPhase from './components/WhenToUsePDPhase';
import ProcessBlock from '../../components/ProcessBlock/ProcessBlock';
import { processAccordionData, processBlockContent, processImages } from './data/processData';
import cooperateList from './data/cooperateList';
import CooperateBlock from '../../components/CooperateBlock/CooperateBlock';
import servicesData from './data/developmentServices';
import ProductDiscoveryNumbersSection from './components/ProductDiscoveryNumbersSection';
import OurExpertiseSection from '../../components/OurExpertiseSection/OurExpertiseSection';
import ourExpertiseSectionContentData from './data/ourExpertiseSectionContentData';
import ProcessDiscoveryHowItWorks from './components/ProcessDiscoveryHowItWorks';
import PDPrimaryDeliverables from './components/PDPrimaryDeliverables';
import ModelsSection from 'components/ModelsSection/ModelsSection';
import modelsData from './data/PDModelsSectionData';
import DevelopmentServicesWhite from 'components/DevelopmentServicesWhite/DevelopmentServicesWhite';
import CaseStudiesBlock from 'components/CaseStudiesBlock/CaseStudiesBlock';

function ProductDiscoveryPageView({ pageBlogs }: IPageBlogs) {
  const {
    screenSizes: {
      isSMDevice,
      isXSDevice,
      isMDDevice,
    },
  } = useAppSelector((state) => state?.app);

  const getBackground = () => {
    const bg = {
      First: PDCTAFirstImage,
      Second: PDCTASecondImage,
      Third: PDCTAThirdImage,
      Fourth: PDCTAFourthImage,
      Fifth: PDCTAFifthImage,
      cooperate: ProductDiscoveryCooperateBlock,
      caseStudies: CaseStudiesBg,
      modelsBg: ModelsSectionBg,
    };

    if (isMDDevice) {
      bg.First = PDCTAFirstTabletImage;
      bg.Second = PDCTASecondTabletImage;
      bg.Third = PDCTAThirdTabletImage;
      bg.Fourth = PDCTAFourthTabletImage;
      bg.Fifth = PDCTAFifthTabletImage;
      bg.cooperate = ProductDiscoveryCooperateBlockTablet;
      bg.caseStudies = CaseStudiesBgTablet;
      bg.modelsBg = ModelsSectionBgTablet;
    } else if (isXSDevice || isSMDevice) {
      bg.First = PDCTAFirstMobileImage;
      bg.Second = PDCTASecondMobileImage;
      bg.Third = PDCTAThirdMobileImage;
      bg.Fourth = PDCTAFourthMobileImage;
      bg.Fifth = PDCTAFifthMobileImage;
      bg.cooperate = ProductDiscoveryCooperateBlockMobile;
      bg.caseStudies = CaseStudiesBgMobile;
      bg.modelsBg = ModelsSectionBgMobile;
    }
    return bg;
  };

  return (
    <>
      <ProductDiscoveryMainSection />
      <CallToActionComponent
        id={ButtonType.LAND}
        background={getBackground().First}
        withButton
        title="50% of startups fail due to poor functionality feasibility. Don't become another&nbsp;statistic!"
        content="Let's work on a technical feasibility study to gain insight into your future
          product and predict any risks and&nbsp;roadblocks!"
        btnText="Contact to our experts"
        buttonType={ButtonTypes.PRIMARY}
        classes={{
          cta: `!bg-white !p-[120px_70px] min-xxxl:!p-[120px_80px] screen-lg:!p-[80px_30px]
            screen-md:!p-[80px_30px] screen-sm:!p-[80px_15px]`,
          background: `!bottom-0 !top-auto !h-[589px] screen-lg:!h-[316px] screen-sm:!h-[221px] 
            after:!h-[80px] after:!bg-gradient-to-t after:!from-transparent after:!to-white after:!top-0`,
          image: '!object-cover !object-bottom',
          title: `!pb-[40px] !text-center !text-black !max-w-[1100px] 
            screen-lg:!pb-[40px] screen-lg:!max-w-[708px] screen-lg:!text-[30px] 
            screen-lg:!leading-[40px] screen-md:!text-[25px] screen-md:!leading-[35px] 
            screen-md:!pb-[30px]`,
          content: `!pb-[40px] !text-center !m-[0_auto] !text-black !max-w-[866px] 
            !text-[30px] !leading-[40px] !font-medium !font-generalSans 
            screen-lg:!max-w-[561px] screen-lg:!text-[20px] screen-lg:!leading-[28px] 
            screen-md:!text-[16px] screen-md:!leading-[24px] screen-md:!pb-[30px] 
            screen-md:!max-w-full`,
          btn: '!max-w-[460px] screen-lg:!text-[18px] screen-md:!max-w-[330px]',
        }}
      />
      <ProductDiscoveryHelpsYouSection />
      <WhenToUsePDPhase />
      <CallToActionComponent
        id={ButtonType.LAND2}
        background={getBackground().Second}
        withButton
        title="Get a technical product vision now and avoid significant development risks and issues&nbsp;tomorrow!"
        btnText="Discuss your needs"
        buttonType={ButtonTypes.LIGHT}
        classes={{
          cta: `!p-[80px_70px_106px] min-xxxl:!p-[80px_80px_106px]
            screen-lg:!p-[60px_30px_80px] screen-md:!p-[80px_30px] screen-sm:!p-[80px_15px]`,
          background: `!absolute !bottom-0 !top-auto !left-0 !h-[521px]
            screen-lg:!h-[350px] screen-md:!h-[248px] after:!h-[80px]
            after:!bg-gradient-to-t after:!from-transparent after:!to-black after:!top-0`,
          image: '!object-cover !object-bottom',
          title: `!pb-[40px] !max-w-[1035px] !text-[36px] !leading-[48px] !m-0
            !text-left screen-lg:!max-w-[551px] screen-lg:!pb-[30px]
            screen-lg:!text-[30px] screen-lg:!leading-[40px] screen-lg:!m-[0_auto]
            screen-lg:!text-center screen-md:!text-[25px] screen-md:!leading-[35px]
            screen-md:!pb-[40px] screen-md:!max-w-full`,
          btn: '!m-0 screen-lg:!m-[0_auto]',
        }}
      />
      <ProcessDiscoveryHowItWorks />
      <ProcessBlock
        data={processAccordionData}
        imagesData={processImages}
        subtitle={processBlockContent.subtitle}
        firstText={processBlockContent.text}
        bottomTitle="Throughout the software product discovery services, we make sure every team member is 100%
          on the same page with the client, shares the final product vision, and intends to realize this idea in
          the fastest and most efficient way."
        notice="* This is only an approximate example of how the product discovery phase looks. Its duration directly
        depends on your specific business requirements, needs, and goals."
        classes={{
          container: 'min-lg:!p-[80px_70px] min-xxxl:!p-[80px]',
          accordionBlock: 'min-md:h-[820px] min-xl:!h-[950px] min-xl:!min-h-[auto]',
          contentInnerText: '!m-0 !p-[0_15px_15px_55px] min-md:!pl-[55px] min-md:!pb-[18px] min-md:!text-[14px] '
            + 'min-lg:!text-[18px] min-lg:!leading-[24px] min-lg:!pl-[55px] min-xl:!pl-[85px]',
          contentListItem: 'min-md:!text-[14px] min-md:!leading-[20px] min-lg:!text-[18px] min-lg:!leading-[24px]',
          bottomTitle: '!text-[36px] !leading-[46px] !font-medium max-w-[1240px] !text-left !mt-[100px]'
            + 'screen-lg:!text-[30px] screen-lg:!leading-[40px] screen-lg:!mt-[120px] screen-lg:!pt-[120px]'
            + 'screen-md:!text-[20px] screen-md:!leading-[28px]'
            + ' screen-md:!pt-[60px] screen-md:px-[15px] screen-md:!mt-0',
        }}
      />
      <CallToActionComponent
        id={ButtonType.LAND3}
        background={getBackground().Third}
        withButton
        title="Get technical validation of your product concept before spending a lot of money building,
          polishing, and&nbsp;marketing&nbsp;it!"
        btnText="Speak to Our Expert"
        buttonType={ButtonTypes.LIGHT}
        classes={{
          cta: `!p-[140px_70px] min-xxxl:!p-[140px_80px] screen-lg:!p-[126px_30px_71px] 
            screen-md:!p-[80px_30px] screen-sm:!p-[80px_15px]`,
          background: `screen-lg:!h-[248px] screen-lg:!top-auto screen-lg:!bottom-0
            screen-md:!h-full after:!h-[80px]
            after:!bg-gradient-to-t after:!from-transparent after:!to-black after:!top-0
            after:!left-0 after:!absolute screen-md:after:!hidden`,
          image: '!object-cover !object-bottom',
          title: `!pb-[60px] !max-w-[1078px]
            screen-lg:!max-w-[650px] screen-lg:!pb-[50px]
            screen-md:!pb-[30px] screen-md:!max-w-full`,
        }}
      />
      <CooperateBlock
        data={cooperateList}
        title="Who is the Onix discovery&nbsp;team"
        background={getBackground().cooperate}
        classes={{
          section: 'screen-md:pt-[60px]',
          item: 'screen-md:last:border-b-[2px] screen-md:last:pb-[20px]',
        }}
      />
      <PDPrimaryDeliverables />
      <ModelsSection
        pageTitle={(
          <>
            After the product
            {' '}
            <br className="hidden screen-lg:block" />
            discovery phase you can
          </>
        )}
        data={modelsData}
        background={getBackground().modelsBg}
        classes={{
          section: '!py-[80px] screen-md:!pt-[60px]',
          bg: 'h-[540px] screen-lg:!h-[350px]',
          bgImg: 'object-top',
          title: 'mb-[80px] screen-lg:mb-[50px] screen-md:mb-[40px]',
          card: '!p-[30px] screen-md:!p-[15px_15px_20px]',
        }}
      />
      <ReviewBlock quotesList={quotesList} />
      <CaseStudiesBlock
        sliderIds={[42, 26, 44, 1000]}
        background={getBackground().caseStudies}
        classes={{
          container: '!pb-[88px] screen-lg:!pb-[80px]',
          bgContainer: 'screen-md:!h-[223px]',
        }}
      />
      <CallToActionComponent
        id={ButtonType.LAND4}
        background={getBackground().Fourth}
        withButton
        title="Let's bridge the gap between the business concept of your software
          project and its technical&nbsp;realization!"
        btnText="Speak to Our Expert"
        classes={{
          cta: `!p-[112px_70px_120px] min-xxxl:!p-[112px_80px_120px] screen-lg:!p-[112px_30px_120px]
            screen-md:!p-[80px_30px] screen-sm:!p-[80px_15px]`,
          background: `after:!bg-gradient-to-t after:!from-transparent after:!to-black after:!top-0
            screen-lg:after:!h-[110px]`,
          title: `!pb-[40px] !max-w-[1078px]
            screen-lg:!max-w-[708px] screen-lg:!pb-[30px]
            screen-md:!pb-[60px]`,
        }}
      />
      <DevelopmentServicesWhite
        title={servicesData.title}
        data={servicesData.data}
        withoutBackground
        classes={{
          devServices: '!p-[80px_0] screen-md:!p-[60px_0]',
        }}
      />
      <ProductDiscoveryNumbersSection />
      <OurExpertiseSection
        title="Other services"
        firstText="Product Discovery is just the beginning – there is much more work to be done and
          other processes to complete. We'll gladly assist you with:"
        data={ourExpertiseSectionContentData}
        classes={{
          section: 'screen-md:pb-[60px]',
          textContainer: '!pb-0',
          container: 'screen-md:!pt-[60px]',
          text: '!p-[40px_0px_80px] m-0 !max-w-[551px] screen-lg:!pb-[60px] screen-md:!pt-[30px]',
        }}
      />
      {pageBlogs?.length !== 0 && (
        <OurInsights
          pageBlogs={pageBlogs}
          classes={{
            section: 'screen-md:py-[60px]',
            title: 'screen-lg:!pb-[20px]',
            blogTitle: 'screen-md:!text-[16px]/[21px]',
          }}
        />
      )}
      <CallToActionComponent
        id={ButtonType.LAND5}
        background={getBackground().Fifth}
        withButton
        title="Tell us about your product idea and let the&nbsp;magic&nbsp;unfold."
        btnText="Speak to Our Expert"
      />
      <FAQBlock faqData={faqData} />
    </>
  );
}

export default ProductDiscoveryPageView;
