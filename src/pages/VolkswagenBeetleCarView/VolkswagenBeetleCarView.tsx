import { useSelector } from 'react-redux';

import VRARCallToActionComponent from 'components/VRARCallToActionBlock/VRARCallToActionComponent';
import ResultsBlock from 'components/ResultsBlock/ResultsBlock';
import CoreTechnology from 'components/CoreTechnology/CoreTechnology';
import CaseStudiesBlockForCases from 'components/CaseStudiesBlockForCases/CaseStudiesBlockForCases';
import OurSolutionsAccordion from 'components/OurSolutionsAccordion/OurSolutionsAccordion';
import DevelopmentServicesWhite from 'components/DevelopmentServicesWhite/DevelopmentServicesWhite';
import BusinessContext from 'components/BusinessContext/BusinessContext';
import BusinessContextDiagonal from 'components/BusinessContextDiagonal/BusinessContextDiagonal';
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer';
import UsabilityTestingMainBlock from '../UsabilityTestingPageView/components/UsabilityTestingMainBlock';
import resultsBlockData from './data/resultsBlockData';
import businessContextBlockData from './data/businessContextBlockData';
import developmentServicesContentData from './data/developmentServicesContentData';
import solutionsAccordionData from './data/solutionsAccordionData';
import businessContextBlockDataThirt from './data/businessContextBlockDataThirt.json';
import businessContextBlockDataSecond from './data/businessContextBlockDataSecond.json';
import IStore from '../../store/interfaces/IStore';
import { IApp } from '../../store/app/interfaces/IApp';
import IPageStatus from '../../interfaces/IPageStatus';
import ButtonTypes from 'constants/ButtonTypes';
import { ButtonType } from 'constants/enums';
import challengesInfoData from './data/challengesInfoData.json';

import MainSectionBg from '@/images/volkswagen/img_VolkswagenMain@2x.webp';
import MainSectionBgTablet from '@/images/volkswagen/img_VolkswagenMainTablet@2x.webp';
import MainSectionBgMobile from '@/images/volkswagen/img_VolkswagenMainMobile@2x.webp';
import ContactUs from '@/images/volkswagen/img_VolkContactUsBG@2x.webp';
import ContactUsTablet from '@/images/volkswagen/img_VolkContactUsBGTablet@2x.webp';
import ContactUsMobile from '@/images/volkswagen/img_VolkContactUsBGMobile@2x.webp';
import OurSolutionBg from '@/images/volkswagen/img_OurSolutionBG.webp';
import OurSolutionBgTablet from '@/images/volkswagen/img_OurSolutionBGTablet.webp';
import OurSolutionBgMobile from '@/images/volkswagen/img_OurSolutionBGMobile.webp';
import Volk from '@/images/volkswagen/img_Volk.webp';

