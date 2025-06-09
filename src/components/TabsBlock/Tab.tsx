import { ITab } from './interfaces/ITab';
import { useAppSelector } from 'hook/reduxToolkit';
import ImageComponent from 'components/Image/Image';
import MainTitle from 'components/MainTitle/MainTitle';
import PageContainer from 'components/PageContainer/PageContainer';
import ItemText from 'components/ItemText/ItemText';

function Tab({
  title, subTitle, text, img, imgTablet, imgMobile, video, isColumnContent, imageStyle, classes,
}: ITab) {
  const {
    screenSizes: {
      isMDDevice, isSMDevice, isXSDevice,
    },
  } = useAppSelector((state) => state?.app);

  const getImage = () => {
    if (isMDDevice) return imgTablet;

    if (isSMDevice || isXSDevice) return imgMobile;

    return img;
  };

  return (
    <PageContainer className={`
        flex flex-row-reverse justify-between gap-[70px] pt-[40px]
        screen-lg:flex-col screen-lg:gap-[30px] screen-md:gap-[20px] screen-md:pt-[30px]
        ${isColumnContent ? `
          border-b-2 border-color-black border-solid !py-[30px] last:border-none
          first:!pt-0 last:pb-0 screen-md:!py-[20px]` : ''}
        ${classes?.tab || ''}
      `}
    >
      {subTitle && isColumnContent && (
        <MainTitle tag="h3" className={`!text-[20px]/[28px] ${classes?.title || ''}`}>
          {title}
        </MainTitle>
      )}
      <div className={`
          relative max-w-[850px] w-full h-[650px] flex-[50%] screen-lg:h-[708px] screen-lg:max-w-full
          screen-lg:flex-none screen-md:h-[576px] screen-sm:h-[330px] min-xxxl:flex-none min-xxxl:h-[850px]
          ${classes?.imageContainer || ''}
        `}
      >
        {(!isXSDevice && !isSMDevice) && video ? (
          <video autoPlay muted loop playsInline className={`object-cover w-full h-full ${classes?.video || ''}`}>
            <source src={video} type="video/mp4" />
          </video>
        ) : (
          <ImageComponent
            src={getImage()}
            fill
            sizes="100vw"
            quality={90}
            alt="solution"
            className={`object-cover w-full h-full ${classes?.image || ''} ${imageStyle || ''}`}
          />
        )}
      </div>
      <div className={`
        min-lg:flex-[44.6%] min-lg:max-w-[840px] min-lg:flex min-lg:flex-col
        min-lg:justify-between
        ${classes?.textBlock || ''}
        `}
      >
        <MainTitle
          tag={subTitle ? 'p' : 'h3'}
          className={`
            !text-[30px]/[40px] pb-[30px] screen-md:pb-[20px] screen-md:!text-[20px]/[28px]
            ${classes?.subTitle || ''}
          `}
        >
          {subTitle || title}
        </MainTitle>
        {Array.isArray(text) ? (
          <div>
            <ItemText
              content={text}
              marginBottomAbsent
            />
          </div>
        ) : (
          <ItemText
            content={text}
            marginBottomAbsent
          />
        )}
      </div>
    </PageContainer>
  );
}

export default Tab;
