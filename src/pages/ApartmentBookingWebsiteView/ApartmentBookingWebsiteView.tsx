import { useSelector } from 'react-redux';
import { StaticImageData } from 'next/image';

import VRARCallToActionComponent from 'components/VRARCallToActionBlock/VRARCallToActionComponent';
import ResultsBlock from 'components/ResultsBlock/ResultsBlock';
import ImageComponent from 'components/Image/Image';
import ApartmentBookingAccordionBlock from './components/ApartmentBookingAccordionBlock';
import RunningRowsBlock from 'components/RunningRowsBlock/RunningRowsBlock';
import CaseStudiesBlockForCases from 'components/CaseStudiesBlockForCases/CaseStudiesBlockForCases';
import UsabilityTestingMainBlock from 'pages/UsabilityTestingPageView/components/UsabilityTestingMainBlock';
import Icon from '../../assets/icon';
import howOnixDevelopedData from './data/howOnixDevelopedData.json';
import apartmentBusinessContextBlockData from './data/apartmentBusinessContextBlockData';
import businessContextBlockSecondData from './data/businessContextBlockSecondData.json';
import coreTechnologyData from './data/coreTechnologyData.json';
import businessContextBlockThirdData from './data/businessContextBlockThirdData.json';
import resultsBlockData from './data/resultsBlockData';
import resultsBlockSecondData from './data/resultsBlockSecondData';
import ourSolutionsData from './data/ourSolutionsData';
import runningRowsBlockData from './data/runningRowsBlockData';
import developmentServicesData from './data/developmentServicesData';
import developmentServicesContentData from './data/developmentServicesContentData';
import IPageStatus from 'interfaces/IPageStatus';
import { UsabilityTestingMainBlockVariant } from 'constants/enums';
import IStore from 'store/interfaces/IStore';
import { IApp } from 'store/app/interfaces/IApp';
import ButtonTypes from 'constants/ButtonTypes';
import ResultsBlockSecondBg from '@/images/ResultsBlockBg/img_resultsBlockBlackBg@2x.webp';
import ResultsBlockSecondTabletBg from '@/images/ResultsBlockBg/img_resultsBlockBlackTabletBg@2x.webp';
import ResultsBlockSecondMobileBg from '@/images/ResultsBlockBg/img_resultsBlockBlackMobileBg@2x.webp';
import ResultsBlockSecondXXXLBg from '@/images/ResultsBlockBg/img_resultsBlockBlackXXXLBg@2x.webp';
import ImageApartmentBookingBlock from '@/images/apartmentBookingWebsiteView/img_ApartmentBookingImageBlock@2x.webp';
import ImageApartmentBookingBlockTablet from '@/images/apartmentBookingWebsiteView/img_ApartmentBookingImageBlockTablet@2x.webp';
import ImageApartmentBookingBlockMobile from '@/images/apartmentBookingWebsiteView/img_ApartmentBookingImageBlockMobile@2x.webp';
import CTASecond from '@/images/apartmentBookingWebsiteView/img_CTASecondBg@2x.webp';
import CTASecondTablet from '@/images/apartmentBookingWebsiteView/img_CTASecondTabletBg@2x.webp';
import CTASecondMobile from '@/images/apartmentBookingWebsiteView/img_CTASecondMobileBg@2x.webp';
import ResultsBlockBg from '@/images/ResultsBlockBg/img_resultsBlockWhiteBg@2x.webp';
import ResultsBlockTabletBg from '@/images/ResultsBlockBg/img_resultsBlockWhiteTabletBg@2x.webp';
import ResultsBlockMobileBg from '@/images/ResultsBlockBg/img_resultsBlockWhiteMobileBg@2x.webp';
import ResultsBlockXXXLBg from '@/images/ResultsBlockBg/img_resultsBlockWhiteXXXLBg@2x.webp';
import CTAFirstBg from '@/images/ResultsBlockBg/img_ctaWhiteBg@2x.webp';
import CTAFirstTabletBg from '@/images/ResultsBlockBg/img_ctaWhiteTabletBg@2x.webp';
import CTAFirstMobileBg from '@/images/ResultsBlockBg/img_ctaWhiteMobileBg@2x.webp';
import CTAFirstXXXLBg from '@/images/ResultsBlockBg/img_ctaWhiteXXXLBg@2x.webp';
import RunningRowsBg from '@/images/apartmentBookingWebsiteView/runningRowsBlock/img_runningRowsBg@2x.webp';
import RunningRowsTabletBg from '@/images/apartmentBookingWebsiteView/runningRowsBlock/img_runningRowsTabletBg@2x.webp';
import RunningRowsMobileBg from '@/images/apartmentBookingWebsiteView/runningRowsBlock/img_runningRowsMobileBg@2x.webp';
import MainBg from '@/images/apartmentBookingWebsiteView/img_mainBg.webp';
import MainTabletBg from '@/images/apartmentBookingWebsiteView/img_mainBgTablet.webp';
import MainMobileBg from '@/images/apartmentBookingWebsiteView/img_mainBgMobile.webp';
import { getTechnologiesBooking } from 'utils/getTechnologies';
import TechnologiesBlock from 'components/TechnologiesBlock/TechnologiesBlock';
import DevelopmentServicesWhite from 'components/DevelopmentServicesWhite/DevelopmentServicesWhite';
import resultsBlockWhite from 'constants/tailwindStyle';
import AboutProjectSection from 'components/AboutProject/AboutProject';
import OurSolutions from 'components/OurSolutions/OurSolutions';
import BusinessContextDiagonal from 'components/BusinessContextDiagonal/BusinessContextDiagonal';
import BusinessContext from 'components/BusinessContext/BusinessContext';

