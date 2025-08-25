import ImageComponent from '../../Image/Image';
import MainTitle from '../../MainTitle/MainTitle';
import {
  INDUSTRIES_WE_SERVE_CAROUSEL_ITEM_HEIGHT,
  INDUSTRIES_WE_SERVE_CAROUSEL_ITEM_WIDTH,
} from '../../../constants/general';
import LinkComponent from 'components/Link/Link';
import IIndustriesWeServeCarouselItem from '../interfaces/IIndustriesWeServeCarouselItem';

function IndustriesWeServeCarouselItem({
  title, img, alt, url, classes, isJakarta,
}: IIndustriesWeServeCarouselItem) {
  const getMeasurements = () => {
    const width = INDUSTRIES_WE_SERVE_CAROUSEL_ITEM_WIDTH;
    const height = INDUSTRIES_WE_SERVE_CAROUSEL_ITEM_HEIGHT;

    return { width, height };
  };

  return (
    <div className={`
        flex flex-row min-w-[662px] screen-lg:flex-col screen-lg:min-w-[300px] screen-md:min-w-[240px]
        ${classes?.container || ''}
      `}
    >
      <LinkComponent
        href={url}
        className="cursor-pointer screen-lg:cursor-default"
      >
        <ImageComponent
          src={img}
          alt={alt}
          width={getMeasurements().width}
          height={getMeasurements().height}
          sizes="100vw"
          quality={92}
          className={`
            w-[380px] h-[240px] screen-lg:w-[300px] screen-lg:h-[190px] screen-md:w-[240px] screen-md:h-[150px]
            ${classes?.img || ''}
          `}
        />
      </LinkComponent>
      {title && (
        <div className={`
            ml-[40px] flex flex-col justify-between screen-lg:m-[20px_0_0]
            screen-lg:block screen-md:mt-[15px]
            ${isJakarta ? 'font-jakartaSans normal-case font-medium tracking-[-0.01em]' : ''}
          `}
        >
          <LinkComponent
            href={url}
            className="cursor-pointer max-lg:cursor-default"
          >
            <MainTitle
              tag="p"
              className={`
                text-color-white !text-[40px]/[56px]
                screen-lg:!text-[36px]/[46px] screen-md:!text-[20px]/[30px]
                ${classes?.title || ''}
                ${isJakarta ? '!font-jakartaSans normal-case font-medium tracking-[-0.01em]' : ''}
              `}
            >
              {title}
            </MainTitle>
          </LinkComponent>
        </div>
      )}
    </div>
  );
}

export default IndustriesWeServeCarouselItem;
