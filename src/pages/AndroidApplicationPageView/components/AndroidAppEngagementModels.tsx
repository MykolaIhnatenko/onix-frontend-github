import { StaticImageData } from 'next/image';

import { useAppSelector } from '../../../hook/reduxToolkit';
import ImageComponent from '../../../components/Image/Image';
import IAndroidAppEngagementModels from '../interfaces/IAndroidAppEngagementModels';

export const itemTextContainerClasses = 'text-[18px] leading-[26px] screen-md:text-[16px] screen-md:leading-[24px]';
export const itemTitleClasses = `pb-[30px] text-[30px] leading-[40px] font-medium screen-lg:pb-[15px]
      screen-md:text-[20px] screen-md:leading-[28px]`;
export const itemTextTopClasses = '!mt-0 !mb-[30px] screen-lg:!mb-[20px]';

function AndroidAppEngagementModels({
  pageTitle, firstItemTitle, firstItemText, firstItemImg, firstItemImgTablet, firstItemImgMobile,
  secondItemTitle, secondItemText, secondItemImg, secondItemImgTablet, secondItemImgMobile, pageText,
  classes,
}: IAndroidAppEngagementModels) {
  const {
    screenSizes: {
      isMDDevice,
      isSMDevice,
      isXSDevice,
    },
  } = useAppSelector((state) => state?.app);
  const itemContainerClasses = 'flex min-xxxl:justify-between screen-lg:flex-wrap';
  const itemFlexClasses = 'w-[50%] screen-lg:w-full screen-lg:pb-[20px]';
  const itemContentClasses = 'screen-xxxl:w-auto screen-lg:text-[16px] screen-lg:leading-[24px]';
  const imageContainerClasses = 'w-[50%] screen-lg:w-full min-xxxl:w-[auto]';
  const imageClasses = 'h-auto max-w-full';

  const getImage = () => {
    const bg:{ [propName:string]: StaticImageData } = {
      firstItemImage: firstItemImg,
      secondItemImage: secondItemImg,
    };
    if (isMDDevice || isSMDevice) {
      bg.firstItemImage = firstItemImgTablet;
      bg.secondItemImage = secondItemImgTablet;
    } else if (isXSDevice) {
      bg.firstItemImage = firstItemImgMobile;
      bg.secondItemImage = secondItemImgMobile;
    }
    return bg;
  };

  return (
    <div
      className={`p-[80px_70px] bg-black text-white min-xxxl:p-[80px_80px]
      screen-lg:p-[80px_30px] screen-md:p-[80px_15px] ${classes?.container || ''}`}
    >
      {pageTitle}
      {pageText}
      <div className={`pt-[42px] screen-lg:pt-[60px] screen-md:pt-[40px] ${classes?.contentContainer || ''}`}>
        <div
          className={`pb-[70px] border-b-[2px] border-white screen-lg:pb-[30px]
          screen-md:pb-[20px] ${itemContainerClasses} ${classes?.firstItemContainer || ''}`}
        >
          <div className={`${itemFlexClasses} pr-[60px] screen-lg:pr-0 ${classes?.itemFlex || ''}`}>
            <div className={`${itemContentClasses} ${classes?.itemContent || ''}`}>
              {firstItemTitle}
              {firstItemText}
            </div>
          </div>
          <div className={`${imageContainerClasses} ${classes?.imageContainer || ''}`}>
            <ImageComponent
              sizes="(max-width: 768px) 50vw, (min-width: 768px) 100vw"
              className={imageClasses}
              src={getImage().firstItemImage}
              alt="firtItemImage"
            />
          </div>
        </div>
        <div
          className={`pt-[70px] screen-lg:pt-[30px] screen-md:pt-[20px]
          screen-lg:flex-col-reverse ${itemContainerClasses} ${classes?.secondItemContainer || ''}`}
        >
          <div className={`${imageContainerClasses} ${classes?.imageContainer || ''}`}>
            <ImageComponent
              sizes="(max-width: 768px) 50vw, (min-width: 768px) 100vw"
              className={imageClasses}
              src={getImage().secondItemImage}
              alt="secondItemImage"
            />
          </div>
          <div className={`${itemFlexClasses} pl-[60px] flex items-end screen-lg:pl-0 ${classes?.itemFlex || ''}`}>
            <div className={`${itemContentClasses} ${classes?.itemContent || ''}`}>
              {secondItemTitle}
              {secondItemText}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AndroidAppEngagementModels;
