import { useAppSelector } from '../../hook/reduxToolkit';
import MainSection from './components/MainSection';
import VRARCallToActionComponent from 'components/VRARCallToActionBlock/VRARCallToActionComponent';
import CoreTechnology from 'components/CoreTechnology/CoreTechnology';
import TitleMainSection from './data/TitleMainSection';
import TechList from './data/TechList';
import BusinessData from './data/BusinessData';
import { ButtonType } from 'constants/enums';
import MainSectionBg from '@/images/apartmentRental/mainSection/img_MainSection.webp';
import MainSectionTabletBg from '@/images/apartmentRental/mainSection/img_MainSectionTablet.webp';
import MainSectionMobileBg from '@/images/apartmentRental/mainSection/img_MainSectionMobile.webp';
import CTABg from '@/images/GolfLive/cta/img_CTA_bg.webp';
import CTABgTablet from '@/images/GolfLive/cta/img_CTA_bg_tablet.webp';
import CTABgMobile from '@/images/GolfLive/cta/img_CTA_bg_mobile.webp';
import IPageStatus from 'interfaces/IPageStatus';
import howOnixDevelopedData from './data/howOnixDevelopedData';
import BusinessDataSecond from './data/BusinessDataSecond';
import BusinessDataThird from './data/BusinessDataThird';
import developmentServicesData from './data/developmentServicesData';
import RunningRowsBlock from 'components/RunningRowsBlock/RunningRowsBlock';
import carouselData from './data/carouselData';
import OurSolutionsData from './data/OurSolutionsData';
import CarouselBg from '../../assets/images/apartmentRental/carousel/img_carouselBg.webp';
import CarouselBgTablet from '../../assets/images/apartmentRental/carousel/img_carouselBgTablet.webp';
import CarouselBgMobile from '../../assets/images/apartmentRental/carousel/img_carouselBgMobile.webp';
import Photos from '../../assets/images/apartmentRental/photosSection/img_photos.webp';
import PhotosTablet from '../../assets/images/apartmentRental/photosSection/img_photosTablet.webp';
import PhotosMobile from '../../assets/images/apartmentRental/photosSection/img_photosMobile.webp';
import PhotosSection from './components/PhotosSection';
import CaseStudiesBlockForCases from 'components/CaseStudiesBlockForCases/CaseStudiesBlockForCases';
import DevelopmentServicesBlack from 'components/DevelopmentServicesBlack/DevelopmentServicesBlack';
import AboutProjectSection from 'components/AboutProject/AboutProject';
import OurSolutions from 'components/OurSolutions/OurSolutions';
import BusinessContext from 'components/BusinessContext/BusinessContext';
import BusinessContextDiagonal from 'components/BusinessContextDiagonal/BusinessContextDiagonal';

function ApartmentRentalView({ saleUrl }: IPageStatus) {
  const {
    screenSizes: {
      isSMDevice,
      isXSDevice,
      isMDDevice,
    },
  } = useAppSelector((state) => state?.app);

  const getBackground = () => {
    const bg = {
      main: MainSectionBg,
      cta: CTABg,
      carousel: CarouselBg,
      photos: Photos,
    };
    if (isMDDevice || isSMDevice) {
      bg.main = MainSectionTabletBg;
      bg.cta = CTABgTablet;
      bg.carousel = CarouselBgTablet;
      bg.photos = PhotosTablet;
    } else if (isXSDevice) {
      bg.main = MainSectionMobileBg;
      bg.cta = CTABgMobile;
      bg.carousel = CarouselBgMobile;
      bg.photos = PhotosMobile;
    }
    return bg;
  };

  return (
    <>
      <MainSection
        title={TitleMainSection}
        backgroundImg={getBackground().main}
      />
      <AboutProjectSection
        title={howOnixDevelopedData.blockTitle}
        subtitle={howOnixDevelopedData.blockText}
        content={howOnixDevelopedData.data}
      />
      <BusinessContext
        upTitle={BusinessData.upTitle}
        title={BusinessData.title}
        subTitle={BusinessData.subTitle}
        leftContent={BusinessData.firstText}
        rightContent={BusinessData.secondText}
        subText={BusinessData.subText}
        classes={{
          subTitle: '!text-[24px]/[35px] screen-md:!text-[20px]/[28px]',
          subText: '!text-[24px]/[35px] screen-md:!text-[20px]/[28px]',
        }}
      />
      <DevelopmentServicesBlack
        title={developmentServicesData.title}
        data={developmentServicesData.content}
      />
      {!saleUrl && (
        <VRARCallToActionComponent
          id={ButtonType.CASE}
          title={(
            <>
              Elevate engagement, drive conversions, and stand out in the&nbsp;travel market&nbsp;today!
            </>
          )}
          btnText="contact us"
          background={getBackground().cta}
          withButton
          classes={{
            cta: '!p-[120px_70px] screen-lg:!p-[80px_30px] screen-md:!p-[80px_15px] screen-sm:!p-[80px_15px]',
            background: `after:content-[""] after:absolute after:top-0 after:left-0 after:w-full after:h-[100px]
            after:bg-gradient-to-t from-[rgba(0,0,0,0)] to-black`,
            image: '!object-right-bottom screen-md:h-[300px]',
            title: `!max-w-[1080px] screen-lg:!max-w-[708px] screen-md:!text-[25px] screen-md:!leading-[35px]
            screen-md:!pb-[30px] screen-md:max-w-full`,
          }}
        />
      )}
      <BusinessContextDiagonal
        title={BusinessDataSecond.title}
        leftContent={BusinessDataSecond.firstText}
        classes={{ section: 'pb-[80px] screen-lg:pb-[60px] screen-md:pb-[40px]' }}
      />
      <RunningRowsBlock
        background={getBackground().carousel}
        runningRows={carouselData}
      />
      <OurSolutions
        data={OurSolutionsData}
        classes={{ section: 'pt-[80px] screen-lg:pt-[60px] screen-md:pt-[40px]' }}
      />
      <CoreTechnology
        data={TechList.techList}
        classes={{
          contentContainer: '!pt-0',
        }}
      />
      <PhotosSection image={getBackground().photos} />
      <BusinessContext
        upTitle={BusinessDataThird.upTitle}
        title={BusinessDataThird.title}
        subTitle={BusinessDataThird.subTitle}
        leftContent={BusinessDataThird.firstText}
        rightContent={BusinessDataThird.secondText}
        classes={{ subTitle: '!text-[24px]/[35px] screen-md:!text-[20px]/[28px]' }}
      />
      <CaseStudiesBlockForCases
        sliderIds={[33, 62, 51, 1000]}
        saleUrl={saleUrl}
      />
      {!saleUrl && (
        <VRARCallToActionComponent
          id={ButtonType.CASE2}
          title={(
            <>94% of first impressions are design-related. Let&apos;s craft your website&nbsp;today!</>
          )}
          btnText="Contact us"
          withButton
          classes={{
            cta: '!pt-0 screen-md:!p-[0_30px_80px] screen-sm:!p-[0_15px_80px]',
            background: 'after:hidden',
            title: `!max-w-[1080px] screen-lg:!max-w-[708px] screen-md:!text-[25px] screen-md:!leading-[35px]
            screen-md:!pb-[30px] screen-md:max-w-full`,
          }}
        />
      )}
    </>
  );
}

export default ApartmentRentalView;
