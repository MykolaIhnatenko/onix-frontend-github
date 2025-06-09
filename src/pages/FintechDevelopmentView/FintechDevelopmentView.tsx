import { StaticImageData } from 'next/image';
import { useDispatch } from 'react-redux';

import { useAppSelector } from '../../hook/reduxToolkit';
import AboutCardBlock from '../../components/AboutCardBlock/AboutCardBlock';
import AboutColorTextBlock from '../../components/AboutColorTextBlock/AboutColorTextBlock';
import AchievementsBlock from '../../components/AchievementBlock/AchievementsBlock';
import CallToActionComponent from '../../components/CallToActionBlock/CallToActionComponent';
import ClientsBlock from '../../components/ClientsBlock/ClientsBlock';
import ImageInfoBlock from '../../components/ImageInfoBlock/ImageInfoBlock';
import IndustryBanner from '../../components/IndustryBanner/IndustryBanner';
import InnovationFintech from '../../components/InnovationFintech/InnovationFintech';
import NumbersBlock from '../../components/NumbersBlock/NumbersBlock';
import ButtonTypes from '../../constants/ButtonTypes';
import {
  ButtonType,
  VariantStatsBlock,
} from '../../constants/enums';
import AndroidAppStatsBlock from '../AndroidApplicationPageView/components/AndroidAppStatsBlock';
import androidAppStatsBlockData from '../AndroidApplicationPageView/data/androidAppStatsBlockData';
import bankingAppList from './data/bankinAppList';
import cardFintechData from './data/cardFintechData';
import fintechAppDevProcess from './data/fintechAppDevProcess';
import fintechAppDevelopmentData from './data/fintechAppDevelopmentData';
import numbersFintechData from './data/numbersFintechData';
import IFintechDevelopmentView from './interfaces/IFintechDevelopmentView';
import ContainerActiveBlocks from '../../components/ContainerActiveBlocks/ContainerActiveBlocks';
import fintechProcessData from './data/fintechProcessData.json';
import AndroidAppEngagementModels from '../AndroidApplicationPageView/components/AndroidAppEngagementModels';
import fintechEngagementModelsData from './data/fintechEngagementModelsData';
import FAQBlock from '../../components/FAQBlock/FAQBlock';
import getTechnologies from '../../utils/getTechnologies';
import TechnologiesBlock from '../../components/TechnologiesBlock/TechnologiesBlock';
import technologiesFintechBlocksNames from './data/fintechTechnoligiesData';
import OurInsights from '../../components/OurInsightsSection/OurInsights';
import ReviewBlock from '../../components/ReviewBlock/ReviewBlock';
import fintechQuoteList from './data/fintechQuoteList';
import ContentText from '../../components/ContentText/ContentText';
import ButtonOpenContactForm from '../../components/ButtonOpenContactForm/ButtonOpenContactForm';
import { setShowContactForm } from '../../store/app/contactForm/slice';
import WebDesignCTAFirstBigBg from '@/images/webDesignPage/callToAction/img_cta_first_big_bg@2x.webp';
import TellUsAboutLG from '@/images/img_tell_us_about_lg.webp';
import AndroidAppCallTellUsBg from '@/images/img_android_tell_us_bg.webp';
import AndroidAppLetDevelopBg from '@/images/androidApplication/img_androidLetDevelopBg.webp';
import AndroidAppLetDevelopMobileBg from '@/images/androidApplication/img_androidLetDevelopMobileBg.webp';
import AndroidAppLetDevelopTabletBg from '@/images/androidApplication/img_androidLetDevelopTabletBg@2x.webp';
import FintechWeb from '@/images/fintech/img_FintechWeb@2x.webp';
import FintechWebTablet from '@/images/fintech/img_FintechWeb_tablet@2x.webp';
import FintechWebMobile from '@/images/fintech/img_FintechWeb_mobile@2x.webp';
import ImageInfoBlockBg from '@/images/fintech/img_imageInfoBlockBg@2x.webp';
import ImageInfoBlockTabletBg from '@/images/fintech/img_imageInfoBlockBgTablet@2x.webp';
import ImageInfoBlockMobileBg from '@/images/fintech/img_imageInfoBlockBgMobile@2x.webp';
import CtaBg from '@/images/fintech/img_fintechContactUs@2x.webp';
import CtaTabletBg from '@/images/fintech/img_fintechContactUsTablet@2x.webp';
import CtaMobileBg from '@/images/fintech/img_fintechContactUsMobile@2x.webp';
import CtaSecondTabletBg from '@/images/fintech/cta/img_ctaSecondTablet.webp';
import CtaSecondMobileBg from '@/images/fintech/cta/img_ctaSecondMobile.webp';
import CtaThirdTabletBg from '@/images/fintech/cta/img_ctaThirdTablet.webp';
import CtaThirdMobileBg from '@/images/fintech/cta/img_ctaThirdMobile.webp';
import { IAccordionData } from 'components/AccordionTemplate/interfaces/IAccordion';
import DevelopmentServicesWhite from 'components/DevelopmentServicesWhite/DevelopmentServicesWhite';
import DevelopmentServicesBlack from 'components/DevelopmentServicesBlack/DevelopmentServicesBlack';
import CaseStudiesBlock from 'components/CaseStudiesBlock/CaseStudiesBlock';
import { textStyle } from 'components/FAQBlock/tailwindStyle/tailwindStyle';

