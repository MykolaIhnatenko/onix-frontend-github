import PageContainer from '../../../components/PageContainer/PageContainer';
import MainTitle from '../../../components/MainTitle/MainTitle';
import ContentText from '../../../components/ContentText/ContentText';

import styles from '../sass/aiImageClassificationResultSecion.module.scss';

function AIImageClassificationResult() {
  return (
    <section className={styles.resultSection}>
      <PageContainer className={styles.container}>
        <MainTitle>
          Results
        </MainTitle>
        <MainTitle className={styles.subtitle} tag="p">
          Our client now possesses a finished product that stands as a testament to innovation and efficiency.
          The outcome is a versatile, robust, and exceptionally user-friendly image classification application
          meticulously optimized for seamless integration with the Intel Neural Compute Stick 2.
        </MainTitle>
        <div className={styles.contentBlock}>
          <ContentText className={styles.content} tag="p">
            The Onix team developed multiple deep-learning models optimized specifically for some use-case
            scenarios. These models were trained on high-quality datasets and then pruned and optimized using
            Intel&apos;s OpenVINO toolkit to ensure they run efficiently on the NCS2.
          </ContentText>
          <ContentText className={styles.content} tag="p">
            The combination of edge computing through the Intel NCS2, real-time image classification,
            and an emphasis on user privacy and data security makes this software solution invaluable
            for businesses and end-users looking for quick, reliable, and secure image analysis.
          </ContentText>
        </div>
      </PageContainer>
    </section>
  );
}

export default AIImageClassificationResult;
