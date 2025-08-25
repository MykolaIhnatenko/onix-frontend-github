import { StaticImageData } from 'next/image';

import VRARCallToActionComponent from 'components/VRARCallToActionBlock/VRARCallToActionComponent';
import CaseStudiesBlockForCases from 'components/CaseStudiesBlockForCases/CaseStudiesBlockForCases';
import { useAppSelector } from '../../hook/reduxToolkit';
import ResultsBlock from '../../components/ResultsBlock/ResultsBlock';
import ApplicationMainBlock from './components/ApplicationMainBlock';
import CoreTechnology from '../../components/CoreTechnology/CoreTechnology';
import OurTeamNeeded from './components/OurTeamNeeded';
import ValueDeliveredBlock from './components/ValueDeliveredBlock';
import VRARContent from '../../components/VRARContent/VRARContent';
import TrustUsBlock from '../MainPage/components/TrustUsBlock';
import ApplicationHowWe from './components/ApplicationHowWe';
import developmentServicesData from './data/developmentServicesData';
import resultsBlockData from './data/resultsBlockData';
import coreTechnologyData from './data/coreTechnologyData';
import trustUsBlockData from './data/trustUsBlockData.json';
import {
  ButtonType,
} from '../../constants/enums';
import resultsBlockDataSecond from './data/resultsBlockDataSecond';
import IPageStatus from 'interfaces/IPageStatus';
import DevelopmentServicesWhite from 'components/DevelopmentServicesWhite/DevelopmentServicesWhite';
import resultsBlockWhite from 'constants/tailwindStyle';

import ApplicationCoreTechnologyMobileBg from '@/images/applicationMigrationCaseStudies/coreTechnology/img_CoreTechnologyMobileBg@2x.webp';
import ApplicationCoreTechnologyTabletBg from '@/images/applicationMigrationCaseStudies/coreTechnology/img_CoreTechnologyTabletBg@2x.webp';
import ApplicationCoreTechnologyBg from '@/images/applicationMigrationCaseStudies/coreTechnology/img_CoreTechnologyBg@2x.webp';
import ResultBg from '@/images/ResultsBlockBg/img_resultsBlockWhiteBg@2x.webp';
import ResultBgTablet from '@/images/ResultsBlockBg/img_resultsBlockWhiteTabletBg@2x.webp';
import ResultBgMobile from '@/images/ResultsBlockBg/img_resultsBlockWhiteMobileBg@2x.webp';
import ResultXXXLBg from '@/images/ResultsBlockBg/img_resultsBlockWhiteXXXLBg@2x.webp';
import ApplicationDevelopmentServicesFirstBg from '@/images/applicationMigrationCaseStudies/developmentServices/img_developmentServicesFirstBg@2x.webp';
import ApplicationDevelopmentServicesFirstTabletBg from '@/images/applicationMigrationCaseStudies/developmentServices/img_developmentServicesFirstTabletBg@2x.webp';
import ApplicationDevelopmentServicesFirstMobileBg from '@/images/applicationMigrationCaseStudies/developmentServices/img_developmentServicesFirstMobileBg@2x.webp';
import ApplicationTrustUsBlockTablet from '@/images/applicationMigrationCaseStudies/trustUsBlock/img_trustUsBlockTabletBg@2x.webp';
import ApplicationTrustUsBlockMobile from '@/images/applicationMigrationCaseStudies/trustUsBlock/img_trustUsBlockMobileBg@2x.webp';

