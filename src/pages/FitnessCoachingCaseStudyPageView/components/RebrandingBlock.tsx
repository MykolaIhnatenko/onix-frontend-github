import ImageComponent from '../../../components/Image/Image';
import MainTitle from '../../../components/MainTitle/MainTitle';
import PageContainer from '../../../components/PageContainer/PageContainer';
import VRARContent from '../../../components/VRARContent/VRARContent';
import IRebrandingBlock from '../interfaces/IRebrandingBlock';

import styles from '../sass/rebrandingBlock.module.scss';

function RebrandingBlock({
  blockTitle, firstText, secondText, secondTitle, data, background,
}: IRebrandingBlock) {
  return (
    <PageContainer className={styles.blockContainer}>
      <div className={styles.background}>
        <ImageComponent
          src={background}
          alt="background"
          sizes="100vw"
        />
      </div>
      <div className={styles.container}>
        <VRARContent>
          <MainTitle className={styles.blockTitle}>
            {blockTitle}
          </MainTitle>
        </VRARContent>
        <div className={styles.textContainer}>
          <VRARContent>
            {firstText}
          </VRARContent>
          <VRARContent>
            {secondText}
          </VRARContent>
        </div>
        <VRARContent>
          <MainTitle className={styles.secondTitle} tag="h3">
            {secondTitle}
          </MainTitle>
        </VRARContent>
        <div className={styles.content}>
          {data.map(({ id, title }) => (
            <VRARContent key={id} className={styles.card}>
              <MainTitle className={styles.id} tag="p">
                {id}
              </MainTitle>
              <MainTitle className={styles.title} tag="p">
                {title}
              </MainTitle>
            </VRARContent>
          ))}
        </div>
      </div>
    </PageContainer>
  );
}

export default RebrandingBlock;
