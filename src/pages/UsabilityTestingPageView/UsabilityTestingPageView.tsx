import { useSelector } from 'react-redux';
import { StaticImageData } from 'next/image';

import VRARCallToActionComponent from '../../components/VRARCallToActionBlock/VRARCallToActionComponent';
import ResultsBlock from '../../components/ResultsBlock/ResultsBlock';
import UsabilityTestingMainBlock from './components/UsabilityTestingMainBlock';
import TextBlock from './components/TextBlock';
import CoreTechnology from '../../components/CoreTechnology/CoreTechnology';
import UsabilityIncreaseBlock from './components/UsabilityIncreaseBlock';
import ProcessBlock from '../../components/ProcessBlock/ProcessBlock';
import usabilityBusinessContextData from './data/usabilityBusinessContextData';
import usabilityHowOnixDeveloped from './data/usabilityHowOnixDeveloped';
import usabilityResultsBlockData from './data/usabilityResultsBlockData';
import usabilityTechnologyData from './data/usabilityTechnologyData';
import usabilityIncreaseBlockData from './data/usabilityIncreaseBlockData';
import usabilityTestingMainBlockData from './data/usabilityTestingMainBlockData';
import IStore from '../../store/interfaces/IStore';
import { IApp } from '../../store/app/interfaces/IApp';
import {
  ButtonType,
  ProcessBlockVariant,
} from '../../constants/enums';
import {
  usabilityProcessBlockAccordionData,
  usabilityProcessBlockContent,
  usabilityProcessImagesData,
} from './data/usabilityProcessBlockData';
import IPageStatus from '../../interfaces/IPageStatus';
import RunningRowsBlockBg from '@/images/usabilityTestingPage/runningRowsBlock/img_RunningRowsBg@2x.webp';
import RunningRowsBlockTabletBg from '@/images/usabilityTestingPage/runningRowsBlock/img_RunningRowsTabletBg@2x.webp';
import RunningRowsBlockMobileBg from '@/images/usabilityTestingPage/runningRowsBlock/img_RunningRowsMobileBg@2x.webp';
import IncreaseBlockTabletBg from '@/images/usabilityTestingPage/increaseBlock/img_IncreaseBlockTabletBg@2x.webp';
import IncreaseBlockBg from '@/images/usabilityTestingPage/increaseBlock/img_IncreaseBlockBg@2x.webp';
import IncreaseBlockMibuleBg from '@/images/usabilityTestingPage/increaseBlock/img_IncreaseBlockMobileBg@2x.webp';
import MainBg from '@/images/usabilityTestingPage/MainBlock/img_mainBlockImg@2x.webp';
import MainTabletBg from '@/images/usabilityTestingPage/MainBlock/img_mainBlockTabletImg@2x.webp';
import CaseStudiesBlockForCases from 'components/CaseStudiesBlockForCases/CaseStudiesBlockForCases';
import carouselData from './data/carouselData';
import RunningRowsBlock from 'components/RunningRowsBlock/RunningRowsBlock';
import ResultsBlockBg from '@/images/ResultsBlockBg/img_resultsBlockBlackBg@2x.webp';
import ResultsBlockTabletBg from '@/images/ResultsBlockBg/img_resultsBlockBlackTabletBg@2x.webp';
import ResultsBlockMobileBg from '@/images/ResultsBlockBg/img_resultsBlockBlackMobileBg@2x.webp';
import ResultsBlockXXXLBg from '@/images/ResultsBlockBg/img_resultsBlockBlackXXXLBg@2x.webp';
import CTAFirstBg from '@/images/ResultsBlockBg/img_ctaBlackBg@2x.webp';
import CTAFirstTabletBg from '@/images/ResultsBlockBg/img_ctaBlackTabletBg@2x.webp';
import CTAFirstMobileBg from '@/images/ResultsBlockBg/img_ctaBlackMobileBg@2x.webp';
import CTAFirstXXXLBg from '@/images/ResultsBlockBg/img_ctaBlackXXXLBg@2x.webp';
import AboutProjectSection from 'components/AboutProject/AboutProject';
import BusinessContext from 'components/BusinessContext/BusinessContext';