function ApplicationMigrationCaseStudies({ saleUrl }: IPageStatus) {
  const {
    screenSizes: {
      isSMDevice,
      isXSDevice,
      isMDDevice,
      isXXXLDevice,
    },
  } = useAppSelector((state) => state?.app);

  const getBackground = () => {
    const bg:{ [propName:string]: StaticImageData } = {
      resultsBlock: ResultBg,
      developmentServicesFirst: ApplicationDevelopmentServicesFirstBg,
      technology: ApplicationCoreTechnologyBg,
    };
    if (isXXXLDevice) {
      bg.resultsBlock = ResultXXXLBg;
    } else if (isMDDevice) {
      bg.resultsBlock = ResultBgTablet;
      bg.developmentServicesFirst = ApplicationDevelopmentServicesFirstTabletBg;
      bg.technology = ApplicationCoreTechnologyTabletBg;
    } else if (isXSDevice || isSMDevice) {
      bg.resultsBlock = ResultBgMobile;
      bg.developmentServicesFirst = ApplicationDevelopmentServicesFirstMobileBg;
      bg.technology = ApplicationCoreTechnologyMobileBg;
    }
    return bg;
  };

  return (
    <>
      <ApplicationMainBlock />
      <ResultsBlock
        title={resultsBlockData.title}
        content={resultsBlockData.content}
        background={getBackground().resultsBlock}
        classes={resultsBlockWhite}
      />
      <OurTeamNeeded saleUrl={saleUrl || false} />
      <DevelopmentServicesWhite
        title={developmentServicesData.title}
        description={developmentServicesData.desc}
        data={developmentServicesData.data}
        customBackground={getBackground().developmentServicesFirst}
        classes={{
          devServices: '!pb-[40px] screen-lg:!pb-0',
          titleBlock: {
            desc: '!max-w-[720px]',
          },
          bgImg: '!h-[910px] !object-top',
        }}
      />
      <VRARContent>
        <TrustUsBlock
          data={trustUsBlockData}
          title="How AWS solves these issues"
          withoutAnimate={false}
          dropBlockTitle="Migrating to AWS offers greater flexibility, scalability,
            functionality, and cost savings than Heroku."
          withBtn={false}
          withoutDropBlockBg
          trustUsBlockBg={ApplicationTrustUsBlockMobile}
          tabletBg={ApplicationTrustUsBlockTablet}
          saleUrl={saleUrl || false}
          isPInDropBlockTitle
          classes={{
            container: 'screen-md:!pt-[80px]',
            sectionTitle: '!mb-[40px] screen-md:!mb-[30px]',
            CardsBlockClasses: {
              dropBlock: `!bg-transparent !w-full !flex-[100%] !relative !z-[2] !p-[60px_160px_120px]
              !justify-between !h-auto screen-xl:!p-[40px_30px_80px] screen-md:!p-[30px_15px_80px]`,
              dropBlockTitle: `!max-w-none !text-black !font-ibmPlexMono !text-[32px] !leading-[45px]
              !font-normal screen-xl:!text-[24px] screen-xl:!leading-[33px] screen-xl:!p-0
              screen-xl:!text-left screen-md:!text-[20px] screen-md:!leading-[28px]`,
              cardClasses: {
                card: `screen-lg:!h-[470px] screen-md:!h-[500px] [&:nth-of-type(6)]:!border-b-[2px]
                [&:nth-of-type(6)]:!border-black min-md:[&:nth-of-type(5)]:!border-b-[2px]
                min-md:[&:nth-of-type(5)]:!border-black min-xl:[&:nth-of-type(4)]:!border-b-[2px]
                min-xl:[&:nth-of-type(4)]:!border-black`,
              },
            },
          }}
        />
      </VRARContent>
      <ApplicationHowWe />
      <CoreTechnology
        data={coreTechnologyData}
        background={getBackground().technology}
      />
      <ResultsBlock
        title={resultsBlockDataSecond.title}
        content={resultsBlockDataSecond.content}
        classes={{
          resultBlock: 'bg-transparent !text-black !pt-0',
          line: '!bg-[#CECECE]',
          lineActive: '!bg-black',
        }}
      />
      <ValueDeliveredBlock />
      <CaseStudiesBlockForCases
        sliderIds={[21, 1, 22, 1000]}
        saleUrl={saleUrl}
      />
      {!saleUrl && (
        <VRARCallToActionComponent
          id={ButtonType.CASE2}
          title="Need help with infrastructure migration from one cloud provider to&nbsp;another?"
          btnText="Contact us"
          withButton
          classes={{
            cta: '!pt-0 screen-md:!p-[0_30px_80px] screen-sm:!p-[0_15px_80px]',
            title: `!text-white !max-w-[1080px] !pb-[40px] screen-lg:!max-w-[615px]
            screen-md:max-w-[none] screen-md:!pb-[30px]`,
          }}
        />
      )}
    </>
  );
}

export default ApplicationMigrationCaseStudies;
