import { useAppSelector } from 'hook/reduxToolkit';
import ICaseStudiesBlock from './interfaces/ICaseStudiesBlock';
import ScrollSliderDefault from '../ScrollSliderDefault/ScrollSliderDefault';
import DragSlider from '../DragSlider/DragSlider';
import ImageComponent from 'components/Image/Image';
import MainTitle from 'components/MainTitle/MainTitle';
import getCaseStudies from 'utils/getCaseStudies';
import PageContainer from 'components/PageContainer/PageContainer';
import ContentTextNew from 'components/ContentTextNew/ContentTextNew';

// import CaseStudiesBg from '@/images/caseStudiesBlock/img_bottomBg.webp';
// import CaseStudiesBgTablet from '@/images/caseStudiesBlock/img_bottomBgTablet.webp';

function CaseStudiesBlock({
  sliderIds, upTitle, title = 'See other related projects', desc, desc2, background, classes, saleUrl,
}: ICaseStudiesBlock) {
  const {
    isMDDevice, isSMDevice, isXSDevice,
  } = useAppSelector((state) => state.app.screenSizes);

  const isMobileOrTablet = isMDDevice || isSMDevice || isXSDevice;

  const caseStudiesData = getCaseStudies(sliderIds, saleUrl);

  return (
    <section className={`relative bg-color-black ${classes?.section || ''}`}>
      {background && (
        <div className={`
            absolute overflow-hidden left-0 top-0 w-full h-[520px] screen-md:h-[430px]
            after:absolute after:bottom-0 after:w-full after:h-[70px]
            after:bg-gradient-to-t after:from-color-black after:to-transparent after:content-['']
            ${classes?.bgContainer || ''}
          `}
        >
          <ImageComponent
            src={background}
            fill
            alt="background"
            sizes="100vw"
            quality={95}
            className={`w-full h-full object-cover object-left-top ${classes?.bgImg || ''}`}
          />
        </div>
      )}
      <div className={`relative py-[120px] screen-lg:py-[80px] ${classes?.container || ''}`}>
        <PageContainer className="text-color-white">
          {upTitle && (
            <ContentTextNew
              text={upTitle}
              className={`
                mb-[20px] screen-md:text-[14px]/[20px]
                ${classes?.upTitle || ''}
              `}
            />
          )}
          <MainTitle className={`mb-[40px] ${classes?.title || ''}`}>
            {title}
          </MainTitle>
          {desc && (
            <ContentTextNew
              text={desc}
              className={`
                screen-lg:mb-[40px] screen-md:mb-[30px] max-w-[611px] min-xxxl:max-w-[591px] screen-md:max-w-[600px]
                screen-lg:max-w-[540px] screen-md:text-[18px]/[26px]
                ${classes?.desc || ''}
              `}
            />
          )}
          {desc2 && (
            <ContentTextNew
              text={desc2}
              className={`
                mb-[80px] max-w-[611px] min-xxxl:max-w-[591px] screen-lg:max-w-[540px] screen-md:max-w-[600px]
                ml-auto screen-lg:mb-[60px] screen-md:mb-[40px] screen-md:!text-[18px]/[26px]
                ${classes?.desc2 || ''}
              `}
            />
          )}
        </PageContainer>

        {isMobileOrTablet ? (
          <DragSlider data={caseStudiesData} />
        ) : (
          <ScrollSliderDefault data={caseStudiesData} />
        )}
      </div>
    </section>
  );
}

export default CaseStudiesBlock;
