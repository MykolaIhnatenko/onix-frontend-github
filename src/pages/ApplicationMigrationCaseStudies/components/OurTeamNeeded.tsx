import { StaticImageData } from 'next/image';

import { useAppSelector } from '../../../hook/reduxToolkit';
import ContentText from '../../../components/ContentText/ContentText';
import ImageComponent from '../../../components/Image/Image';
import MainTitle from '../../../components/MainTitle/MainTitle';
import VRARCallToActionComponent from '../../../components/VRARCallToActionBlock/VRARCallToActionComponent';
import VRARContent from '../../../components/VRARContent/VRARContent';
import { ButtonType } from 'constants/enums';

import ApplicationOurTeamNeededBg from '@/images/applicationMigrationCaseStudies/ourTeamNeeded/img_OurTeamNeededBg@2x.webp';
import ApplicationOurTeamNeededTabletBg from '@/images/applicationMigrationCaseStudies/ourTeamNeeded/img_OurTeamNeededTabletBg@2x.webp';
import ApplicationOurTeamNeededMobileBg from '@/images/applicationMigrationCaseStudies/ourTeamNeeded/img_OurTeamNeededMobileBg@2x.webp';
import ApplicationOurTeamNeededImg from '@/images/applicationMigrationCaseStudies/ourTeamNeeded/img_OurTeamNeeded@2x.webp';
import ApplicationOurTeamNeededTabletImg from '@/images/applicationMigrationCaseStudies/ourTeamNeeded/img_OurTeamNeededTablet@2x.webp';
import ApplicationOurTeamNeededMobileImg from '@/images/applicationMigrationCaseStudies/ourTeamNeeded/img_OurTeamNeededMobile@2x.webp';
import styles from '../sass/ourTeamNeeded.module.scss';

function OurTeamNeeded({ saleUrl }: { saleUrl: boolean }) {
  const {
    screenSizes: {
      isSMDevice,
      isXSDevice,
      isMDDevice,
    },
  } = useAppSelector((state) => state?.app);

  const getBackground = () => {
    const bg:{ [propName:string]: StaticImageData } = {
      background: ApplicationOurTeamNeededBg,
      image: ApplicationOurTeamNeededImg,
    };
    if (isMDDevice) {
      bg.background = ApplicationOurTeamNeededTabletBg;
      bg.image = ApplicationOurTeamNeededTabletImg;
    } else if (isXSDevice || isSMDevice) {
      bg.background = ApplicationOurTeamNeededMobileBg;
      bg.image = ApplicationOurTeamNeededMobileImg;
    }
    return bg;
  };

  return (
    <div className={`${styles.container} ${styles.saleUrl}`}>
      <div className={styles.background}>
        <ImageComponent
          src={getBackground().background}
          alt="background"
          sizes="100vw"
        />
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.content}>
          <VRARContent>
            <MainTitle className={styles.title}>
              Our team needed to
            </MainTitle>
          </VRARContent>
          <VRARContent>
            <ContentText className={styles.text} tag="p">
              Migrate from Heroku to AWS and ensure that the application’s performance was improved or was on the
              previous level. Also, there was a rapid increase in the possibility of infrastructure management.
            </ContentText>
          </VRARContent>
        </div>
        <div className={`${styles.image} ${styles.saleUrl}`}>
          <VRARContent>
            <ImageComponent
              src={getBackground().image}
              alt="Our Team Needed"
              sizes="100vw"
            />
          </VRARContent>
        </div>
      </div>
      {!saleUrl && (
        <div className={styles.ctaBlock}>
          <VRARCallToActionComponent
            id={ButtonType.CASE}
            title={<>Looking for a reliable DevOps services&nbsp;company?</>}
            btnText="Get in touch with us"
            withButton
            classes={{
              cta: '!pb-0 !pr-0 !pl-0',
            }}
          />
        </div>
      )}
    </div>
  );
}

export default OurTeamNeeded;
