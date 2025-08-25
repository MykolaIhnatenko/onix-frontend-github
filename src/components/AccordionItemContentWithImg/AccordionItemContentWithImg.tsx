import React from 'react';

import IAccordionItemContentWithImg from './interfaces/IAccordionItemContentWithImg';
import { useAppSelector } from 'hook/reduxToolkit';
import ImageComponent from 'components/Image/Image';
import LinkButtonPrimary from 'components/UI/LinkButtonPrimary/LinkButtonPrimary';

function AccordionItemContentWithImg({
  children, imageAlt, image, imageTablet, imageMobile, button, staticImageHeight, contentReverse, classes,
}: IAccordionItemContentWithImg) {
  const {
    screenSizes: {
      isSMDevice,
      isXSDevice,
      isMDDevice,
      isLGDevice,
    },
  } = useAppSelector((state) => state?.app);

  const getImage = () => {
    if ((isLGDevice || isMDDevice) && imageTablet) {
      return imageTablet;
    }

    if ((isXSDevice || isSMDevice) && imageMobile) {
      return imageMobile;
    }

    return image;
  };

  return (
    <div className={`
      flex gap-[80px] px-[70px] pb-[30px] screen-xl:flex-col screen-xl:gap-[30px] screen-md:px-0 screen-md:pb-[20px]
      ${contentReverse ? 'screen-xl:flex-col-reverse' : ''}
      ${classes?.container || ''}
      `}
    >
      <div
        className={`flex flex-col gap-[30px] justify-between max-w-[770px] w-[93%] screen-xl:w-full screen-xl:min-w-full
          ${classes?.content || ''}`}
      >
        <div>
          {children}
        </div>
        {button && (
          <LinkButtonPrimary
            text={button?.text || 'Learn more'}
            path={button.path}
          />
        )}
      </div>
      <div className="w-full max-w-full">
        <ImageComponent
          src={getImage()}
          alt={imageAlt}
          sizes="100vw"
          quality={85}
          className={`w-full object-cover min-xl:min-h-[486px] ${staticImageHeight ? 'max-h-[486px]' : ''}`}
        />
      </div>
    </div>
  );
}

export default AccordionItemContentWithImg;
