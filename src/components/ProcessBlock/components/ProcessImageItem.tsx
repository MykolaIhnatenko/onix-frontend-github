import { useMemo } from 'react';
import { StaticImageData } from 'next/image';
import { useSelector } from 'react-redux';

import ImageComponent from '../../Image/Image';
import { IProcessImageItem } from '../../../pages/MainPage/interfaces/IProcess';
import IStore from 'store/interfaces/IStore';
import { IApp } from 'store/app/interfaces/IApp';

function ProcessImageItem({
  id, src, srcTablet, srcBigDesk, activeId, variant, classes = '',
}: IProcessImageItem) {
  const {
    screenSizes: {
      isXXXLDevice,
      isMDDevice,
      isSMDevice,
      isXSDevice,
    },
  } = useSelector<IStore, IApp>((state) => state?.app);

  const imageSrc:StaticImageData = useMemo(() => {
    let imgSrc = src;

    if (isXXXLDevice) {
      imgSrc = srcBigDesk;
    }
    if (isMDDevice || isSMDevice || isXSDevice) {
      imgSrc = srcTablet;
    }

    return imgSrc;
  }, [src, srcTablet, srcBigDesk, isXXXLDevice, isMDDevice, isSMDevice, isXSDevice]);

  return (
    <div
      className={`${activeId === id ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500 ease-in-out 
      ${variant || ''}`}
    >
      <ImageComponent
        src={imageSrc}
        className={`object-cover ${isXXXLDevice ? 'min-xxxl:object-[unset]' : ''} ${classes}`}
        fill
        sizes="100vw"
        alt="figures"
      />
    </div>
  );
}

export default ProcessImageItem;
