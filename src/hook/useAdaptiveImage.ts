import { useMemo } from 'react';
import { StaticImageData } from 'next/image';

import { useAppSelector } from './reduxToolkit';

export interface IUseAdaptiveImage {
  imgDesk?: StaticImageData;
  imgTablet?: StaticImageData;
  imgMobile?: StaticImageData;
  heightDesk: number;
  heightTablet: number;
  heightMobile: number;
  widthDesk: number;
  widthTablet: number;
  widthMobile: number;
}
const useAdaptiveImage = ({
  imgDesk,
  imgTablet,
  imgMobile,
  heightDesk,
  heightTablet,
  heightMobile,
  widthDesk,
  widthTablet,
  widthMobile,
}: IUseAdaptiveImage) => {
  const {
    screenSizes: {
      isMDDevice,
      isXXXLDevice,
      isXXLDevice,
      isXLDevice,
      isLGDevice,
    },
  } = useAppSelector((state) => state?.app);

  return useMemo(() => {
    let imgProperties = {
      bg: imgMobile,
      properties: { imgWidth: widthMobile, imgHeight: heightMobile },
    };

    if (isMDDevice) {
      imgProperties = {
        bg: imgTablet,
        properties: { imgWidth: widthTablet, imgHeight: heightTablet },
      };
    }
    if (isLGDevice || isXLDevice || isXXLDevice || isXXXLDevice) {
      imgProperties = {
        bg: imgDesk,
        properties: { imgWidth: widthDesk, imgHeight: heightDesk },
      };
    }

    return imgProperties;
  }, [isMDDevice, isXLDevice, isXXLDevice, isXXXLDevice, isLGDevice]);
};

export default useAdaptiveImage;
