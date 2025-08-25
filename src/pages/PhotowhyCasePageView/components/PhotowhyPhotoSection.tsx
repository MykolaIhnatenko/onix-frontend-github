import { StaticImageData } from 'next/image';

import { useAppSelector } from '../../../hook/reduxToolkit';
import ImageComponent from '../../../components/Image/Image';

import PhotoTablet from '@/images/Photowhy/img_photo_tablet.webp';
import PhotoMobile from '@/images/Photowhy/img_photo_mobile.webp';
import PhotoDesktop from '@/images/Photowhy/img_photo_desktop.webp';
import styles from '../sass/photowhyPhotoSection.module.scss';

function PhotowhyPhotoSection() {
  const { screenSizes: { isMDDevice, isSMDevice, isXSDevice } } = useAppSelector((state) => state?.app);
  const getBackground = () => {
    const bg: { [propName: string]: StaticImageData } = { background: PhotoDesktop };
    if (isMDDevice || isSMDevice) {
      bg.background = PhotoTablet;
    } else if (isXSDevice) {
      bg.background = PhotoMobile;
    }
    return bg;
  };

  return (
    <section className={styles.photoSection}>
      <ImageComponent
        fill
        sizes="(max-width: 768px) 100vw, (min-width: 768px) 100vw"
        src={getBackground().background}
        quality={100}
        alt="Office"
      />
    </section>
  );
}

export default PhotowhyPhotoSection;
