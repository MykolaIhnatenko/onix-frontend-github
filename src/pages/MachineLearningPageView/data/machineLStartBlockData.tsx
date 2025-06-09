import ContentText from '../../../components/ContentText/ContentText';
import IconsContent from '../../../components/IconsContent/IconsContent';
import MainTitle from '../../../components/MainTitle/MainTitle';
import machineLStartBlockContent from './machineLStartBlockContent';
import { IMachineLStartBlock } from '../interfaces/IMachineLearningStartBlock';

import styles from '../sass/machineLearningStartBlock.module.scss';

const machineLStartBlockData: Omit<IMachineLStartBlock, 'background'> = {
  pageTitle: (
    <MainTitle className={styles.title} tag="h1">
      Machine learning development services
    </MainTitle>
  ),
  subTitle: (
    <div className={styles.subTitleContainer}>
      <ContentText tag="p" className={styles.subTitle}>
        Onix provides machine learning development services to help SMBs build game-changing solutions
        and drive business outcomes. Whether it&apos;s
        {' '}
        <span className={styles.bold}>handling sensitive data securely, streamlining your business/workflows</span>
        , or
        {' '}
        <span className={styles.bold}>adding advanced features</span>
        {' '}
        to your products, we&apos;ve got you covered.
      </ContentText>
    </div>

  ),
  content: (
    <IconsContent data={machineLStartBlockContent} />
  ),
};

export default machineLStartBlockData;
