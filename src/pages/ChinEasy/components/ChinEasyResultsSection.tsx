import PageContainer from '../../../components/PageContainer/PageContainer';
import ContentText from '../../../components/ContentText/ContentText';
import MainTitle from '../../../components/MainTitle/MainTitle';
import VRARPageAppearAnimation from '../../../components/VRARPageAppearAnimation/VRARPageAppearAnimation';

import styles from '../sass/chinEasyResultsSecion.module.scss';

function ChinEasyResultsSection() {
  return (
    <section className={styles.resultsSection}>
      <PageContainer className={styles.container}>
        <VRARPageAppearAnimation>
          <MainTitle className={styles.title}>
            Results
          </MainTitle>
        </VRARPageAppearAnimation>
        <VRARPageAppearAnimation>
          <MainTitle className={styles.subtitle} tag="p">
            During the product discovery stage, Onix’s design team played a crucial role in shaping
            the overall language-learning app’s vision and developing its functional and visual aspects.
          </MainTitle>
        </VRARPageAppearAnimation>
        <div className={styles.textBlock}>
          <div className={styles.wrapper}>
            <VRARPageAppearAnimation classes={styles.textWrapper}>
              <ContentText className={styles.text} tag="p">
                Then, they designed a brand style guide, a user-centric app experience, and interfaces
                that balanced aesthetics and functionality.
              </ContentText>
            </VRARPageAppearAnimation>
            <VRARPageAppearAnimation classes={styles.textWrapper}>
              <ContentText className={styles.text} tag="p">
                The resulting ChinEasy app forms a comprehensive learning ecosystem, covering
                all language aspects from basics to advanced proficiency while unraveling the cultural nuances of China.
              </ContentText>
            </VRARPageAppearAnimation>
          </div>
          <div className={styles.wrapper}>
            <VRARPageAppearAnimation classes={styles.textWrapper}>
              <ContentText className={styles.text} tag="p">
                The app’s gamified style turns each step into an exciting quest.
              </ContentText>
            </VRARPageAppearAnimation>
            <VRARPageAppearAnimation classes={styles.textWrapper}>
              <ContentText className={styles.text} tag="p">
                The chosen approaches and solutions set ChinEasy apart from other language learning platforms.
              </ContentText>
            </VRARPageAppearAnimation>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}

export default ChinEasyResultsSection;
