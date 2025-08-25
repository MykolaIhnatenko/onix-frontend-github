import { useSelector } from 'react-redux';
import { StaticImageData } from 'next/image';

import ImageComponent from '../../../../components/Image/Image';
import IStore from '../../../../store/interfaces/IStore';
import { IApp } from '../../../../store/app/interfaces/IApp';

import Image from '@/images/caseStudiesPage/DigitalHealthcareCaseStudy/img_photoDesk@2x.webp';
import ImageTablet from '@/images/caseStudiesPage/DigitalHealthcareCaseStudy/img_photoTablet@2x.webp';
import ImageMobile from '@/images/caseStudiesPage/DigitalHealthcareCaseStudy/img_photoMobile@2x.webp';
import styles from '../sass/gatherGroupImageSection.module.scss';

function GatherGroupImageSection() {
  const {
    screenSizes: {
      isSMDevice,
      isXSDevice,
      isMDDevice,
    },
  } = useSelector<IStore, IApp>((state) => state?.app);

  const getBackground = () => {
    const bg:{ [propName:string]: StaticImageData } = {
      background: Image,
    };
    if (isMDDevice) {
      bg.background = ImageTablet;
    } else if (isXSDevice || isSMDevice) {
      bg.background = ImageMobile;
    }
    return bg;
  };

  return (
    <section className={styles.imageSection}>
      <div className={styles.imageBlockWrapper}>
        <ImageComponent
          src={getBackground().background}
          fill
          sizes="(max-width: 768px) 100vw, (min-width: 768px) 100vw"
          alt="people"
        />
      </div>
    </section>
  );
}

export default GatherGroupImageSection;
