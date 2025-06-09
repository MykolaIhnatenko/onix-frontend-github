import PageContainer from '../../../components/PageContainer/PageContainer';
import MainTitle from '../../../components/MainTitle/MainTitle';
import ContentText from '../../../components/ContentText/ContentText';

import styles from '../sass/travelTailBusinessContextSection.module.scss';

function TravelTailBusinessContextSection() {
  return (
    <section className={styles.businessContextSection}>
      <PageContainer className={styles.container}>
        <ContentText className={styles.businessContext} tag="p">
          [ Business context ]
        </ContentText>
        <MainTitle className={styles.title}>
          Our client wanted to develop a groundbreaking platform to meet the increasing demand for
          pet-centric travel experiences catering to pets and their owners.
        </MainTitle>
        <MainTitle className={styles.subtitle} tag="p">
          The primary challenge pet owners face is the lack of a dedicated platform that addresses
          the unique requirements and concerns associated with traveling alongside their furry companions.
        </MainTitle>
        <div className={styles.textBlock}>
          <ContentText className={styles.text} tag="p">
            Traditional travel platforms often overlook pets&apos; specific needs, leaving pet owners struggling to
            find suitable accommodations, plan pet-friendly itineraries, and connect with like-minded
            individuals who understand the challenges of traveling with pets.
          </ContentText>
          <ContentText className={styles.text} tag="p">
            By understanding these challenges head-on, TravelTail became a pioneer in the pet travel industry,
            providing a tailored solution that eased the concerns and uncertainties faced by pet owners during
            the travel planning process.
          </ContentText>
        </div>
      </PageContainer>
    </section>
  );
}

export default TravelTailBusinessContextSection;
