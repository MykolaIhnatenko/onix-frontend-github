import { useAppSelector } from '../../../hook/reduxToolkit';
import ImageComponent from '../../../components/Image/Image';
import PageContainer from '../../../components/PageContainer/PageContainer';
import MainTitle from '../../../components/MainTitle/MainTitle';
import developmentCardData from '../data/developmentCardData';
import servicesData from '../data/servicesData';
import Bg from '../../../assets/images/vyraCasePage/developmentServices/img_development_bg.webp';
import BgTablet from '../../../assets/images/vyraCasePage/developmentServices/img_development_bg_tablet.webp';
import BgMobile from '../../../assets/images/vyraCasePage/developmentServices/img_development_bg_mobile.webp';
import DevelopmentServicesWhite from 'components/DevelopmentServicesWhite/DevelopmentServicesWhite';

import styles from '../sass/vyraDevelopmentServices.module.scss';

function VyraDevelopmentServices() {
  const {
    screenSizes: {
      isMDDevice,
      isSMDevice,
      isXSDevice,
    },
  } = useAppSelector((state) => state?.app);
  const getBackground = () => {
    if (isXSDevice) {
      return BgMobile;
    }
    if (isMDDevice || isSMDevice) {
      return BgTablet;
    }
    return Bg;
  };

  return (
    <section className={styles.section}>
      <div className={styles.bg}>
        <ImageComponent
          src={getBackground()}
          alt="background"
          sizes="(max-width: 768px) 50vw, (min-width: 768px) 100vw"
        />
      </div>
      <PageContainer className={styles.container}>
        <MainTitle className={styles.title}>
          Vyra is a B2B product that was
          {' '}
          <span>created for</span>
        </MainTitle>
        <div className={styles.cardBlock}>
          {developmentCardData.map(({
            id, title, text, icon,
          }) => (
            <div key={id} className={styles.card}>
              {icon}
              {title}
              {text}
            </div>
          ))}
        </div>
      </PageContainer>
      <DevelopmentServicesWhite
        title={servicesData.title}
        data={servicesData.data}
        withoutBackground
        classes={{
          devServices: 'screen-md:!pb-[80px]',
        }}
      />
    </section>
  );
}

export default VyraDevelopmentServices;
