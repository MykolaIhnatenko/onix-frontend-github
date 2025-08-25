import { useSelector } from 'react-redux';

import IosMainSection from '../../components/IosMainSection/IosMainSection';
import AchievementsBlock from '../../components/AchievementBlock/AchievementsBlock';
import IosServicesSection from './components/IosServicesSection';
import IosNumbersSection from './components/IosNumbersSection';
import IosProductDiscoverySection from './components/IosProductDiscoverySection';
import ReviewBlock from '../../components/ReviewBlock/ReviewBlock';
import IosSolutionsSection from './components/IosSolutionsSection';
import IndustrySection from '../../components/IndustrySection/IndustrySection';
import ProcessBlock from '../../components/ProcessBlock/ProcessBlock';
import IosClientsSection from './components/IosClientsSection';
import OurInsights from '../../components/OurInsightsSection/OurInsights';
import CallToActionComponent from '../../components/CallToActionBlock/CallToActionComponent';
import FAQBlock from '../../components/FAQBlock/FAQBlock';
import TechnologiesBlock from '../../components/TechnologiesBlock/TechnologiesBlock';
import ModelsSection from '../../components/ModelsSection/ModelsSection';
import PartnerSection from '../../components/PartnerSection/PartnerSection';
import iosMainSectionData from './data/iosMainSectionData';
import industrySectionData from './data/industrySectionData';
import quotesList from './data/quotesList';
import iosModelsSectionData from './data/iosModelsSectionData';
import { technologiesBlocksData, technologiesBlocksNames } from './data/technologiesData';
import faqData from './data/faqData';
import processBlockContent from './data/processData';
import partnerSliderData from './data/sliderData';
import { processAccordionData, processImages } from '../MainPage/data/processData';
import { IPageBlogs } from '../../interfaces/IPages';
import IStore from '../../store/interfaces/IStore';
import { IApp } from '../../store/app/interfaces/IApp';
import { getTechnologiesBooking } from '../../utils/getTechnologies';
import { ButtonType } from '../../constants/enums';
import IosContactUsBg1 from '../../assets/images/iosPage/img_contact_us_bg1@2x.webp';
import IosContactUsBgTablet1 from '../../assets/images/iosPage/img_contact_us_bg1_tablet@2x.webp';
import IosContactUsBgMobile1 from '../../assets/images/iosPage/img_contact_us_bg1_mobile@2x.webp';
import IosContactUsBgMobile2 from '../../assets/images/iosPage/img_contact_us_bg2_mobile@2x.webp';
import IosContactUsBgTablet2 from '../../assets/images/iosPage/img_contact_us_bg2_tablet@2x.webp';
import IosContactUsBg2 from '../../assets/images/iosPage/img_contact_us_bg2@2x.webp';
import IosContactUsBg3 from '../../assets/images/iosPage/img_contact_us_bg3@2x.webp';
import IosContactUsBgTablet3 from '../../assets/images/iosPage/img_contact_us_bg3_tablet@2x.webp';
import IosContactUsBgMobile3 from '../../assets/images/iosPage/img_contact_us_bg3_mobile@2x.webp';
import IosContactUsBigBg1 from '../../assets/images/iosPage/img_contact_us_big_bg1@2x.webp';
import CaseStudiesBlock from 'components/CaseStudiesBlock/CaseStudiesBlock';
import iosCaseStudiesData from './data/iosCaseStudiesData';
import IAchievements from '../../interfaces/IAchievements';

import ModelsBgXXXL from '@/images/modelsSection/img_backgroundXXXL.webp';
import ModelsBg from '@/images/modelsSection/img_background.webp';
import ModelsBgTablet from '@/images/modelsSection/img_backgroundTablet.webp';
import ModelsBgMobile from '@/images/modelsSection/img_backgroundMobile.webp';

