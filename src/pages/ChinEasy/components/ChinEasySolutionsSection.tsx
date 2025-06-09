import PageContainer from '../../../components/PageContainer/PageContainer';
import ContentText from '../../../components/ContentText/ContentText';
import MainTitle from '../../../components/MainTitle/MainTitle';
import VRARPageAppearAnimation from '../../../components/VRARPageAppearAnimation/VRARPageAppearAnimation';
import ImageComponent from '../../../components/Image/Image';
import ChinEasySoltions from '@/images/chinEasy/solutionsSection/img_chin_easy_solution@2x.webp';
import ChinEasySoltionsTablet from '@/images/chinEasy/solutionsSection/img_chin_easy_solution_tablet@2x.webp';
import ChinEasySoltionsMobile from '@/images/chinEasy/solutionsSection/img_chin_easy_solution_mobile@2x.webp';
import useAdaptiveImage from '../../../hook/useAdaptiveImage';
import solutionsSection from '../data/solutionsSection';

import styles from '../sass/chinEasySolutionsSecion.module.scss';

function ChinEasySolutionsSection() {
  const { bg, properties: { imgWidth, imgHeight } } = useAdaptiveImage({
    imgDesk: ChinEasySoltions,
    imgTablet: ChinEasySoltionsTablet,
    imgMobile: ChinEasySoltionsMobile,
    widthDesk: 500,
    heightDesk: 709,
    widthTablet: 373,
    heightTablet: 530,
    widthMobile: 250,
    heightMobile: 355,
  });

  return (
    <section className={styles.solutionsSection}>
      <PageContainer className={styles.container}>
        <VRARPageAppearAnimation>
          <MainTitle className={styles.title}>
            M-learning app brand development solutions
          </MainTitle>
        </VRARPageAppearAnimation>
        <div className={styles.content}>
          <div className={styles.textBlock}>
            <VRARPageAppearAnimation>
              <MainTitle className={styles.subtitle} tag="h3">
                «The Fantastic Four» should make the learning experience more engaging and enjoyable for kids
              </MainTitle>
            </VRARPageAppearAnimation>
            {solutionsSection.map(({ text }, index) => (
              <VRARPageAppearAnimation
                key={[text, index].join('_')}
              >
                <ContentText className={styles.text} tag="p">
                  {text}
                </ContentText>
              </VRARPageAppearAnimation>
            ))}
          </div>
          <div className={styles.imageBlock}>
            <div className={styles.empty} />
            <div className={styles.image}>
              {bg
                && (
                <ImageComponent
                  src={bg}
                  width={imgWidth}
                  height={imgHeight}
                  sizes="(max-width: 768px) 50vw, (min-width: 768px) 100vw"
                />
                )}
            </div>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}

export default ChinEasySolutionsSection;
