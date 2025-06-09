import PageContainer from '../../../components/PageContainer/PageContainer';
import MainTitle from '../../../components/MainTitle/MainTitle';
import ContentText from '../../../components/ContentText/ContentText';
import approachData from '../data/approachData';
import ApproachImagesBlockItem from './ApproachImagesBlockItem';

import styles from '../sass/servicesApproachSection.module.scss';

function ServicesApproachSection() {
  return (
    <section className={styles.servicesApproachSection}>
      <PageContainer className={styles.container}>
        <MainTitle className={styles.title}>
          Our Approach to Custom
          <br />
          Software Development
        </MainTitle>
        <ContentText tag="p" className={styles.text}>
          At Onix, we have honed a process for developing custom software that ensures
          the successful delivery of software on time and within budget.
        </ContentText>
        <ContentText tag="p" className={styles.text}>
          Our approach is designed to maximize efficiency while achieving the highest quality levels.
        </ContentText>
        <ul className={styles.imagesBlock}>
          {approachData.map(({
            id,
            img,
            imgMobile,
            imgTablet,
            imgText,
            textTop,
            textBottom,
            variant,
          }) => (
            <ApproachImagesBlockItem
              key={id}
              img={img}
              imgMobile={imgMobile}
              imgTablet={imgTablet}
              imgText={imgText}
              textTop={textTop}
              textBottom={textBottom}
              variant={variant}
            />
          ))}
        </ul>
      </PageContainer>
    </section>
  );
}

export default ServicesApproachSection;
