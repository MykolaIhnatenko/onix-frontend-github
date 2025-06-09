import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { StaticImageData } from 'next/image';

import PageContainer from '../../../components/PageContainer/PageContainer';
import MainTitle from '../../../components/MainTitle/MainTitle';
import ContentText from '../../../components/ContentText/ContentText';
import ImageComponent from '../../../components/Image/Image';
import IosProductDiscoveryCard from './IosProductDiscoveryCard';
import IosDiscoveryBg from '@/images/iosPage/img_discovery_bg@2x.webp';
import IosDiscoveryBgTablet from '@/images/iosPage/img_discovery_bg_tablet@2x.webp';
import IosDiscoveryBgMobile from '@/images/iosPage/img_discovery_bg_mobile@2x.webp';
import productDiscoveryData from '../data/productsDiscoveryData';
import IStore from '../../../store/interfaces/IStore';
import { IApp } from '../../../store/app/interfaces/IApp';
import PageLinks from '../../../constants/PageLinks';
import ButtonLight from 'components/UI/ButtonLight/ButtonLight';

import styles from '../sass/iosProductDiscoverySecion.module.scss';

function IosProductDiscoverySection() {
  const router = useRouter();
  const {
    screenSizes: {
      isMDDevice,
      isSMDevice,
      isXSDevice,
    },
  } = useSelector<IStore, IApp>((state) => state.app);
  const getBackground = () => {
    const bg:{ [propName:string]: StaticImageData } = {
      background: IosDiscoveryBg,
    };
    if (isMDDevice) {
      bg.background = IosDiscoveryBgTablet;
    } else if (isXSDevice || isSMDevice) {
      bg.background = IosDiscoveryBgMobile;
    }
    return bg;
  };

  return (
    <section className={styles.productDiscoverySection}>
      <div className={styles.bg}>
        <ImageComponent
          src={getBackground().background}
          fill
          sizes="100vw"
          alt="discovery-product-background"
        />
      </div>
      <PageContainer className={styles.container}>
        <MainTitle tag="h2" className={styles.title}>
          Product Discovery Is the First Stage of Any&nbsp;iOS Development Services
        </MainTitle>
        <ContentText tag="p" className={styles.text}>
          Considering our 2-decade experience in offshore iOS development, we know for sure how to make
          your product thrive. Thus, Product Discovery is essential for completing your project on time,
          on budget, and establishing the basis for success on the market. And here is what you get from
          Product Discovery:
        </ContentText>
        <div className={styles.cards}>
          {productDiscoveryData.map(({ id, icon, text }) => (
            <IosProductDiscoveryCard key={id} icon={icon} text={text} />
          ))}
        </div>
        <div className={styles.buttonWrapper}>
          <ButtonLight
            text="Learn more"
            styleContainer={styles.button}
            onClick={() => router.push(PageLinks.PRODUCT_DISCOVERY)}
          />
        </div>
      </PageContainer>
    </section>
  );
}

export default IosProductDiscoverySection;
