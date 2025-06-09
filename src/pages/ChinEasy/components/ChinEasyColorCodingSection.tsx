import PageContainer from '../../../components/PageContainer/PageContainer';
import ContentText from '../../../components/ContentText/ContentText';
import MainTitle from '../../../components/MainTitle/MainTitle';
import VRARPageAppearAnimation from '../../../components/VRARPageAppearAnimation/VRARPageAppearAnimation';
import colorCodingContent from '../data/colorCodingContent';
import ColorCoding from './ChinEasyColorCoding';

import styles from '../sass/chinEasyColorCodingSecion.module.scss';

function ChinEasyColorCodingSection() {
  return (
    <section className={styles.colorCodingSection}>
      <PageContainer className={styles.container}>
        <div className={styles.textBlock}>
          <VRARPageAppearAnimation>
            <MainTitle className={styles.title} tag="h3">
              Emotional color coding
            </MainTitle>
          </VRARPageAppearAnimation>
          <VRARPageAppearAnimation>
            <ContentText className={styles.text} tag="p">
              Vibrant colors convey a cheerful mood and attract the kids’ attention. They also reflect
              the characters&apos; emotions:
            </ContentText>
          </VRARPageAppearAnimation>
          <VRARPageAppearAnimation>
            <ContentText className={styles.text} tag="p">
              These carefully selected colors, reflecting the app&apos;s playful yet educational nature, contribute to
              the joy of using the app and language learning.
            </ContentText>
          </VRARPageAppearAnimation>
        </div>
        <div className={styles.imagesBlock}>
          {colorCodingContent.map(({
            id, title, color, value, img,
          }) => (
            <ColorCoding
              key={id}
              title={title}
              color={color}
              value={value}
              img={img}
            />
          ))}
        </div>
      </PageContainer>
    </section>
  );
}

export default ChinEasyColorCodingSection;
