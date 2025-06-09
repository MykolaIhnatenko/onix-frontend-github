import { StaticImageData } from 'next/image';

import { useAppSelector } from '../../../hook/reduxToolkit';
import ImageComponent from '../../../components/Image/Image';
import IAndroidAppEngagementModels from '../interfaces/IAndroidAppEngagementModels';

import styles from '../sass/androidAppEngagementModels.module.scss';

function AndroidAppEngagementModels({
  pageTitle, firstItemTitle, firstItemText, firstItemImg, firstItemImgTablet, firstItemImgMobile,
  secondItemTitle, secondItemText, secondItemImg, secondItemImgTablet, secondItemImgMobile, pageText,
  variant,
}: IAndroidAppEngagementModels) {
  const {
    screenSizes: {
      isMDDevice,
      isSMDevice,
      isXSDevice,
    },
  } = useAppSelector((state) => state?.app);

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
    <div className={`${styles.container} ${variant ? styles[variant] : ''}`}>
      {pageTitle}
      {pageText}
      <div className={styles.contentContainer}>
        <div className={styles.firstItemContainer}>
          <div className={styles.itemFlex}>
            <div className={styles.itemContent}>
              {firstItemTitle}
              {firstItemText}
            </div>
          </div>
          <div className={styles.imageContainer}>
            <ImageComponent
              sizes="(max-width: 768px) 50vw, (min-width: 768px) 100vw"
              className={styles.image}
              src={getImage().firstItemImage}
              alt="firtItemImage"
            />
          </div>
        </div>
        <div className={styles.secondItemContainer}>
          <div className={styles.imageContainer}>
            <ImageComponent
              sizes="(max-width: 768px) 50vw, (min-width: 768px) 100vw"
              className={styles.image}
              src={getImage().secondItemImage}
              alt="secondItemImage"
            />
          </div>
          <div className={styles.itemFlex}>
            <div className={styles.itemContent}>
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