function UsabilityTestingPageView({ saleUrl }: IPageStatus) {
  const {
    screenSizes: {
      isSMDevice,
      isXSDevice,
      isMDDevice,
      isXXXLDevice,
    },
  } = useSelector<IStore, IApp>((state) => state?.app);

  const getBackground = () => {
    const bg: { [propName: string]: StaticImageData } = {
      resultsBlock: ResultsBlockBg,
      ctaFirst: CTAFirstBg,
      runningBg: RunningRowsBlockBg,
      increase: IncreaseBlockBg,
      mainBackground: MainBg,
    };
    if (isXXXLDevice) {
      bg.resultsBlock = ResultsBlockXXXLBg;
      bg.ctaFirst = CTAFirstXXXLBg;
    } else if (isMDDevice) {
      bg.resultsBlock = ResultsBlockTabletBg;
      bg.ctaFirst = CTAFirstTabletBg;
      bg.runningBg = RunningRowsBlockTabletBg;
      bg.increase = IncreaseBlockTabletBg;
      bg.mainBackground = MainTabletBg;
    } else if (isXSDevice || isSMDevice) {
      bg.resultsBlock = ResultsBlockMobileBg;
      bg.ctaFirst = CTAFirstMobileBg;
      bg.runningBg = RunningRowsBlockMobileBg;
      bg.increase = IncreaseBlockMibuleBg;
      bg.mainBackground = MainTabletBg;
    }
    return bg;
  };

  return (
    <>
      <UsabilityTestingMainBlock
        title={usabilityTestingMainBlockData.title}
        text={usabilityTestingMainBlockData.text}
        icon={usabilityTestingMainBlockData.icon}
        background={getBackground().mainBackground}
      />
      <AboutProjectSection
        title={usabilityHowOnixDeveloped.blockTitle}
        content={usabilityHowOnixDeveloped.data}
      />
      <BusinessContext
        upTitle={usabilityBusinessContextData.upTitle}
        title={usabilityBusinessContextData.title}
        subTitle={usabilityBusinessContextData.subTitle}
        leftContent={usabilityBusinessContextData.firstText}
        rightContent={usabilityBusinessContextData.secondText}
        subText={usabilityBusinessContextData.subText}
        classes={{
          subTitle: '!text-[24px]/[35px] screen-md:!text-[20px]/[28px]',
          subText: '!text-[24px]/[35px] screen-md:!text-[20px]/[28px]',
        }}
      />
      <ResultsBlock
        title={usabilityResultsBlockData.title}
        content={usabilityResultsBlockData.content}
        background={getBackground().resultsBlock}
        productScope
      />
      {!saleUrl && (
        <VRARCallToActionComponent
          id={ButtonType.CASE}
          title={(
            <>
              Don&apos;t let usability issues stop you from realizing&nbsp;your product&apos;s
              <br className="hidden screen-lg:block screen-md:hidden" />
              {' '}
              full&nbsp;potential!
            </>
          )}
          btnText="Get in touch with us"
          withButton
          background={getBackground().ctaFirst}
          classes={{
            cta: '!p-[120px_70px] screen-lg:!p-[80px_30px] screen-md:!p-[80px_30px] screen-sm:!p-[80px_15px]',
            background: `after:content-[""] after:absolute after:top-0 after:left-0 after:w-full after:h-[50px]
            after:bg-gradient-to-t from-[rgba(0,0,0,0)] to-black`,
            image: 'screen-md:!object-bottom',
            title: '!max-w-[1078px] screen-lg:!max-w-[708px] screen-md:!max-w-full screen-md:!pb-[30px]',
          }}
        />
      )}
      <TextBlock
        title="Solutions we provide"
        firstText="The main problem was the&nbsp;irrelevance of the templates presented to users.
         Users needed help finding templates that matched their website's specific requirements
         and objectives."
        secondText="The challenge was clear: Adoric needed a solution to provide users with
         templates directly relevant to their websites."
      />
      <RunningRowsBlock
        background={getBackground().runningBg}
        runningRows={carouselData}
      />
      <ProcessBlock
        data={usabilityProcessBlockAccordionData}
        imagesData={usabilityProcessImagesData}
        title={usabilityProcessBlockContent.title}
        tagTitle="h2"
        subtitle={usabilityProcessBlockContent.subtitle}
        firstText={usabilityProcessBlockContent.firstText}
        secondText={usabilityProcessBlockContent.secondText}
        withoutAnimate={false}
        variant={ProcessBlockVariant.USABILITY_TESTING}
        bottomTitle={(
          <>
            The proposed solution aims to show users templates that were closely aligned with their&nbsp;websites
            and goals. The developed mechanism scans a user&apos;s website and generates template
            recommendations based on the&nbsp;website&apos;s characteristics.
          </>
        )}
        classes={{
          container: '!py-[120px] screen-lg:!py-[80px]',
          item: '!border-color-black',
          title: '!mb-[30px] !text-[25px] !leading-[35px] min-lg:!text-[50px] min-lg:!leading-[64px]'
            + ' !font-generalSans !font-medium '
            + 'min-md:!text-[40px] min-md:!leading-[56px] min-lg:!mb-[40px]',
          bottomTitle: 'max-w-[1080px] min-md:!text-[24px]/[34px] min-xxxl:!max-w-[1480px] screen-md:!m-[60px_15px_0]',
          textContainer: 'flex flex-col screen-md:!gap-[20px] max-w-[1030px] '
            + 'screen-lg:gap-[30px] min-lg:gap-[40px] min-xxxl:max-w-[1760px]',
          accordionBlock: '!min-h-[unset] min-md:!h-[356px] min-lg:!h-[660px] min-xl:!h-[760px]',
          accordion: 'min-xxxl:basis-[840px]',
          contentInner: 'screen-lg:!pb-[20px]',
          contentInnerText: '!m-0 !text-[16px]/[24px] min-md:!p-[0_0_0_48px] '
            + 'min-lg:!p-[0_0_30px_70px] min-lg:!text-[18px]/[26px] screen-md:!p-[0_15px_0]',
        }}
      />
      <CoreTechnology
        data={usabilityTechnologyData}
        classes={{
          contentContainer: '!pb-0 !pt-0',
        }}
      />
      <UsabilityIncreaseBlock
        blockTitle={usabilityIncreaseBlockData.blockTitle}
        data={usabilityIncreaseBlockData.data}
        subText={usabilityIncreaseBlockData.subText}
        background={getBackground().increase}
        businessContextBlockData={usabilityIncreaseBlockData.businessContextBlockData}
      />
      <CaseStudiesBlockForCases
        sliderIds={[34, 37, 46, 1000]}
        saleUrl={saleUrl}
      />
      {!saleUrl && (
        <VRARCallToActionComponent
          id={ButtonType.CASE2}
          title="Eliminate barriers to conversion and watch your results&nbsp;soar!"
          btnText="Contact us"
          withButton
          classes={{
            cta: '!pt-0',
            background: `after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full
            after:h-[70px] after:bg-gradient-to-t from-[rgba(0,0,0,0)] to-black min-lg:after:h-[110px]`,
            title: '!max-w-[1080px] screen-lg:!max-w-[658px] screen-md:!max-w-full screen-md:!pb-[30px]',
          }}
        />
      )}
    </>
  );
}

export default UsabilityTestingPageView;
