import MainTitle from '../../../components/MainTitle/MainTitle';
import PageContainer from '../../../components/PageContainer/PageContainer';
import VRARContent from '../../../components/VRARContent/VRARContent';

import styles from '../sass/doublTextBlock.module.scss';

function DoublTextBlock() {
  return (
    <PageContainer className={styles.container}>
      <div className={styles.contentContainer}>
        <VRARContent>
          <MainTitle tag="p" className={styles.title}>
            We&apos;ve worked hard to deliver simple, clean, and attractive UI/UX design.
          </MainTitle>
        </VRARContent>
        <VRARContent>
          <MainTitle tag="p" className={styles.title}>
            Thanks to our design solutions, end-users can use the platform quickly and effortlessly!
          </MainTitle>
        </VRARContent>
      </div>
    </PageContainer>
  );
}

export default DoublTextBlock;
