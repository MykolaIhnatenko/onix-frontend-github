import { StaticImageData } from 'next/image';

import { useAppSelector } from '../../hook/reduxToolkit';
import MainBlockVolkswagen from 'components/MainBlockVolkswagen/MainBlockVolkswagen';
import AboutProjectSection from 'components/AboutProject/AboutProject';
import aboutData from './data/aboutData.json';
import { businessContextData, businessSecondContextResultData, businessSolutionData } from './data/businessData';
import cardsData from './data/cardsData';
import IPageStatus from '../../interfaces/IPageStatus';
import VRCardSlider from 'components/VRCardSlider/VRCardSlider';
import VRARCallToActionComponent from 'components/VRARCallToActionBlock/VRARCallToActionComponent';
import CoreTechnology from 'components/CoreTechnology/CoreTechnology';
import coreTechnologyData from './data/coreTechnologyData.json';
import MainBg from '../../assets/images/MascotAnimation/img_MainMascotAnimation.webp';
import ourSolutionsContentData from './data/ourSolutionsContentData';
import TextBlock from './components/TextBlock';
import CaseStudiesBlockForCases from 'components/CaseStudiesBlockForCases/CaseStudiesBlockForCases';
import OurSolutions from 'components/OurSolutions/OurSolutions';
import BusinessContext from 'components/BusinessContext/BusinessContext';
import BusinessContextDiagonal from 'components/BusinessContextDiagonal/BusinessContextDiagonal';

import MainBgTablet from '@/images/MascotAnimation/img_MainMascotAnimationTablet.webp';
import MainBgMobile from '@/images/MascotAnimation/img_MainMascotAnimationMobile.webp';
import CTAFirstBg from '@/images/ResultsBlockBg/img_ctaBlackBg@2x.webp';
import CTAFirstTabletBg from '@/images/ResultsBlockBg/img_ctaBlackTabletBg@2x.webp';
import CTAFirstMobileBg from '@/images/ResultsBlockBg/img_ctaBlackMobileBg@2x.webp';
import CTAFirstXXXLBg from '@/images/ResultsBlockBg/img_ctaBlackXXXLBg@2x.webp';

function MascotAnimationView({ saleUrl }: IPageStatus) {
  const {
    screenSizes: {
      isMDDevice, isSMDevice, isXSDevice, isXXXLDevice,
    },
  } = useAppSelector((state) => state?.app);
  const getBackground = () => {
    const bg:{ [propName:string]: StaticImageData } = {
      mainBg: MainBg,
      cta: CTAFirstBg,
    };
    if (isXXXLDevice) {
      bg.cta = CTAFirstXXXLBg;
    } else if (isMDDevice || isSMDevice) {
      bg.mainBg = MainBgTablet;
      bg.cta = CTAFirstTabletBg;
    } else if (isXSDevice) {
      bg.mainBg = MainBgMobile;
      bg.cta = CTAFirstMobileBg;
    }
    return bg;
  };

  return (
    <>
      <MainBlockVolkswagen
        title={(
          <>
            Animated 3D Mascot
            <br className="screen-lg:hidden" />
            {' '}
            Design for&nbsp;a&nbsp;Publishing
            <br className="screen-lg:hidden" />
            {' '}
            Company Website
          </>
        )}
        subtitleText="How Onix designed a 3D mascot animation for the publishing website"
        backgroundImg={getBackground().mainBg}
        classes={{
          titleContainer: 'max-w-[700px] screen-lg:min-h-[100vh] screen-lg:max-w-full '
            + 'screen-lg:!pt-[154px] '
            + 'screen-md:!pt-[139px]',
          subtitle: 'max-w-[560px] '
            + 'screen-lg:max-w-full screen-md:!leading-[28px] screen-sm:mr-[10px]',
        }}
      />
      <AboutProjectSection
        content={aboutData.content}
        title={aboutData.title}
        subtitle={aboutData.desc}
      />
      <BusinessContext
        upTitle={businessSecondContextResultData.name}
        title={businessSecondContextResultData.title}
        subTitle={businessSecondContextResultData.subtitle}
        leftContent={businessSecondContextResultData.firstText}
        rightContent={businessSecondContextResultData.secondText}
        subText={businessSecondContextResultData.bottomText}
        classes={{
          upTitle: 'screen-md:!text-[14px]/[24px]',
          subTitle: '!text-[24px]/[36px] screen-md:!text-[20px]/[32px]',
          subText: '!text-[24px]/[36px] screen-lg:!text-[24px]/[34px] screen-md:!text-[20px]/[32px]',
        }}
      />
      <VRCardSlider
        data={cardsData}
        title="The Onix team faced the following challenges:"
      />
      {!saleUrl && (
        <VRARCallToActionComponent
          title={(
            <>
              Ready to transform your user experience by
              {' '}
              <br className="inline-block screen-xl:hidden" />
              leveraging best&#8209;in&#8209;class design solutions?
            </>
          )}
          btnText="Contact us"
          withButton
          background={getBackground().cta}
          classes={{
            cta: '!p-[120px_70px] screen-lg:!p-[80px_30px] screen-md:!p-[80px_15px]',
            background: `after:content-[""] after:absolute after:top-0 after:left-0
            after:w-full after:h-[50px] after:bg-gradient-to-t from-[rgba(0,0,0,0)] to-black`,
            image: 'screen-md:!object-bottom',
            contentBlock: '!w-full',
            title: `!max-w-[1078px] screen-lg:!pb-[40px] screen-lg:!max-w-[708px]
            screen-md:!max-w-full screen-md:!pb-[30px]`,
          }}
        />
      )}
      <BusinessContextDiagonal
        upTitle={businessSolutionData.name}
        title={businessSolutionData.title}
        classes={{
          section: '!pb-[40px] screen-md:!pb-[30px]',
          upTitle: 'screen-md:!text-[14px]/[24px]',
          title: '!mb-0',
        }}
      />
      <TextBlock
        text="Here’s how we brought Blueberry Bagel's vision to life:"
      />
      <OurSolutions
        data={ourSolutionsContentData}
        desktopViewOnXL
        classes={{
          section: 'pt-[80px] screen-lg:pt-[60px] screen-md:pt-[40px]',
          title: '!text-[40px]/[56px] screen-lg:!text-[36px]/[46px] screen-md:!text-[20px]/[28px]',
        }}
      />
      <CoreTechnology
        data={coreTechnologyData}
        blackTheme
      />
      <BusinessContextDiagonal
        upTitle={businessContextData.name}
        title={businessContextData.title}
        leftContent={businessContextData.firstText}
        rightContent={businessContextData.secondText}
        classes={{
          upTitle: 'screen-md:!text-[14px]/[24px]',
        }}
      />
      <CaseStudiesBlockForCases
        sliderIds={[37, 34, 51, 1000]}
        saleUrl={saleUrl}
      />
      {!saleUrl && (
        <VRARCallToActionComponent
          title={(
            <>
              90% of Users Assess Credibility Based
              <br className="inline-block screen-xl:hidden" />
              {' '}
              on Website Appearance. Ready to Enhance
              <br className="inline-block screen-xl:hidden" />
              {' '}
              Your Online Presence? Let&apos;s Design
              <br className="inline-block screen-xl:hidden" />
              {' '}
              Your Custom Website
            </>
        )}
          btnText="Contact us"
          withButton
          classes={{
            cta: '!pt-0',
            background: 'screen-md:!object-bottom',
            title: '!max-w-[1080px] screen-lg:!max-w-[708px] screen-md:!max-w-full',
          }}
        />
      )}
    </>
  );
}

export default MascotAnimationView;
