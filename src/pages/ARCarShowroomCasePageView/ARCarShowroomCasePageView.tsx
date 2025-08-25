import { useSelector } from 'react-redux';
import { StaticImageData } from 'next/image';

import ResultsBlock from '../../components/ResultsBlock/ResultsBlock';
import UsabilityTestingMainBlock from '../UsabilityTestingPageView/components/UsabilityTestingMainBlock';
import CaseStudiesBlockForCases from '../../components/CaseStudiesBlockForCases/CaseStudiesBlockForCases';
import VRARCallToActionComponent from '../../components/VRARCallToActionBlock/VRARCallToActionComponent';
import AboutProjectSection from '../../components/AboutProject/AboutProject';
import OurSolutionVirtual from '../../components/OurSolutionVirtual/OurSolutionVirtual';
import DevelopmentServicesWhite from '../../components/DevelopmentServicesWhite/DevelopmentServicesWhite';
import servicesData from './data/servicesData';
import ourSolutionVirtualData from './data/ourSolutionVirtualData';
import resultsBlockData from './data/resultsBlockData';
import businessContextData from './data/businessContextData';
import projectData from './data/aboutContent';
import { aboutProjectSectionWhite } from '../../constants/tailwindStyle';
import IPageStatus from '../../interfaces/IPageStatus';
import ButtonTypes from '../../constants/ButtonTypes';
import IStore from '../../store/interfaces/IStore';
import { IApp } from '../../store/app/interfaces/IApp';
import BusinessContext from 'components/BusinessContext/BusinessContext';

import CTASecondBg from '@/images/arCarShowroomCase/img_CTASecondBg@2x.webp';
import CTASecondBgXXXL from '@/images/arCarShowroomCase/img_CTASecondBg_xxxl@2x.webp';
import CTASecondTabletBg from '@/images/arCarShowroomCase/img_CTASecondTabletBg@2x.webp';
import CTASecondMobileBg from '@/images/arCarShowroomCase/img_CTASecondMobileBg@2x.webp';
import HeroBg from '@/images/arCarShowroomCase/hero/img_Hero.webp';
import HerobgBig from '@/images/arCarShowroomCase/hero/img_Hero_big.webp';
import HeroBgTablet from '@/images/arCarShowroomCase/hero/img_Hero_tablet.webp';
import HeroBgBigTablet from '@/images/arCarShowroomCase/hero/img_Hero_big_tablet.webp';
import HeroBgMobile from '@/images/arCarShowroomCase/hero/img_Hero_mobile.webp';