import styles from './sass/apartmentBookingWebsiteView.module.scss';

function ApartmentBookingWebsiteView({ saleUrl }: IPageStatus) {
  const {
    screenSizes: {
      isSMDevice,
      isXSDevice,
      isMDDevice,
      isXXXLDevice,
    },
  } = useSelector<IStore, IApp>((state) => state?.app);

  const getBackground = () => {
    const bg:{ [propName:string]: StaticImageData } = {
      mainBg: MainBg,
      resultsBlock: ResultsBlockBg,
      resultsBlockSecond: ResultsBlockSecondBg,
      ctaFirst: CTAFirstBg,
      ctaSecond: CTASecond,
      imageBlock: ImageApartmentBookingBlock,
      runningRowsBg: RunningRowsBg,
    };
    if (isXXXLDevice) {
      bg.resultsBlockSecond = ResultsBlockSecondXXXLBg;
      bg.resultsBlock = ResultsBlockXXXLBg;
      bg.ctaFirst = CTAFirstXXXLBg;
    } else if (isMDDevice) {
      bg.mainBg = MainTabletBg;
      bg.resultsBlock = ResultsBlockTabletBg;
      bg.resultsBlockSecond = ResultsBlockSecondTabletBg;
      bg.ctaFirst = CTAFirstTabletBg;
      bg.ctaSecond = CTASecondTablet;
      bg.imageBlock = ImageApartmentBookingBlockTablet;
      bg.runningRowsBg = RunningRowsTabletBg;
    } else if (isXSDevice || isSMDevice) {
      bg.mainBg = MainMobileBg;
      bg.resultsBlock = ResultsBlockMobileBg;
      bg.resultsBlockSecond = ResultsBlockSecondMobileBg;
      bg.ctaFirst = CTAFirstMobileBg;
      bg.ctaSecond = CTASecondMobile;
      bg.imageBlock = ImageApartmentBookingBlockMobile;
      bg.runningRowsBg = RunningRowsMobileBg;
    }
    return bg;
  };

  return (
    <div>
      <UsabilityTestingMainBlock
        title="Apartment booking website case study"
        icon={<Icon.IconApartmentLogo className={styles.icon} />}
        background={getBackground().mainBg}
        variant={UsabilityTestingMainBlockVariant.APARTMENT_BOOKING}
      />
      <AboutProjectSection
        title={howOnixDevelopedData.blockTitle}
        content={howOnixDevelopedData.data}
      />
      <BusinessContext
        upTitle={apartmentBusinessContextBlockData.upTitle}
        title={apartmentBusinessContextBlockData.title}
        subTitle={apartmentBusinessContextBlockData.subTitle}
        leftContent={apartmentBusinessContextBlockData.firstText}
        rightContent={apartmentBusinessContextBlockData.secondText}
        subText={apartmentBusinessContextBlockData.subText}
        classes={{
          subTitle: '!text-[24px]/[35px] screen-md:!text-[20px]/[28px]',
          subText: '!text-[24px]/[35px] screen-md:!text-[20px]/[28px]',
        }}
      />
      <ResultsBlock
        title={resultsBlockData.title}
        name={resultsBlockData.name}
        content={resultsBlockData.content}
        background={getBackground().resultsBlock}
        classes={resultsBlockWhite}
        saleUrl={saleUrl}
        productScope
      />
      {!saleUrl && (
        <VRARCallToActionComponent
          title={(
            <>
              Are you interested in apartment booking
              <br className="block screen-lg:hidden" />
              {' '}
              website&nbsp;development?
            </>
          )}
          btnText="contact us"
          withButton
          buttonType={ButtonTypes.PRIMARY}
          background={getBackground().ctaFirst}
          classes={{
            cta: '!p-[120px_70px] screen-lg:!p-[80px_30px] screen-md:!p-[80px_15px]',
            background: `after:content-[""] after:absolute after:top-0 after:left-0
            after:w-full after:h-[50px] after:bg-gradient-to-t from-[rgba(0,0,0,0)] to-white`,
            image: '!object-bottom',
            title: '!text-black !pb-[40px] !max-w-[1080px] screen-lg:!max-w-[708px] screen-md:!pb-[30px]',
          }}
        />
      )}
      <BusinessContextDiagonal
        upTitle={businessContextBlockSecondData.upTitle}
        title={businessContextBlockSecondData.title}
        leftContent={businessContextBlockSecondData.firstText}
        rightContent={businessContextBlockSecondData.secondText}
      />
      <OurSolutions
        title="The phases of the apartment booking website development:"
        data={ourSolutionsData}
        classes={{
          section: '!pt-0 !pb-[80px]',
          title: '!text-[40px]/[56px] screen-lg:!text-[36px]/[46px] screen-md:!text-[20px]/[28px]',
        }}
      />
      {!saleUrl && (
        <VRARCallToActionComponent
          title="Do you need assistance with online apartment booking system development?"
          btnText="contact us"
          withButton
          buttonType={ButtonTypes.PRIMARY}
          background={getBackground().ctaSecond}
          classes={{
            cta: '!p-[120px_70px] screen-lg:!p-[80px_30px] screen-md:!p-[80px_15px]',
            background: `after:content-[""] after:absolute after:top-0 after:left-0 after:w-full after:h-[50px]
            after:bg-gradient-to-t from-[rgba(0,0,0,0)] to-white`,
            image: '!object-bottom',
            title: '!text-black !pb-[40px] !max-w-[1080px] screen-lg:!max-w-[708px] screen-md:!pb-[30px]',
          }}
        />
      )}
      <RunningRowsBlock background={getBackground().runningRowsBg} runningRows={runningRowsBlockData} />
      <DevelopmentServicesWhite
        upTitle={developmentServicesData.upTitle}
        title={developmentServicesData.title}
        data={developmentServicesContentData}
        withoutBackground
        classes={{
          devServices: 'screen-md:!p-[80px_0]',
        }}
      />
      <ApartmentBookingAccordionBlock />
      <div className={styles.image}>
        <ImageComponent
          src={getBackground().imageBlock}
          alt="imageBlock"
          sizes="100vw"
          width={1920}
          height={1080}
        />
      </div>
      <TechnologiesBlock
        technologies={getTechnologiesBooking(coreTechnologyData)}
        titleDesc={(
          <>
            Core technology stack we&nbsp;used
          </>
        )}
        noShowIcon
        classes={{
          container: '!p-[120px_70px] min-xxxl:!p-[120px_80px] screen-lg:!p-[80px_30px] screen-md:!p-[80px_15px]',
          blockTitleText: '!m-0',
          blockTitleDesc: '!mb-[80px] !text-black !w-full screen-lg:!mb-[60px] screen-md:!mb-[40px]',
          technologies: {
            technology: '!border-b-2 !border-black [&:not(:last-child)]:!border-t-2',
            keyTitle: '!pt-[20px] min-md:!pt-[40px] min-lg:!pt-[40px]',
            technologiesList: '!p-[15px_0] min-md:!p-[18px_0_33px] min-lg:!p-[20px_0_20px_20px]',
            item: '!p-[5px_0] min-md:!p-[7px_0] min-lg:!p-[20px_0]',
          },
        }}
      />
      <ResultsBlock
        title={resultsBlockSecondData.title}
        name={resultsBlockSecondData.name}
        content={resultsBlockSecondData.content}
        background={getBackground().resultsBlockSecond}
      />
      <BusinessContextDiagonal
        upTitle={businessContextBlockThirdData.upTitle}
        title={businessContextBlockThirdData.title}
        leftContent={businessContextBlockThirdData.firstText}
        rightContent={businessContextBlockThirdData.secondText}
      />
      <CaseStudiesBlockForCases
        sliderIds={[51, 55, 59, 1000]}
        saleUrl={saleUrl}
      />
      {!saleUrl && (
        <VRARCallToActionComponent
          title={(
            <>
              Are you interested in&nbsp;apartment booking
              <br className="block screen-lg:hidden" />
              {' '}
              website&nbsp;development?
            </>
          )}
          btnText="contact us"
          withButton
          classes={{
            cta: '!pt-0',
            title: '!text-white !max-w-[1078px] screen-lg:!max-w-[613px] screen-md:!pb-[30px]',
          }}
        />
      )}
    </div>
  );
}

export default ApartmentBookingWebsiteView;
