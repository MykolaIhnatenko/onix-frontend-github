import PageContainer from '../../../components/PageContainer/PageContainer';
import MainTitle from '../../../components/MainTitle/MainTitle';
import ContentText from '../../../components/ContentText/ContentText';
import solutionsData from '../data/solutionsData';
import DoubleAccordion from 'components/DoubleAccordion/DoubleAccordion';

import styles from '../sass/iosSolutionsSection.module.scss';

function IosSolutionsSection({ isMobileOrTablet }: { isMobileOrTablet: boolean }) {
  return (
    <section className={styles.solutionsSection}>
      <PageContainer className={styles.container}>
        <MainTitle tag="h2">
          Solutions We Deliver for iOS
        </MainTitle>
        <div className={styles.contentContainer}>
          <ContentText tag="p" className={styles.text}>
            The iOS was originally designed to power Apple&apos;s iPhone series. Today, it powers all of Apple&apos;s
            mobile devices, including the iPad.
          </ContentText>
          <ContentText tag="p" className={styles.text}>
            The rising popularity of mobile computing has resulted in a boom in iOS app development.
            There are several native technologies in the iOS ecosystem.
          </ContentText>
        </div>
      </PageContainer>
      <DoubleAccordion
        data={solutionsData}
        activeFirst={isMobileOrTablet}
        isMobileOrTablet={isMobileOrTablet}
      />
    </section>
  );
}

export default IosSolutionsSection;
