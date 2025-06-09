import PageContainer from '../../../components/PageContainer/PageContainer';
import MainTitle from '../../../components/MainTitle/MainTitle';
import ContentText from '../../../components/ContentText/ContentText';

import styles from '../sass/aiImageClassificationBusinnesContextSecion.module.scss';

function AIImageClassificationBusinessContextSection() {
  return (
    <section className={styles.businessContextSection}>
      <PageContainer className={styles.container}>
        <ContentText className={styles.title} tag="p">[ Business context ]</ContentText>
        <MainTitle className={styles.subtitle}>
          In the contemporary landscape, industrial enterprises encounter many intricate image classification
          challenges that significantly influence their operations.
        </MainTitle>
        <div className={styles.contentBlock}>
          <ContentText className={styles.content} tag="p">
            These challenges encompass a broad spectrum of concerns, such as defect detection, quality control,
            component recognition, anomaly detection, efficient inventory management, verifying the
            accuracy of barcodes, labels, packaging, and many more.
            <br />
            <br />
            These multifaceted image classification challenges directly impact operational efficiency,
            product quality, and safety within industrial enterprises.
            <br className={styles.divider} />
            <br className={styles.divider} />
          </ContentText>
          <ContentText className={styles.content} tag="p">
            Recognizing the significance of these issues, our client approached us with the visionary idea of
            developing a comprehensive image classification solution. The aim is to harness the power of
            advanced technology to effectively address these challenges, thereby enhancing productivity,
            ensuring safety, and optimizing their industrial processes.
          </ContentText>
        </div>
      </PageContainer>
    </section>
  );
}

export default AIImageClassificationBusinessContextSection;
