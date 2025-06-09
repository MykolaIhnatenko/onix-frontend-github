import { StaticImageData } from 'next/image';
import { useSelector } from 'react-redux';

import { IApp } from 'store/app/interfaces/IApp';
import IStore from 'store/interfaces/IStore';
import backgroundImage from '@/images/machineLearning/consultingServices/img_ConsultingServicesbg@2x.webp';
import backgroundImageTablet from '@/images/machineLearning/consultingServices/img_ConsultingServicesbgTablet@2x.webp';
import backgroundImageMobile from '@/images/machineLearning/consultingServices/img_ConsultingServicesbgMobile@2x.webp';
import ImageComponent from 'components/Image/Image';
import MainTitle from 'components/MainTitle/MainTitle';
import PageContainer from 'components/PageContainer/PageContainer';

import styles from '../sass/consultingServices.module.scss';

function ConsultingServices() {
  const {
    screenSizes: {
      isMDDevice,
      isSMDevice,
      isXSDevice,
    },
  } = useSelector<IStore, IApp>((state) => state?.app);

  const getBackground = () => {
    const bg:{ [propName:string]: StaticImageData } = {
      background: backgroundImage,
    };
    if (isMDDevice || isSMDevice) {
      bg.background = backgroundImageTablet;
    } else if (isXSDevice) {
      bg.background = backgroundImageMobile;
    }
    return bg;
  };

  return (
    <section className={styles.continer}>
      <div className={styles.background}>
        <ImageComponent
          src={getBackground().background}
          sizes="100vw"
          alt="background"
        />
      </div>
      <PageContainer className={styles.content}>
        <MainTitle className={styles.title}>
          Machine Learning consulting services
        </MainTitle>
        <MainTitle tag="p" className={styles.subTitle}>
          Are you unsure how machine learning can benefit your business? Tell us about
          your business niche, and we&apos;ll adjust the technology to your business problem.
        </MainTitle>
        <MainTitle tag="p" className={styles.text}>
          All you need to do is send us a short description of your use case along with
          some sample data, and we&apos;ll schedule a free consultation with our ML Project
          Lead tailored to your requirements.
        </MainTitle>
        <MainTitle tag="p" className={styles.text}>
          * Plus, you&apos;ll receive a working demo within just one week!
        </MainTitle>
      </PageContainer>
    </section>
  );
}

export default ConsultingServices;
