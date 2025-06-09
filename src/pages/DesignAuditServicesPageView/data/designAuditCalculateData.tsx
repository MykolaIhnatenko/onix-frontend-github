import ContentText from '../../../components/ContentText/ContentText';
import MainTitle from '../../../components/MainTitle/MainTitle';
import ICalculateMachineL from '../../MachineLearningPageView/interfaces/ICalculateMachineL';
import designAuditCardSliderData from './designAuditCardSliderData';

import styles from '../../MachineLearningPageView/sass/calculateMachineL.module.scss';

const designAuditCalculateData: ICalculateMachineL = {
  pageTitle: (
    <MainTitle>
      Our Solutions to Digital Product Design Challenges
    </MainTitle>
  ),
  pageText: (
    <div className={styles.text}>
      <ContentText tag="p" className={styles.textItemFirst}>
        At Onix, we understand the challenges and frustrations that can arise during the product design
        process. However, our team&apos;s extensive expertise and skills are dedicated to alleviating these
        pains and guiding you toward success.
      </ContentText>
      <ContentText tag="p" className={styles.textItemSecond}>
        With our deep understanding of user needs, innovative thinking, and commitment to delivering
        exceptional experiences, we are confident in our ability to help you overcome any obstacles along the way.
      </ContentText>

    </div>
  ),
  data: designAuditCardSliderData,
};

export default designAuditCalculateData;