import fintechIndustries from './sass/fintechIndustries.module.scss';

function FintechDevelopmentView({
  isBannerHidden,
  pageBlogs,
}: IFintechDevelopmentView) {
  const {
    screenSizes: {
      isMDDevice,
      isSMDevice,
      isXSDevice,
      isXXXLDevice,
    },
  } = useAppSelector((state) => state?.app);

  const dispatch = useDispatch();

  const openContactForm = () => {
    dispatch(setShowContactForm({ showContactForm: true }));
  };

  const getBackground = () => {
    const bg: { [propName: string]: StaticImageData } = {
      androidAppLetDevelop: AndroidAppLetDevelopBg,
      fintechBG: ImageInfoBlockBg,
      callToActionFirst: CtaBg,
      callToActionSecond: AndroidAppCallTellUsBg,
      callToActionThird: TellUsAboutLG,
      main: FintechWeb,
    };
    if (isXXXLDevice) {
      bg.callToAction = WebDesignCTAFirstBigBg;
    } else if (isMDDevice) {
      bg.androidAppLetDevelop = AndroidAppLetDevelopTabletBg;
      bg.fintechBG = ImageInfoBlockTabletBg;
      bg.callToActionFirst = CtaTabletBg;
      bg.callToActionSecond = CtaSecondTabletBg;
      bg.callToActionThird = CtaThirdTabletBg;
      bg.main = FintechWebTablet;
    } else if (isXSDevice || isSMDevice) {
      bg.androidAppLetDevelop = AndroidAppLetDevelopMobileBg;
      bg.fintechBG = ImageInfoBlockMobileBg;
      bg.callToActionFirst = CtaMobileBg;
      bg.callToActionSecond = CtaSecondMobileBg;
      bg.callToActionThird = CtaThirdMobileBg;
      bg.main = FintechWebMobile;
    }
    return bg;
  };

  const faqFintechData: IAccordionData[] = [
    {
      id: 1,
      title: 'How long does the fintech development process typically take?',
      content: (
        <div>
          <ContentText tag="p" className={textStyle}>
            The duration of the fintech development process can vary based on the complexity of the project,
            specific requirements, and the scope of features to be implemented. Typically, fintech app development
            can take anywhere from a few months to a year or more, depending on the following factors: project scope,
            platform, integrations, design, and regulatory compliance.
          </ContentText>
        </div>
      ),
    },
    {
      id: 2,
      title: 'Do you provide fintech mobile app development services?',
      content: (
        <div>
          <ContentText tag="p" className={textStyle}>
            Yes, Onix is a fintech mobile app development company that specializes in creating secure, user-friendly,
            and feature-rich mobile apps for the financial industry. Whether you need a mobile banking app, payment
            processing solution, personal finance app, or any other fintech mobile application, we have the expertise
            to deliver exceptional results.
          </ContentText>
        </div>
      ),
    },
    {
      id: 3,
      title: (
        'How can I get started with your custom fintech software development services?'
      ),
      content: (
        <div>
          <ContentText tag="p" className={textStyle}>
            Getting started is easy! Simply
            {' '}
            <ButtonOpenContactForm
              title="contact our team"
              openForm={openContactForm}
              idBtn={ButtonType.LAND5}
            />
            , and we will be happy to discuss your project requirements,
            provide comprehensive consultation, and guide you through the fintech app development process.
          </ContentText>
        </div>
      ),
    },
    {
      id: 4,
      title: (
        `
          Do you offer ongoing support and maintenance
          for the fintech apps and software you develop?
        `
      ),
      content: (
        <div>
          <ContentText tag="p" className={textStyle}>
            As a fintech software development company, we offer ongoing support and maintenance services.
            Providing post-launch support and maintenance is a standard practice that allows us to ensure
            the app remains functional, secure, and up-to-date.
          </ContentText>
        </div>
      ),
    },
    {
      id: 5,
      title: 'What is the role of a fintech software developer?',
      content: (
        <div>
          <ContentText tag="p" className={textStyle}>
            Fintech software developers require a strong understanding of finance, programming skills,
            and a keen eye for detail to create reliable, secure, and innovative solutions for the financial industry.
            They play a vital role in shaping the future of financial technology and driving digital transformation in
            the financial sector.
          </ContentText>
          <ContentText tag="p" className={textStyle}>
            As a fintech software development provider, we have experienced developers who develop cutting-edge
            solutions that facilitate financial transactions, improve user experiences, and ensure data security
            and compliance.
          </ContentText>
        </div>
      ),
    },
    {
      id: 6,
      title: 'Can outsourcing fintech software development be a viable option?',
      content: (
        <div>
          <ContentText tag="p" className={textStyle}>
            Outsourcing fintech software development can be an effective strategy to leverage external expertise,
            access cost-effective solutions, and accelerate time-to-market for fintech applications.
          </ContentText>
          <ContentText tag="p" className={textStyle}>
            If you&apos;re looking for a reliable outsourcing partner,
            {' '}
            <ButtonOpenContactForm
              title="we&apos;re here to help"
              openForm={openContactForm}
              idBtn={ButtonType.LAND6}
            />
            . Onix is a leading fintech
            software and app development company dedicated to transforming bold business ideas into exceptional
            fintech products. Our team of skilled developers, designers, and experts is well-versed in fintech
            technologies and trends, ensuring that our solutions are at the forefront of innovation.
          </ContentText>
        </div>
      ),
    },
    {
      id: 7,
      title: 'What categories of fintech software are within your development capabilities?',
      content: (
        <div>
          <ContentText tag="p" className={textStyle}>
            Onix is a fintech app development firm, that provides a wide range of fintech software categories,
            including mobile banking apps, payment processing solutions, trading platforms, wealth management
            software, lending and loan management systems, personal finance apps, insurtech, regtech
            and compliance solutions, robo-advisors, and more. Our experienced team is well-equipped
            to create innovative and tailored fintech solutions to meet the unique needs of our clients
            in the financial industry.
          </ContentText>
        </div>
      ),
    },
  ];

  return (
    <div id="bannerBlock">
      <IndustryBanner
        desc="& App Development Services"
        title="Fintech Software"
        imageBanner={getBackground().main}
        isBannerHidden={isBannerHidden}
        classesVariant={fintechIndustries}
        colorActive
      />
      <AboutColorTextBlock
        title="[ About Onix ]"
        text="Whether you're an enterprise-level corporation or a groundbreaking startup, "
        textGray="we've got you covered."
        textSecondBlock="Onix is your go-to fintech software and app development company that turns "
        textGraySecondBlock="innovative business concepts into outstanding fintech solutions!"
        textThirtyBlock="With twenty-three-year experience in the industry, we’ve honed our expertise in "
        textGrayThirtyBlock="creating innovative solutions that drive cost efficiency and sustainable growth."
      />
      <ImageInfoBlock
        data={bankingAppList}
        background={getBackground().fintechBG}
        title="From robust banking applications to secure payment gateways and innovative financial
        management platforms, we elevate your business to new heights."
      />
      <CallToActionComponent
        id={ButtonType.LAND}
        background={getBackground().callToActionFirst}
        withButton
        title="Let's transform your bold ideas into an exceptional fintech product that redefines the&nbsp;industry!"
        btnText="Get a free consultation"
        buttonType={ButtonTypes.PRIMARY}
        classes={{
          cta: `!bg-transparent !p-[160px_70px] screen-lg:!p-[120px_30px]
            screen-md:!p-[80px_30px] screen-sm:!p-[80px_15px]`,
          background: 'after:!hidden',
          title: `!max-w-[1085px] !text-black screen-lg:!pb-[30px] screen-lg:!max-w-[672px]
            screen-md:!max-w-[unset]`,
        }}
      />
      <NumbersBlock
        data={numbersFintechData}
        classes={{
          table: `!bg-black !mt-0 !p-[24px_70px_36px]
            min-xxxl:!p-[24px_80px_36px]
            screen-lg:!p-[20px_30px_50px]
            screen-md:!p-[60px_15px_30px]`,
          rowClasses: {
            tableRow: `!border-b-[2px] !border-solid !border-white !p-[20px_0]
              min-md:!p-[30px_0] min-lg:!flex-row min-xxl:!p-[26px_0_44px]
              not-last:!border-b-[2px] not-last:!border-solid not-last:!border-white
              last:!border-none`,
            title: '!text-white',
            text: '!text-white',
          },
        }}
      />
      <AchievementsBlock />
      <AboutColorTextBlock
        title="[ Fintech software & app development services we offer ]"
        text="At Onix, we offer a comprehensive range of fintech software development services "
        textGray="to meet the unique needs of the financial industry."
        textSecondBlock="With our expertise in financial technology, "
        textGraySecondBlock="we empower businesses to thrive in the ever-evolving digital landscape."
      />
      <AboutCardBlock data={cardFintechData} whiteBlock classes={fintechIndustries} />
      <CaseStudiesBlock
        sliderIds={[21, 22, 1000]}
        classes={{
          container: '!pt-[90px] screen-md:!pt-[80px] !pb-[88px] screen-lg:!pb-[80px]',
        }}
      />
      <AndroidAppStatsBlock
        data={androidAppStatsBlockData}
        variant={VariantStatsBlock.FINTECH}
      />
      <CallToActionComponent
        id={ButtonType.LAND2}
        background={getBackground().callToActionSecond}
        withButton
        title="Whether you need cutting-edge software or user-friendly mobile apps,
        we deliver customized solutions that align perfectly with your&nbsp;vision!"
        btnText="Contact to our experts"
        classes={{
          cta: `!bg-black !p-[80px_70px_160px] screen-lg:!p-[58px_30px_80px]
            screen-md:!p-[39px_30px_80px] screen-sm:!p-[39px_15px_80px]`,
          background: `!bottom-0 !top-auto screen-lg:!h-[384px] screen-md:!h-[290px]
          after:!h-[100px] after:!top-0 after:!bg-gradient-to-b after:!from-[#000000]
          after:!to-transparent [img]:!object-bottom`,
          title: `!max-w-[1171px] screen-lg:!max-w-[708px]
            screen-md:!pb-[30px]`,
          btn: 'screen-md:!px-[6px]',
        }}
      />
      <InnovationFintech />
      <DevelopmentServicesWhite
        title={fintechAppDevelopmentData.title}
        data={fintechAppDevelopmentData.data}
        classes={{
          devServices: 'screen-md:!p-[80px_0]',
        }}
        withoutBackground
      />
      <DevelopmentServicesBlack
        title={fintechAppDevProcess.title}
        description={fintechAppDevProcess.desc}
        data={fintechAppDevProcess.data}
        classes={{
          devServices: 'screen-md:!p-[80px_0]',
          titleBlock: {
            desc: '!max-w-[1080px] min-xxxl:!max-w-[1480px]',
          },
        }}
      />
      <ClientsBlock
        title="[ Our clients ]"
        mainTitle="Brands We Have Worked With"
        classes={{
          container: 'screen-md:!pt-[80px]',
          subtitle: 'screen-lg:!pt-5 screen-lg:!pb-10 screen-md:!pt-[15px]',
        }}
      />
      <ReviewBlock
        quotesList={fintechQuoteList}
      />
      <CallToActionComponent
        id={ButtonType.LAND3}
        background={getBackground().androidAppLetDevelop}
        withButton
        title="Ready to craft innovative and secure fintech solutions
        that set your business apart from the&nbsp;competition?"
        btnText="Request a quote"
        classes={{
          cta: `!p-[160px_70px] screen-lg:!p-[80px_30px] screen-md:!p-[80px_30px]
            screen-sm:!p-[80px_15px]`,
          background: 'after:!hidden',
          title: '!max-w-[1130px] !pb-[40px] screen-lg:!max-w-[708px]',
        }}
      />
      <ContainerActiveBlocks
        titleBlock="Why choose Onix as your fintech app development company?"
        data={fintechProcessData}
        classes={{
          cardBlock: {
            cardClasses: {
              box: '!inline',
              boxText: `!text-[18px] !leading-[26px] screen-lg:!text-[18px] screen-lg:!leading-[26px]
              screen-md:!text-[16px] screen-md:!leading-[24px]`,
            },
          },
        }}
        disableInfoBlock
      />
      <AndroidAppEngagementModels
        pageTitle={fintechEngagementModelsData.pageTitle}
        firstItemTitle={fintechEngagementModelsData.firstItemTitle}
        firstItemText={fintechEngagementModelsData.firstItemText}
        firstItemImg={fintechEngagementModelsData.firstItemImg}
        firstItemImgTablet={fintechEngagementModelsData.firstItemImgTablet}
        firstItemImgMobile={fintechEngagementModelsData.firstItemImgMobile}
        secondItemTitle={fintechEngagementModelsData.secondItemTitle}
        secondItemText={fintechEngagementModelsData.secondItemText}
        secondItemImg={fintechEngagementModelsData.secondItemImg}
        secondItemImgTablet={fintechEngagementModelsData.secondItemImgTablet}
        secondItemImgMobile={fintechEngagementModelsData.secondItemImgMobile}
      />
      <TechnologiesBlock
        titleBlock="[ Technologies our developers use ]"
        titleDesc="Technologies we work with but not limited to"
        technologies={getTechnologies(technologiesFintechBlocksNames)}
        classes={{
          container: '!pt-[80px] screen-md:!pt-[40px] screen-md:!pb-0',
          blockTitleText: '!text-black',
          blockTitleDesc: '!text-black !mb-0 screen-lg:!mb-0 screen-md:!mb-[10px]',
        }}
      />
      {pageBlogs?.length !== 0 && (<OurInsights pageBlogs={pageBlogs} />)}
      <CallToActionComponent
        id={ButtonType.LAND4}
        background={getBackground().callToActionThird}
        withButton
        title="Tell us about your product idea and let the&nbsp;magic&nbsp;unfold."
        btnText="Speak to Our Expert"
      />
      <FAQBlock faqData={faqFintechData} />
    </div>
  );
}

export default FintechDevelopmentView;
