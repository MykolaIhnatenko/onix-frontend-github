import { useAppSelector } from '../../../hook/reduxToolkit';
import ImageComponent from '../../../components/Image/Image';
import PageContainer from '../../../components/PageContainer/PageContainer';
import MainTitle from '../../../components/MainTitle/MainTitle';
import VRARContent from '../../../components/VRARContent/VRARContent';
import ContentText from '../../../components/ContentText/ContentText';
import developmentServicesSecondData from '../data/developmentServicesSecondData';
import ApplicationHowWeTopBg from '@/images/applicationMigrationCaseStudies/applicationHowWe/img_HowWeTopBg@2x.webp';
import ApplicationHowWeTopTabletBg from '@/images/applicationMigrationCaseStudies/applicationHowWe/img_HowWeTopTabletBg@2x.webp';
import ApplicationHowWeTopMobileBg from '@/images/applicationMigrationCaseStudies/applicationHowWe/img_HowWeTopMobileBg@2x.webp';
import ApplicationHowWeBottomBg from '@/images/applicationMigrationCaseStudies/applicationHowWe/img_HowWeBottomBg@2x.webp';
import ApplicationHowWeBottomTabletBg from '@/images/applicationMigrationCaseStudies/applicationHowWe/img_HowWeBottomTabletBg@2x.webp';
import ApplicationHowWeCardBg from '@/images/applicationMigrationCaseStudies/applicationHowWe/img_HowWeCardBg@2x.webp';
import ApplicationHowWeCardTabletBg from '@/images/applicationMigrationCaseStudies/applicationHowWe/img_HowWeCardTabletBg@2x.webp';
import ApplicationHowWeCardMobileBg from '@/images/applicationMigrationCaseStudies/applicationHowWe/img_HowWeCardMobileBg@2x.webp';
import DevelopmentServicesBlack from 'components/DevelopmentServicesBlack/DevelopmentServicesBlack';

import styles from '../sass/applicationHowWe.module.scss';

function ApplicationHowWe() {
  const {
    screenSizes: {
      isSMDevice,
      isXSDevice,
      isMDDevice,
    },
  } = useAppSelector((state) => state?.app);

  const getBackground = () => {
    const bg = {
      topBackground: ApplicationHowWeTopBg,
      bottomBackground: ApplicationHowWeBottomBg,
      cardBackground: ApplicationHowWeCardBg,
    };
    if (isMDDevice) {
      bg.topBackground = ApplicationHowWeTopTabletBg;
      bg.bottomBackground = ApplicationHowWeBottomTabletBg;
      bg.cardBackground = ApplicationHowWeCardTabletBg;
    } else if (isXSDevice || isSMDevice) {
      bg.topBackground = ApplicationHowWeTopMobileBg;
      bg.cardBackground = ApplicationHowWeCardMobileBg;
    }
    return bg;
  };
  const isMobile = isXSDevice || isSMDevice;

  return (
    <div className={styles.container}>
      <div className={styles.topBackground}>
        <ImageComponent
          src={getBackground().topBackground}
          alt="top background"
          sizes="100vw"
        />
      </div>
      <div className={styles.contentContainer}>
        <PageContainer className={styles.content}>
          <VRARContent>
            <MainTitle className={styles.title}>
              How we held the migration process
            </MainTitle>
          </VRARContent>
          <VRARContent>
            <div className={styles.cardContainer}>
              <div className={styles.cardBg}>
                <ImageComponent
                  src={getBackground().cardBackground}
                  alt="card background"
                  sizes="100vw"
                />
              </div>
              <div className={styles.cardContent}>
                <MainTitle className={styles.cardTitle} tag="h3">
                  Our solution
                </MainTitle>
                <ContentText className={styles.cardText} tag="p">
                  Rather than expending excessive time and incurring cost setting up dynos, we deployed the application
                  in AWS Elastic Beanstalk using Docker and easily scaled it.
                  <span className={styles.cardTextIndentation} />
                  AWS is the go-to solution: virtual server instances come in various CPU and memory configurations,
                  have full root access, and offer better performance management than Heroku.
                </ContentText>
              </div>
            </div>
          </VRARContent>
        </PageContainer>
        <DevelopmentServicesBlack
          data={developmentServicesSecondData}
          customBackground={getBackground().bottomBackground}
          withoutBackground={isMobile}
          classes={{
            devServices: '!pt-[80px] screen-lg:!pt-[60px] screen-md:!pt-[40px] screen-md:!pb-[80px]',
            background: '!top-[unset] !left-0 !bottom-0 before:!hidden',
            bgImg: '!h-[auto] !w-[664px]',
          }}
        />
      </div>
    </div>
  );
}

export default ApplicationHowWe;
