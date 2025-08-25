import { useDispatch } from 'react-redux';
import { StaticImageData } from 'next/image';
import { useEffect } from 'react';

import { useAppSelector } from '../../hook/reduxToolkit';
import DedicatedTeamMainSection from './components/DedicatedTeamMainSection';
import DedicatedTeamNumbersSection from './components/DedicatedTeamNumbersSection';
import OurInsights from '../../components/OurInsightsSection/OurInsights';
import DedicatedTeamClientsSection from './components/DedicatedTeamClientsSection';
import DedicatedTeamLocationSection from './components/DedicatedTeamLocationSection';
import DedicatedTeamUtilizeSection from './components/DedicatedTeamUtilizeSection';
import DedicatedTeamResponsibilitySection from './components/DedicatedTeamResponsibiltySection';
import DedicatedTeamHireSection from './components/DedicatedTeamHireSection';
import DedicatedTeamWorkSection from './components/DedicatedTeamWorkSection';
import ApproachSection from '../../components/Approachblock/ApproachSection';
import CallToActionComponent from '../../components/CallToActionBlock/CallToActionComponent';
import DedicatedTeamStructureSection from './components/DedicatedTeamStructureSection';
import DedicatedTeamTechnologiesSection from './components/DedicatedTeamTechnologiesSection';
import ReviewBlock from '../../components/ReviewBlock/ReviewBlock';
import FAQBlock from '../../components/FAQBlock/FAQBlock';
import quotesList from './data/quotesList';
import faqData from './data/faqData';
import approachBlockData from './data/approachData';
import { IPageBlogs } from '../../interfaces/IPages';
import ButtonTypes from '../../constants/ButtonTypes';
import {
  ButtonPathVariant,
  ButtonType,
} from '../../constants/enums';
import { FormModalVariants } from '../../store/app/contactForm/interfaces/IContactForm';
import IndustriesWeServeBlock from 'components/IndustriesWeServeBlock/IndustriesWeServe';
import CaseStudiesBlock from 'components/CaseStudiesBlock/CaseStudiesBlock';
import { setModalView } from '../../store/app/contactForm/slice';
import industriesData, { industriesTitle } from './data/industriesData';
import DedicatedTeamCallToActionFirstLG from '../../assets/images/dedicatedTeamPage/img_call_to_action_lg@2x.webp';
import DedicatedTeamCallToActionSecondBg from '../../assets/images/dedicatedTeamPage/img_call_to_action_second@2x.webp';
import DedicatedTeamCallToActionSecondBgTablet from '../../assets/images/dedicatedTeamPage/img_call_to_action_second_tablet@2x.webp';
import DedicatedTeamCallToActionSecondBgMobile from '../../assets/images/dedicatedTeamPage/img_call_to_action_second_mobile@2x.webp';
import DedicatedTeamCallToActionFourthBg from '../../assets/images/dedicatedTeamPage/img_call_to_action_fourth@2x.webp';
import DedicatedTeamCallToActionFourthBgTablet from '../../assets/images/img_lastCtaTablet@2x.webp';
import DedicatedTeamCallToActionFourthBgMobile from '../../assets/images/img_lastCtaMobile@2x.webp';
import DedicatedTeamCallToActionSecondBigBg from '../../assets/images/dedicatedTeamPage/img_call_to_action_second_big@2x.webp';

import DedicatedTeamCaseStudiesBgMobile from '@/images/dedicatedTeamPage/img_case_studies_bg_mobile@2x.webp';
import DedicatedTeamCaseStudiesBgTablet from '@/images/dedicatedTeamPage/img_dedicated_team_case_sudies_tablet_bg@2x.webp';
import DedicatedTeamCaseStudiesBg from '@/images/dedicatedTeamPage/img_dedicated_team_case_sudies_bg@2x.webp';
import styles from './sass/dedicatedTeamPageView.module.scss';

interface IBackground {
  first: StaticImageData | undefined;
  third: StaticImageData | undefined;
  fourth: StaticImageData | undefined;
  caseStudiesBg: StaticImageData | undefined;
}

