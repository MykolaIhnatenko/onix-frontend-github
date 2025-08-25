import { StaticImageData } from 'next/image';
import { useSelector } from 'react-redux';

import { IApp } from 'store/app/interfaces/IApp';
import IStore from 'store/interfaces/IStore';
import ImageComponent from 'components/Image/Image';
import MainTitle from 'components/MainTitle/MainTitle';
import certificationData from '../data/certificationData';
import PageContainer from 'components/PageContainer/PageContainer';

import ImageBgMobile from '@/images/devopsSolutionsPageView/certificationBlock/img_certificationMobileBg@2x.webp';
import ImageBgTablet from '@/images/devopsSolutionsPageView/certificationBlock/img_certificationTabletBg@2x.webp';
import ImageBg from '@/images/devopsSolutionsPageView/certificationBlock/img_certificationBg@2x.webp';
import styles from '../sass/certificationBlock.module.scss';

function CertificationBlock() {
  const {
    screenSizes: {
      isMDDevice,
      isSMDevice,
      isXSDevice,
    },
  } = useSelector<IStore, IApp>((state) => state?.app);

  const getBackground = () => {
    const bg:{ [propName:string]: StaticImageData } = {
      background: ImageBg,
    };
    if (isMDDevice) {
      bg.background = ImageBgTablet;
    } else if (isXSDevice || isSMDevice) {
      bg.background = ImageBgMobile;
    }
    return bg;
  };

  return (
    <div className={styles.section}>
      <div className={styles.background}>
        <ImageComponent
          src={getBackground().background}
          alt="background"
          sizes="100vw"
        />
      </div>
      <PageContainer className={styles.container}>
        <MainTitle className={styles.title}>
          Our DevOps certification
        </MainTitle>
        <div className={styles.content}>
          {certificationData.map(({ id, icon, title }) => (
            <div key={id} className={styles.contentContainer}>
              {icon}
              <MainTitle tag="p" className={styles.contentTitle}>
                {title}
              </MainTitle>
            </div>
          ))}
        </div>
      </PageContainer>
    </div>
  );
}

export default CertificationBlock;
