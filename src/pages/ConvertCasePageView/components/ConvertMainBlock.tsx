import { StaticImageData } from 'next/image';

import ImageComponent from '../../../components/Image/Image';
import MainTitle from '../../../components/MainTitle/MainTitle';
import PageContainer from '../../../components/PageContainer/PageContainer';
import { useAppSelector } from '../../../hook/reduxToolkit';

import ConvertMainMobile from '@/images/convertCasePage/mainBlock/img_main_mobile_bg@2x.webp';
import ConvertMainTablet from '@/images/convertCasePage/mainBlock/img_main_tablet_bg@2x.webp';
import ConvertMainBg from '@/images/convertCasePage/mainBlock/img_main_bg@2x.webp';
import ConvertMainBgXXXL from '@/images/convertCasePage/mainBlock/img_main_xxxl_bg@2x.webp';
import styles from '../sass/convertMainSection.module.scss';

function ConvertMainBlock() {
  const {
    screenSizes: {
      isXXXLDevice,
      isXSDevice,
      isLGDevice,
      isSMDevice,
      isMDDevice,
    },
  } = useAppSelector((state) => state?.app);
  const getBackground = () => {
    const bg: { [propName: string]: StaticImageData } = {
      background: ConvertMainBg,
    };
    if (isXXXLDevice) {
      bg.background = ConvertMainBgXXXL;
    } else if (isLGDevice || isMDDevice) {
      bg.background = ConvertMainTablet;
    } else if (isXSDevice || isSMDevice) {
      bg.background = ConvertMainMobile;
    }
    return bg;
  };

  return (
    <section className={styles.section}>
      <ImageComponent
        className={styles.bgImage}
        src={getBackground().background}
        alt="MainBackground"
        sizes="100vw"
        fill
        priority
      />
      <PageContainer className={styles.container}>
        <div className={styles.textContent}>
          <MainTitle className={styles.title} tag="h1">Convert</MainTitle>
          <MainTitle className={styles.text} tag="p">
            iOS app for instant money&nbsp;operations
          </MainTitle>
        </div>
      </PageContainer>
    </section>
  );
}

export default ConvertMainBlock;
