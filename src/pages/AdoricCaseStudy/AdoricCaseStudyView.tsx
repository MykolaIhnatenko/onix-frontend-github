import { useSelector } from 'react-redux';

import MainSectionBg from '@/images/AdoricCase/img_AdoricMain.webp';
import MainSectionBgTablet from '@/images/AdoricCase/img_AdoricMainTablet.webp';
import MainSectionBgMobile from '@/images/AdoricCase/img_AdoricMainMobile@2x.webp';
import BackgroundBottom from '@/images/AdoricCase/img_BackgroundBottom.webp';
import BackgroundBottomTablet from '@/images/AdoricCase/img_BackgroundBottomTablet.webp';
import BackgroundBottomMobile from '@/images/AdoricCase/img_BackgroundBottomMobile.webp';
import TestimonialPreview from '@/images/AdoricCase/testimonial/testimonialPreview.webp';
import TestimonialPreviewTablet from '@/images/AdoricCase/testimonial/testimonialPreviewTablet.webp';
import TestimonialPreviewMobile from '@/images/AdoricCase/testimonial/testimonialPreviewMobile.webp';
import AdoricLogo from '@/images/AdoricCase/img_AdoricLogo.webp';
import IStore from '../../store/interfaces/IStore';
import { IApp } from '../../store/app/interfaces/IApp';
import MainBlockVolkswagen from '../../components/MainBlockVolkswagen/MainBlockVolkswagen';
import { ButtonType } from '../../constants/enums';
import AdoricBusiness from './data/AdoricBusiness.json';
import ProductScopeData from './data/productScopeData';
import AdoricWasCreatorData from './data/AdoricWasCreatorData.json';
import ProductConsistData from './data/ProductConsistData.json';
import UserFlowData from './data/UserFlowData.json';
import AdoricTextData from './data/AdoricTextData.json';
import carouselData from './data/carouselData';
import AnimationCreatorData from './components/AnimationCreatorData';
import AnimationProductConsistBlock from '../../components/AnimationProductConsistBlock/AnimationProductConsistBlock';
import SliderBg from '@/images/AdoricCase/img_BackgroundEnd.webp';
import { projectListAdoric, projectListAdoricSlider } from '../../components/BrandsBlock/projectList';
import AdoricBrands from '../../components/AdoricBrands/AdoricBrands';
import AnimNumberBlock from '../../components/AnimNumberBlock/AnimNumberBlock';
import adoricNumbersData from './data/AdoricNumberData';
import AdoricOurSolutionsContentData from './data/AdoricOurSolutionsContentData';
import TechListData from './data/TechListData.json';
import IPageStatus from 'interfaces/IPageStatus';
import CaseStudiesBlockForCases from 'components/CaseStudiesBlockForCases/CaseStudiesBlockForCases';
import VRARCallToActionComponent from 'components/VRARCallToActionBlock/VRARCallToActionComponent';
import TestimonialVideoSection from 'components/TestimonialVideoSection/TestimonialVideoSection';
import RunningRowsBlock from 'components/RunningRowsBlock/RunningRowsBlock';
import ResultsBlock from 'components/ResultsBlock/ResultsBlock';
import ResultsBlockBg from '@/images/ResultsBlockBg/img_resultsBlockBlackBg@2x.webp';
import ResultsBlockTabletBg from '@/images/ResultsBlockBg/img_resultsBlockBlackTabletBg@2x.webp';
import ResultsBlockMobileBg from '@/images/ResultsBlockBg/img_resultsBlockBlackMobileBg@2x.webp';
import ResultsBlockXXXLBg from '@/images/ResultsBlockBg/img_resultsBlockBlackXXXLBg@2x.webp';
import CTAFirstBg from '@/images/ResultsBlockBg/img_ctaBlackBg@2x.webp';
import CTAFirstTabletBg from '@/images/ResultsBlockBg/img_ctaBlackTabletBg@2x.webp';
import CTAFirstMobileBg from '@/images/ResultsBlockBg/img_ctaBlackMobileBg@2x.webp';
import CTAFirstXXXLBg from '@/images/ResultsBlockBg/img_ctaBlackXXXLBg@2x.webp';
import CoreTechnology from '../../components/CoreTechnology/CoreTechnology';
import AboutProjectSection from 'components/AboutProject/AboutProject';
import aboutContent from './data/aboutContent.json';
import OurSolutions from 'components/OurSolutions/OurSolutions';
import BusinessContextDiagonal from 'components/BusinessContextDiagonal/BusinessContextDiagonal';
import BusinessContext from 'components/BusinessContext/BusinessContext';
import BusinessBg from '../../assets/images/AdoricCase/img_Product.webp';
import BusinessBgTablet from '../../assets/images/AdoricCase/img_ProductTablet.webp';
import BusinessBgMobile from '../../assets/images/AdoricCase/img_ProductMobile.webp';

