import { StaticImageData } from 'next/image';

import AIImageClassificationMainSection from './components/AIImageClassificationMainSection';
import {
  ButtonType,
  DropBlockVariant,
} from '../../constants/enums';
import AboutProjectSection from 'components/AboutProject/AboutProject';
import aboutContent from './data/aboutContent.json';
import AIImageClassificationBusinessContextSection from './components/AIImageClassificationBusinnesContextSection';
import productScopeContent from './data/productScope';
import VRARCallToActionComponent from 'components/VRARCallToActionBlock/VRARCallToActionComponent';
import technologies from './data/technologies';
import servicesData from './data/servicesData';
import AIImageClassificationResult from './components/AIImageClassificationResultSection';
import TrustUsBlock from '../MainPage/components/TrustUsBlock';
import trustUsCardsData from './data/trustUsCardsData.json';
import ResultsBlock from '../../components/ResultsBlock/ResultsBlock';
import BorderedTechnologiesBlock from '../../components/BorderedTechnologiesBlock/BorderedTechnologiesBlock';
import CaseStudiesBlockForCases from 'components/CaseStudiesBlockForCases/CaseStudiesBlockForCases';
import IPageStatus from 'interfaces/IPageStatus';
import { useAppSelector } from 'hook/reduxToolkit';
import DevelopmentServicesWhite from '../../components/DevelopmentServicesWhite/DevelopmentServicesWhite';
import OurSolutions from 'components/OurSolutions/OurSolutions';
import solutionWeProvide from 'pages/AIImageClassificationSolution/data/solutionWeProvide';

import ResultsBlockBg from '@/images/ResultsBlockBg/img_resultsBlockBlackBg@2x.webp';
import ResultsBlockTabletBg from '@/images/ResultsBlockBg/img_resultsBlockBlackTabletBg@2x.webp';
import ResultsBlockMobileBg from '@/images/ResultsBlockBg/img_resultsBlockBlackMobileBg@2x.webp';
import ResultsBlockXXXLBg from '@/images/ResultsBlockBg/img_resultsBlockBlackXXXLBg@2x.webp';
import CTAFirstBg from '@/images/ResultsBlockBg/img_ctaBlackBg@2x.webp';
import CTAFirstTabletBg from '@/images/ResultsBlockBg/img_ctaBlackTabletBg@2x.webp';
import CTAFirstMobileBg from '@/images/ResultsBlockBg/img_ctaBlackMobileBg@2x.webp';
import CTAFirstXXXLBg from '@/images/ResultsBlockBg/img_ctaBlackXXXLBg@2x.webp';

