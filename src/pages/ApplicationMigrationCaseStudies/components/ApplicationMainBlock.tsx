import { StaticImageData } from 'next/image';

import { useAppSelector } from '../../../hook/reduxToolkit';
import ContentText from '../../../components/ContentText/ContentText';
import ImageComponent from '../../../components/Image/Image';
import MainTitle from '../../../components/MainTitle/MainTitle';
import PageContainer from '../../../components/PageContainer/PageContainer';
import ApplicationMainBlockImg from '@/images/applicationMigrationCaseStudies/mainBlock/img_ApplicationMainBlock@2x.webp';
import ApplicationMainBlockTabletImg from '@/images/applicationMigrationCaseStudies/mainBlock/img_ApplicationMainBlockTablet@2x.webp';
import ApplicationMainBlockMobileImg from '@/images/applicationMigrationCaseStudies/mainBlock/img_ApplicationMainBlockMobile@2x.webp';
import IndustriesMainBg from '@/images/industriesPage/img_industries_main_bg@2x.webp';
import IndustriesMainBgTablet from '@/images/industriesPage/img_industries_main_bg_tablet@2x.webp';
import IndustriesMainBgMobile from '@/images/industriesPage/img_industries_main_bg_mobile@2x.webp';

import styles from '../sass/applicationMainBlock.module.scss';

function ApplicationMainBlock() {
  const {
    screenSizes: {
      isSMDevice,
      isXSDevice,
      isMDDevice,
    },
  } = useAppSelector((state) => state?.app);

  const getBackground = () => {
    const bg:{ [propName:string]: StaticImageData } = {
      background: IndustriesMainBg,
      image: ApplicationMainBlockImg,
    };
    if (isMDDevice) {
      bg.background = IndustriesMainBgTablet;
      bg.image = ApplicationMainBlockTabletImg;
    } else if (isXSDevice || isSMDevice) {
      bg.background = IndustriesMainBgMobile;
      bg.image = ApplicationMainBlockMobileImg;
    }
    return bg;
  };

  return (
    <div className={styles.container}>
      <div className={styles.background}>
        <ImageComponent
          src={getBackground().background}
          priority
          sizes="100vw"
        />
      </div>
      <div className={styles.contentContainer}>
        <PageContainer className={styles.content}>
          <MainTitle className={styles.title} tag="h1">
            How Onix moved the complex application from Heroku to AWS
          </MainTitle>
          <ContentText className={styles.firstText} tag="p">
            Migration from Heroku to AWS quickly and with minimal effort
          </ContentText>
          <ContentText className={styles.secondText} tag="p">
            This case study highlights how we&apos;ve assisted our client in migrating their application from
            Heroku to Amazon Web Service (AWS) to ensure greater app capacity and flexibility at a minimal cost.
          </ContentText>
        </PageContainer>
        <div className={styles.image}>
          <ImageComponent
            src={getBackground().image}
            priority
            sizes="100vw"
          />
        </div>
      </div>
    </div>
  );
}

export default ApplicationMainBlock;
