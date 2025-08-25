import { useSelector } from 'react-redux';
import { StaticImageData } from 'next/image';

import Text from '../../../../components/CasesComponents/Text/Text';
import ImageComponent from '../../../../components/Image/Image';
import IStore from '../../../../store/interfaces/IStore';
import { IApp } from '../../../../store/app/interfaces/IApp';

import MainImg from '@/images/caseStudiesPage/DigitalHealthcareCaseStudy/mainSection/img_bg-desk@2x.webp';
import MainImgTablet from '@/images/caseStudiesPage/DigitalHealthcareCaseStudy/mainSection/img_bg-tablet@2x.webp';
import MainImgMobile from '@/images/caseStudiesPage/DigitalHealthcareCaseStudy/mainSection/img_bg-mobile@2x.webp';
import PhoneImg from '@/images/caseStudiesPage/DigitalHealthcareCaseStudy/mainSection/img_phone@2x.webp';
import PhoneTabletImg from '@/images/caseStudiesPage/DigitalHealthcareCaseStudy/mainSection/img_phone-tablet@2x.webp';
import PhoneMobileImg from '@/images/caseStudiesPage/DigitalHealthcareCaseStudy/mainSection/img_phone-mobile@2x.webp';
import styles from '../sass/gatherGroupMainSection.module.scss';

function GatherGroupMainSection() {
  const {
    screenSizes: {
      isSMDevice,
      isXSDevice,
      isMDDevice,
    },
  } = useSelector<IStore, IApp>((state) => state?.app);

  const getBackground = () => {
    const bg:{ [propName:string]: StaticImageData } = {
      background: MainImg,
      phone: PhoneImg,
    };
    if (isMDDevice) {
      bg.background = MainImgTablet;
      bg.phone = PhoneTabletImg;
    } else if (isXSDevice || isSMDevice) {
      bg.background = MainImgMobile;
      bg.phone = PhoneMobileImg;
    }
    return bg;
  };

  return (
    <section className={styles.mainSection}>
      <div className={styles.imageBlockWrapper}>
        <div className={styles.imageBlock}>
          <ImageComponent
            src={getBackground().background}
            alt="figures"
            fill
            sizes="(max-width: 768px) 50vw, (min-width: 768px) 100vw"
            priority
          />
        </div>
        <div className={styles.phone}>
          <ImageComponent
            src={getBackground().phone}
            fill
            priority
            sizes="(max-width: 768px) 50vw, (min-width: 768px) 100vw"
            alt="phone"
          />
        </div>
      </div>
      <div className={styles.container}>
        <h1 className={styles.title}>
          Digital health company
        </h1>
        <Text className={styles.text}>
          The white-label solution that enables healthcare at home
        </Text>
      </div>
    </section>
  );
}

export default GatherGroupMainSection;
