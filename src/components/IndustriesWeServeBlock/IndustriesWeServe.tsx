import CarouselAutomatic from '../CarouselAutomatic/CarouselAutomatic';
import ImageComponent from '../Image/Image';
import { IIndustriesWeServeBlock } from './interfaces/IIndustriesWeServeBlock';
import ContentTextNew from 'components/ContentTextNew/ContentTextNew';
import MainTitle from 'components/MainTitle/MainTitle';
import ItemText from 'components/ItemText/ItemText';
import PageContainer from 'components/PageContainer/PageContainer';
import VRARContent from '../VRARContent/VRARContent';

// Default background
// import IndustriesBgXXXL from '@/images/industriesWeServe/img_bgXXXL.webp';
// import IndustriesBg from '@/images/industriesWeServe/img_bg.webp';
// import IndustriesBgTablet from '@/images/industriesWeServe/img_bgTablet.webp';
// import IndustriesBgMobile from '@/images/industriesWeServe/img_bgMobile.webp';

function IndustriesWeServeBlock({
  upTitle, title, text, carouselTop, carouselBottom,
  carouselTopClasses, carouselBottomClasses,
  withoutBorder, background, classes, withoutAnimate = true,
}: IIndustriesWeServeBlock) {
  return (
    <section className={`relative bg-color-black text-color-white ${classes?.section || ''}`}>
      {background && (
        <div className={`
            absolute top-0 left-0 w-full h-[464px] screen-lg:h-[424px] screen-md:h-[361px]
            after:content-[""] after:h-[80px] after:w-full after:absolute after:bottom-0
            after:bg-gradient-to-t after:from-[#000] after:to-transparent
            ${classes?.background || ''}
          `}
        >
          <ImageComponent
            src={background}
            alt="background image"
            sizes="100vw"
            fill
            quality={96}
            className="w-full h-full object-cover object-left-top"
          />
        </div>
      )}
      <div className={`relative p-[160px_0_100px] screen-lg:py-[80px] ${classes?.container || ''}`}>
        <PageContainer>
          {upTitle && (
            <ContentTextNew
              text={upTitle}
              smallFontSizeOnMobile
              className={`mb-[20px] screen-md:mb-[15px] ${classes?.upTitle || ''}`}
            />
          )}
          {title && (
            <VRARContent withoutAnimate={withoutAnimate}>
              <MainTitle className={`
                min-lg:max-w-[1080px] min-xxxl:max-w-[1480px]
                ${classes?.title || ''}
              `}
              >
                {title}
              </MainTitle>
            </VRARContent>
          )}
          {text && (
            <div>
              <ItemText content={text} marginBottomAbsent classes={{ itemText: classes?.text || '' }} />
            </div>
          )}
        </PageContainer>
        <div className={`
            flex flex-col gap-[60px] screen-lg:gap-[76px] screen-md:gap-[40px]
            pt-[100px] screen-lg:pt-[80px] screen-md:pt-[40px]
            ${classes?.carouselContainer || ''}
          `}
        >
          {carouselTop && carouselTopClasses && (
            <CarouselAutomatic
              data={carouselTop}
              classes={carouselTopClasses}
              industriesCarousel
            />
          )}
          {!withoutBorder && (
            <div className="w-full h-[2px] bg-color-white" />
          )}
          {carouselBottom && carouselBottomClasses && (
            <CarouselAutomatic
              data={carouselBottom}
              classes={carouselBottomClasses}
              industriesCarousel
            />
          )}
        </div>
      </div>
    </section>
  );
}

export default IndustriesWeServeBlock;