function AdoricCaseStudyView({ saleUrl }: IPageStatus) {
  const {
    screenSizes: {
      isSMDevice,
      isXSDevice,
      isMDDevice,
      isXXXLDevice,
    },
  } = useSelector<IStore, IApp>((state) => state?.app);

  const getBackground = () => {
    const bg = {
      Main: MainSectionBg,
      BottomBG: BackgroundBottom,
      TestimonialPreview,
      ProductScopeBg: ResultsBlockBg,
      CtaBg: CTAFirstBg,
      businessBg: BusinessBg,
    };
    if (isXXXLDevice) {
      bg.ProductScopeBg = ResultsBlockXXXLBg;
      bg.CtaBg = CTAFirstXXXLBg;
    } else if (isMDDevice) {
      bg.Main = MainSectionBgTablet;
      bg.BottomBG = BackgroundBottomTablet;
      bg.TestimonialPreview = TestimonialPreviewTablet;
      bg.ProductScopeBg = ResultsBlockTabletBg;
      bg.CtaBg = CTAFirstTabletBg;
      bg.businessBg = BusinessBgTablet;
    } else if (isSMDevice || isXSDevice) {
      bg.Main = MainSectionBgMobile;
      bg.BottomBG = BackgroundBottomMobile;
      bg.TestimonialPreview = TestimonialPreviewMobile;
      bg.ProductScopeBg = ResultsBlockMobileBg;
      bg.CtaBg = CTAFirstMobileBg;
      bg.businessBg = BusinessBgMobile;
    }
    return bg;
  };

  return (
    <div>
      <MainBlockVolkswagen
        logo={AdoricLogo}
        title="Growing web conversion"
        backgroundImg={getBackground().Main}
        classes={{
          titleContainer: 'max-w-[650px] min-xxxl:max-w-[720px] screen-xl:max-w-[600px] screen-lg:min-h-[100vh]',
        }}
      />
      <AboutProjectSection
        title={aboutContent.title}
        content={aboutContent.content}
      />
      <BusinessContextDiagonal
        upTitle={AdoricBusiness.titleBlock}
        title={AdoricBusiness.title}
        leftContent={AdoricBusiness.leftBlock}
        rightContent={AdoricBusiness.rightBlock}
      />
      <ResultsBlock
        name={ProductScopeData.titleBlock}
        title={ProductScopeData.title}
        content={ProductScopeData.listPerformance}
        background={getBackground().ProductScopeBg}
        productScope
      />
      {!saleUrl && (
        <VRARCallToActionComponent
          id={ButtonType.CASE}
          title={(
            <>
              Have a project in mind?
              <br />
              Let&apos;s talk!
            </>
          )}
          btnText="Get in touch with us"
          withButton
          background={getBackground().CtaBg}
          classes={{
            cta: '!bg-transparent !pt-[120px] !pb-[120px] screen-lg:!p-[80px_30px] screen-md:!p-[60px_15px_80px]',
            background: `after:content-[""] after:absolute after:top-0 after:left-0 after:w-full after:h-[80px]
            after:bg-gradient-to-t from-[rgba(0,0,0,0)] to-[rgb(0,0,0)]`,
            image: '!object-right-bottom',
            title: '!pb-[40px] !text-center !text-white !max-w-[1080px] screen-md:!pb-[30px] screen-md:!max-w-[310px]',
          }}
        />
      )}
      <AnimationCreatorData
        title={AdoricWasCreatorData.title}
        desc={AdoricWasCreatorData.desc}
        listPerformance={AdoricWasCreatorData.listPerformance}
      />
      <AnimationProductConsistBlock
        title={ProductConsistData.title}
        list={ProductConsistData.list}
      />
      <BusinessContextDiagonal
        title={UserFlowData.title}
        leftContent={UserFlowData.leftBlock}
        rightContent={UserFlowData.rightBlock}
        classes={{ section: 'pb-[80px] screen-lg:pb-[60px] screen-md:pb-[40px]' }}
      />
      <RunningRowsBlock
        background={SliderBg}
        runningRows={carouselData}
      />
      <OurSolutions
        upTitle={AdoricOurSolutionsContentData.upTitle}
        title={AdoricOurSolutionsContentData.blockTitle}
        firstText={AdoricOurSolutionsContentData.firstText}
        data={AdoricOurSolutionsContentData.data}
        classes={{ section: '!pb-0' }}
      />
      <CoreTechnology data={TechListData} />
      <TestimonialVideoSection
        videoSrc="/static/video/tal-revivo.mp4"
        preview={getBackground().TestimonialPreview}
      />
      <AdoricBrands
        title={(
          <>
            Today Adoric collaborates with various
            {' '}
            <span className="inline_block">well-known</span>
            {' '}
            brands across different industries
          </>
        )}
        titleBlock="[ Results and prospects ]"
        brandsList={projectListAdoric}
        brandListSlider={projectListAdoricSlider}
      />
      <BusinessContext
        title={AdoricTextData.title}
        leftContent={AdoricTextData.leftBlock}
        rightContent={AdoricTextData.rightBlock}
        background={getBackground().businessBg}
        classes={{ section: '!pb-0', bgImage: 'screen-md:!object-[50%_20%]', bgContainer: 'screen-md:!h-full' }}
      />
      <AnimNumberBlock
        title="Achieved results"
        data={adoricNumbersData}
      />
      <CaseStudiesBlockForCases
        sliderIds={[30, 22, 20, 1000]}
        saleUrl={saleUrl}
      />
      {!saleUrl && (
        <VRARCallToActionComponent
          id={ButtonType.CASE2}
          title="Need a custom solution for your specific business idea?"
          btnText="Contact us"
          withButton
          classes={{
            cta: '!pt-0',
            image: '!object-bottom',
            title: '!max-w-[1078px] !pb-[40px] screen-md:!max-w-[400px] screen-md:!pb-[30px]',
            btn: '!text-[18px] screen-md:!max-w-[330px]',
          }}
        />
      )}
    </div>
  );
}

export default AdoricCaseStudyView;
