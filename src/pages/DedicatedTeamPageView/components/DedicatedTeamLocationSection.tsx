import PageContainer from '../../../components/PageContainer/PageContainer';
import MainTitle from '../../../components/MainTitle/MainTitle';
import LocationsBlock from '../../../components/LocationsBlock/LocationsBlock';
import ImageComponent from '../../../components/Image/Image';
import useBackground from '../../../hook/useBackground';
import { MD_DEVICE } from '../../../constants/constants';

import DedicatedTeamMap from '@/images/dedicatedTeamPage/img_map_desk@2x.webp';
import DedicatedTeamMapMobile from '@/images/dedicatedTeamPage/img_map_mob@2x.webp';
import DedicatedTeamMapTablet from '@/images/dedicatedTeamPage/img_map_tabl@2x.webp';
import styles from '../sass/dedicatedTeamLocationsSecion.module.scss';

function DedicatedTeamLocationSection() {
  const background = useBackground(DedicatedTeamMap, DedicatedTeamMapTablet, DedicatedTeamMapMobile, MD_DEVICE);

  return (
    <section className={styles.locationSection}>
      <PageContainer className={styles.container}>
        <MainTitle tag="h2" className={styles.title}>
          HQ & Delivery locations
        </MainTitle>
        <LocationsBlock />
      </PageContainer>
      <div className={styles.bg}>
        {
          background && (
            <ImageComponent
              src={background}
              fill
              sizes="100vh"
              alt="map"
            />
          )
        }
      </div>
    </section>
  );
}

export default DedicatedTeamLocationSection;
