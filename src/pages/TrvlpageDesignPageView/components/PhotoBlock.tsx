import { useSelector } from 'react-redux';
import { StaticImageData } from 'next/image';
import { useEffect, useState } from 'react';

import ImageComponent from '../../../components/Image/Image';
import VRARContent from '../../../components/VRARContent/VRARContent';
import IStore from '../../../store/interfaces/IStore';
import { IApp } from '../../../store/app/interfaces/IApp';
import trvlpagePhotoBlockData from '../data/trvlpagePhotoBlockData';
import PhotoBlockImage from '../../../assets/images/trvlpageDesignPageView/photoBlock/img_photoBlock1@2x.webp';
import PhotoBlockImageTablet from '../../../assets/images/trvlpageDesignPageView/photoBlock/img_photoBlockTablet1@2x.webp';
import PhotoBlockImageMobile from '../../../assets/images/trvlpageDesignPageView/photoBlock/img_photoBlockMobile1@2x.webp';
import PhotoBlockImage5 from '../../../assets/images/trvlpageDesignPageView/photoBlock/img_photoBlock5@2x.webp';
import PhotoBlockImageTablet5 from '../../../assets/images/trvlpageDesignPageView/photoBlock/img_photoBlockTablet5@2x.webp';
import PhotoBlockImageMobile5 from '../../../assets/images/trvlpageDesignPageView/photoBlock/img_photoBlockMobile5@2x.webp';

import styles from '../sass/photoBlock.module.scss';

function PhotoBlock() {
  const {
    screenSizes: {
      isSMDevice,
      isXSDevice,
      isMDDevice,
    },
  } = useSelector<IStore, IApp>((state) => state?.app);
  const { data, dataMobile, dataTablet } = trvlpagePhotoBlockData;
  const [imagesData, setImagesData] = useState(data);
  const getImages = () => {
    const bg:{ [propName:string]: StaticImageData } = {
      firstImage: PhotoBlockImage,
      thirtImage: PhotoBlockImage5,
    };
    if (isMDDevice) {
      bg.firstImage = PhotoBlockImageTablet;
      bg.thirtImage = PhotoBlockImageTablet5;
    } else if (isXSDevice || isSMDevice) {
      bg.firstImage = PhotoBlockImageMobile;
      bg.thirtImage = PhotoBlockImageMobile5;
    }
    return bg;
  };

  useEffect(() => {
    const resizeHandler = () => {
      if (isMDDevice) {
        setImagesData(dataTablet);
      } else if (isXSDevice || isSMDevice) {
        setImagesData(dataMobile);
      }
    };
    resizeHandler();

    window.addEventListener('resize', resizeHandler);

    return () => window.removeEventListener('resize', resizeHandler);
  });

  return (
    <div className={styles.container}>
      <VRARContent className={styles.firstImg}>
        <ImageComponent
          src={getImages().firstImage}
          alt="image"
          sizes="100vw"
        />
      </VRARContent>
      <div className={styles.secondItemContainer}>
        <VRARContent className={styles.secondItemList}>
          {imagesData.map((item) => (
            <div key={[item].join('_')} className={styles.imageItem}>
              <ImageComponent
                src={item}
                alt="image"
                sizes="100vw"
              />
            </div>
          ))}
        </VRARContent>
        <VRARContent className={styles.thirtItem}>
          <ImageComponent
            src={getImages().thirtImage}
            alt="image"
            sizes="100vw"
          />
        </VRARContent>
      </div>
    </div>
  );
}

export default PhotoBlock;
