import ContentText from '../../../components/ContentText/ContentText';
import MainTitle from '../../../components/MainTitle/MainTitle';
import CardSkiderData from './machineLCardSliderData';
import ICalculateMachineL from '../interfaces/ICalculateMachineL';

import MachineLCalculateBg from '@/images/machineLearning/calculate/img_calculate_machineL_bg.webp';
import styles from '../sass/calculateMachineL.module.scss';

const machineLCalculateData: ICalculateMachineL = {
  pageTitle: (
    <MainTitle>
      Our ML development services
    </MainTitle>
  ),
  pageText: (
    <div className={styles.text}>
      <ContentText tag="p" className={styles.textItemFirst}>
        As an ML development company, we offer progressive machine learning development services to:
      </ContentText>
      <ul className={styles.list}>
        <li className={styles.listItem}><p>streamline your business processes</p></li>
        <li className={styles.listItem}>
          <p>boost your customer satisfaction with&nbsp;personalization</p>
        </li>
        <li className={styles.listItem}><p>predict and manage risks efficiently</p></li>
        <li className={styles.listItem}><p>unlock new revenue streams</p></li>
      </ul>
    </div>
  ),
  background: MachineLCalculateBg,
  data: CardSkiderData,
};

export default machineLCalculateData;
