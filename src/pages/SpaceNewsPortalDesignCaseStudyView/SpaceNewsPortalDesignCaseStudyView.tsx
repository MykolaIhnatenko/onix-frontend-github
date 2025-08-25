import { StaticImageData } from 'next/image';

import { useAppSelector } from '../../hook/reduxToolkit';
import CoreTechnology from '../../components/CoreTechnology/CoreTechnology';
import VRARCallToActionComponent from '../../components/VRARCallToActionBlock/VRARCallToActionComponent';
import CaseStudiesBlockForCases from 'components/CaseStudiesBlockForCases/CaseStudiesBlockForCases';
import SpaceNewsSolutionsBlock from './components/SpaceNewsSolutionsBlock';
import SpaceNewsMainBlock from './components/SpaceNewsMainBlock';
import { businessContextFirstData, businessContextSecondData } from './data/businessContextData';
import technologyData from './data/technologyData';
import howOnixDevelopedData from './data/howOnixDevelopedData';
import spaceNewsMainBlokData from './data/spaceNewsMainBlokData';
import challengesProcess from './data/challengesProcess';
import IPageStatus from 'interfaces/IPageStatus';
import { ButtonType } from '../../constants/enums';
import DevelopmentServicesBlack from 'components/DevelopmentServicesBlack/DevelopmentServicesBlack';
import AboutProjectSection from 'components/AboutProject/AboutProject';
import BusinessContext from 'components/BusinessContext/BusinessContext';

import CallToActionBgFirst from '@/images/spaceNewsPage/img_SpaceContactUs.webp';
import CallToActionBgTabletFirst from '@/images/spaceNewsPage/img_SpaceContactUsTablet.webp';
import CallToActionBgMobileFirst from '@/images/spaceNewsPage/img_SpaceContactUsMobile.webp';

function SpaceNewsPortalDesignCaseStudyView({ saleUrl }: IPageStatus) {
  const {
    screenSizes: {
      isSMDevice,
      isXSDevice,
      isMDDevice,
    },
  } = useAppSelector((state) => state?.app);
  const getBackground = () => {
    const bg: { [propName: string]: StaticImageData } = {
      firstBg: CallToActionBgFirst,
    };
    if (isMDDevice || isSMDevice) {
      bg.firstBg = CallToActionBgTabletFirst;
    } else if (isXSDevice) {
      bg.firstBg = CallToActionBgMobileFirst;
    }
    return bg;
  };

  return (
    <>
      <SpaceNewsMainBlock
        title={spaceNewsMainBlokData.title}
        video={spaceNewsMainBlokData.video}
        videoBaner={spaceNewsMainBlokData.videoBaner}
      />
      <AboutProjectSection
        title={howOnixDevelopedData.blockTitle}
        subtitle={howOnixDevelopedData.blockText}
        content={howOnixDevelopedData.data}
      />
      <BusinessContext
        upTitle={businessContextFirstData.name}
        title={businessContextFirstData.title}
        subTitle={businessContextFirstData.subtitle}
        leftContent={businessContextFirstData.firstText}
        rightContent={businessContextFirstData.secondText}
        classes={{
          upTitle: 'screen-md:!text-[14px]/[24px]',
          subTitle: '!text-[24px]/[36px] screen-md:!text-[20px]/[32px]',
        }}
      />
      <DevelopmentServicesBlack
        title={challengesProcess.title}
        data={challengesProcess.data}
      />
      {!saleUrl && (
        <VRARCallToActionComponent
          id={ButtonType.CASE}
          title="Ready to upgrade your business by leveraging best-in-class design&nbsp;solutions?"
          btnText="Contact us"
          withButton
          background={getBackground().firstBg}
          classes={{
            cta: '!p-0',
            background: `after:content-[""] after:absolute after:top-0 after:left-0 after:w-full after:h-[50px]
            after:bg-gradient-to-t from-[rgba(0,0,0,0)] to-black`,
            image: 'screen-md:!object-bottom',
            contentBlock: '!p-[120px_70px] screen-lg:!p-[80px_30px] screen-md:!p-[80px_30px] screen-sm:!p-[80px_15px]',
            title: '!max-w-[1080px] screen-lg:!max-w-[708px] screen-md:!max-w-full',
            btn: 'screen-md:!max-w-[330px]',
          }}
        />
      )}
      <SpaceNewsSolutionsBlock />
      <CoreTechnology data={technologyData} classes={{ contentContainer: '!pb-0' }} />
      <BusinessContext
        title={businessContextSecondData.title}
        subTitle={businessContextSecondData.subtitle}
        leftContent={businessContextSecondData.firstText}
        rightContent={businessContextSecondData.secondText}
        classes={{
          subTitle: '!text-[24px]/[36px] screen-md:!text-[20px]/[32px]',
        }}
      />
      <CaseStudiesBlockForCases
        sliderIds={[56, 51, 69, 1000]}
        saleUrl={saleUrl}
      />
      {!saleUrl && (
        <VRARCallToActionComponent
          id={ButtonType.CASE2}
          title="Looking for a trusted design team to create outstanding&nbsp;solutions?"
          btnText="Contact us"
          withButton
          classes={{
            cta: '!pt-0 screen-md:!p-[0_30px_80px] screen-sm:!p-[0_15px_80px]',
            title: '!max-w-[1080px] screen-lg:!max-w-[708px] screen-lg:!pb-[30px] screen-md:!max-w-full',
          }}
        />
      )}
    </>
  );
}

export default SpaceNewsPortalDesignCaseStudyView;