function DedicatedTeamPageView({ pageBlogs }: IPageBlogs) {
  const {
    screenSizes: {
      isMDDevice,
      isSMDevice,
      isXSDevice,
      isXXXLDevice,
    },
  } = useAppSelector((state) => state?.app);
  const dispatch = useDispatch();
  const { FORM } = FormModalVariants;

  const getBackground = () => {
    const bg: IBackground = {
      first: DedicatedTeamCallToActionFirstLG,
      third: DedicatedTeamCallToActionSecondBg,
      fourth: DedicatedTeamCallToActionFourthBg,
      caseStudiesBg: DedicatedTeamCaseStudiesBg,
    };
    if (isXXXLDevice) {
      bg.third = DedicatedTeamCallToActionSecondBigBg;
    } else if (isMDDevice || isSMDevice) {
      bg.first = undefined;
      bg.third = DedicatedTeamCallToActionSecondBgTablet;
      bg.fourth = DedicatedTeamCallToActionFourthBgTablet;
      bg.caseStudiesBg = DedicatedTeamCaseStudiesBgTablet;
    } else if (isXSDevice) {
      bg.first = undefined;
      bg.third = DedicatedTeamCallToActionSecondBgMobile;
      bg.fourth = DedicatedTeamCallToActionFourthBgMobile;
      bg.caseStudiesBg = DedicatedTeamCaseStudiesBgMobile;
    }

    return bg;
  };

  useEffect(() => () => {
    dispatch(setModalView({ modalView: FORM }));
  }, []);

  return (
    <>
      <DedicatedTeamMainSection />
      <div className={styles.blackBlock}>
        <DedicatedTeamNumbersSection />
        <DedicatedTeamClientsSection />
        <DedicatedTeamLocationSection />
      </div>
      <ApproachSection
        title={approachBlockData.title}
        text={approachBlockData.text}
        data={approachBlockData.data}
        isMobileOrTablet={isXSDevice || isSMDevice || isMDDevice}
        borderTopFirst
      />
      <CallToActionComponent
        id={ButtonType.LAND}
        background={getBackground().first}
        withButton
        title={(
          <>
            Ready to start flexible and transparent development and get predictable&nbsp;results?
          </>
        )}
        btnText="Speak to our expert"
        buttonType={ButtonTypes.PRIMARY}
        classes={{
          cta: '!bg-white !p-[60px_15px_80px] min-md:!p-[60px_30px_80px] min-lg:!p-[0_70px_80px] min-xxxl:!px-[80px]',
          background: 'after:!hidden',
          title: `!text-black !max-w-none !text-[25px] !leading-[35px] !pb-[40px] !text-center !mx-auto
          min-md:!pb-[30px] min-md:!text-[30px] min-md:!leading-[40px] min-md:!max-w-[583px]
          min-lg:!text-[36px] min-lg:!leading-[46px] min-lg:!max-w-[1035px]`,
          btn: '!mx-auto',
        }}
      />
      <div className={styles.blackBlock}>
        <CaseStudiesBlock
          sliderIds={[40, 7, 50, 1000]}
          background={getBackground().caseStudiesBg}
          classes={{
            container: '!pt-[80px] !pb-[88px] screen-lg:!pb-[80px]',
            bgContainer: '!h-[560px] screen-lg:!h-[790px] screen-md:!h-[250px]',
            bgImg: '!object-center',
          }}
        />
        <DedicatedTeamUtilizeSection />
        <CallToActionComponent
          id={ButtonType.LAND2}
          withButton
          title={(
            <>
              Looking for specialists?
            </>
          )}
          content={(
            <>
              Tell us more about your business needs and we&apos;ll form your perfect&nbsp;team!
            </>
          )}
          btnText="get in touch with us"
          classes={{
            cta: `!p-[36px_15px_80px] min-sm:!p-[36px_30px_80px] min-md:!pb-[80px] min-md:!px-[30px]
              min-lg:!pb-[508px] min-lg:!px-[70px] min-xxxl:!px-[80px]`,
            background: 'after:!hidden',
            title: `!pb-[20px] !max-w-none min-md:!text-center min-md:!mx-auto min-md:!pb-[40px]
              min-lg:!text-left min-lg:!pb-[30px] min-lg:!m-0 `,
            content: `!max-w-none !pb-[60px] !text-[16px] !leading-[24px]
              min-md:!max-w-[559px] min-md:!pb-[40px] min-md:!text-[18px] min-md:!leading-[26px]
              min-lg:!max-w-[460px] min-lg:!pb-[70px] min-lg:!text-left min-lg:!m-0`,
            btn: '!mx-auto min-lg:!m-0',
          }}
        />
        <DedicatedTeamResponsibilitySection />
      </div>
      <DedicatedTeamHireSection />
      <DedicatedTeamWorkSection />
      <DedicatedTeamStructureSection isMobileOrTablet={isXSDevice || isSMDevice || isMDDevice} />
      <CallToActionComponent
        id={ButtonType.LAND4}
        background={getBackground().third}
        withButton
        title={(
          <>
            How much does it cost to hire a dedicated development&nbsp;team?
          </>
        )}
        content={(
          <>
            Specify the number of experts and technologies you need and get an approximate
            team cost for your&nbsp;project!
          </>
        )}
        btnText="Calculate now"
        buttonType={ButtonTypes.LIGHT}
        buttonPathVariant={ButtonPathVariant.CALCULATE}
        classes={{
          cta: `!p-[100px_15px] min-sm:!p-[100px_30px] min-md:!p-[80px_30px] 
                min-lg:!p-[160px_70px] min-xxxl:!px-[80px]`,
          background: `after:!content-[''] after:!w-full after:!h-[70px] after:!bg-gradient-to-b 
                       after:!from-[rgba(253,253,253,0)_15%] after:!to-black after:!bottom-0 
                       after:!left-0 after:!absolute min-lg:after:!h-[130px] min-xxxl:after:!h-[80px]`,
          image: 'min-xxxl:!object-bottom',
          title: `!max-w-none !text-center !m-auto !pb-[15px] 
                  min-md:!max-w-[600px] min-md:!pb-[40px] 
                  min-lg:!max-w-[1078px]`,
          content: `!max-w-none !text-[16px] !leading-[24px] !pb-[60px] !text-center !m-auto 
                    min-md:!max-w-[632px] min-md:!text-[18px] min-md:!leading-[26px] min-md:!pb-[40px] 
                    min-lg:!max-w-[667px] min-lg:!text-[20px] min-lg:!leading-[28px]`,
          btn: '!m-auto',
        }}
      />
      <IndustriesWeServeBlock
        title={industriesTitle.title}
        text={industriesTitle.text}
        withoutBorder
        carouselTop={industriesData}
        carouselTopClasses={{
          animation: 'animate-dedicated-team-projects-ticker '
            + 'screen-lg:animate-dedicated-team-projects-ticker-tablet '
            + 'screen-md:animate-dedicated-team-projects-ticker-mobile',
          item: 'ml-[132px] screen-lg:ml-[100px] screen-md:ml-[20px]',
        }}
        classes={{
          container: 'p-[80px_0_140px]',
          text: 'mt-[30px] max-w-[696px]',
          carouselContainer: 'pt-[120px] screen-lg:pt-[106px] screen-md:pt-[40px]',
        }}
      />
      <DedicatedTeamTechnologiesSection />
      <ReviewBlock quotesList={quotesList} />
      {pageBlogs?.length !== 0 && (
        <OurInsights
          pageBlogs={pageBlogs}
          classes={{ blogTitle: 'screen-md:!text-[16px]/[21px]' }}
        />
      )}
      <CallToActionComponent
        id={ButtonType.LAND5}
        background={getBackground().fourth}
        withButton
        title={(
          <>
            Tell us about your product idea and let the&nbsp;magic&nbsp;unfold.
          </>
        )}
        btnText="Speak to Our Expert"
        buttonType={ButtonTypes.LIGHT}
      />
      <FAQBlock faqData={faqData} />
    </>
  );
}

export default DedicatedTeamPageView;
