import ContentText from '../../../components/ContentText/ContentText';
import { ITrustUsDataBlock } from '../../MachineLearningPageView/interfaces/ITrustUsBlock';

import styles from '../../MainPage/sass/trustUsBlock.module.scss';

const devopsSolutionsTrustUsBlockDataFirst: ITrustUsDataBlock = {
  title: 'DevOps services we provide',
  subtitle: (
    <ContentText tag="p" className={styles.sectionSubTitle}>
      We offer a full spectrum of professional DevOps services that allows you easily make a transition
      from traditional infrastructure to automated and optimized in-house workflows.
    </ContentText>
  ),
  lastCardTitle: 'Let\'s bring your development and operations together to ensure fast IT deployment!',
  btnTitle: 'Talk to our experts',
  dropBlockTitleVariant: 'mashineLearning',
};

export default devopsSolutionsTrustUsBlockDataFirst;
