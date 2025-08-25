import ContentText from '../../../components/ContentText/ContentText';
import ImageComponent from '../../../components/Image/Image';
import MainTitle from '../../../components/MainTitle/MainTitle';
import PageContainer from '../../../components/PageContainer/PageContainer';
import PartnerSection from '../../../components/PartnerSection/PartnerSection';
import useBackground from '../../../hook/useBackground';
import healthcarePartnerSliderData from '../data/healthcarePartnerSliderData';

import HealthcarePartnerSectionBg from '@/images/healthcare/partnerSection/img_partnerSectionBg.webp';
import HealthcarePartnerSectionMobileBg from '@/images/healthcare/partnerSection/img_partnerSectionMobileBg.webp';
import HealthcarePartnerSectionTabletBg from '@/images/healthcare/partnerSection/img_partnerSectionTabletBg.webp';
import styles from '../sass/healthcarePartnerSection.module.scss';

function HealthcarePartnerSection() {
  const background = useBackground(
    HealthcarePartnerSectionBg,
    HealthcarePartnerSectionTabletBg,
    HealthcarePartnerSectionMobileBg,
  );

  return (
    <div className={styles.container}>
      {background && (
        <div className={styles.background}>
          <ImageComponent
            src={background}
            alt="background"
            sizes="(min-width: 768px) 100vw"
          />
        </div>
      )}
      <div className={styles.content}>
        <PageContainer>
          <MainTitle tag="h2" className={styles.title}>
            Software Development Services For Healthcare Organizations
          </MainTitle>
          <ContentText tag="p" className={styles.text}>
            Onix is a medical software development company that offers a comprehensive range of healthcare
            development services to empower organizations with cutting-edge technology solutions.
          </ContentText>
          <div className={styles.textContainer}>
            <ContentText tag="p" className={styles.secondText}>
              Our experienced team combines industry knowledge with technical expertise to deliver
              customized software solutions that enhance patient care, optimize operations, and
              drive digital transformation. We provide eight key services:
            </ContentText>
          </div>
        </PageContainer>
        <PartnerSection
          data={healthcarePartnerSliderData}
          classes={{
            partnerSection: 'bg-transparent',
            container: 'm-0 !pt-0',
            innerContainer: 'top-[28%]',
            text: 'my-0',
          }}
        />
      </div>
    </div>
  );
}

export default HealthcarePartnerSection;
