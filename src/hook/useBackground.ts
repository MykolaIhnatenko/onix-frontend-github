import { useEffect, useState } from 'react';
import { StaticImageData } from 'next/image';

import { LG_DEVICE, MD_DEVICE } from '../constants/constants';
import { useAppSelector } from './reduxToolkit';

const useBackground = (
  desktopImage: StaticImageData | undefined,
  tabletImage: StaticImageData | undefined,
  mobileImage: StaticImageData | undefined,
  mobileDevice = MD_DEVICE,
  desktopDevise = LG_DEVICE,
) => {
  const { screenSizes: { screenWidth: width } } = useAppSelector((state) => state.app);

  const [image, setImage] = useState<StaticImageData | undefined>(undefined);

  useEffect(() => {
    if (width !== 0 && width > desktopDevise && desktopImage) {
      setImage(desktopImage);
    }
    if (width !== 0 && width >= mobileDevice && width <= desktopDevise && tabletImage) {
      setImage(tabletImage);
    }
    if (width !== 0 && width < mobileDevice && mobileImage) {
      setImage(mobileImage);
    }
  }, [width]);

  return image;
};

export default useBackground;
