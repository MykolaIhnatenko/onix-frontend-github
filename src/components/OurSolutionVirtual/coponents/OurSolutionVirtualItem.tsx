import { useAppSelector } from 'hook/reduxToolkit';
import ImageComponent from '../../Image/Image';
import MainTitle from '../../MainTitle/MainTitle';
import ContentTextNew from 'components/ContentTextNew/ContentTextNew';
import { IOurSolutionVirtualItem } from '../interfaces/IOurSolutionVirtualItem';

function OurSolutionVirtualItem({
  img, imgMobile, imgTablet, text, title, smallDesktop, classes,
}: IOurSolutionVirtualItem) {
  const {
    screenSizes: {
      isSMDevice,
      isXSDevice,
      isMDDevice,
    },
  } = useAppSelector((state) => state?.app);

  const getBackground = () => {
    const bg = {
      image: img,
    };

    if (isMDDevice) {
      bg.image = imgTablet;
    } else if (isXSDevice || isSMDevice) {
      bg.image = imgMobile;
    }

    return bg;
  };

  return (
    <div className={`flex screen-lg:flex-col ${smallDesktop ? 'screen-xl:flex-col' : ' '} ${classes?.card || ''}`}>
      <div
        className={`
          w-full max-w-[850px] min-h-[580px] max-h-[696px] screen-xl:min-w-[360px]
          screen-lg:min-w-0 screen-lg:max-w-none screen-lg:min-h-0 screen-lg:max-h-none
          ${smallDesktop ? 'screen-xl:min-w-0 screen-xl:max-w-none screen-xl:min-h-none screen-xl:max-h-none' : ''}
          ${classes?.imageContainer || ''}
        `}
      >
        <ImageComponent
          src={getBackground().image}
          alt={title}
          sizes="100vw"
          className="block w-full h-full object-cover screen-lg:h-auto"
        />
      </div>
      <div
        className={`
          min-w-[592px] max-w-[910px] w-[74%] pt-[60px] px-[70px] border-2 border-black border-l-0
          screen-xl:p-[30px_30px_0] screen-xl:w-full screen-xl:min-w-[494px] screen-lg:min-w-fit screen-lg:pb-[30px]
          screen-lg:border-t-0 screen-lg:border-l-2 screen-md:px-[20px] screen-md:pt-[30px]
          ${smallDesktop ? 'screen-xl:min-w-fit screen-xl:border-t-0 screen-xl:border-l-2 screen-xl:pb-[30px]' : ''}
          ${classes?.textContainer || ''}
        `}
      >
        <MainTitle
          tag="h3"
          className={`
            !text-[30px]/[40px] pb-[30px] screen-md:!text-[20px]/[28px] screen-md:pb-[20px]
            ${classes?.cardItemTitle || ''}
          `}
        >
          {title}
        </MainTitle>
        {typeof text === 'string' ? (
          <ContentTextNew
            text={text}
            className={classes?.cardItemText}
          />
        ) : text}
      </div>
    </div>
  );
}

export default OurSolutionVirtualItem;