function AIIMageClassificationPageView({ saleUrl }: IPageStatus) {
  const {
    screenSizes: {
      isMDDevice,
      isSMDevice,
      isXSDevice,
      isXXXLDevice,
    },
  } = useAppSelector((state) => state?.app);

  const getBackground = () => {
    const bg: { [propName: string]: StaticImageData } = {
      productScopeBg: ResultsBlockBg,
      ctaBg: CTAFirstBg,
    };
    if (isXXXLDevice) {
      bg.productScopeBg = ResultsBlockXXXLBg;
      bg.ctaBg = CTAFirstXXXLBg;
    } else if (isMDDevice || isSMDevice) {
      bg.productScopeBg = ResultsBlockTabletBg;
      bg.ctaBg = CTAFirstTabletBg;
    } else if (isXSDevice) {
      bg.productScopeBg = ResultsBlockMobileBg;
      bg.ctaBg = CTAFirstMobileBg;
    }
    return bg;
  };

  return (
    <>
      <AIImageClassificationMainSection />
      <AboutProjectSection
        title={aboutContent.text}
        content={aboutContent.content}
      />
      <AIImageClassificationBusinessContextSection />
      <ResultsBlock
        content={productScopeContent.content}
        title={productScopeContent.title}
        name={productScopeContent.name}
        background={getBackground().productScopeBg}
        productScope
      />
      {!saleUrl && (
        <VRARCallToActionComponent
          id={ButtonType.CASE}
          background={getBackground().ctaBg}
          withButton
          title="Have a project in mind? Let's&nbsp;talk!"
          btnText="Get in touch with us"
          classes={{
            cta: `!p-[80px_15px_80px] min-sm:!p-[80px_30px_80px] min-md:!p-[80px_30px_80px]
            min-lg:!py-[120px] min-xxxl:!px-[80px]`,
            contentBlock: 'min-lg:!px-[70px]',
            title: `!max-w-full !pb-[30px] !mx-auto min-md:!pb-[40px] min-md:!max-w-[500px]
            min-lg:!max-w-full`,
            btn: '!max-w-[330px] !mx-auto min-md:!max-w-[420px]',
          }}
        />
      )}
      <DevelopmentServicesWhite
        title={servicesData.title}
        data={servicesData.data}
        classes={{
          devServices: 'screen-md:!p-[80px_0]',
        }}
      />
      <OurSolutions
        title="Solutions we provide"
        data={solutionWeProvide}
        classes={{
          section: '!pt-0 !pb-[40px] screen-lg:!pb-[60px] screen-md:!pb-[30px]',
        }}
      />
      <TrustUsBlock
        data={trustUsCardsData}
        title="Business goals we helped to achieve:"
        dropBlockVariant={DropBlockVariant.WITHOUT_DROP_BLOCK}
        withoutDropBlockBg
        disableBg
        mobileBgVariant
        classes={{
          CardsBlockClasses: {
            cardClasses: {
              card: `min-xl:!flex-[0_1_25%] [&:nth-of-type(4)]:!border-b-[2px] [&:nth-of-type(4)]:!border-black
              min-xl:[&:nth-of-type(4)]:!border-l-0 min-md:[&:nth-of-type(3)]:!border-b-[2px]
              min-md:[&:nth-of-type(3)]:!border-black min-xl:[&:nth-of-type(2)]:!border-b-[2px]
              min-xl:[&:nth-of-type(2)]:!border-black min-xl:[&:nth-of-type(1)]:!border-b-[2px]
              min-xl:[&:nth-of-type(1)]:!border-black`,
              title: 'min-lg:!text-[24px] min-lg:!leading-[1.42]',
              boxText: 'min-md:!text-[18px] min-md:!leading-[1.44] min-md:!pr-0 min-lg:!tracking-[-0.9px]',
            },
          },
        }}
      />
      <BorderedTechnologiesBlock
        title="Core technology stack we&nbsp;used"
        technologies={technologies}
        classes={{
          technologiesBlock: 'min-xxxl:px-[70px]',
          container: 'pt-[80px] min-lg:pt-[120px]',
          titleContainer: '',
          technologies: '!py-[5px] px-0 !gap-x-[30px] gap-y-0 min-md:!py-[25px] min-lg:mt-[80px]',
          technology: 'py-[15px] px-0 screen-lg:!py-0 screen-md:!py-[15px]',
          title: 'py-0 screen-lg:py-[15px] screen-md:py-0',
        }}
      />
      <AIImageClassificationResult />
      <CaseStudiesBlockForCases
        saleUrl={saleUrl}
        sliderIds={[35, 17, 4, 1000]}
      />
      {!saleUrl && (
        <VRARCallToActionComponent
          id={ButtonType.CASE2}
          withButton
          title="Leverage our ML expertise to create a high-quality solution customized
          to meet your unique business&nbsp;requirements!"
          btnText="Get in touch with us"
          classes={{
            cta: `!p-[0_15px_80px] min-sm:!p-[0_30px_80px] min-md:!p-[0_30px_80px]
            min-lg:!pb-[120px]`,
            contentBlock: 'min-md:!p-0 min-lg:!p-[0_70px]',
            title: `min-md:!max-w-full min-md:!pb-[40px] min-lg:!pb-[40px] min-lg:!max-w-[960px]
            min-xxxl:!max-w-[1080px]`,
            btn: 'max-w-[330px] min-md:!max-w-[420px]',
          }}
        />
      )}
    </>
  );
}

export default AIIMageClassificationPageView;
