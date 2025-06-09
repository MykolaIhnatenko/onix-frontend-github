import ContentText from '../../../components/ContentText/ContentText';
import MainTitle from '../../../components/MainTitle/MainTitle';
import PageContainer from '../../../components/PageContainer/PageContainer';
import VRARContent from '../../../components/VRARContent/VRARContent';
import valueDeliveredBlock from '../data/valueDeliveredBlock';

import styles from '../sass/valueDeliveredBlock.module.scss';

function ValueDeliveredBlock() {
  return (
    <PageContainer className={`${styles.container} ${styles.saleUrl}`}>
      <div className={styles.contentContainer}>
        <VRARContent>
          <MainTitle className={styles.title}>
            Value delivered
          </MainTitle>
        </VRARContent>
        <div className={styles.content}>
          {valueDeliveredBlock.map(({ icon, title }) => (
            <VRARContent>
              <div className={styles.contentItem}>
                {icon}
                <ContentText className={styles.contentText} tag="p">
                  {title}
                </ContentText>
              </div>
            </VRARContent>
          ))}
        </div>
      </div>
    </PageContainer>
  );
}

export default ValueDeliveredBlock;