function VolkswagenBeetleCarView({ saleUrl }: IPageStatus) {
  const {
    screenSizes: {
      isSMDevice,
      isXSDevice,
      isMDDevice,
    },
  } = useSelector<IStore, IApp>((state) => state?.app);
  const isMobile = isXSDevice || isSMDevice;
  const getBackground = () => {
    const bg = {
      Main: MainSectionBg,
      contactUs: ContactUs,
      ourSolution: OurSolutionBg,
    };
    if (isMDDevice || isSMDevice) {
      bg.Main = MainSectionBgTablet;
      bg.contactUs = ContactUsTablet;
      bg.ourSolution = OurSolutionBgTablet;
    } else if (isXSDevice) {
      bg.Main = MainSectionBgMobile;
      bg.contactUs = ContactUsMobile;
      bg.ourSolution = OurSolutionBgMobile;
    }
    return bg;
  };

  return (
    <>
      <UsabilityTestingMainBlock
        title="Volkswagen Beetle Car Promo Website Design Concept"
        background={getBackground().Main}
        classes={{
          container: '!h-screen !relative screen-md:!min-h-[700px]',
          background: '!absolute !bottom-0 !right-0 !h-full !w-full',
          backgroundImage: '!w-full !h-full !object-cover !object-[left_top] screen-lg:!object-center',
          contentContainer: `!relative !h-full !flex !flex-col !justify-center max-1390:!flex
            max-1390:!pt-0 screen-lg:!block screen-lg:!pt-[146px] screen-md:!pt-[136px]`,
          content: '!pl-[70px] min-xxxl:!pl-[80px] screen-lg:!pl-[30px] screen-md:!pl-[15px] screen-md:!pr-[15px]',
          title: `!text-white !max-w-[649px] !pb-0 min-xxxl:!max-w-[780px] max-1390:!text-[50px]
            max-1390:!leading-[64px] screen-lg:!max-w-[708px] screen-lg:!text-[40px] screen-lg:!leading-[56px]
            screen-md:!text-[25px] screen-md:!leading-[35px]`,
        }}
      />
      <ResultsBlock
        title={'Onix illustrates a unique user interface and motion design capabilities with the'
          + ' example of the Volkswagen Beetle car promo website development.'}
        content={resultsBlockData.content}
        classes={{
          resultBlock: '!pb-0',
        }}
      />
      <BusinessContext
        upTitle={businessContextBlockData.upTitle}
        title={businessContextBlockData.title}
        leftContent={businessContextBlockData.firstText}
        rightContent={businessContextBlockData.secondText}
        subText={businessContextBlockData.subText}
        blackTheme
        classes={{
          subText: '!text-[24px]/[35px] screen-md:!text-[20px]/[28px]',
        }}
      />
      <DevelopmentServicesWhite
        title="The Onix team faced the following challenges:"
        data={developmentServicesContentData}
        classes={{
          item: {
            containerItemLeft: `screen-xxxl:!min-w-[426px] screen-xxxl:!w-[426px]
            screen-lg:!min-w-full screen-lg:!w-full`,
          },
        }}
      />
      {!saleUrl && (
        <VRARCallToActionComponent
          id={ButtonType.CASE}
          buttonType={ButtonTypes.PRIMARY}
          background={getBackground().contactUs}
          withButton
          title={(
            <>
              Ready to upgrade your business by leveraging best&#8209;in&#8209;class
              {' '}
              <br className="min-md:!hidden" />
              design&nbsp;solutions?
            </>
          )}
          btnText="Contact us"
          classes={{
            cta: '!p-[120px_70px] screen-lg:!p-[80px_30px] screen-md:!p-[80px_30px] screen-sm:!p-[80px_15px]',
            background: `after:!absolute after:content-[""] after:!h-[120px] after:!top-0 after:!bg-gradient-to-t
            after:!from-transparent after:!w-full
            after:!to-[#ffffff] after:!via-[rgba(253,253,253,0.15)]`,
            title: `!text-black !max-w-[1170px] !pb-[56px] screen-lg:!max-w-[600px]
            screen-lg:!pb-[32px] screen-md:!max-w-full`,
          }}
        />
      )}
      <BusinessContextDiagonal
        title={businessContextBlockDataSecond.title}
        upTitle={businessContextBlockDataSecond.upTitle}
        subText={businessContextBlockDataSecond.subText}
        blackTheme
        classes={{
          section: 'pb-[80px] screen-lg:pb-[60px] screen-md:pb-[40px]',
          subText: '!text-[24px]/[35px] screen-md:!text-[20px]/[28px]',
        }}
      />
      <OurSolutionsAccordion
        accordionData={solutionsAccordionData}
        list={challengesInfoData}
        isAccordionBlack
        stylesVariant="!pt-[0px] !pb-[120px] screen-lg:!pb-[80px]"
        iconStyles={{
          item: 'border-white',
          title: 'text-color-white',
        }}
        descStyles={{
          desc: 'text-color-white',
        }}
      />
      <CoreTechnology
        data={['Figma', 'Adobe After Effects']}
      />
      <BusinessContext
        title={businessContextBlockDataThirt.title}
        leftContent={businessContextBlockDataThirt.firstText}
        rightContent={businessContextBlockDataThirt.secondText}
        classes={{ section: '!pt-0' }}
      />
      <VideoPlayer
        src="/static/video/volkVideo.mp4"
        autoPlayVariant={!isMobile}
        mutedVariant={!isMobile}
        loopVariant
        withoutBtn={!isMobile}
        poster={Volk}
        controls={false}
        classes={{
          video: 'object-cover',
        }}
      />
      <CaseStudiesBlockForCases
        sliderIds={[62, 63, 56, 1000]}
        saleUrl={saleUrl}
      />
      {!saleUrl && (
        <VRARCallToActionComponent
          withButton
          title="Look for a trusted design team to create outstanding&nbsp;solutions?"
          btnText="Contact us"
          classes={{
            cta: '!pt-0 screen-md:!p-[0_30px_80px] screen-sm:!p-[0_15px_80px]',
            title: '!max-w-[1078px] !pb-[40px] screen-lg:!max-w-[708px] screen-md:!pb-[30px]',
          }}
        />
      )}
    </>
  );
}

export default VolkswagenBeetleCarView;