function IosDevelopmentPageView({ pageBlogs, achievements }: IPageBlogs & IAchievements) {
  const {
    screenSizes: {
      isSMDevice,
      isMDDevice,
      isXSDevice,
      isXXXLDevice,
    },
  } = useSelector<IStore, IApp>((state) => state?.app);

  const getBackground = () => {
    const bg = {
      iosFirst: IosContactUsBg1,
      iosSecond: IosContactUsBg2,
      iosThird: IosContactUsBg3,
      modelsBg: ModelsBg,
    };

    if (isXXXLDevice) {
      bg.iosFirst = IosContactUsBigBg1;
      bg.modelsBg = ModelsBgXXXL;
    } else if (isMDDevice) {
      bg.iosFirst = IosContactUsBgTablet1;
      bg.iosSecond = IosContactUsBgTablet2;
      bg.iosThird = IosContactUsBgTablet3;
      bg.modelsBg = ModelsBgTablet;
    } else if (isXSDevice || isSMDevice) {
      bg.iosFirst = IosContactUsBgMobile1;
      bg.iosSecond = IosContactUsBgMobile2;
      bg.iosThird = IosContactUsBgMobile3;
      bg.modelsBg = ModelsBgMobile;
    }

    return bg;
  };

  return (
    <>
      <IosMainSection
        sectionTitle={iosMainSectionData.sectionTitle}
        firstText={iosMainSectionData.firstText}
        secondText={iosMainSectionData.secondText}
        btnText={iosMainSectionData.btnText}
        data={iosMainSectionData.data}
      />
      <AchievementsBlock achievements={achievements} />
      <IosServicesSection />
      <IosNumbersSection />
      <IosProductDiscoverySection />
      <ReviewBlock quotesList={quotesList} />
      <IosSolutionsSection isMobileOrTablet={isXSDevice || isSMDevice || isMDDevice} />
      <CallToActionComponent
        id={ButtonType.LAND3}
        background={getBackground().iosFirst}
        withButton
        title={(
          <>
            Start building your impactful mobile solution for&nbsp;iOS.
          </>
        )}
        btnText="Talk with our expert"
        classes={{
          cta: `!p-[160px_70px] screen-lg:!p-[120px_30px_160px]
          screen-md:!p-[80px_30px] screen-sm:!px-[15px]`,
          background: `after:!h-[120px] after:!bg-gradient-to-b
          after:!from-transparent after:!to-black after:!from-[15%] after:!to-[100%]`,
          title: '!max-w-[750px] !pb-[40px] screen-lg:!max-w-[650px] screen-md:!max-w-none',
        }}
      />
      <PartnerSection
        pageTitle="Why Onix Is The Best Technology Partner for iOS App Development"
        subTitle="iOS mobile app development provides various benefits to businesses worldwide. From allowing faster
        development to saving costs, the services offered by offshore developers can be an invaluable asset
        to companies looking to bring their vision of a successful app to life."
        data={partnerSliderData}
        classes={{
          container: '!pb-10 screen-lg:!py-0',
        }}
      />
      <IndustrySection
        sectionTitle={industrySectionData.sectionTitle}
        firstText={industrySectionData.firstText}
        data={industrySectionData.data}
      />
      <ProcessBlock
        data={processAccordionData}
        imagesData={processImages}
        title={processBlockContent.title}
        subtitle={processBlockContent.subtitle}
        classes={{ container: '!pb-[120px] screen-lg:!pb-[80px]' }}
      />
      <ModelsSection
        pageTitle={iosModelsSectionData.pageTitle}
        pageText={iosModelsSectionData.pageText}
        data={iosModelsSectionData.data}
        background={getBackground().modelsBg}
        classes={{ section: 'pt-[160px] pb-[150px] screen-lg:!pt-[120px] screen-lg:pb-[80px] screen-md:!py-[80px]' }}
      />
      <IosClientsSection />
      <TechnologiesBlock
        pageTitle={technologiesBlocksData.pageTitle}
        subTitle={technologiesBlocksData.subTitle}
        technologies={getTechnologiesBooking(technologiesBlocksNames)}
        classes={{
          container: '!pt-0 min-md:!pt-[80px] min-md:!pb-[80px]',
          sectionSubTitle: `
            !mb-[20px] !mt-[30px] min-md:!mt-[40px] min-md:!mb-[40px]
            min-lg:!mb-[40px]
            screen-md:!text-[14px] screen-md:!leading-[20px]
            `,
        }}
      />
      <CaseStudiesBlock
        sliderIds={[24, 47, 40, 1000]}
        desc={iosCaseStudiesData.desc}
        desc2={iosCaseStudiesData.desc2}
        classes={{
          container: '!pt-[90px] screen-md:!pt-[80px] !pb-[88px] screen-lg:!pb-[80px]',
          title: 'screen-md:!mb-[30px]',
        }}
      />
      <CallToActionComponent
        id={ButtonType.LAND4}
        background={getBackground().iosSecond}
        withButton
        title={(
          <>
            Have an idea for an iOS app that requires a&nbsp;tailored&nbsp;solution?
          </>
        )}
        btnText="Get in touch with us"
        classes={{
          cta: `!p-[70px_70px_160px] screen-lg:!p-[40px_30px_120px]
          screen-md:!p-[0_30px_80px] screen-sm:!p-[0_15px_80px]`,
          background: 'after:!hidden',
          image: 'screen-md:!object-top',
          title: '!max-w-[936px] screen-lg:!max-w-[600px] screen-md:!max-w-none',
        }}
      />
      {pageBlogs?.length !== 0 && <OurInsights pageBlogs={pageBlogs} />}
      <CallToActionComponent
        id={ButtonType.LAND5}
        background={getBackground().iosThird}
        withButton
        title={(
          <>
            Tell us about your product idea and let the&nbsp;magic&nbsp;unfold.
          </>
        )}
        btnText="Speak to Our Expert"
      />
      <FAQBlock faqData={faqData} />
    </>
  );
}

export default IosDevelopmentPageView;
