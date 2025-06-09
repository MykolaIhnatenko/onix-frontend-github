import ContentText from '../ContentText/ContentText';
import ImageComponent from '../Image/Image';
import MainTitle from '../MainTitle/MainTitle';
import PageContainer from '../PageContainer/PageContainer';
import TransparentCard from './components/TransparentCard';
import { IModelsSection } from './interfaces/IModelsSection';

// default background image
// import ModelsBgXXXL from '@/images/modelsSection/img_backgroundXXXL.webp';
// import ModelsBg from '@/images/modelsSection/img_background.webp';
// import ModelsBgTablet from '@/images/modelsSection/img_backgroundTablet.webp';
// import ModelsBgMobile from '@/images/modelsSection/img_backgroundMobile.webp';

function ModelsSection({
  pageTitle, pageText, data, background, classes,
}: IModelsSection) {
  return (
    <PageContainer
      tag="section"
      className={`
        relative bg-color-black py-[120px] screen-lg:pt-[80px]
        screen-lg:pb-[50px] screen-md:py-[80px] text-color-white
        ${classes?.section || ''}
      `}
    >
      {background && (
        <div className={`
            absolute top-0 left-0 w-full h-[464px] screen-lg:h-[520px] screen-md:h-[361px]
            after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[70px]
            screen-lg:after:h-[110px] after:bg-gradient-to-b after:from-[rgba(253,253,253,0)] after:to-black
            ${classes?.bg || ''}
          `}
        >
          <ImageComponent
            src={background}
            fill
            quality={95}
            sizes="100vw"
            alt="models-section-background"
            className={`object-left-top object-cover w-full h-full ${classes?.bgImg || ''}`}
          />
        </div>
      )}
      {pageTitle && (
        <MainTitle tag="h2" className={`relative ${classes?.title || ''}`}>
          {pageTitle}
        </MainTitle>
      )}
      {pageText && (
        <ContentText
          tag="p"
          marginAbsent
          className={`
            relative p-[40px_0_80px] screen-lg:pb-[60px] screen-md:pt-[30px]
            screen-md:text-[14px]/[20px] min-lg:max-w-[980px]
            ${classes?.text || ''}
          `}
        >
          {pageText}
        </ContentText>
      )}
      <div className="flex gap-[40px] screen-lg:flex-col screen-lg:gap-[30px] screen-md:gap-[15px]">
        {data.map(({
          id,
          icon,
          title,
          subTitle,
          text,
          bg,
          bgTablet,
          bgMobile,
        }) => (
          <TransparentCard
            key={id}
            bg={bg}
            bgTablet={bgTablet}
            bgMobile={bgMobile}
            icon={icon}
            title={title}
            subTitle={subTitle}
            text={text}
            classes={classes}
          />
        ))}
      </div>
    </PageContainer>
  );
}

export default ModelsSection;