function ArCarShowroomCasePageView({ saleUrl }: IPageStatus) {
  const {
    screenSizes: {
      isSMDevice,
      isXSDevice,
      isMDDevice,
      isXXXLDevice,
      isLGDevice,
    },
  } = useSelector<IStore, IApp>((state) => state?.app);

  const getBackground = () => {
    const bg:{ [propName:string]: StaticImageData } = {
      cta: CTASecondBg,
      main: HeroBg,
    };
    if (isXXXLDevice) {
      bg.cta = CTASecondBgXXXL;
      bg.main = HerobgBig;
    } else if (isLGDevice) {
      bg.main = HeroBgBigTablet;
    } else if (isMDDevice) {
      bg.cta = CTASecondTabletBg;
      bg.main = HeroBgTablet;
    } else if (isXSDevice || isSMDevice) {
      bg.cta = CTASecondMobileBg;
      bg.main = HeroBgMobile;
    }
    return bg;
  };
  return (
    <>
      <UsabilityTestingMainBlock
        title={(
          <>
            Vision.
            <br />
            AR Car showroom
          </>
        )}
        background={getBackground().main}
        classes={{
          container: `!bg-[var(--color-black)] !text-[var(--color-white)] !h-screen 
          screen-lg:!max-h-[1300px] 
          screen-md:!min-h-[600px] screen-md:!max-h-[800px] 
          screen-sm:!min-h-[570px] screen-sm:!max-h-[700px]`,
          background: `!absolute !bottom-0 !right-0 !h-full !w-full max-1390:!h-full
          max-1390:!w-full screen-lg:!w-full`,
          backgroundImage: '!h-full !w-full !object-cover !object-center',
          contentContainer: '!pt-0 !flex screen-lg:!block screen-lg:!pt-[146px]',
          content: 'min-lg:!pl-[70px] min-xxxl:!pl-[80px]',
          title: `!p-0 !max-w-[520px] screen-xl:!text-[40px] screen-xl:!leading-[56px]
          screen-md:!text-[25px] screen-md:!leading-[35px]`,
        }}
      />
      <AboutProjectSection
        title={projectData.title}
        subtitle={projectData.subtitle}
        content={projectData.content}
        variant={aboutProjectSectionWhite}
      />
      <BusinessContext
        upTitle={businessContextData.name}
        title={businessContextData.title}
        subTitle={businessContextData.subTitle}
        leftContent={businessContextData.firstText}
        rightContent={businessContextData.secondText}
        subText={businessContextData.bottomText}
        blackTheme
        classes={{
          upTitle: 'screen-md:!text-[14px]/[24px]',
          subTitle: '!text-[24px]/[36px] screen-md:!text-[20px]/[32px]',
          subText: '!text-[24px]/[36px] screen-lg:!text-[24px]/[34px] screen-md:!text-[20px]/[28px]',
        }}
      />
      <DevelopmentServicesWhite
        title={servicesData.title}
        description={servicesData.desc}
        data={servicesData.data}
        classes={{
          titleBlock: {
            desc: '!max-w-[1480px] screen-xxxl:!max-w-[1080px] screen-md:!mb-[40px]',
          },
          item: {
            containerItemRight: '!flex !flex-col !justify-end',
            containerItemLeft: '!justify-end !flex-col',
            number: `!text-[96px] !leading-[132px] !font-normal !mr-0 !w-full
            screen-lg:!text-[50px] screen-lg:!leading-[64px] screen-lg:!font-medium screen-lg:!mb-[10px]
            screen-md:!text-[40px] screen-md:!leading-[50px] screen-md:!mb-[5px]`,
            title: `!max-w-[300px] !text-[30px] !leading-[40px] min-xxxl:!max-w-full
            screen-lg:!max-w-full screen-md:!text-[20px] screen-md:!leading-[28px]`,
          },
        }}
      />
      {!saleUrl && (
        <VRARCallToActionComponent
          title={(
            <>
              We take a holistic approach to design, considering every aspect of the user journey,
              from first impressions to&nbsp;final&nbsp;conversions.
            </>
          )}
          btnText="Talk to our expert"
          withButton
          background={getBackground().cta}
          buttonType={ButtonTypes.PRIMARY}
          classes={{
            background: `after:content-[''] after:absolute after:top-0 after:left-0 after:w-full
            after:h-[80px] after:bg-gradient-to-t from-[rgba(255,255,255,0)] to-white`,
            image: '!object-bottom',
            title: '!text-black screen-lg:!max-w-[708px] screen-md:!max-w-[none]',
          }}
        />
      )}
      <OurSolutionVirtual
        title="Turning Vision into Reality"
        data={ourSolutionVirtualData}
        smallDesktop
      />
      <ResultsBlock
        name={resultsBlockData.name}
        title={resultsBlockData.title}
        content={resultsBlockData.content}
      />
      <CaseStudiesBlockForCases
        sliderIds={[53, 66, 7, 1000]}
        saleUrl={saleUrl}
      />
      {!saleUrl && (
        <VRARCallToActionComponent
          title={(
            <>
              Are you interested in developing a&nbsp;virtual
              museum&nbsp;experience?
            </>
          )}
          btnText="Contact us"
          withButton
          classes={{
            cta: '!pt-0',
            title: 'screen-md:!max-w-[none]',
          }}
        />
      )}
    </>
  );
}

export default ArCarShowroomCasePageView;
